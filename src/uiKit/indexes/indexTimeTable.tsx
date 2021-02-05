import React from 'react';
import ReactDOM from 'react-dom';
import {TimeCell,  TimeCol, TimeTable} from "../TimeTable";

function click(){
  console.log("походу работает")
}

// ReactDOM.render(
//   <TimeTable firstCol={3} cols={[
//     <TimeCol number={1} name="Вт" content={[
//       <TimeCell name="Алгебра" startTime="9:00" endTime="10:00" test={0}></TimeCell>,
//       <TimeCell name="Utjvt" startTime="9:00" endTime="10:00" test={1}></TimeCell>,
//       <TimeCell name="Алгdfgdfgебра" startTime="9:00" endTime="10:00" test={2}></TimeCell>,
//       <TimeCell name="Алгdfgdfgебра" startTime="9:00" endTime="10:00" test={3}></TimeCell>,
//     ]}>
      
//     </TimeCol>,
//         <TimeCol number={1} name="Gт" content={[
//           <TimeCell name="Алгебра" startTime="9:00" endTime="10:00" test={0}></TimeCell>,
//           <TimeCell name="Utjvt" startTime="9:00" endTime="12:00" test={1}></TimeCell>,
//           <TimeCell name="Алгdfgdfgебра" startTime="9:00" endTime="10:00" test={2}></TimeCell>,
//           <TimeCell name="Алгdfgdfgебра" startTime="9:00" endTime="10:00" test={3}></TimeCell>,
//         ]}>
          
//         </TimeCol>,
//             <TimeCol number={1} name="Dт" content={[
//               <TimeCell name="Алгебра" startTime="9:00" endTime="10:00" test={0}></TimeCell>,
//               <TimeCell name="Utjvt" startTime="9:00" endTime="10:00" test={1}></TimeCell>,
//               <TimeCell name="Алгdfgdfgебра" startTime="9:00" endTime="11:00" test={2}></TimeCell>,
//               <TimeCell name="Алгdfgdfgебра" startTime="9:00" endTime="10:00" test={3}></TimeCell>,
//             ]}>
              
//             </TimeCol>,
//                 <TimeCol number={1} name="Fт" content={[
//                   <TimeCell name="Алгебра" startTime="9:00" endTime="12:00" test={0}></TimeCell>,
//                   <TimeCell name="Utjvt" startTime="9:00" endTime="11:00" test={1}></TimeCell>,
//                   <TimeCell name="Алгdfgdfgебра" startTime="9:00" endTime="10:00" test={2}></TimeCell>,
//                   <TimeCell name="Алгdfgdfgебра" startTime="9:00" endTime="10:00" test={3}></TimeCell>,
//                 ]}>
                  
//                 </TimeCol>,

//   ]}>
//     </TimeTable>,
    

//   document.getElementById('root')
// );