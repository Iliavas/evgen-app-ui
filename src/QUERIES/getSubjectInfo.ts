import {gql} from "@apollo/client"

export const subjectInfoQuery = gql
`
query child($id:ID!){
    child(id:$id){
      name, pk
      groups{
        edges{
          node{
            name,
            classes{
              name, id
              teachersSet{
                name
              }
            }
          }
        }
      }
    }
}  
`