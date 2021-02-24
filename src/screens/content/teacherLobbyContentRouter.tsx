import react, {useContext} from "react";

import {useParams} from "react-router-dom";

import {ChildContext} from "./childContext";

import {TeacherClasses} from "./teacherClasses";

import {TeacherWorkCreate} from "./teacherWorkCreate";

import {Switch, Route, useRouteMatch, Link} from "react-router-dom";

import "../css/teacherLobbyContentRouter.css"
import {
    GetTeacherClassesQuery,
    GetTeacherClassesQueryResult, useGetTeacherClassesQuery
} from "../../generated/graphql"
import {TeacherWorkCheck} from "./teacherCheckWorks"

interface IEParams{
    type:string;
}

interface IECreateWorkLink{
    link:string;
}

interface IECreateLessonWidget{
    groupName:string;
    subjectName:string;
    childLen:number;
    tasksLen:number;
}

const CreateLessonWidget:react.FC<IECreateLessonWidget> = (props) => {
    return <div className="create-widget__container">
        <div className="create-widget__main-flex">
            <div className="create-widget__heading">
                {props.groupName}
            </div>
            <div className="create-widget__subject-type">
                {props.subjectName}
            </div>
            <div className="children-length">
                Учеников:&nbsp;<span className="colorize">{props.childLen}</span>
            </div>
        </div>
        <div className="create-widget__add-flex">
            <div className="tasks-length">
                Заданий: <span className="colorize">{props.tasksLen}</span>
            </div>
        </div>
    </div>
}

function ParseData(data:GetTeacherClassesQuery){
    let {url} = useRouteMatch()
    let res = []
    for (let node of data.teacher?.subjectclasslocalSet?.edges!){
        res.push( <Link to={`${url}/${node?.node?.id}`}>
                    <CreateLessonWidget
            subjectName={node?.node?.name!}
            tasksLen={node?.node?.lessonsLen!}
            childLen={node?.node?.group.childrenLen!}
            groupName={node?.node?.group.name!}
        ></CreateLessonWidget>
        </Link>
)
    }
    return res;
}

const CreateLessonSelection:react.FC = (props) => {
    const {id} = useContext(ChildContext);
    const {data, loading} = useGetTeacherClassesQuery({variables: {id: id}})
    if (loading) return <div>loading...</div>
    console.log(data, "data", id)
    return <div className="create-selection__container">
                {ParseData(data!)}
        </div>
}

const CreateWorkLinks:react.FC<IECreateWorkLink> = (props) => {
    const {url} = useRouteMatch();
    console.log(props.link)
    let link = props.link.split("/")
    link.pop()
    let newlink = link.join("/")
    return <Switch>
        <Route path={`${url}/:subject_id`}>
            <TeacherWorkCreate link={
                newlink + "/my-classes"
                }></TeacherWorkCreate>
        </Route>
        <Route path={url}>
            <CreateLessonSelection></CreateLessonSelection>
        </Route>
    </Switch>
}

export const TeacherLobbyContentRouter:react.FC = () => {
    let content = <div>error</div>
    const {url} = useRouteMatch();
    const {setActiveName} = useContext(ChildContext);
    let {type} = useParams<IEParams>();
    switch (type) {
        case "my-classes": 
            content = <TeacherClasses></TeacherClasses>
            break
        case "create-work":
            content = <CreateWorkLinks link={url}></CreateWorkLinks>
            break
        case "check-works":
            content = <TeacherWorkCheck></TeacherWorkCheck>
            break
        case "works-archieve":
            content = <div>works archieve</div>
            break
    }
    setActiveName(type);
    return content;
}