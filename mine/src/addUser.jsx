import React, { useState } from 'react'

function AddBtn({add, id}){
    const [name, setName] = useState(""),
          [age, setAge] = useState(0);



         
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
        setAge(e.target.value)
    }}
    />
    

    <button 
        onClick = {() => {
            const obj = {id:id, name:name, age:age};
            add(obj);
        }}
    >
        Submit
    </button>
    </>
)


        }
export default AddBtn;
