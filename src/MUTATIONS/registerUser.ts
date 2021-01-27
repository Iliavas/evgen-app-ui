import {
    gql
} from "@apollo/client"

export const register = gql
`
mutation($username:String!, $password:String!){
    registerUser(input:{username:$username, password:$password}){
      ok
    }
  }
`