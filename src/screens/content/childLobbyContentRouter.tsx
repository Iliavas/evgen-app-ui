import react, {useContext} from "react";

import {ChildContext} from "./childContext";

import {useParams} from "react-router-dom";

import {ChildSubject} from "./childSubjectWidget";

interface IEParams{
    type:string
}


export const ChildLobbyContentRouter:react.FC = () => {
    const {setActiveName} = useContext(ChildContext);
    const {type} = useParams<IEParams>();
    let content = <div></div>;
    switch (type) {
        case "subjects":
            content = <ChildSubject></ChildSubject>
            setActiveName("subjects")
            break
        case "homework":
            content = <div>homework</div>
            setActiveName("homework")
            break
        case "marks":
            content = <div>marks</div>
            setActiveName("marks")
            break
        case "add-material":
            content = <div>add material</div>
            setActiveName("add-material")
    }
    console.log("a")
    return content;
}