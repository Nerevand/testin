import React from "react";

function SliderBlock(props) {
    return (
      <div className="slider-body__block">
        <img src={props.src} alt={props.text} />
        <h4 style={{ color: props.color }} className="slider-body__title">
          {props.text}
        </h4>
        <p className="slider-body__text">{props.title}</p>
      </div>
    );
}

export default SliderBlock;
