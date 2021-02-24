import react, { useState } from "react";
import AudioWriter from "../LocalStorageInteraction/audioRec";
import "./css/audioRecButton.css"
import {ReactMic} from "@cleandersonlobo/react-mic";
import mic from "../images/mic.svg";
import LZString from "lz-string";

export const AudioRecButton= (props) => {
    const [active, setActive] = useState(false);
    const [data, setData] = useState("");
    //const writer = new AudioWriter();
    //writer.write(5)
    return <div class="button-container">
            <ReactMic
            record={active}
            onStop={(e)=>{
                console.log(e)
                e.blob.stream().getReader().read().then((e) => {
                    console.log(e.value)
                    setData(e.value.toString());
                    console.log(LZString.compress(e.value.toString()))
                    props.onChange(LZString.compress(e.value.toString()))
                })
                }}
            ></ReactMic>
            <button className={
            "audio-rec-button__container " + (active ? "audio-rec-button__active" : "")
            } onClick={() => {
                if (active) {
                }
                else{
                }
                setActive(!active)
                }}>
            <img src={mic} alt="" className="audio-rec__image"/>
            {active ? "Остановить запись" : "Начать запись"}
            
        </button>

    </div> 

}
