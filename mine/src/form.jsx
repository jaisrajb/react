import React, { useState } from 'react'

function Form(){
    const [empList, setEmpList] = useState([{Id:1,Name:'jaisraj',Age:22},{Id:2,Name:'jaisraj',Age:22},{Id:3,Name:'jaisraj',Age:22}]),
          [emp, setEmp] = useState({Id:1,Name:'jaisraj',Age:22});


    return(
        <>
            <button>Add </button>
            <table>
                <thead>
                    <tr>
                        {
                            Object.keys(emp).map(i=>{
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
                    {empList.map(i=>{
                        return(
                            <tr>
                                <td>{i.Id}</td>
                                <td>{i.Name}</td>
                                <td>{i.Age}</td>
                                <td><BtnBlock id={i.Id}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

    
}
export default Form;

function BtnBlock({Id}){
    return(
        <>
            <button>
                View
            </button>

            <button>
                Edit
            </button>

            <button>
                Delete
            </button>
        </>
    )
}