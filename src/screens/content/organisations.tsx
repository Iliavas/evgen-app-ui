import react from "react"

import {OrgCard} from "../../uiKit/orgCard";

import "../css/org-list.css"

export const OrganisationList:react.FC = () =>{
    return <div className="centered">
        <div className="org-list__public">
            <div className="heading">Мои организации</div>
            <div className="org-list__container">
                <OrgCard></OrgCard>
                <OrgCard></OrgCard>
                <OrgCard></OrgCard>
            </div>
        </div>
    </div>


}