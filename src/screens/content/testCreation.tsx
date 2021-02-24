import react, {useState} from "react";

import {
    useCreateTestMutation,
    useTestQuery, TestQuery,
    useTaskTypeQuery, useAddTaskMutation,
    useTaskQuery, useChangeTaskMutation,
    useChangeTestNameMutation, useDeleteTestMutation
} from "../../generated/graphql"

import {MyFileInput} from "../../uiKit/FileInput";
import {
    Redirect, useRouteMatch, useParams, Route, Switch, Link, useHistory
} from "react-router-dom";
import {
    DefaultInput
} from "../../uiKit/Inputs";

import "../css/testCreation.css"

import {Editor} from "../../uiKit/editor";

import {TextField} from "@material-ui/core";
import { DefaultButton } from "../../uiKit/Buttons";

import { TaskTypeWidget } from "../../uiKit/TaskType";

import bin from "../../images/trash-empty.svg";
import cross from "../../images/cross.svg";
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
                {props.name.replaceAll("<p>", "").replaceAll("</p>", "")}
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
    number:number;
}

const AddQuestion:react.FC<IEAddQuestion> = (props) => {
    console.log(props.number, "number")
    const [flag, setFlag] = useState(false);
    const [content, setContent] = useState(<div>loading...</div>);
    const [createTask] = useAddTaskMutation({
        variables: 
        {
            testId:props.testId,
            number: props.number
        }, onCompleted: (data) => {
            console.log(data);
            //setContent(<div>a</div>)
            setContent(
                <Redirect to={`${props.link}/task/${data.createTask?.task?.id}`}>
                </Redirect>
                )
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

const HandleExtendedWriteAnswer:react.FC<IEHandleSelectionTheme> = (props) => {
    const [data, setData] = useState(props.data)
    props.onChange(data)
    return <div className="ta__container">
        <Editor 
        className="teacher__textarea" 
        content={(props.isAutoCheck ? data : "")} 
        child={!props.isAutoCheck}
        onChange={(e:any, editor:any) => {setData(editor.getData())}}
        >
        </Editor>
    </div>

}

function HandleExtendedWriteAnswerProvider(isAutoCheck:boolean, data:any, onChange=Function) {
    return <HandleExtendedWriteAnswer
    isAutoCheck={isAutoCheck}
    data={data}
    onChange={onChange}
    />
}

const HandleDescrImageVerbose = (isAutoCheck:boolean, data:string, onChange:Function) => {
    return <div className="desc-image__container">
        <MyFileInput></MyFileInput>
    </div>
}

interface IEHandSelectionThemeData{
    data: {
        value: string;
        index: number;
    }[]
}

interface IEHandleSelectionTheme{
    isAutoCheck:boolean;
    data:string;
    onChange:Function;
}

const HandleSelectionTheme:react.FC<IEHandleSelectionTheme> = (props) => {
    console.log(props)
    const parsedData:IEHandSelectionThemeData = JSON.parse(props.data);
    //const [inputs, setInputs] = useState(parsedData)
    const [inputs, setInputs] = useState(parsedData)
    props.onChange(JSON.stringify(inputs))

    return <div className="theme-selection__container">
        {
            inputs.data.map((e) => {
                return <div className="theme__container">
                            <input className="theme" value={e.value} onChange={(event) => {
                            console.log(e.value)
                            setInputs({data: inputs.data.map((ee) => {
                                if (e.index == ee.index) {
                                    return {
                                        index: ee.index,
                                        value: event.target.value
                                    }
                                } 
                                else{
                                    return ee
                                }
                            })})}}
                        ></input>
                        <img  src={bin} onClick={ () => {
                            setInputs({data: inputs.data.filter((deleteElem) => 
                                deleteElem.index != e.index)})
                        }}/>
                    </div> 
                })
        }
        <button className="theme theme-selection__add-button"
        onClick = {() => {
            setInputs({
                data: inputs.data.concat([{index: inputs.data.length, value:""}]) 
            })
        }}
        >+</button>
    </div>
}

const HandleSelectionThemeProvider = (isAutoCheck:boolean, data:string, onChange:Function) => {
    return <HandleSelectionTheme
        isAutoCheck={isAutoCheck}
        data={data.length == 0 ? '{"data": []}' : data}
        onChange={onChange}
    ></HandleSelectionTheme>
}

const handleFunctions:Map<string, Function> = new Map(
    [
        ["расширенный письменный ответ", HandleExtendedWriteAnswerProvider],
        ["опишите устно изображение", HandleDescrImageVerbose as Function],
        ["монологическое высказывание на выбранную тему", HandleSelectionThemeProvider]
    ]
    
    ) 


function parseHandlers(handler:Function|undefined, arg:any, isAutoCheck:boolean, onChange:Function){
    console.log(handler)
    try{
        return handler!(isAutoCheck, arg, onChange)
    } catch (e) {
        console.log(e, handler)
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

interface IEQuestionEditing{
    testLink:string;
}

const QuestionEditing:react.FC<IEQuestionEditing> = (props) => {
    const {url} = useRouteMatch();
    let fromIDtoName = new Map<string, string>();
    const {id} = useParams<IEParams>();
    const history = useHistory()
    const {loading, data} = useTaskQuery({variables: {taskId:id}})
    const [flag, setFlag] = useState(false)
    const [theory, setTheory] = useState(data?.task?.theory)
    const [isAutoChecked, setChecked] = useState(data?.task?.isAutocheck);
    const [Type, setType] = useState(data?.task?.Type.id);
    const [isTiming, setIsTiming] = useState(data?.task?.isTiming)
    const [points, setPoints] = useState(data?.task?.maxScore)
    const [time, setTime] = useState(data?.task?.time)
    const [maxPoints, setMaxPoints] = useState(data?.task?.maxScore)
    const [autoCheckData, setAutoCheck] = useState(data?.task?.autoCheckData);
    const [typeName, setTypeName] = useState("")
    const changeTask = useChangeTaskMutation({variables: {
        Type: Type!,
        autoCheck: isAutoChecked!,
        theory: theory!,
        time: time!,
        autoCheckData: autoCheckData!,
        isTime: isTiming!,
        maxScore: maxPoints!,
        taskId: id,
        practise: autoCheckData!
    }, onCompleted: (data) => {
        console.log(data);
    }})
    const handler:Function = handleFunctions.get(Type!)!
    console.log(Type, "type")

    if (loading) return <div>loading...</div>
    for (let type of data?.taskTypes?.edges!) {
        fromIDtoName.set(type?.node?.id!, type?.node?.name!)
    }
    if (!flag){
        setFlag(true)
        setType(data?.task?.Type.id)
        setChecked(data?.task?.isAutocheck)
        setIsTiming(data?.task?.isTiming);
        setMaxPoints(data?.task?.maxScore);
        setAutoCheck(data?.task?.autoCheckData);
        setTheory(data?.task?.theory)
        setTime(data?.task?.time)
        setTypeName(data?.task?.Type.name!);
        console.log(handler, "handler", Type, data, isAutoChecked)

    }
    return <div className="question-editing__container">
        <div className="name__heading">Формулировка Задания</div>
        <Editor onChange={(event:any, editor:any) => {
            setTheory(editor.getData());}}
            content={data?.task?.theory!}>
        </Editor>
        <div className="name__heading">Само задание</div>
        <div className="global-task-type__container">
            <div className="selected-task-type">
                {fromIDtoName.get(Type!)}
            </div>
            <Link to={`${url}/task-type-selection`} className="select-type">Выбрать тип</Link>
        </div>
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
            {parseHandlers(handleFunctions.get(fromIDtoName.get(Type!)!)!, data?.task?.autoCheckData, isAutoChecked!, 
                (data:string) => {setAutoCheck(data);})}

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
            <input type="number" onChange={(e) => {setMaxPoints(Number(e.target.value))}} min={0} step={1} pattern={"\d*"} 
                value={maxPoints}/>
        </div>

        <div className="save">
            <DefaultButton handleClick={() => {
                changeTask[0]()
                history.push(props.testLink)
                window.location.reload()
            }} class="name__input">Сохранить</DefaultButton>
        </div>
        <Switch>
            <Route path={`${url}/task-type-selection`}>
                <div className="task-type-selection__black-container">
                    
                </div>
                <div className="task-type-selection__centered">
                    <div className="task-type-selection__container">
                        <div className="task-type__hading">
                            <Link to={url}>
                                <img src={cross} alt="" className="task-type__cross"/>
                            </Link>
                        </div>
                        <div className="task-type__content">
                            <TaskTypeWidget 
                                types = {
                                    data?.taskTypes?.edges.map((e) => {
                                        return {
                                            name:e?.node?.name!,
                                            id: e?.node?.id!
                                        }
                                    })!
                                }
                                activeId={Type!}
                                onChange={(e:string)=>{setType(e)}}
                            ></TaskTypeWidget>
                        </div>
                    </div>
                </div>
            </Route>
        </Switch>
    </div>
}

interface IETestCreation{
    link:string;
}

export const TestCreation:react.FC<IETestCreation> = (props) => {
    const {id} = useParams<IEParams>();
    const history = useHistory();
    const [flag, setFlag] = useState(false);
    const {loading, data} = useTestQuery({variables: {testId:id}})
    const [name, setName] = useState(data?.test?.name)
    const {url} = useRouteMatch();
    const deleteTest = useDeleteTestMutation({variables: {testId:id}})
    const changeName = useChangeTestNameMutation({variables: {
        name:name!,
        testId: id
    }});
    if (loading) return <div>loading...</div>
    console.log(data);

    if (!flag){
        setFlag(true)
        setName(data?.test?.name)
    }
    console.log(name)
    
    return <Switch>
            <Route path={`${url}/create`}>
                <AddQuestion testId={id} link={url} number={data?.test?.taskSet.edges.length!}></AddQuestion>
            </Route>
            <Route path={`${url}/task/:id`}>
                <QuestionEditing testLink={url}></QuestionEditing>
            </Route>
        <Route path={`${url}`}>
            <div className="test-creation__container">
                <div className="name__heading">
                    Название теста <img src={bin} alt="" className="bin" onClick = {() => {
                        deleteTest[0]()
                        history.push(props.link)
                        window.location.reload()
                    }}/>
                </div>
                
                <DefaultInput class="name__input" value={name} handleChange={
                        (e:any) => {
                            setName(e.target.value)
                            changeName[0]()
                        }
                    } 
                        placeHolder="начните вводить..."></DefaultInput>
                <div className="name__heading">
                    Задания теста
                </div>
                {parseData(data!, url)}
                <AddTaskButton></AddTaskButton>
            </div>
        </Route>

    </Switch>

}