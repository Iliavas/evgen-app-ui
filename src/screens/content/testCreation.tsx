import react, {useState} from "react";

import {
    useCreateTestMutation,
    useTestQuery, TestQuery,
    useTaskTypeQuery, useAddTaskMutation,
    useTaskQuery
} from "../../generated/graphql"

import {
    Redirect, useRouteMatch, useParams, Route, Switch, Link
} from "react-router-dom";
import {
    DefaultInput
} from "../../uiKit/Inputs";

import "../css/testCreation.css"

import {Editor} from "../../uiKit/editor";

import {TextField} from "@material-ui/core";
import { DefaultButton } from "../../uiKit/Buttons";


interface IETesctCreate{
    id:string;
}

interface IEParams {
    id:string;
}
function ParseQuestions(data:TestQuery){
    let res = []

    for (let task of data.test?.taskSet.edges!){
        res.push(<div>{task?.node?.theory}</div>)
    }

    return res;
}
export const TestCreateWidget:react.FC<IETesctCreate> = (props) => {
    const [content, setContent] = useState(<div>loading...</div>)
    const [flag, setFlag] = useState(false);
    const {url} = useRouteMatch();
    let croppedUrl = url.split("/");
    let urlPattern = croppedUrl.slice(0, croppedUrl.length-1).join("/");
    const [createTest] = useCreateTestMutation({variables: {lessonID:props.id}, 
        onCompleted: (data) => {
            setContent(<Redirect to={`${urlPattern}/${data.createTest?.test?.id}`}></Redirect>)
        }});
    if (!flag){
        setFlag(true)
        createTest()
        
    }
    return content;
} 


interface IETaskCard{
    name:string;
    Type:string;
    time:string|"нет";
    autoCheck:"да"|"нет";
    points:string;
}


const TaskCard:react.FC<IETaskCard> = (props) => {
    return <div className="task-card__container">
        <div className="task-card__first-col">
            <div className="task-card__heading">
                {props.name}
            </div>
            <div className="task-card__time">время: 
                <span className="colorize">&nbsp; {props.time}</span></div>
        </div>
        <div className="task-card__first-col">
            <div className="answer__type">
                <span className="colorize">
                    {props.Type}
                </span>
            </div>
            <div className="autoCheck__info">
                Автопроверка: &nbsp; <span className="colorize">{props.autoCheck}</span>
            </div>
        </div>
        <div className="task-card__first-col points__container">
            <div className="points__heading">
                Баллы
            </div>
            <div className="points__content">
                {props.points}
            </div>
        </div>

    </div>
}

function parseData(data:TestQuery, url:string){
    let res = [];
    console.log(data, "data")
    for (let node of data.test?.taskSet.edges!){
        res.push(<Link to={`${url}/task/${node?.node?.id}`}>
            <TaskCard
                name={node?.node?.theory!}
                Type={node?.node?.Type.name!}
                time={node?.node?.time!.toString() + "s"}
                autoCheck={node?.node?.isAutocheck ? "да":"нет"}
                points = {node?.node?.maxScore!.toString()!}
            ></TaskCard>
        </Link>)
    }

    return res;
}

const AddTaskButton:react.FC = () => {
    const {url} = useRouteMatch();
    return <Link to={`${url}/create`} className="link">
                 <div className="add-task-button">+</div>
        </Link>
}

interface IEAddQuestion{
    testId:string;
    link:string;
}

const AddQuestion:react.FC<IEAddQuestion> = (props) => {
    const [flag, setFlag] = useState(false);
    const [content, setContent] = useState(<div>loading...</div>);
    const [createTask] = useAddTaskMutation({
        variables: 
        {
            testId:props.testId
        }, onCompleted: (data) => {
            console.log(data);
            setContent(
                <Redirect to={`${props.link}/task/${data.createTask?.task?.id}`}>
                </Redirect>)
        }
    })
    if (!flag){
        setFlag(true)
        createTask()
    }
    
    return content;
}

interface IEHandleExtendedWriteAnswer{
    data:string;
}

const HandleExtendedWriteAnswer = (isAutoCheck:boolean, data:any) => {
    console.log(data, isAutoCheck)
    return <div className="ta__container">
        <Editor className="teacher__textarea" content={(isAutoCheck ? data : "")} child={!isAutoCheck}>
            
        </Editor>
    </div>

}

const handleFunctions:Map<string, Function> = new Map(
    [
        ["расширенный письменный ответ", HandleExtendedWriteAnswer]
    ]
    
    ) 


function parseHandlers(handler:Function|undefined, arg:any, isAutoCheck:boolean){
    console.log(isAutoCheck)
    try{
        return handler!(isAutoCheck, arg)
    } catch {
        return <div>error...</div>
    }
}

function reformatDate(sec:number) {
    let minutes = (sec/60).toString()
    let secs = (sec%60).toString()
    if (minutes.length == 1) minutes = "0" + minutes
    if (secs.length == 1) secs = "0" + secs
    return minutes + ":" + secs
}

function reformatDataToNumber(time:string){
    let sep = time.split(":")
    let minutes = Number(sep[0])
    let secs = Number(sep[1])
    console.log(minutes, secs)
    return minutes * 60 + secs;
}

const QuestionEditing:react.FC = () => {
    const {id} = useParams<IEParams>();
    const {loading, data} = useTaskQuery({variables: {taskId:id}})
    const [flag, setFlag] = useState(false)
    const [theory, setTheory] = useState(data?.task?.theory)
    const [isAutoChecked, setChecked] = useState(data?.task?.isAutocheck);
    const [Type, setType] = useState(data?.task?.Type.name);
    const [isTiming, setIsTiming] = useState(data?.task?.isTiming)
    const [points, setPoints] = useState(data?.task?.maxScore)
    const [time, setTime] = useState(data?.task?.time)
    const handler:Function = handleFunctions.get(Type!)!
    console.log(handler, "handler", Type)
    console.log(data)
    if (loading) return <div>loading...</div>
    if (!flag){
        setFlag(true)
        setType(data?.task?.Type.name)
        setChecked(data?.task?.isAutocheck)
        setIsTiming(data?.task?.isTiming);
        console.log(handler, "handler", Type, data, isAutoChecked)

    }
    return <div className="question-editing__container">
        <div className="name__heading">Формулировка Задания</div>
        <Editor onChange={(event:any, editor:any) => {
            setTheory(editor.getData());}}
            content={data?.task?.theory!}>
        </Editor>
        <div className="name__heading">Само задание</div>
        <select className="selected" onChange={(e) => {setType(e.target.value)}}>
            {data?.taskTypes?.edges?.map((e) => {
                return <option selected = 
                 {e?.node?.name == data.task?.Type.name}>{e?.node?.name}</option>})}
        </select>
        <div className="checkbox__container">
            <input type="checkbox"
                onChange = {(e:any) => {
                    setChecked(e.target.checked); console.log(e.target.checked)
                }}/>Автопроверка
        </div>
        <div className="answer__content">
            {
            isAutoChecked ? <div className="answer-autoCheck__heading">Введите правильный ответ</div> : 
                <div className="answer-autoCheck__heading">Как будет выглядеть задание у учеников</div>
            }
            {parseHandlers(handleFunctions.get(Type!)!, data?.task?.autoCheckData, isAutoChecked!)}

        </div>
        <div className="timing checkbox__container">
            <input type="checkbox" checked={isTiming!} onChange={(e) => {setIsTiming(e.target.checked)}}/>Вопрос на время?
            <TextField
            type="time"
            defaultValue={reformatDate(300)}
            className="timePicker"
            disabled={!isTiming}
            onChange = {(e) => {setTime(reformatDataToNumber(e.target.value))}}
            >

            </TextField>
        </div>
        <div className="how-many-points">
            <div className="points__label checkbox__container">Сколько макимум баллов:</div>
            <input type="number" onChange={(e) => {}} min={0} step={1} pattern={"\d*"}/>
        </div>

        <div className="save">
            <DefaultButton handleClick={() => {}} class="name__input">Сохранить</DefaultButton>
        </div>
    </div>
}


export const TestCreation:react.FC = () => {
    const {id} = useParams<IEParams>();
    const {loading, data} = useTestQuery({variables: {testId:id}})
    const [name, setName] = useState(data?.test?.name)
    const {url} = useRouteMatch();
    if (loading) return <div>loading...</div>
    console.log(data);
    return <Switch>
            <Route path={`${url}/create`}>
                <AddQuestion testId={id} link={url}></AddQuestion>
            </Route>
            <Route path={`${url}/task/:id`}>
                <QuestionEditing></QuestionEditing>
            </Route>
        <Route path={`${url}`}>
            <div className="test-creation__container">
                <div className="name__heading">
                    Название теста
                </div>
                <DefaultInput class="name__input" value={name} handleChange={
                    (e:any) => {setName(e.target.value)}} placeHolder="начните вводить..."></DefaultInput>
                <div className="name__heading">
                    Задания теста
                </div>
                {parseData(data!, url)}
                <AddTaskButton></AddTaskButton>
            </div>
        </Route>

    </Switch>

}