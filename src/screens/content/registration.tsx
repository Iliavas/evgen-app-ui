import react from "react";

import "../css/registration.css";

import {DefaultButton} from "../../uiKit/Buttons";

import {DefaultInput} from "../../uiKit/Inputs";

import vkImg from "../svg/VkImage.svg";
import googleImg from "../svg/googleImg.svg";

export const Registration:react.FC = () => {
    return (
    <div className="centered">
        <div className="registration__container">
            <div className="heading">Добро пожаловать в EvgenApp</div>
            <div className="toggle__reg">
                <div className="toggle-text">Вход</div>
                <div className="toggle-text">Регистрация</div>
            </div>
            <DefaultInput handleChange={() => {}} class="reg-input" placeHolder="E-mail"></DefaultInput>
            <DefaultInput handleChange={() => {}} class="reg-input" placeHolder="Password"></DefaultInput>
            <div className="password-refresh">Восстановить пароль</div>
            <DefaultButton handleClick={()=>{}} class="reg-btn">
                Войти
            </DefaultButton>
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