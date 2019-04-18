import React, {Component} from 'react';
import './title.css';
import { Link } from 'react-scroll'

class Title extends Component {
    render(){
        return (
            <header className='solar'>
                <h1 className="solar-h1">
                    Solar panel, all your energy needs
                </h1>
                <h3 className='solar-h3'>
                    Discover the new generation solar panel
                </h3>
                <Link                
                to="solar" 
                spy={true} 
                smooth={true} 
                offset={0} 
                duration={750}>
                    <div className='solar-container'>
                        <div className="solar-container__chevron"></div> 
                        <div className="solar-container__chevron"></div>
                        <div className="solar-container__chevron"></div>
                    </div>
                </Link>
                <div className='solar-triangle'></div>
            </header>
        );
    }
}

export default Title;