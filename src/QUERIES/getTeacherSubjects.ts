import {gql} from "@apollo/client";

export const teacherSubjectQuery = gql
`
query getTeacherClasses($id:ID!){
    teacher(id:$id){
      subjectclasslocalSet{
        edges{
          node{
            id,
            name, lessonsLen, group{
              name, childrenLen
            }
            
          }
        }
      }
      
    }
}
`