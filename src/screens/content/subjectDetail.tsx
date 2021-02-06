import react, {useContext} from "react";

import {LessonWidget} from "../../uiKit/lessonWidget";

import "../css/subject-detail.css"

import {useQuery} from "@apollo/client";

import {lessonInfoQuery} from "../../QUERIES/getLessonInfo"

import {ChildContext} from "./childContext";
import {
    useParams, Switch, Route, useRouteMatch, Link
} from "react-router-dom";
import {LessonDetails} from "./lessonDetails";
import { create } from "domain";


interface IEParams{
    id:string;
}

interface IESubjectDetail{
    isTeacher?:boolean;
}

interface IECreationButton{
    link:string;
    subject:string;
}

interface QueryData{
    node: {
        name:string,
        descr:string,
        testsLen:number,
        materialsLen:number,
        timeLesson:string,
        id:string
    }
}

function parseQuery(data:QueryData[], path:string){
    console.log(data, "data")
    let res = []
    for (let node of data){
        res.push(
            <Link to={`${path}/${node.node.id}`}>
                <LessonWidget
                    theme={node.node.name}
                    date={node.node.timeLesson}
                    descr={node.node.descr}
                    materialsLen={node.node.materialsLen}
                    testsLen={node.node.testsLen}
                ></LessonWidget>
            </Link>

        )
    }
    return res;
}

const CreateButton:react.FC<IECreationButton> = (props) => {
    return <Link to={`${props.link}/${props.subject}`}>
        <div className="create-button__container">
            Создать
        </div>
    </Link>

}

export const SubjectDetail:react.FC<IESubjectDetail> = () => {
    const {createWorkLink} = useContext(ChildContext)
    const {url} = useRouteMatch()
    const {id} = useParams<IEParams>()
    const {loading, data} = useQuery(lessonInfoQuery, {variables:{id:id}});
    if (loading) return <div>loading..</div>
    console.log(data)
    let res = parseQuery(data.subjectClass.lessonSet.edges, url)
    return <Switch>
        <Route path={`${url}/:id`}>
            <LessonDetails></LessonDetails>
        </Route>
        <Route path={url}>
            <div className="subject-detail__container">
                <div className="subject-detail__heading">
                    <p>
                        {`${data.subjectClass.name}, ${data.subjectClass.group.name}`}
                    </p>
                    {
                    createWorkLink != "" ? <CreateButton link={createWorkLink} subject={id}></CreateButton> : <div></div>
                    }
                </div>
                {res}
            </div>
        </Route>
    </Switch> 

} 