import {gql} from "@apollo/client"

export const lessonInfoQuery = gql 
`
query subject($id:ID!){
    subjectClass(id:$id){
      name, group{
        name
      }
      lessonSet{
        edges{
          node{
            name, descr, testsLen, materialsLen, timeLesson, id
          }
        }
      }
    }
}
`