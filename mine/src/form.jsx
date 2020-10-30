import React, { useState, useEffect } from 'react'
import AddBtn from './addUser'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  

function Form(){
    let [empList, setEmpList] = useState([]),
          [emp, setEmp] = useState(),
          [id, setId] = useState(1);
    const headers = ["Id", "Name", "Age"];

    if (localStorage) {
        empList = JSON.parse(localStorage.getItem('empList'));
    }


// useEffect(()=>{
    
//     localStorage.setItem('emp' ,JSON.stringify(emp));
// }, [empList, emp]);

function addEmp(emp){
    setEmpList([...empList, emp]);
    localStorage.setItem('empList' ,JSON.stringify(empList));
    setId(id+1);
}

function deleteEmp(id){
    let a=localStorage.getItem('empList',JSON.parse(empList));
    setEmpList(empList => empList.filter(emp =>(emp.id !== id)));
}

function editEmp(emp, i){
    empList[i] = emp;
    setEmpList(empList);
}

    return(
        <>

<Router>
    <Link to="/add">Add Employee</Link>
    
    <Switch>
            <Route path="/addemployee">
                    <AddBtn/>
            </Route>
            
            <Route path="/editemployee">
                    <EditBtn/>
            </Route>
                
            <Route path="/deleteemployee">
                    <DeleteEmp/>
            </Route>

            <Route path="/deletemployee/:id">
                    <DeleteEmp/>
            </Route>
                
            <Route path="/viewemployee">
                    <ViewBtn/>
            </Route>
    </Switch>

</Router>



           <AddBtn add = {addEmp} id = {id} />            
           <table>
                <thead>
                    <tr>
                        {
                            headers.map(i=>{
                                    return(
                                        <th>
                                            {i}
                                        </th>
                                    )
                                }
                            )
                        }
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {empList.map((v,i)=>{
                        return(
                            <tr>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.age}</td>
                                <td><BtnBlock id={v.id} deleteEmp = {deleteEmp} editEmp = {editEmp} i={i}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

    
}
export default Form;

function BtnBlock({id,deleteEmp, editEmp,i}){
    return(
        <>
            <button>
                View
            </button>

            <button onClick={()=>editEmp(i)}>
                Edit
            </button>

            <button onClick={()=>deleteEmp(id)}>
                Delete
            </button>
        </>
    )
}