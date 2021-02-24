import react, { useState } from "react";

import {useCreateLessonMutation} from "../../generated/graphql"


import {useHistory, useParams} from "react-router-dom";

interface IETeacherWorkCreate{
    link:string;
}

interface IEParams{
    subject_id:string;
}

export const TeacherWorkCreate:react.FC<IETeacherWorkCreate> = (props) => {
    
    const history = useHistory()
    const {subject_id} = useParams<IEParams>()
    const [flag, setFlag] = useState(false);
    console.log(props.link, subject_id)
    const [createLesson] = useCreateLessonMutation({variables: {
        subjectId: subject_id
    }, onCompleted: (data) => {
        history.push(`${props.link}/${subject_id}/${data.createLesson?.lesson?.id}`)
    }});
    if (!flag) {
        setFlag(true)
        createLesson();

    }
    return <div></div>

}