import react from "react"

import "../css/lesson-detail.css"

import {Editor} from "../../uiKit/editor";

import {MaterialCard} from "../../uiKit/materialCard";
import {TestCard} from "../../uiKit/testCard";

import {useParams} from "react-router-dom";

import {useQuery} from "@apollo/client";

import {lessonDetalsQuery} from "../../QUERIES/getLessonDetails"
import { IEGetParams } from "./interfaces";

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
        link:string
    }[]
}

function parseMaterials(data:IEQuery){
    let res = []
    for (let material of data.materials){
        res.push(
            <MaterialCard
                link={material.link}
                name={material.name}
            ></MaterialCard>
        )
    }
    return res;
}

function parseTests(data:IEQuery){
    let res = []
    for (let test of data.tests){
        res.push(
            <TestCard
                deadline={new Date(test.deadline)}
                name={test.name}
                questions={test.taskLen}
            ></TestCard>
        );
    }
    return res;
}

export const LessonDetails:react.FC = () => {
    const {id} = useParams<IEParams>();
    let {loading, data} = useQuery(lessonDetalsQuery, {variables:{id:id}})
    if (loading) return <div>loading...</div>;
    console.log(data);
    data = data.lessons as IEQuery;
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