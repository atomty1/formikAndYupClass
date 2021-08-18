import React, { Component } from 'react';
class Input extends Component {
    state = {  }
    render() { 
        let {info,i, setMyInfo}= this.props;
        return <>
        <input value={info.val} placeholder={info.name} onChange={(event)=>setMyInfo(event, i)}/>
        </>
    }
}
 
export default Input;