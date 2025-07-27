import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualificatio section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uli uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uli uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Computer Science</h3>
                <span className="qualification__subtitle">
                  Obour - Obour Institute 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Front-End Web Development</h3>
                <span className="qualification__subtitle">
                  obour - ِATIC
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Problem Solving</h3>
                <span className="qualification__subtitle">
                  Obour - ATIC
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            
          </div>

          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front-End (React) </h3>
                <span className="qualification__subtitle">
                  Obour - GoSolor
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2024 - 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Mobile Developer (react-native)</h3>
                <span className="qualification__subtitle">Obour - GO</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2024 - 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front-End Develope</h3>
                <span className="qualification__subtitle">Saudi Arabia - IRIS</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2023- 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
