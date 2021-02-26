import react from "react";

import "./css/lessonWiget.css"


interface IELessonWidget{
    theme:string,
    descr:string,
    date:string,
    materialsLen:number,
    testsLen:number,
}

export const LessonWidget:react.FC<IELessonWidget> = (props) => {
    let lesson_date = new Date(props.date)
    console.log(lesson_date, "date")
    return <div className="lesson-widget__container">
        <div className="lesson-widget-content">
            <div className="lesson-widget__cred">
                <div className="lesson-widget__heading">{props.theme}</div>
                <div className="lesson-widget__descr">{props.descr}</div>
                <div className="date-of-lesson">Дата проведения:
                    <span className="colorized">{` ${lesson_date.getMonth()+1}.${lesson_date.getDay()}`}</span></div>
            </div>
            <div className="lesson-widget__materials">
                <div className="materials__info"> 
                    <div>
                        Материалов к уроку: <span className="colorized">{props.materialsLen}</span>
                    </div>
                    <div className="lesson-widget__tests-info">
                        Тестов: <span className="colorized">{props.testsLen}</span>
                    </div>
                    <div className="deadline">
                    </div>
                </div>
            </div>
            <div className="completed-results">
                <div className="materials-viewed">
                </div>
                <div className="materials-viewed test__compl">
                </div>
                <div className="materials-viewed time-to-deadline">
                </div>
            </div>
        </div>
    </div>
}