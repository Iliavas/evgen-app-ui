import React from 'react';
import "./gradeSubjectCard.module.css"


interface GradeSubject{
    subject:string;
    grades:Array<any>
}

export const GradeSubjectCard : React.FC<GradeSubject> = (props) => {
    let classNames = ["grayGrade","grayGrade","grayGrade","purpleGrade","purpleGrade"]
    
    let grades = new Array()
    props.grades.forEach((el:any) => {
        grades.push(<span className={classNames[el-1]}>{"  "+ el +"   "}</span>)
      })

    return (
        <div className="SbCard">
            <p className="sbp">
                <span className="SubjectText">{props.subject}</span><br/>
                {grades}
            </p>
        </div>
    );
}