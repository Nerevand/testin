import React, { Component } from "react";
import "./Slider.css";
import list from "./list";
import SliderBlock from "./components/SliderBlock";
import Slide from "react-slick";

class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  resize = () => {
    this.setState({width: window.innerWidth});
  }
  render() {
    let {width} = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: width > 320 ? 3 : 1,
      slidesToScroll: 1
    };
    return (
      <section className="slider">
      <div className="slider-body">
        <h4 className="slider-title">TRENDING NOW</h4>
        <Slide {...settings} className="slider-body__slide slide">
          {list.map(({id, src, color, text, title}) => {
            return (
              <SliderBlock
                key={id}
                src={src}
                text={text}
                color={color}
                title={title}
              />
            );
          })}
        </Slide>
      </div>
    </section>
    );
  }
}

export default Slider;
