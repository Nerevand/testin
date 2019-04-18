import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
    render() {
        console.log(window.location.pathname);
         return (
            <header className='spaceHeader'>
                <h1 className='spaceHeader-h1'>
                    Here you can read some info about planets
                </h1>
            </header>
        );
    }
}

export default Title;