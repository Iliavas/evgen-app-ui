import react, {useContext, Context, useState, useReducer, useEffect} from "react"
import {ChildContext} from "./childContext";
import "../css/lesson-detail.css";

import {Editor} from "../../uiKit/editor";

import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import client from "../../client";


import {
    useGetLessonsInfoQuery, 
    useDeleteMaterialMutation,
    GetLessonsInfoDocument,
    UserInfoDocument,
    useChangelessonMutation,
    useCreateTestMutation
} from "../../generated/graphql";

import {Link, Switch, Route} from "react-router-dom";

import {CreateMaterialWidget} from "./createMaterial"

import bin from "../../images/trash-empty.svg";

import {TestCreation, TestCreateWidget} from "./testCreation"
import { DefaultButton } from "../../uiKit/Buttons";



interface IEParams{
    id:string;
}

const TeacherContext = react.createContext({
    changeMaterials: () => {},
    
})


interface IEQuery{
    name:string,
    content:string,
    descr:string,
    typeLesson: {
        name:string,
        group:{
            name:string
        }
    }
    tests: {
        name:string,
        id:string,
        taskLen:number,
        deadline:string
    }[]
    materials: {
        name:string,
        data:string, id:string
    }[]
}

function parseMaterials(data:IEQuery){
    let res = []
    for (let material of data.materials){
        res.push(
            <NewMaterialCard
                name={material.data}
                id={material.id}
            ></NewMaterialCard>
        )
    }
    return res;
}



function parseTeacherTests(data:IEQuery){
}

interface IELessonDetail{
    data: any,
    id: string, url:string;
}


interface IEChildTestWidget{
    name:string;
    time:string;
    id:string;
    questions:string;
}

const ChildTestWidget:react.FC<IEChildTestWidget> = (props) => {
    const {url} = useRouteMatch();
    return <div className="child-test-widget__container">
        <div className="child-test__heading">
            {props.name}
        </div>
        <div className="time">Вопросов: &nbsp; <span className="colorize">{props.questions}</span></div>
        <Link to={`${url}/test/${props.id}`}>
        <DefaultButton handleClick={() => {}} class="submit-btn">Выполнить</DefaultButton>

        </Link>
    </div>
}
function parseChildTests(data:IEQuery) {
    let res = []
    for (let test of data.tests) {
        res.push(
            <ChildTestWidget
            name={test.name}
            id={test.id}
            time={"~30 мин"}
            questions={test.taskLen.toString()}
            ></ChildTestWidget> 
        )
    }
    return res;
}


interface IEChildMaterial{
    name:string;
    time:string;
    link:string;
}

const ChildMaterialWidget:react.FC<IEChildMaterial> = (props) => {
    return <div className= "child-material__container">
        <div className="child-test__heading">
            {props.name}
        </div>
        <div className="time">{props.time}</div>
        <a href={`http://${props.link}`}>
        <DefaultButton handleClick={() => {}} class="submit-btn">Прочитать</DefaultButton>

        </a>

    </div>
}


function parseChildMaterials(data:IEQuery) {
    let res = []
    for (let material of data.materials){
        res.push(<ChildMaterialWidget
            name={material.name}
            time={"~30мин"}
            link={material.data}
        ></ChildMaterialWidget>)
    }
    return res;
}

const ChildLessonDetail:react.FC<IELessonDetail> = (props) => {
    const data = props.data;
    const {url} = useRouteMatch();
    return <Switch>
        <Route path={url}>
            <div className="lesson-details__container">
                <div className="lesson-details__heading">
                    {data.typeLesson.name}, {data.typeLesson.group.name}, {data.name}, 27.09
                    <div className="materials">
                        <div className="lesson-details__heading">
                            Материалы
                        </div>
                        <div className="materials__content__child">
                            {parseChildMaterials(data)}
                        </div>
                    </div>
                    <div className="tests">
                        <div className="lesson-details__heading">Тесты</div>
                        <div className="materials__content__child">
                            {parseChildTests(data)}
                        </div>
                    </div>
                </div>
            </div>
        </Route>
    </Switch>

}

interface IEMaterialCard{
    name:string;
    id:string;
}

const NewMaterialCard:react.FC<IEMaterialCard> = (props) => {
    const {url} = useRouteMatch()
    const {changeMaterials} = useContext(TeacherContext)
    const [deleteMaterial] = useDeleteMaterialMutation({variables: {id:props.id}});
    return <div>
        <div className="teacher-material">
            <div className="img__container">
                <img src={bin} alt="" className="teacher-material__delete-button"
                onClick = {(e) => {
                    deleteMaterial({variables: {id:props.id}})
                    window.location.reload()
                }}
            />
            </div>

            <Link to={`${url}/materials/${props.id}`} className="link teacher-materail__flex">
                <span className="teacher-material__text">
                    {props.name}
                </span>
            </Link>

        </div>

    </div>
        
}
interface IETestCard{
    name:string;
    questions:number;
    id?:string;
}
const NewTestCard:react.FC<IETestCard> = (props) => {
    return  <div className="teacher-material">
                <div className="teacher-container">
                    <div className="test-card__heading">Тест.{props.name}</div>
                    <div className="test-card__questions"> Вопросов:&nbsp;<span className="colorize"> {props.questions} </span></div>
                </div>
            </div>
            
}

interface IEPlusButton{
    OnClick:Function;
    link?:string;
}

const PlusButon:react.FC<IEPlusButton> = (props) => {

    return <Link to={props.link!}>
        <div className="teacher-material teacher-material__add-button" onClick={props.OnClick()}>
            <div className="teacher-materail__flex">
                <span className="plus">+</span>
            </div>
        </div>
    </Link> 
}

function parseTests(data:IEQuery, url:string){
    let res = []
    for (let test of data.tests){
        res.push(
            <Link to={`${url}/tests/${test.id}`}>
                <NewTestCard
                    name={test.name}
                    questions={test.taskLen}
                ></NewTestCard>
            </Link>

        );
    }
    return res;
}


const TeacherLessonDetail:react.FC<IELessonDetail> = (props) => {
    const [changeLesson] = useChangelessonMutation();
    const history = useHistory();
    const [createTest] = useCreateTestMutation({onCompleted: (data) => {
        history.push(`${url}/tests/${data.createTest?.test?.id}`);
    }, variables: {lessonID: props.id}})
    const {url} = useRouteMatch();
    const [data, setData] = useState(props.data.lessons);
    let [name, setName] = useState(data.name)
    let [descr, setDescr] = useState(data.descr)
    return <Switch>
        <Route path={`${url}/tests/create`}>
                    <TestCreateWidget id={props.id}></TestCreateWidget>
        </Route>
        <Route path={`${url}/tests/:id`}>
            <TestCreation link={url}></TestCreation>
        </Route>
        <Route path={url}>
        <div>
        <div className="lesson-details__container">
    <div className="lesson-details__heading">
        {data.typeLesson.name}, {data.typeLesson.group.name}, {data.name}, 27.09
    </div>
    <div className="teacher-lesson-detail__container">
        <div className="teacher-lesson-detail__heading">
            <div className="teacher-lesson-detail__info">
                <div className="teacher-lesson-detail__class-name">
                    8.3 класс
                </div>
                <div className="teacher-lesson-detail__subject-name">
                    Английский язык
                </div>
            </div>

            <div className="teacher-lesson__times">
                <div className="deadline__date">
                    урок доступен с <span className="colorize">27.09 </span>
                    до <span className="colorize">27.10</span> 
                </div>
                <div className="deadline__time">
                    с <span className="colorize">11:00</span> до <span className="colorize">22:00</span>
                </div>
                <div className="change__time">
                    Изменить время
                </div>
            </div>
        </div>
        <div className="teacher-lesson__content">
            <div className="teacher-content__first-row">
                <div className="teacher-lesson__theme">
                    <div className="teacher-lesson-theme__heading">
                        Тема урока
                    </div>
                    <input type="text" placeholder="Введите тему урока" 
                        className="lesson-theme__input" value={name}
                        onChange = {(e:any) => {setName(e.target.value);
                            changeLesson({variables: {name:name, descr:descr, lessonId:props.id}})
                        }}
                        
                        />
                </div>
                <div className="teacher-lesson__materials">
                    <div className="teacher-materials__heading">Добавьте материалы к уроку</div>
                    <div className="teacher-materials__content">
                        {parseMaterials(data)}
                        <PlusButon OnClick={() => {}} 
                            link={`${url}/materials/create`}
                            ></PlusButon>
                    </div>
                </div>
            </div>
            <div className="teacher-content__first-row second-row">
                <div className="teacher-lesson__descr">
                    <div className="teacher-lesson-theme__heading">
                        Описание урока
                    </div>
                    <textarea className="teacher-descr__input" placeholder="Описание урока" onChange = {(e:any) => {
                        setDescr(e.target.value);
                        console.log(descr)
                        changeLesson({variables: {name:name, descr:e.target.value, lessonId:props.id}})
                    } } value={descr}></textarea>
                </div>
                <div className="teacher-lesson__tests">
                    <div className="teacher-materials__heading">Добавьте тесты к уроку</div>
                    <div className="teacher-tests__content">
                        {parseTests(data, url)}
                        <PlusButon OnClick={() => {}} link={`${url}/tests/create`}/>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </div>

    <Switch>
        
        <Route path={`${url}/materials/create`}>
            <CreateMaterialWidget id={props.id}></CreateMaterialWidget>
        </Route>

        <Route path={`${url}/materials/:id`}>
            <CreateMaterialWidget id={props.id}></CreateMaterialWidget>
        </Route>
    </Switch>

</div>
</div>
        </Route>


        </Switch>
}

export const LessonDetails:react.FC = () => {
    const {url} = useRouteMatch();
    const {createWorkLink} = useContext(ChildContext);
    const {id} = useParams<IEParams>();
    const [ignored, forceUpdate] = useReducer(x => x+1, 0);
    let {loading, data} = useGetLessonsInfoQuery({variables: {id:id}})
    let [materials, setMaterials] = useState(data);
    if (loading) return <div>loading...</div>;
    function setData() {
        forceUpdate()
    }
    return <TeacherContext.Provider value = {{changeMaterials:setData}}>
            { createWorkLink == "" ? <ChildLessonDetail data={data?.lessons} id={id} url={url}></ChildLessonDetail> : 
            <TeacherLessonDetail url={url} data={data} id={id}></TeacherLessonDetail>}
        </TeacherContext.Provider> 

}