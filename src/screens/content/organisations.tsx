import react from "react"

import {OrgCard} from "../../uiKit/orgCard";

import "../css/org-list.css"

import {useQuery} from "@apollo/client";
import {getUserOrg} from "../../QUERIES/getOrg"

import {getToken} from "../../LocalStorageInteraction/getToken";

import {IEDataProcessing} from "./interfaces"

function childProcessing(arrayProcessed:IEDataProcessing[]) {
    console.log(arrayProcessed)
    let result = []
    for (const childProfile of arrayProcessed){
        result.push(<OrgCard
            subjects={childProfile.node.org.subjects}
            name={childProfile.node.org.name}
            childLen={childProfile.node.org.childrenLength}
            classesLen={childProfile.node.org.classesLength}
            role="child"
        ></OrgCard>)
    }
    return result;
}

export const OrganisationList:react.FC = () =>{
    const {loading, error, data} = useQuery(getUserOrg, {variables:{
        token:getToken()
    }});
    if (loading) return <div>loading...</div>
    console.log(data)
    return <div className="centered">
        <div className="org-list__public">
            <div className="heading">Мои организации</div>
            <div className="org-list__container">
                {childProcessing(data.userInfo.profile.childSet.edges)}
            </div>
        </div>
    </div>


}