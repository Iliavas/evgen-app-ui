import React from "react";
import { DefaultButton } from "../../uiKit/Buttons";
import { DefaultInput } from "../../uiKit/Inputs";

import "../css/inputs.css"

export const Login_inputs:React.FC = () =>
{
    return <div className="inputs_flex">
        <DefaultInput handleChange={() => {}} class="reg-input" placeHolder="E-mail"></DefaultInput>
        <DefaultInput handleChange={() => {}} class="reg-input" placeHolder="Password"></DefaultInput>
        <div className="password-refresh">Восстановить пароль</div>
        <DefaultButton handleClick={()=>{}} class="reg-btn">
            Войти
        </DefaultButton>
    </div>
}