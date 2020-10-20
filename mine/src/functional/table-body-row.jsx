import React from 'react';

function Bodyrow(props) {
        console.log(props.users);
        const users_rows = props.users.map(
            el =>  (<tr>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.department}</td>
                        <td>{el.salary}</td>
                   </tr>)
        );

        return (
         <>
         {users_rows}
         </>
        )
      }

export default Bodyrow;