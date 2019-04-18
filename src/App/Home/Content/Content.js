import React, { Component } from "react";
import "./Content.css";
import list from "./content-list";
import BlockList from "./component/BlockList";

class Content extends Component {
  render() {
    return (
      <section className="content">
        <h4 className="content-title">RECENT ARTICLES</h4>
        {list.map(({id, src, alt, color, title, paragraph, date, time, link}) => {
          return (
            <BlockList
              key={id}
              id={id}
              src={src}
              alt={alt}
              color={color}
              title={title}
              paragraph={paragraph}
              date={date}
              time={time}
              link={link}
            />
          );
        })}
        <div className="content-button">
          MORE ARTICLES
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            >
            <rect 
              x="0"
              y="0"
              fill="none"
              />
          </svg>
        </div>
      </section>
    );
  }
}

export default Content;
