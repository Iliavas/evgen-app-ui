import {gql} from "@apollo/client";

export const getToken = gql
`mutation($username:String!, $password:String!){
    tokenAuth(username:$username, password:$password){
      token
    }
}
`