import React, { useState } from 'react'

function EditBtn({add, id}){
    const [name, setName] = useState(""),
        [age, setAge] = useState(0);

let arr = JSON.parse(localStorage.getItem('empList'));

function fUser(id){
    return(
        arr.filter(id=>id == emp.id)
    )}
         
return(
    <>
    NAME<input type='text'
    name='Name'
    value={name}
    onChange={(e) => {
        setName(e.target.value)
        
    }}
    />


    AGE<input type='text'
    name='Age'
    value={age}
    onChange={(e)=>{
        setAge(fUser(id,e.target.value))
    }}
    />
    

    <button 
        onClick = {() => {
            const obj = {id = emp.id, name, age};
            add(obj);
        }}
    >
        Update
    </button>
    </>
)


        }
export default EditBtn;
