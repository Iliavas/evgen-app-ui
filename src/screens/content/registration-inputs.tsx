import React from "react"
import { DefaultButton } from "../../uiKit/Buttons"
import { DefaultInput } from "../../uiKit/Inputs"

import "../css/inputs.css"

export const Registration_inputs:React.FC = () =>{
    return <div className="inputs_flex">
        <DefaultInput handleChange={() => {}} class="reg-input" placeHolder="ФИО"></DefaultInput>
        <DefaultInput handleChange={() => {}} class="reg-input" placeHolder="E-mail"></DefaultInput>
        <DefaultInput handleChange={() => {}} class="reg-input" placeHolder="Password"></DefaultInput>
        <DefaultButton handleClick={()=>{}} class="reg-btn">
            Зарегистрироваться
        </DefaultButton>
    </div>
}