import react, {useState, useContext} from "react";

import "./css/buttonGroup.css"

const ButtonContext = react.createContext({
    setActive:(name:string) => {},
    underName:""
})


interface IEButtonGroup{
    onChange:Function;
    group:string[];
    button_underName:string;
    active?:string;
}

interface IEButtonButtonGroup{
    active:boolean;
    name:string;
}

const ButtonButtonGroup:react.FC<IEButtonButtonGroup> = (props) => {
    const {setActive, underName} = useContext(ButtonContext);
    return <div className="button-button__container">
        <button className={"button-button__button " + (props.active ? "button-button__active" : "")} onClick={() => {
            setActive(props.name)
        }}>{props.name}</button>
        {props.active ?
        <div className="button-button__active-label">
            {underName}
        </div> :
        <div></div>
        }
    </div> 
}

export const ButtonGroup:react.FC<IEButtonGroup> = (props) => {
    const [active, setActive] = useState(props.group.map((e) => {return {active:props.active == e, name:e}})) 
    return <ButtonContext.Provider value={{
        setActive: (name:string) => {
            props.onChange(name)
            setActive(
                active.map(
                    (e) => {
                        return {
                            name: e.name,
                            active: e.name == name
                        }
                    }
                )
            );
        },
        underName: props.button_underName
    }}>
        <div className="button-group__container">
            {active.map((e) => {
                return <ButtonButtonGroup active={e.active} name={e.name}/>
            })}
        </div>

    </ButtonContext.Provider> 
}