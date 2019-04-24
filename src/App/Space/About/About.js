import React from 'react';
import './about.css';
import news from './news';

function About(){
    return (
        <section className='aboutSpace'>
            <h2 className='aboutSpace-title'>
                LATEST IN SPACE
            </h2>
                <div className='aboutSpace-blocks'>
                    {
                        news.map(({title, src, time}, index) => {
                            return (
                                <div className='aboutSpace-block' key={index}>
                                    <img src={src} alt='error with load' className='aboutSpace-block__img' />
                                    <div className='aboutSpace-block__titles'>
                                        <h3>{title}</h3>
                                        <hr />
                                        <h5>{time}</h5>
                                    </div>                                    
                                </div>
                            );
                        })
                    }
                </div>
        </section>
    );
}

export default About;