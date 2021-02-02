import react, {useState} from "react"

import "../css/lobby.css";

import {
    useParams, useRouteMatch, Link, Switch, Route, Redirect
} from "react-router-dom"


import {
    IEGetParams,
    IEMenuItem
} from "./interfaces"

import {ChildContext} from "./childContext";
import {ChildLobbyContentRouter} from "./childLobbyContentRouter"
import {TeacherLobbyContentRouter} from "./teacherLobbyContentRouter";

interface IELobby{
    items: Map<string, IEMenuItem>,
    ContentRouter: react.ReactNode,
    defaultPath:string,
    createWork:string
}

export const LobbyContentRouter:react.FC = () => {
    let items: Map<string, IEMenuItem>;
    const {url} = useRouteMatch()
    const {type} = useParams<IEGetParams>();
    switch (type) {
        case "child":
            items = new Map([
                ["subjects", {name: "Предметы"}],
                ["homework", {name: "Домашняя работа"}],
                ["marks", {name: "Оценки"}],
                ["add-material", {name: "Доп. материал"}]
            ]);

            return <Lobby createWork="" defaultPath="subjects" items={items} ContentRouter={
                <ChildLobbyContentRouter></ChildLobbyContentRouter>}></Lobby>
        case "teacher":
            items = new Map([
                ["my-classes", {name: "Мои классы"}],
                ["create-work", {name:"Создать работу"}],
                ["check-works", {name:"Проверить работы"}],
                ["works-archieve", {name: "Архив работ"}]
            ])
            return <Lobby createWork={`${url}/create-work`} defaultPath="my-classes" items={items} ContentRouter={
                <TeacherLobbyContentRouter></TeacherLobbyContentRouter>
            }></Lobby>
    }
    return <div>error</div>
}

export const Lobby:react.FC<IELobby> = (props) => {
    const [activeName, setActiveName] = useState(props.defaultPath)
    const {url} = useRouteMatch();
    const {id, type, action} = useParams<IEGetParams>();

    let widgets: react.ReactNode[] = [];
    for (let item of props.items){
        widgets.push(
            <Link to={`${url}/${item[0]}`}>
                <div className={`${activeName == item[0] ? "active" : ""}`} key={item[1].name}>
                    {item[1].name}
                </div>
            </Link>
        );
    }

    return <ChildContext.Provider value={{id, setActiveName, createWorkLink:props.createWork}}>
        <div className="lobby__container">
        <div className="lobby__menu">
            <div className="lobby__heading">
                EvgenApp
            </div>
            <div className="lobby-menu__content">
                {widgets}
            </div>
            <div className="company">© Gladio. Dev</div>
        </div>
        <div className="lobby__content">
            <Switch>
                <Route path={`${url}/:type`}>
                    {props.ContentRouter}
                </Route>
                <Route path={`${url}/`}>
                    <Redirect to={`${url}/${props.defaultPath}`}></Redirect>
                </Route>
            </Switch>
        </div>
    </div>
    </ChildContext.Provider>
     
}