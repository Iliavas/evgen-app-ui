import react, {useEffect} from "react";

import {} from "../../uiKit/Buttons"

import "../css/CreateMaterial.css"

import {MyToogleButton} from "../../uiKit/toggleButton";

import {Switch, Route, useRouteMatch, useParams} from "react-router-dom";

import {DefaultInput} from "../../uiKit/Inputs";
import {DefaultButton} from "../../uiKit/Buttons";

import {Editor} from "../../uiKit/editor";

interface MaterialParams{
    type:string;
}


const LinkMaterial:react.FC = () => {
    return <div className="link-material__container">
        <p className="material-creation__text">Название ссылки</p>
        <DefaultInput class="material-creation__input"></DefaultInput>
        <p className="material-creation__text">Ссылка</p>
        <DefaultInput class="material-creation__input"></DefaultInput>
        <DefaultButton handleClick={() => {}}>Сохранить</DefaultButton>
    </div>
}

const MaterialMaterial:react.FC = () => {
    return <div className="link-material__container">
        <p className="material-creation__text">Название</p>
        <DefaultInput class="material-creation__input"></DefaultInput>
        <p className="material-creation__text">Контент</p>
        <Editor child={false}></Editor>
        <DefaultButton handleClick={() => {}}>Сохранить</DefaultButton>
    </div>
}

const CreateMaterialWidgetContent:react.FC = () => {
    const {type} = useParams<MaterialParams>();
    let content = <div>error...</div>
    switch (type) {
        case "link":
            content = <LinkMaterial></LinkMaterial>
            break;
        case "material":
            content = <MaterialMaterial></MaterialMaterial>
    }
    return <div className="content-pading">
        {content}
    </div> 
}

export const CreateMaterialWidget:react.FC = () => {
    const {url} = useRouteMatch();
    return <div>


        <div className="create-material__container-absolute">
        </div>
        <div className="container-local__container">
            <div className="create-material__container-local">
            <MyToogleButton handleChange = {() => {}} buttons = {[{name: "ссылка", link:`${url}/link`}, 
                        {name: "материал", link:`${url}/material`}]}></MyToogleButton>
                
            <Switch>
                <Route path={`${url}/:type`}>
                    <CreateMaterialWidgetContent></CreateMaterialWidgetContent>
                </Route>
            </Switch>
            </div>
        </div>
    </div>
     
}