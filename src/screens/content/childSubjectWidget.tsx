import react, {useContext} from "react";

import "../css/childSubjectWidget.css"

import {SubjectCard} from "../../uiKit/Cards";

import {
    useQuery
} from "@apollo/client";
import {
    Switch, Route, Link, useLocation, useRouteMatch
} from "react-router-dom";

import {subjectInfoQuery} from "../../QUERIES/getSubjectInfo"

import {ChildContext} from "./childContext";

import {SubjectDetail} from "./subjectDetail"

import {useChildSubjectsQuery} from "../../generated/graphql"

interface QueryData{
    node: {
        name:string
        classes: {
            name:string,
            id:string
            teachersSet: {
                name:string
            }[]
        }[]
    }
}

function parseData(data:any, location:string){
    console.log(data);
    let res = [];
    for (let elem of data){
        for (let subject of elem.node.classes) {
            let teacherNames = []
            for (let teacher of subject.teachersSet){
                teacherNames.push(teacher.name)
            }
            res.push(
                <Link to={`${location}/${subject.id}`} className="subject__link">
                    <SubjectCard
                        teacher={teacherNames.join(", ")}
                        subject={subject.name}
                        onClick = {() => {}}
                        class={elem.node.name}
                    ></SubjectCard>
                </Link>
);  
        }
    }
    return res;
}

export const ChildSubject:react.FC = (props) => {
    const location = useLocation();
    const {id} = useContext(ChildContext);
    const match = useRouteMatch();
    console.log(match.url)
    const {loading, data} = useChildSubjectsQuery({variables: {id:id}})
    if (loading) return <div>loading...</div>
    console.log(data?.child?.groups.edges);
    let res = parseData(data?.child?.groups.edges, match.url);
    return <Switch>
        <Route path={`${match.url}/:id`}>
            <SubjectDetail prevLink={match.url}></SubjectDetail>
        </Route>

        <Route path={`${location.pathname}`}>
            <div className="subjects__container">
                <div className="subjects__heading">Основные предметы</div>
                {res}
            </div>
        </Route>
    </Switch>             

}