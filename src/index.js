import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Title from "./App/Home/Title/Title";
import Slider from "./App/Home/Slider/Slider";
import Content from "./App/Home/Content/Content";

import Environment from "./App/Environment";
import Solar from "./App/Solar";
import Space from "./App/Space";

const Home = () => {
    return (
        <Fragment>
            <Title />
            <Slider />
            <Content />
        </Fragment>
    );
}
ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                 <Route path='/environment' component={Environment} />
                 <Route path='/technology' component={Solar} />
                 <Route path='/space' component={Space} />
                 <Route path='*' component={Home} />
            </Switch>
        </App>
    </BrowserRouter>
), document.getElementById("root"));
