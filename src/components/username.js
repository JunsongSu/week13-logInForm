import React from 'react';

export default class Username extends React.Component{
    render(){
        return <div>
            <label for="inputUserName" class="fw-normal fs-5">Username</label>
            <input type="text" class="form-control" id="inputUserName"></input>
        </div> 
    }
}