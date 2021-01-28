import react from "react"

import "../css/lobby.css"

export const ChildLobby:react.FC = () => {  
    return <div className="lobby__container">
        <div className="lobby__menu">
            <div className="lobby__heading">
                EvgenApp
            </div>
            <div className="lobby-menu__content">
                <div>Предметы</div>
                <div>Домашняя работа</div>
                <div>Оценки</div>
                <div>Доп. материал</div>
            </div>
            <div className="company">© Gladio. Dev</div>
        </div>
        <div className="lobby__content"></div>
    </div>
}