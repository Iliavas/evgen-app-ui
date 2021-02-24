import react from "react";
import "./css/audio.css"

interface IEPlayer{
    url:string;
}

const Player:react.FC<IEPlayer> = (props) => {
    return <audio src={props.url} controls className="audio__container"></audio>
}

export default Player