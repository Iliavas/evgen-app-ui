import react, {useContext} from "react";

import {useParams} from "react-router-dom";

import {ChildContext} from "./childContext";

import {TeacherClasses} from "./teacherClasses";

import {TeacherWorkCreate} from "./teacherWorkCreate";

import {Switch, Route, useRouteMatch} from "react-router-dom";

interface IEParams{
    type:string;
}

interface IECreateWorkLink{
    link:string;
}

const CreateWorkLinks:react.FC<IECreateWorkLink> = (props) => {
    return <Switch>
        <Route path="/:id">
            <TeacherWorkCreate link={props.link}></TeacherWorkCreate>
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
            content = <div>check works</div>
            break
        case "works-archieve":
            content = <div>works archieve</div>
            break
    }
    setActiveName(type);
    return content;
}