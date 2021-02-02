import react, {useContext} from "react";

import {useParams} from "react-router-dom";

import {ChildContext} from "./childContext";

import {TeacherClasses} from "./teacherClasses";

interface IEParams{
    type:string;
}

export const TeacherLobbyContentRouter:react.FC = () => {
    let content = <div>error</div>
    const {setActiveName} = useContext(ChildContext);
    let {type} = useParams<IEParams>();
    switch (type) {
        case "my-classes": 
            content = <TeacherClasses></TeacherClasses>
            break
        case "create-work":
            content = <div>create work</div>
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