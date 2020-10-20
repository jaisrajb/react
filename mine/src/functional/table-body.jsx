import React from 'react';
import Bodyrow from './table-body-row.jsx';

    function Tablebody(props) {
        debugger;
        const users = props.user;
        return (
            <tbody>
                <Bodyrow users={users}/>
            </tbody>   
        )
      }

      export default Tablebody;