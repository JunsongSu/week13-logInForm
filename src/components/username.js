import React from 'react';

export default class Username extends React.Component{
    render(){
        return <div>
            <label for="inputUserName" className="fw-normal fs-5">Username</label>
            <input type="text" className="form-control" id="inputUserName"></input>
        </div> 
    }
}