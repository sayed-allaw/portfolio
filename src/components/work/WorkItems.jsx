import React from 'react'
import { projectsData } from "./Data";

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img'/>
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} className="work__button">
        Demo <i className="bxr  bx-arrow-right-stroke work__button-icon"></i>
      </a>
    </div>
  )
}

export default WorksItems