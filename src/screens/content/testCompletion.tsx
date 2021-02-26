import react, {useState, useContext} from "react";
import {
    useParams, 
    useRouteMatch, 
    Link,
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import ReactPlayer from "react-player";
import {
    useChildtestQuery, ChildtestQuery, useCreateSheetMutation, useCreateAnswerMutation,
    useGetAnswerDataQuery,
    useAnswerTeacherDetailQuery
} from "../../generated/graphql"

import {Pagination} from "../../uiKit/truePagination";
import {DefaultButton} from "../../uiKit/Buttons";

import "../css/test-completion.css"
import { DefaultInput } from "../../uiKit/Inputs";
import {ChildContext} from "./childContext";

import {Editor} from "../../uiKit/editor";
import {ButtonGroup} from "../../uiKit/ButtonGroup";
import {AudioRecButton} from "../../uiKit/audioRecButton";

import {TrueFalseQuestionWidget} from "../../uiKit/TrueFalseQuestion";

export const TestCompletionContext = react.createContext({
    setActive: (e:number) => {},
    link: "",
    test: [] as ChildtestQuery,
    answersheetId: "",
    getAnswerSheetId: () => {return String();}
})

function ExtendedInputDecode(data:string) {
    return JSON.stringify({data: data})
}

const ExtendedInputParse:react.FC<IETestCompletionPart> = (props) => {
    return <Editor
    data=""
    onChange={(e:any, editor:any) => {
        props.varChange(editor.getData())
    }}
></Editor>
}

interface IETestCompletionPart{
    data:ChildtestQuery;
    varChange:Function;
    id:Number;
}

interface IESelectionThemeTheme{
    data: {
        index:Number;
        value:string;
    }[]
}

const SelectionThemeParse:react.FC<IETestCompletionPart> = (props) => {
    const [res, setRes] = useState({
        theme: "",
        audio: ""
    });
    console.log(res, "res")
    const {answersheetId} = useContext(TestCompletionContext);
    const {index} = useParams<{index:string}>();
    const {loading, data} = useGetAnswerDataQuery({variables:{
        answerSheetId: answersheetId,
        number: Number(index)
    }})
    if (loading) return <div>loading...</div>;
    console.log(data);
    let currentTheme = "";
    try {
        console.log(data)
        currentTheme = 
            (JSON.parse(
                data?.answerSheet?.answerSet.edges[0]?.node?.content!
                ) as {data:{theme:string}}).data.theme
    } catch{}
    props.varChange(JSON.stringify(res));
    let themes = 
        JSON.parse(props.data.test?.taskSet.edges![Number(props.id)]?.node?.practise!) as IESelectionThemeTheme
    console.log(themes, "themes", currentTheme)
    return <div className="selection-theme-page__container">
        <ButtonGroup onChange={(e:string) => {
            console.log(e, "name", res, res.audio)
            setRes({
                audio:res.audio,
                theme:e
        })}} group={
            themes.data.map((e)=> {
                return e.value
            })
        } 
        button_underName="Выбранная тема" active={currentTheme}></ButtonGroup>
        <AudioRecButton onChange = {(data:string) => {
            console.log(res, res.theme, "theme")
            setRes({
            theme: res.theme,
            audio: data
        })}}></AudioRecButton>
    </div>
}

function TaskProvider(elem:react.FC<IETestCompletionPart>) {
    return function(props:IETestCompletionPart){
        return react.createElement(
            elem, 
            {...props},
            )
    }
}

const GetAnswerFunction = (questionNumber:number) => {
    const {answersheetId} = useContext(TestCompletionContext);
    const {loading, data} = useGetAnswerDataQuery({variables:{
        answerSheetId:answersheetId,
        number:questionNumber
    }});
    
}

const TrueFalseQuestion:react.FC<IETestCompletionPart> = (props) => {
    const {index} = useParams<{index:string}>();
    const {answersheetId} = useContext(TestCompletionContext);
    const {data, loading} = useGetAnswerDataQuery({variables: {
        answerSheetId:answersheetId,
        number: Number(index)
    }})
    if (loading) {return <div>loading..</div>}
    let contentContainer = data?.answerSheet?.answerSet.edges[0]?.node?.content;
    try {
        contentContainer = (JSON.parse(contentContainer!) as {data:string}).data;
    }
    catch {}
    //const {data, loading} = "";
    return <div>
        <TrueFalseQuestionWidget isTrue={Boolean(contentContainer)} onChange={
            (e:boolean) => {
                props.varChange(JSON.stringify({data: e}));
            }}></TrueFalseQuestionWidget>
    </div>;
}

const TestCompletionTaskManager = new Map<string, Function>([
    ["расширенный письменный ответ", TaskProvider(ExtendedInputParse)],
    ["монологическое высказывание на выбранную тему", TaskProvider(SelectionThemeParse)],
    ["правда/ложь", TaskProvider(TrueFalseQuestion)] 
])

const TestCompletionTaskDecoder = new Map<string, Function>([
    ["расширенный письменный ответ", ExtendedInputDecode],
    ["монологическое высказывание на выбранную тему", ExtendedInputDecode],
    ["правда/ложь", ExtendedInputDecode] 
])

const Timer:react.FC = () => {
    const [timer, setTimer] = useState(0);
    setTimeout(() => {
        setTimer(timer+1)
    }, 1000)
    return <div className="timer">{new Date(timer * 1000).toISOString().substr(11, 8)}</div>
}

const TestCompletionRoute:react.FC = () => {
    const {url} = useRouteMatch()
    const {test, setActive, getAnswerSheetId, answersheetId} = useContext(TestCompletionContext);
    const [data, setData] = useState("")
    console.log(data)
    const {index} = useParams<{index:string}>();
    console.log(index, "index")
    const Answer = useCreateAnswerMutation({variables: {
        sheet: answersheetId, 
        data: TestCompletionTaskDecoder.get(
            test.test?.taskSet.edges[Number(index)]?.node?.Type.name!)!(data), 
        number: Number(index)
    }})
    setActive(Number(index))
    const widget = TestCompletionTaskManager.get(
        test.test?.taskSet.edges[Number(index)]?.node?.Type.name!)!({
            data:test, varChange:setData, id:Number(index)!})
    console.log(test)
    return <div className="test-completion-route__container">
        <div className="test-type">{test.test?.taskSet.edges[Number(index)]?.node?.Type.name!}</div>
        <div className="theory"> 
            <div dangerouslySetInnerHTML={{__html:test.test?.taskSet.edges[Number(index)]?.node?.theory!}}></div>
        </div>
        {widget}
        <DefaultButton handleClick={() => {
            console.log(data, "data")
            Answer[0]()
        }} class="btn answer-btn">Ответить</DefaultButton>
        <Link to={`${url}/complete`} className="btn-test-compl">
        <button className="btn-test-comp__canceled btn-test-compl end-btn">Закончить</button>

        </Link>
    </div>
}

const CompleteWidget:react.FC = () => {
    return <div className="complete__container">
        <div className="complete__haders">
            Спасибо что выполнили тест
        </div>
        <Link to="/">
            <button className="btn-test-comp__canceled btn-test-compl end-btn">Вернуться на главную</button>

        </Link>
    </div>
}

interface IETestCompletion{
    link:string;
}

export const TestCompletion:react.FC<IETestCompletion> = (props) => {
    const {id} = useParams<{id:string}>();
    const history = useHistory()
    const params = useContext(ChildContext);
    const [active, setActive] = useState(-1);
    const [answerSheetId, setAnswerSheetId] = useState("");
    const getData = () => {return answerSheetId!;}
    console.log(id, params)
    const createSheet = useCreateSheetMutation({variables: 
            {child:localStorage.getItem("id")!, test:id}, onCompleted: (data) => {
                setAnswerSheetId(data.createAnwerSheet?.answer?.id!)
            }},)
    console.log(active)
    const {loading, data} = useChildtestQuery({variables:{testId:id}})
    const {url} = useRouteMatch()
    if (loading) {
        return <div>loading...</div>
    }

    return <TestCompletionContext.Provider value = {
            {setActive:setActive, link:url, test:data!, answersheetId:answerSheetId,
            getAnswerSheetId: getData}}>
        <div className="centered">
            <div className="test-completion__container">
            <Pagination link={url} length={data?.test?.taskSet.edges.length!} active={active}></Pagination>
            <Timer></Timer>
            <div className="test-completion__main-content">
                <Switch>
                <Route path={`${url}/:index/complete`}>
                        <CompleteWidget></CompleteWidget>
                    </Route>
                    <Route path={`${url}/:index`}>
                        <TestCompletionRoute></TestCompletionRoute>
                    </Route>
        
                    <Route path={url}>
                        <div className="test-completion__heading">
                            {data?.test?.name.trim()}
                        </div>
                        <div className="test-completion__subject">
                            {data?.test?.lesson.typeLesson.name}
                        </div>
                        <div className="questions">
                            Вопросов:&nbsp;<span className="colorize">{data?.test?.taskSet.edges.length}</span>
                        </div>
                        <Link to={`${url}/0`} className="btn-test-compl">
                            <DefaultButton handleClick={() => {setActive(0); createSheet[0]()}} class="btn-test-compl">Выполнить</DefaultButton>
                        </Link>
                            <button className="btn-test-comp__canceled btn-test-compl" 
                                onClick={() => {
                                    history.goBack()
                                }}>Отмена</button>
                    </Route>
                </Switch>

            </div>
        </div>
    </div>
    
        </TestCompletionContext.Provider>
        
}