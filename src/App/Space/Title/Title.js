import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
    render() {
         return (
            <header className='spaceHeader' name="home">
                <h1 className='spaceHeader-h1'>
                    Here you can read some info about planets
                </h1>
            </header>
        );
    }
}

export default Title;