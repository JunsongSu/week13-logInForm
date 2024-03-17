import React from 'react';

export default class NavBar extends React.Component{
    render(){
        return <div className='container-fluid'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#"> Asian Culture</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">Language</a>
                        <a class="nav-item nav-link" href="#">Eat</a>
                        <a class="nav-item nav-link" href="#">Clothes</a>
                        <a class="nav-item nav-link" href="#">Festival</a>
                    </div>
                </div>
            </nav>
        </div>
    }

}