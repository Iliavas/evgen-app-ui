import react, {useState} from "react";


import "../css/CreateMaterial.css"

import {MyToogleButton} from "../../uiKit/toggleButton";

import {Switch, Route, useRouteMatch, useParams, useHistory} from "react-router-dom";

import {DefaultInput} from "../../uiKit/Inputs";
import {DefaultButton} from "../../uiKit/Buttons";

import {Editor} from "../../uiKit/editor";

import {
    useMaterialQuery, 
    useChangeMaterialMutation, 
    useAddMaterialMutation
} from "../../generated/graphql";

import cross from "../../images/cross.svg";

interface MaterialCreation{
    id:string;
    name?:string;
    data?:string;
    type?:string;
    materialId?:string;
} 

interface MaterialParams{
    type:string;
}



function returnRedaction(history:any, link:string){
    let splittedLink = link.split("/");
    history.push(splittedLink.slice(0, splittedLink.length-2).join("/"))
}

const LinkMaterial:react.FC<MaterialCreation> = (props) => {
    console.log(props)
    const [name, setName] = useState(props.name)
    const [link, setLink] = useState(props.data)
    
    const {url} = useRouteMatch();
    const history = useHistory()
    const [pushLink] = useAddMaterialMutation();
    const [updateLink] = useChangeMaterialMutation();
    return <div className="link-material__container">
        <p className="material-creation__text">Название ссылки</p>
        <DefaultInput value={name} class="material-creation__input" handleChange={(e:any) => {
            setName(e.target.value)}}
        ></DefaultInput>
        <p className="material-creation__text">Ссылка</p>
        <DefaultInput value={link} class="material-creation__input" handleChange={(e:any) => {
            setLink(e.target.value)
        }}></DefaultInput>
        <DefaultButton handleClick={() => {
            props.materialId == undefined ? 
            pushLink({variables:{id:props.id, data:link!, type:"link", name:name!}}) :
            updateLink({variables:{
                id:props.materialId,
                data:link!,
                name:name!
                }})
            returnRedaction(history, url);
            window.location.reload()
        }}>Сохранить</DefaultButton>
    </div>
}

const MaterialMaterial:react.FC<MaterialCreation> = () => {
    return <div className="link-material__container">
        <p className="material-creation__text">Название</p>
        <DefaultInput class="material-creation__input"></DefaultInput>
        <p className="material-creation__text">Контент</p>
        <Editor child={false}></Editor>
        <DefaultButton handleClick={() => {}}>Сохранить</DefaultButton>
    </div>
}

const CreateMaterialWidgetContent:react.FC<MaterialCreation> = (props) => {
    console.log(props, "public props")
    const {type} = useParams<MaterialParams>();
    let content = props.type! == "link" ? 
    <LinkMaterial 
        id={props.id}
        name={props.name}
        data={props.data}
        materialId={props.materialId}
    ></LinkMaterial> : 
    <MaterialMaterial
    id={props.id}
    name={props.name}
    data={props.data}
    ></MaterialMaterial>
    switch (type) {
        case "link":
            content = <LinkMaterial id={props.id} materialId={props.materialId}></LinkMaterial>
            break;
        case "material":
            content = <MaterialMaterial id={props.id}></MaterialMaterial>
    }
    return <div className="content-pading">
        {content}
    </div> 
}

interface IEParams{
    id?:string;
}

export const CreateMaterialWidget:react.FC<MaterialCreation> = (props) => {
    const {url} = useRouteMatch();
    const {id} = useParams<IEParams>();
    const {loading, data} = useMaterialQuery({variables:{id:id!}})
    const history = useHistory();

    if (loading) return <div>loading...</div>

    return <div>


        <div className="create-material__container-absolute">
        </div>
        <div className="container-local__container">
            <div className="create-material__container-local">
            <div className="nav__container">
            { id == undefined ?    
            <MyToogleButton handleChange = {() => {}} buttons = {[{name: "ссылка", link:`${url}/link`}, 
                        {name: "материал", link:`${url}/material`}]}></MyToogleButton> : <div></div>}
            <img src={cross} alt="" onClick={() => {returnRedaction(history, url)}}/>
            </div>
            
            
            <Switch>

                <Route path={`${url}/:type`}>
                    <CreateMaterialWidgetContent id={props.id} materialId={id}></CreateMaterialWidgetContent>
                </Route>
                <Route path={`${url}`}>
                    <CreateMaterialWidgetContent id={props.id} 
                        data={data?.material?.data}
                        name = {data?.material?.name}
                        type = {data?.material?.Type} 
                        materialId = {id}
                        ></CreateMaterialWidgetContent>    
                </Route>
            </Switch>
            </div>
        </div>
    </div>
     
}