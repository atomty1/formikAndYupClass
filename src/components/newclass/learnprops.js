import React from 'react';
const LearnProps=({name, changeNameRequest})=> {
    // let {name, changeNameRequest} = props;
        return ( 
            <div>Learn props file displaying {name}
            <button onClick={changeNameRequest}>change name</button>
             </div>
         );
    
}
 
export default LearnProps;