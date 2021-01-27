import React from "react";
import { DefaultButton } from "../../uiKit/Buttons";
import { DefaultInput } from "../../uiKit/Inputs";

import "../css/inputs.css"

import {writeToken} from "../../LocalStorageInteraction/wirteToken"

import {useMutation} from "@apollo/client";

import {getToken} from "../../MUTATIONS/getToken"

import {IEvent} from "./interfaces";


export const Login_inputs:React.FC = () =>
{
    let name:string, password:string;

    const [setToken] = useMutation(getToken, {onCompleted:(data) => {
        writeToken(data.tokenAuth.token)}})
    return <div className="inputs_flex">
        <DefaultInput handleChange={(e:IEvent) => {
            name = e.target.value;
        }} class="reg-input" placeHolder="E-mail"></DefaultInput>
        <DefaultInput handleChange={(e:IEvent) => {
            password = e.target.value;
        }} class="reg-input" placeHolder="Password"></DefaultInput>
        <div className="password-refresh">Восстановить пароль</div>
        <DefaultButton handleClick={()=>{
            setToken({variables:{username:name, password:password}})
        }} class="reg-btn">
            Войти
        </DefaultButton>
    </div>
}