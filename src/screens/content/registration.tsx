import react from "react";

import "../css/registration.css";

import {DefaultButton} from "../../uiKit/Buttons";

import {DefaultInput} from "../../uiKit/Inputs";

import vkImg from "../svg/VkImage.svg";
import googleImg from "../svg/googleImg.svg";

import {Login_inputs} from "./login-inputs";
import {Registration_inputs} from "./registration-inputs";

import {checkToken} from "../../LocalStorageInteraction/checkToken"

import {
    Link, Switch, Route, useRouteMatch, useLocation, Redirect
} from "react-router-dom";

export const Registration:react.FC = () => {
    const {path, url} = useRouteMatch();
    const location = useLocation();
    console.log(location);
    const isSign = location.pathname.split("/").pop() == "Login";
    if (checkToken()) return <Redirect to=""></Redirect>
    return (
    <div className="centered">
        <div className="registration__container">
            <div className="heading">Добро пожаловать в EvgenApp</div>
            <div className="toggle__reg">
                <Link to="Login">                
                    <div className={"toggle-text " + (isSign ? "" : "disabled")}>Вход</div>
                </Link>
                <Link to="Registration">
                    <div className={"toggle-text " + (isSign ? "disabled": "")}>Регистрация</div>
                </Link>
            </div>
            <Switch>
                <Route path={`${url}/Login`}>
                    <Login_inputs></Login_inputs>
                </Route>
                <Route path={`${url}/Registration`}>
                    <Registration_inputs></Registration_inputs>
                </Route>
            </Switch>
            <div className="or-container">
                <div className="line"></div>
                <div className="or-content">или</div>
                <div className="line"></div>
            </div>
            <DefaultButton handleClick={()=>{}} class="reg-btn vk-btn">
                <div className="vk-button">
                    <img src={vkImg} alt="" className="vk-button__img"/>
                    <span className="vk-button__text">
                        <span>
                        Войти с помощью VK
                        </span>
                    </span>
                </div>
            </DefaultButton>
            <DefaultButton handleClick={()=>{}} class="reg-btn google-btn">
                <div className="vk-button">
                        <img src={googleImg} alt="" className="vk-button__img"/>
                        <span className="vk-button__text">
                            <span className="google-text-color">
                            Войти с помощью Google
                            </span>
                        </span>
                    </div>
            </DefaultButton>
        </div>
    </div>
    );
}