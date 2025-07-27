import React from "react";
import { projectsData } from "./Data";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__deatails">
        <p className="work__description">{item.description}</p>

        <div className="work__tools-flex">
          {item.tools.map((tool, index) => (
            <span key={index} className="work__tool">
              {tool}
            </span>
          ))}
        </div>
      </div>
      <a href={item.link} className="work__button">
        Demo <i className="bxr  bx-arrow-right-stroke work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
