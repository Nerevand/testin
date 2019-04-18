import React from 'react';
import './style.css';

function SolarBlock(props){
    return (
        <div className='solar-block'>
            <img src={props.src} alt={props.alt} className='solar-block__img' />
            <h3 className='solar-block__h3'>{props.title}</h3>
            <p className='solar-block__p'>{props.paragraph}</p>
        </div>
    );
}

export default SolarBlock;