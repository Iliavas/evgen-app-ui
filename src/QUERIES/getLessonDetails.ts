import {gql} from "@apollo/client";

export const lessonDetalsQuery = gql
`
query q($id:ID!) {
    lessons(id:$id){
      name, content, descr,
      typeLesson{
        name,
        group{
          name
        }
      }
      tests{
        name, id, taskLen, deadline
      },
      materials{
        name, link
      }
    }
}
`