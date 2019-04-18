import React, {Fragment} from "react";
import "./desc.css";
import list from './list';

function Description(props){
    return (
        <Fragment>
            <section className="description" name="read">
                <h3 className="description-h3">
                    DOWNTOWN LA SEAN PAVONE/SHUTTERSSTOCK
                </h3>
            </section>
            <section className="story">
                    <div className="story-wrapper">
                        <h3>Current situation</h3>
                        {list.map((item, index) => {
                            return (
                                <p key={index}>{item}</p>
                            )
                        })}
                        <img 
                        src="http://cdn.iflscience.com/images/a80a81cf-2152-5c3b-aca1-8d81ac955133/content-1488990629-usgs-thingy.jpg" 
                        alt='9218#2' 
                        className="story-wrapper__image" />
                        <p className='write'>
                            The USGS map of the readiness of faults to rupture. The entire San Andreas Fault is about twice as 
                            likely to jolt forwards as others in the area. USGS
                        </p>
                        <p>
                            Generally speaking, the San Andreas Fault as a whole is around 1,300 kilometers (800 miles) long, 
                            and it’s divided into a northern stretch and a shorter, southern segment. Both have moved 
                            separately of each other, but the entire fault can move in one sudden jolt.
                        </p>
                        <p>
                            The last time the southern section ruptured was in 1857, when a 360-kilometer-long 
                            (224-mile-long) section burst forwards at a shallow depth. This is the quake that the 
                            authors of the report are referring to
                        </p>
                        <p>
                            This registered as a 7.9M event, and it lasted for three minutes, but not every fault in the area moved. 
                            One segment, near the Salton Sea, hasn’t moved since the 17th century, and is well overdue.
                        </p>
                    </div>
            </section>
        </Fragment>
    );
}

export default Description;