import react, { useContext, useState } from "react";

import "./css/task-type.css"

const TaskTypeContext = react.createContext({
    setActive: (name:string) => {}
})

interface TaskTypeWidget{
    types: {
        name:string;
        id:string;
    }[];
    onChange:Function;
    activeId:string;
}

interface IETaskType{
    name:string;
    id:string;
    isActive:boolean;
}

const TaskType:react.FC<IETaskType> = (props) => {
    const {setActive} = useContext(TaskTypeContext);
    return <div 
                className={"task-type__container " + 
                    (props.isActive ? "task-type__container-active":"")}
                onClick={() => {
                    setActive(props.id);
                    
                }}>
        {props.name}
    </div>
}

export const TaskTypeWidget:react.FC<TaskTypeWidget> = (props) => {
    const [active, setActive] = useState(props.types.map((e) => {
        return {
            name: e.name,
            id: e.id,
            state: e.id == props.activeId
        }
    }))
    props.onChange(
        active.filter((e) => {return e.state == true})[0].id
    )
    return <TaskTypeContext.Provider value={{setActive:(name:string) => {
        setActive(active.map((e) => {return {
            name: e.name,
            id: e.id,
            state: e.id == name
        }}))
    }}}>
        <div className="task-type-widget__container">
            {active.map((e) => {
                return <TaskType id={e.id} name={e.name} isActive={e.state}></TaskType>
            })}
        </div>

    </TaskTypeContext.Provider>
}