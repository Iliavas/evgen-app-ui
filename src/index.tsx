import { from } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import {MySelect, SaveSelect} from './uiKit/Select';
import {Conformity, UnDropColumn} from "./uiKit/conformity";
import {TaskRow, NumRow} from "./uiKit/ChildTestDetail"
import {MyPagination} from "./uiKit/pagination"
import {GradeWidget} from "./uiKit/Grade"
import ReactPaginate from 'react-paginate';
import {DefaultInput} from './uiKit/Inputs'
import {DefaultButton} from "./uiKit/Buttons";
import {SubjectCard, TaskCard} from "./uiKit/Cards"
import ts from 'typescript';


function click(a:number){
  console.log("походу работает" ,{a})
}

// <div className="myDiv">
// <UnDropColumn answers={["спит","спать", "Петербург","бобра"]}></UnDropColumn>
// <Conformity answers={["Пошла","Наелся и", "Съел","Санкт"]}></Conformity>
// </div>,


{/* <NumRow num={6}>
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>
</NumRow> */}


{/* <SaveSelect el={["Выберите предмет","русский","математика","информатика","ты дебил"]}></SaveSelect>, */}
{/* <div>
<MyPagination handleClick={()=>click(1)} quantity={10}/>
</div>, */}
{/* <DefaultButton text="Войти" handleClick={()=>click(0)}></DefaultButton>, */}
{/* <SubjectCard date={new Date(2021,1,18)} subject="Математика" onClick={()=>click(1)} teacher="Рыскаль Ебланович" newTasks={5}></SubjectCard>, */}


ReactDOM.render(
  <TaskCard
    subject="Английский язык"
    theme="Повторение твоей мамы"
    teacher="Рыскаль ебланович"
    period={new Date()}
    questions={1}
    minuts={42}
    task={()=>click(0)}
  ></TaskCard>,
  document.getElementById('root')
);