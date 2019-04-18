import React from "react";
import './title.css';
import { Link } from 'react-scroll';

function Title(props) {
    return (
        <section className="environment" name="home">
            <h1 className="environment-title">The Quake That'll Take Out Los Angeles May Be Around The Corner</h1>
                <h3 className="environment-subtitle">
                    The United States Geological Survey (USGS) has ominously said that Southern California is 
                    overdue for a major earthquake along the Grapevine just next to Los Angeles... 
                    <Link
                    className='environment-link'
                    to="read" 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={750} >
                    Read more
                    </Link>
                </h3>
        </section>
    );
}

export default Title;