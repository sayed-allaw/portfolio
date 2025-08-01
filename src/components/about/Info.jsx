import React from 'react'

function Info() {
  return (
    <div className="about__info grid">
        <div className="about__box">
          <i class='bxr  bx-medal-star-alt about__icon'  ></i> 
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1 Year Working</span>
        </div>
        <div className="about__box">
          <i class='bxr  bx-briefcase-alt about__icon'  ></i> 
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10 + Projects</span>
        </div>
        <div className="about__box">
          <i class='bxr  bx-headphone-mic about__icon'  ></i> 
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info