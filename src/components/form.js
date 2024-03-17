import React from 'react';
import NavBar from './navbar';
import LogInButton from './login-button';
import Password from './password';
import Username from './username';

export default class Form extends React.Component{
    render(){
        return (<div className='container-fluid'>
            <NavBar />
            <div className='row justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
                    <div className='col-lg-4 col-md-6'>
                        <div className='card'>
                            <form>
                                <div className='card-header'><h3>Log In</h3></div>
                                <div className="card-body">
                                    <div className='form-group'>
                                        <Username />
                                    </div>

                                    <div className='form-group'>
                                        <Password />   
                                    </div>                     
                                </div>
                                <LogInButton />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}