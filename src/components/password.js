import React from 'react';

export default class Password extends React.Component{
    render(){
        return <div>
            <label for="inputPassword" className="fw-normal fs-5">Password</label>
            <input type="text" className="form-control" id="inputPassword"></input>
        </div> 
    }
}