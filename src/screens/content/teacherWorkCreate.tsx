import react from "react";

import {useCreateLessonMutation} from "../../generated/graphql"


import {useHistory, useParams} from "react-router-dom";

interface IETeacherWorkCreate{
    link:string;
}

interface IEParams{
    id:string;
}

export const TeacherWorkCreate:react.FC<IETeacherWorkCreate> = (props) => {
    
    const history = useHistory()
    const {id} = useParams<IEParams>()
    const [createLesson] = useCreateLessonMutation({variables: {
        subjectId: id
    }, onCompleted: (data) => {
        history.push(`${props.link}/${id}/${data.createLesson?.lesson?.id}`)
    }});
    createLesson();
    return <div></div>

}