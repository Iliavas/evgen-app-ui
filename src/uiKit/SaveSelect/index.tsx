import React, {useState} from 'react';
import "./saveSelect.module.css"

interface SelectConfig{
    handleChange:Function;
    el:Array<String>;
};
interface typeElInterface{
    text:Array<String>;
}
interface SaveSelectConfig{
    el:Array<String>;
}
function typeEl (props:typeElInterface){
    var finalArray = new Array<JSX.Element>();
    props.text.forEach(function(item){
        finalArray.push(<option>{item}</option>);
      });
    return(
        finalArray
    );
}
export const MySelect : React.FC<SelectConfig> = (props) => {
    return (
        <select className="mySelect" onChange={(event)=> props.handleChange(event)}>
            {typeEl({text:props.el})}
        </select>
    );
}
export const SaveSelect: React.FC<SaveSelectConfig> = (props) => {
    var [list, setList] = useState(new Array<any>());
    var [cmpList, setCmpList]  = useState(new Array<JSX.Element>())
    var [el, setEl] = useState(props.el)
    function handleClick(mlist:any, id:any){
        mlist.forEach((el:any, index:number) => {
            let cmList = cmpList;

            if(el.id == id.id){
                delete mlist[index]
                let ind = cmList.indexOf(el.button)
                delete cmList[ind]
            }
            setList(mlist)
            setCmpList(cmList)
          })
    }
    function OnChange(event:any){
        let ind = el.indexOf(event.target.value)  
        if(ind != 0){
            let svEl = el;
            let cmp = {
                button:<button id = {event.target.value} onClick={(event) => handleClick(list, event.target)}>{event.target.value}</button>, 
                id:event.target.value
        }
            delete svEl[ind]
            setEl(svEl)
            setList([...list, cmp])
            setCmpList([...cmpList, cmp.button ])
        }
    }
    return(
        <div>
            <div>
                {cmpList}
            </div>
            <MySelect el={el} handleChange={OnChange} ></MySelect>
        </div>
    );
}