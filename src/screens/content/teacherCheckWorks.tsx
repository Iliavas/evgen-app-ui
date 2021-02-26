import react, {useContext, useState} from "react";

import {ChildContext} from "./childContext";
import {Editor} from "../../uiKit/editor";
import {
    useAllTeacherTestQuery,
    AllTeacherTestQuery,
    useTestDetailQuery,
    TestDetailQuery,
    ChildtestQuery,
    useAnswerTeacherDetailQuery,
    useScoringMutation,
    AnswerTeacherDetailQuery
} from "../../generated/graphql";
import {TestCompletionContext} from "./testCompletion";
import {Pagination} from "../../uiKit/truePagination"

import LZString from "lz-string";

import Player from "../../uiKit/audio";
import {MarkWidget} from "../../uiKit/mark";
import "../css/teacherCheckWorks.css"
import { useRouteMatch, Link, Switch, Route, useParams, useLocation, Redirect } from "react-router-dom";
import {DefaultButton} from "../../uiKit/Buttons"; 

import {BackLink} from "../../uiKit/backLink";

import {TrueFalseQuestionWidget} from "../../uiKit/TrueFalseQuestion";
import { printIntrospectionSchema } from "graphql";

function parseData(data:AllTeacherTestQuery, link:string){
    let res = []
    for (let subject of data.teacher?.subjectclasslocalSet.edges!){
        for (let lesson of subject?.node?.lessonSet.edges!){
            for (let test of lesson?.node?.tests!){
                res.push(
                    <Link to={`${link}/${test?.id}`}>
                        <TeacherTestWidget
                            name={test?.name!}
                            solved={test?.answerLen!}
                            group={subject?.node?.name!}
                            questions={test?.taskLen!}
                        ></TeacherTestWidget>
                    </Link>
                    
                )
            }
        }
    }
    return res;
}

interface IETeacherTestWidget{
    name:string;
    solved:number;
    group:string;
    questions:number;
}

const TeacherTestWidget:react.FC<IETeacherTestWidget> = (props) => {
    
    return <div className="test-widget__container">
        <div className="test-widget__sec">
            <div className="test-widget__heading">
                {props.name}
            </div>
            <div className="how-many-solved">
                Выполнено: <span className="colorize">{props.solved}</span>
            </div>

            <div className="class__solved">
                Выполнял: <span className="colorize">{props.group}</span>
            </div>
        </div>
        <div className="test-widget__sec">
            <div className="how-many-questions">
                Всего вопросов: <span className="colorize">{props.questions}</span>
            </div>
        </div>
    </div>
}


interface IETestSheetInfo{
    name:string;
    surname:string;
    answers:{
        isCompleted:boolean;
        mark:number;
    }[];
    id:string;
}

const TestSheetInfo:react.FC<IETestSheetInfo> = (props) => {
    const {url} = useRouteMatch()
    let mark = 0;
    for (let i of props.answers) {
        mark += i.mark;
    }
    return <Link to={`${url}/${props.id}`}>
    <div className="test-sheet__container">
        <div className="test-sheet__cred">
            <div className="name__surname">
                {props.name} {props.surname}
            </div>
            <div className="mark">
                Баллов: &nbsp; <span className="colorize">{mark}</span>
            </div>
        </div>
        {props.answers.map((e) => {
            return <div className={"answer " + (e.isCompleted ? "checked" : "unchecked")}></div>
        })}
    </div>
    
    </Link> 

}


function parseTestDetail(data:TestDetailQuery){
    let res = [];
    for (let node of data.test?.answersheetSet.edges!) {
        res.push(<TestSheetInfo
            name={node?.node?.child.name!}
            surname={node?.node?.child.surname!}
            answers={
                node?.node?.answerSet.edges.map((e) => {
                    return {
                        isCompleted: e?.node?.completed!,
                        mark: e?.node?.score!
                    }
                })!
            }
            id={node?.node?.id!}
        ></TestSheetInfo>)
    }
    return res;
}

interface IEAnswerTeacherDetail{
    testId:string;
}

interface IEExtendedWriteAnswer{
    data:string;
}

function ExtededWriteAnswerParse(data:string) {
    console.log(data, "data")
    const parsedData = JSON.parse(data) as IEExtendedWriteAnswer;
    return <Editor
        content={parsedData.data}
    ></Editor>
}

interface IErenderAnswer{
    data:string;
}

interface IEThemeSelection{
    data: string;
}

function fromDecodedStringToUrl(data:string) {
    let decoded = LZString.decompress(data)!;
    const AudioArray = new Uint8Array(
        decoded.split(",").map((e) => {return Number(e)})
        )
    const BlobData = new Blob([AudioArray], {type:"audio/wav"});
    return window.URL.createObjectURL(BlobData);
}

const ThemeSelectionParse:react.FC<IErenderAnswer> = (props) => {
    let data = JSON.parse(props.data) as IEThemeSelection;
    let parsedData = JSON.parse(data.data) as {theme:string; audio:string;}
    let audioUrl = fromDecodedStringToUrl(parsedData.audio)
    
        return <div>
        <Player url={audioUrl!}></Player>
    </div>
}

function RenderAnswerProvider(widget:react.FC<IErenderAnswer>) {
    return (data:string) => {
        console.log("fuck", (widget))
    return react.createElement(
        widget,
        {data:data}
    )}
}

const RenderAnswer:Map<string, Function> = new Map([
        ["расширенный письменный ответ", ExtededWriteAnswerParse],
    ]
)

const TrueFalseQuestion:react.FC<IErenderAnswer> = (props) => {
    let parsedData = (JSON.parse(props.data) as {data:boolean}).data;
    return <div>
        <TrueFalseQuestionWidget
        onChange = {() => {}}
        isTrue = {parsedData!}
        ></TrueFalseQuestionWidget>
    </div>
}

RenderAnswer.set("монологическое высказывание на выбранную тему", RenderAnswerProvider(ThemeSelectionParse))
RenderAnswer.set("правда/ложь", RenderAnswerProvider(TrueFalseQuestion)) 


function renderAnswer(Type:string, answerInstance:any) {
    
    let content = <div>{Type}</div>
    try {
        content = RenderAnswer.get(Type)!(answerInstance!.content)
        console.log(content, "content")
    }
    catch (e){
        console.log("error", e)
    }
    return content;
}

const AnswerTeacherDetail:react.FC<IEAnswerTeacherDetail> = (props) => {

    const [score, setScore] = useState(0);
    const [flag, setFlag] = useState(false);
    const {number} = useParams<{number:string}>();

    const [scoring, {}] = useScoringMutation({variables:{
        answerSheetId:props.testId,
        score: score,
        number:Number(number)
    }})
    console.log(props.testId, number)
    const {setActive} = useContext(TestCompletionContext);
    const {loading, data} = useAnswerTeacherDetailQuery({
        variables: {answerId:props.testId, number:Number(number)}})
    setActive(Number(number))
    if (loading) return <div>loading..</div>
    const answerInstance = data?.allAnswer?.edges[0]!.node;
    const question = answerInstance?.sheet.test.taskSet.edges[0]!.node;
    const answerInstanceType = answerInstance?.sheet.test.taskSet.edges[0]?.node?.Type.name!;
    const content = renderAnswer(answerInstanceType, answerInstance);


    if (!flag) {
        setFlag(true);
        setScore(answerInstance?.score!)
    }
    console.log(data, "markData");
    return <div className="answer-teacher__container">
            {content} 
            <MarkWidget active={data?.allAnswer?.edges[0]?.node?.score} len={question?.maxScore!} onChange={(e:any) => {
                try{
                    setScore(e[0].idx); 
                }
                catch{}
                }}></MarkWidget>
 
            <DefaultButton handleClick={() => {
                scoring()
            }}>Поставить балл</DefaultButton>
    </div> 
}
interface IEAnswerDetail{
    data:TestDetailQuery;
    backUrl:string;
}
const AnswerDetail:react.FC<IEAnswerDetail> = (props) => {
    console.log(props, "props")
    const {url} = useRouteMatch()
    const [active, setActive] = useState(0);
    const {id} = useParams<{id:string}>();
    let currentRouteLen = props.data.test?.answersheetSet.edges.filter(
        (e) => {return e?.node?.id == id})[0]?.node?.answerSet.edges.length!;
    console.log(url)
    return <TestCompletionContext.Provider value={{
            link:url, setActive:setActive, test:[] as ChildtestQuery,
            answersheetId:"", getAnswerSheetId:()=>{return"";}
            }}>
        <div className="answer-detail__container">
            <Pagination
                length={currentRouteLen} 
                link={url}
                active={active}
            >
            </Pagination>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                marginBottom: "20px" 
            }}>
                <BackLink link={props.backUrl}></BackLink>
            </div>
            <Switch>
                <Route path={`${url}/:number`}>
                    <AnswerTeacherDetail testId={id}></AnswerTeacherDetail>
                </Route>
                <Route path={url}>
                    <Redirect to={`${url}/0`}></Redirect>
                </Route>

            </Switch>
        </div>
    </TestCompletionContext.Provider>

}

const TeacherTestDetail:react.FC<{backUrl:string}> = (props) => {
    const {url} = useRouteMatch();
    const {testId} = useParams<{testId:string}>()
    const {data, loading } = useTestDetailQuery({variables: {testId:testId}});
    if (loading) {
        return <div>loading...</div>
    }
    console.log(data, "data");
    const res = parseTestDetail(data!)
    return <Switch>
        <Route path={`${url}/:id`}>
            <AnswerDetail data={data!} backUrl={url}></AnswerDetail>
        </Route>
        <Route path={url}>
            <div className="teacher-test-detail__container">
                <BackLink link={props.backUrl}></BackLink>
                {res}
            </div>
        </Route>
    </Switch> 

}

export const TeacherWorkCheck:react.FC = () => {
    const {id} = useContext(ChildContext);
    const {url} = useRouteMatch()
    const {data, loading} = useAllTeacherTestQuery({variables: {teacherID:id}})
    if (loading){
        return <div>loading..</div>
    }
    const res = parseData(data!, url);
    return <Switch>
            

            <Route path={`${url}/:testId`}>
                <TeacherTestDetail backUrl={url}></TeacherTestDetail>
            </Route>
            <Route path={url}>
                <div className="teacher-work-check__container">
                    {res}
                </div>
            </Route>
    </Switch>
    

}