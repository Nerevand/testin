import React, {Component} from 'react';
import './about.css';
import list from './list';
import SolarBlock from './components/solarBlock';

class Title extends Component {
    render(){
        return (
            <section className='aboutSolar' name='solar'>
                <h2 className='aboutSolar-h2'>
                    All About Solar
                </h2>
                <div className='aboutSolar-blocks'>
                    {list.map(({id, src, title, paragraph}) => {
                        return (
                        <SolarBlock 
                            key={id}
                            src={src}
                            alt={id}
                            title={title}
                            paragraph={paragraph}
                        />
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Title;