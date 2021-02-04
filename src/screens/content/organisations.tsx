import react from "react"

import {OrgCard} from "../../uiKit/orgCard";

import "../css/org-list.css"

import {useQuery} from "@apollo/client";
import {getUserOrg} from "../../QUERIES/getOrg"

import {getToken} from "../../LocalStorageInteraction/getToken";

import {IEDataProcessing} from "./interfaces"

import {
    Route, Switch
} from "react-router-dom";

import {
    LobbyContentRouter
} from "./LobbyContentRouter";

import {useUserInfoQuery} from "../../generated/graphql";

function Processing(arrayProcessed:any, role:string) {
    let result = []
    let links = []
    for (const childProfile of arrayProcessed){
        result.push(<OrgCard
            subjects={childProfile.node.org.subjects}
            name={childProfile.node.org.name}
            childLen={childProfile.node.org.childrenLength}
            classesLen={childProfile.node.org.classesLength}
            role={role}
            id={childProfile.node.id}
        ></OrgCard>);
    }
    return result;
}

export const OrganisationList:react.FC = () =>{
    const {loading, error, data} = useUserInfoQuery({variables: {id: getToken()!}})
    if (loading) return <div>loading...</div>
    console.log(data)
    return <Switch>
        <Route path="/:id/:type/">
            <LobbyContentRouter></LobbyContentRouter>
        </Route>
        <Route path="/">
            <div className="centered">
                <div className="org-list__public">
                    <div className="heading">Мои организации</div>
                    <div className="org-list__container">
                        {Processing(data?.userInfo?.profile?.childSet.edges, "child")}
                        {Processing(data?.userInfo?.profile?.teacherSet.edges, "teacher")}
                    </div>
                </div>
            </div>
        </Route>

    </Switch>


}