import React from 'react';

export default class Password extends React.Component{
    render(){
        return <div>
            <label for="inputPassword" class="fw-normal fs-5">Password</label>
            <input type="text" class="form-control" id="inputPassword"></input>
        </div> 
    }
}