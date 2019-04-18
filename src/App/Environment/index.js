import React, { Component, Fragment } from "react";
import "./environment.css"
import Title from "./Title/title";
import Description from "./Description/desc";

class Environment extends Component {
    render() {
        return (
            <Fragment>
                <Title />
                <Description />
            </Fragment>
        );
    }
}

export default Environment;