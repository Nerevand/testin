import React, { Fragment } from 'react';
import Title from './Title/Title';
import About from './About/About';

function Space(props) {
    return (
        <Fragment>
            <Title />
            <About />
        </Fragment>
    );
}

export default Space;