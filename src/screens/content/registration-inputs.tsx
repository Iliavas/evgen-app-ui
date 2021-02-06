import React from "react"
import { DefaultButton } from "../../uiKit/Buttons"
import { DefaultInput } from "../../uiKit/Inputs"

import "../css/inputs.css"

import {useMutation} from "@apollo/client";
import {register} from "../../MUTATIONS/registerUser"

import {IEvent} from "./interfaces"

import {useHistory} from "react-router-dom";


export const Registration_inputs:React.FC = () => {
    const history = useHistory();
    const [registerUser, {data}] = useMutation(register, {onCompleted: 
        (data) => {
            console.log(data);
        } });
    let name_input:string, password_input:string;
    return <div className="inputs_flex">
        <DefaultInput handleChange={(e:IEvent) => {
            name_input = e.target.value;
        }} 
        class="reg-input" placeHolder="ФИО"></DefaultInput>
        <DefaultInput handleChange={(e:IEvent) => {
        }} class="reg-input" placeHolder="E-mail"></DefaultInput>
        <DefaultInput handleChange={(e:IEvent) => {
            password_input = e.target.value;
        }} class="reg-input" placeHolder="Password"></DefaultInput>
        
        
        <DefaultButton handleClick={()=>{
            registerUser({variables:{username:name_input, 
                password:password_input}});
            history.push("/enter-user/Login")
        }} class="reg-btn">
            Зарегистрироваться
        </DefaultButton>
    </div>
}