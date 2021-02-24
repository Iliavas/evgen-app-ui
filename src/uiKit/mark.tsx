import react, {useContext, useState} from "react";

import "./css/mark.css"

const MarkContext = react.createContext({
    setActive: (index:number) => {} 
})

interface IEMark{
    index:number;
    isActive:boolean;
}

const Mark:react.FC<IEMark> = (props) => {
    const {setActive} = useContext(MarkContext);
    return <div className={"mark__container " + (props.isActive ? "mark__container-active":"")} 
        onClick={() => {setActive(props.index)}}>{props.index}</div>
}

interface IEMarkWidget{
    len:number;
    onChange:Function;
    active?:number;
}

export const MarkWidget:react.FC<IEMarkWidget> = (props) => {
    const [active, setActive] = useState(([...Array(props.len).keys()]).map((e) => {return {state: e == props.active, idx:e};}))
    console.log(active)
    props.onChange(active.filter((e) => {return e.state == true}))
    return <MarkContext.Provider value={{setActive:(index:number) => {
            setActive(active.map((e) => {return {state: e.idx == index, idx:e.idx}}))
        }}}> 
            <div className="mark-widget__container">
                {active.map((e) => {return <Mark index={e.idx} isActive={e.state}></Mark>})}
            </div>
        </MarkContext.Provider>
}