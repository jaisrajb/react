import React from 'react';
import Tablehead from './table-head.jsx';
import Tablebody from './table-body.jsx';
const header={
    id:"id",
    name:"name",
    department:"department",
    salary:"salary",
}
const user=[
    {
        id:1,
    name:"jais",
    department:"department",
    salary:12, 
    },
    {
        id:2,
    name:"jais1",
    department:"department",
    salary:12, 
    },
    {
        id:3,
    name:"jais2",
    department:"department",
    salary:12, 
    },
    {
        id:4,
    name:"jais3",
    department:"department",
    salary:12, 
    },

];
function Table() {
    return (
        <>
        <table>
   <Tablehead header={header}/> 
   <Tablebody user={user}/>
   </table>

   </>
   )
  }

  export default Table;