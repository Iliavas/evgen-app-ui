import {gql} from "@apollo/client";

export const getUserOrg = gql`
query allOrgs($token:String!){
	userInfo(token:$token){
    profile{
    childSet{
      edges{
        node{
          id, pk
          org{
            name,
            classesLength,
            childrenLength, 
            subjects
          }
        }
      }
    }
    teacherSet{
      edges{
        node{
          id, pk
          org{
            name,
            classesLength,
            childrenLength, 
            subjects
          }
        }
      }
    }
    }
  }
}
`