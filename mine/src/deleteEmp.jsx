import React from 'react'

function DeleteEmp(){

let arr=JSON.parse(localStorage.getItem('empList'));
function deletee(){
    
}
    return(
        <>
        ID:<input
        type='text'/>
        
        <button onClick={}>
            Delete
        </button>
        </>
    );
}


function Child() {
    let { id } = useParams();
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }


export default DeleteEmp;