import React, { useState } from 'react';

import TodoButton from "./todoItems"

function List(){
    const [entryList, setEntryList] = useState([{id:1, entry:'da'}]);
    const [entry, setEntry ] = useState('');
    const [id, setId] = useState(0);

    return(
      <>
      <div>
        <input type='text' 
          name='entry'
          value={entry}
          onChange={e=>setEntry(e.target.value)}
        />
        <button onClick={
            ()=>{
              setEntryList(entryList=> [...entryList, {id:id, entry:entry}]);
              setId(id=>id+1);
            }
          }>add
        </button>
        {
          entryList.map( i => (
            <>
              <p>{i.entry}</p>
              <TodoButton id = {id} setEntryList = {setEntryList}/>
            </>
          ))
        }
      </div>
        
      </>
    );
  }

export default List;