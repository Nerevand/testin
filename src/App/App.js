import React, { Fragment } from "react";
import "./App.css";
import Header from "./Home/Header/Header";
import Subscribe from "./Home/Subscribe/Subscribe";
import Footer from "./Home/Footer/Footer";

const App = ({children}) => {
    return (
      <Fragment>
        <Header />
          {children}
        <Subscribe />
        <Footer />
      </Fragment>
    );
}

export default App;
