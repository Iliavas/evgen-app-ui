import react, {useContext} from "react";

import {ChildContext} from "./childContext";
import {TeacherClassCard} from "../../uiKit/teacherClassCard";

import "../css/teacher-classes.css"

import {teacherSubjectQuery} from "../../QUERIES/getTeacherSubjects";
import {useQuery} from "@apollo/client";

import {Switch, Route, Link, useRouteMatch} from "react-router-dom"
import {SubjectDetail} from "./subjectDetail";

interface IETeacherClass{
    node: {
        name:string;
        lessonsLen:number;
        id:string;
        group: {
            name:string;
            childrenLen:number;
        }
    }
}

function parseData(data:IETeacherClass[], url:string){
    let res = []
    for (let node of data){
        res.push(
            <Link to={`${url}/${node.node.id}`}>
                <TeacherClassCard
                    name={node.node.name}
                    childrenLen={node.node.group.childrenLen}
                    lessonsLen={node.node.lessonsLen}
                    groupName={node.node.group.name}
                ></TeacherClassCard>
            </Link>

        )
    }
    return res;
}


export const TeacherClasses:react.FC = () => {
    const {url} = useRouteMatch()
    const {id} = useContext(ChildContext)
    let {loading, data} = useQuery(teacherSubjectQuery, {variables: {id:id}})
    if (loading) return <div>loading...</div>
    console.log(data);
    data = data.teacher.subjectclasslocalSet.edges as IETeacherClass[];
    const res = parseData(data, url);
    return <div className="teacher-classes__content">
        <Switch>
            <Route path={`${url}/:id`}>
                <SubjectDetail></SubjectDetail>
            </Route>
            <Route path={`${url}`}>
                <div className="teacher-classes__heading">Ваши классы</div>
                {res}
            </Route>
        </Switch>
        
    </div>
}