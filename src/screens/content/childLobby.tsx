import react, {useState} from "react"

import "../css/lobby.css";

import {
    useParams, useRouteMatch, Link, Switch, Route, useLocation, Redirect
} from "react-router-dom"
import { Divider } from "@material-ui/core";

import {
    ChildSubject
} from "./childSubjectWidget"

import {
    IEGetParams,
    IEMenuItem
} from "./interfaces"

import {ChildContext} from "./childContext";
import {ChildLobbyContentRouter} from "./childLobbyContentRouter"

interface IELobby{
    items: Map<string, IEMenuItem>,
    ContentRouter: react.ReactNode,
    defaultPath:string
}

export const LobbyContentRouter:react.FC = () => {
    const {type} = useParams<IEGetParams>();
    switch (type) {
        case "child":
            let items : Map<string, IEMenuItem> = new Map([
                ["subjects", {name: "Предметы", classes: [""], link:"", 
                    routeWidget:<div></div>}],
                ["homework", {name: "Домашняя работа", classes: [""], link:"",
                    routeWidget: <div>mother</div>}],
                ["marks", {name: "Оценки", classes: [], link:"",
                    routeWidget: <div>shit</div>}],
                ["add-material", {name: "Доп. материал", classes: [], link:"",
                    routeWidget: <div>yeah</div>}]
            ]);

            return <Lobby defaultPath="subjects" items={items} ContentRouter={
                <ChildLobbyContentRouter></ChildLobbyContentRouter>}></Lobby>
        case "teacher":
            return <div>teacher</div>
    }
    return <div>error</div>
}

export const Lobby:react.FC<IELobby> = (props) => {
    const [activeName, setActiveName] = useState("subjects")
    const {url} = useRouteMatch();
    const {id, type, action} = useParams<IEGetParams>();
    try{
        props.items.get(activeName)!.classes.push("active")
    } catch{
    }
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

    return <ChildContext.Provider value={{id, setActiveName}}>
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