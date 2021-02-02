import react, {useContext} from "react"
import {ChildContext} from "./childContext";
import "../css/lesson-detail.css"

import {Editor} from "../../uiKit/editor";

import {MaterialCard} from "../../uiKit/materialCard";
import {TestCard} from "../../uiKit/testCard";

import {useParams} from "react-router-dom";

import {useQuery} from "@apollo/client";

import {lessonDetalsQuery} from "../../QUERIES/getLessonDetails"
import { IEGetParams } from "./interfaces";
import { TeacherClassCard } from "../../uiKit/teacherClassCard";

interface IEParams{
    id:string;
}


interface IEQuery{
    name:string,
    content:string,
    descr:string,
    typeLesson: {
        name:string,
        group:{
            name:string
        }
    }
    tests: {
        name:string,
        id:string,
        taskLen:number,
        deadline:string
    }[]
    materials: {
        name:string,
        data:string
    }[]
}

function parseMaterials(data:IEQuery){
    let res = []
    for (let material of data.materials){
        res.push(
            <NewMaterialCard
                name={material.data}
            ></NewMaterialCard>
        )
    }
    return res;
}



function parseTeacherTests(data:IEQuery){
}

interface IELessonDetail{
    data: IEQuery
}

const ChildLessonDetail:react.FC<IELessonDetail> = (props) => {
    const data = props.data;
    return <div className="lesson-details__container">
    <div className="lesson-details__heading">
        {data.typeLesson.name}, {data.typeLesson.group.name}, {data.name}, 27.09
        <Editor content={data!.content}></Editor>
        <div className="materials">
            <div className="lesson-details__heading">
                Материалы
            </div>
            <div className="materials__content">
                {parseMaterials(data)}
            </div>
        </div>
        <div className="tests">
            <div className="lesson-details__heading">Тесты</div>
            <div className="materials__content">
                {parseTests(data)}
            </div>
        </div>
    </div>
</div>
}

interface IEMaterialCard{
    name:string;
}

const NewMaterialCard:react.FC<IEMaterialCard> = (props) => {
    return <div className="teacher-material">
    <span className="teacher-material__text">
        {props.name}
    </span>   
</div>
}
interface IETestCard{
    name:string;
    questions:number;
}
const NewTestCard:react.FC<IETestCard> = (props) => {
    return <div className="teacher-test-card__container">
            <div className="test-card__heading">Тест.{props.name}</div>
            <div className="test-card__questions"> Вопросов:&nbsp;<span className="colorize"> {props.questions} </span></div>
        </div>
}

interface IEPlusButton{
    OnClick:Function;
}

const PlusButon:react.FC<IEPlusButton> = (props) => {
    return <div className="teacher-material teacher-material__add-button" onClick={props.OnClick()}>
            <span className="plus">+</span>
        </div>
}

function parseTests(data:IEQuery){
    let res = []
    for (let test of data.tests){
        res.push(
            <NewTestCard
                name={test.name}
                questions={test.taskLen}
            ></NewTestCard>
        );
    }
    return res;
}

const TeacherLessonDetail:react.FC<IELessonDetail> = (props) => {
    const data = props.data;
    return <div className="lesson-details__container">
    <div className="lesson-details__heading">
        {data.typeLesson.name}, {data.typeLesson.group.name}, {data.name}, 27.09
    </div>
    <div className="teacher-lesson-detail__container">
        <div className="teacher-lesson-detail__heading">
            <div className="teacher-lesson-detail__info">
                <div className="teacher-lesson-detail__class-name">
                    8.3 класс
                </div>
                <div className="teacher-lesson-detail__subject-name">
                    Английский язык
                </div>
            </div>

            <div className="teacher-lesson__times">
                <div className="deadline__date">
                    урок доступен с <span className="colorize">27.09 </span>
                    до <span className="colorize">27.10</span> 
                </div>
                <div className="deadline__time">
                    с <span className="colorize">11:00</span> до <span className="colorize">22:00</span>
                </div>
                <div className="change__time">
                    Изменить время
                </div>
            </div>
        </div>
        <div className="teacher-lesson__content">
            <div className="teacher-content__first-row">
                <div className="teacher-lesson__theme">
                    <div className="teacher-lesson-theme__heading">
                        Тема урока
                    </div>
                    <input type="text" placeholder="Введите тему урока" className="lesson-theme__input" value={data.name}/>
                </div>
                <div className="teacher-lesson__materials">
                    <div className="teacher-materials__heading">Добавьте материалы к уроку</div>
                    <div className="teacher-materials__content">
                        {parseMaterials(data)}
                        <div className="teacher-material teacher-material__add-button">
                         <span className="plus">+</span>   
                        </div>
                    </div>
                </div>
            </div>
            <div className="teacher-content__first-row second-row">
                <div className="teacher-lesson__descr">
                    <div className="teacher-lesson-theme__heading">
                        Описание урока
                    </div>
                    <textarea className="teacher-descr__input" placeholder="Описание урока">{data.content}</textarea>
                </div>
                <div className="teacher-lesson__tests">
                    <div className="teacher-materials__heading">Добавьте тесты к уроку</div>
                    <div className="teacher-tests__content">
                        {parseTests(data)}
                        <PlusButon OnClick={() => {}}/>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </div>

</div>
}

export const LessonDetails:react.FC = () => {
    const {createWorkLink} = useContext(ChildContext);
    const {id} = useParams<IEParams>();
    let {loading, data} = useQuery(lessonDetalsQuery, {variables:{id:id}})
    if (loading) return <div>loading...</div>;
    console.log(data);
    data = data.lessons as IEQuery;
    return <div>
        { createWorkLink == "" ? <ChildLessonDetail data={data}></ChildLessonDetail> : 
            <TeacherLessonDetail data={data}></TeacherLessonDetail>}
    </div> 
}