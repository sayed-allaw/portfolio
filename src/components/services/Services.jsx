import React, { useState } from 'react'
import './services.css'


const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil-browser  services__icon"></i>
                <h3 className="services__title">Web <br />Developer</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(1)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 1 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">
                            Product Designer
                        </h3>
                        <p className="services__modal-description">
                            Service With more than 2 years of experience.
                            Providing quality work to clients and companies
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Build web apps with React and HTML5</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Create reusable UI components</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Integrate REST APIs seamlessly</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Design responsive layouts with Bootstrap</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Optimize for speed and compatibility.</p>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-mobile-android  services__icon"></i>
                <h3 className="services__title">Mobile <br />Developer</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(2)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 2 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">
                            Service With more than 2 years of experience.
                            Providing quality work to clients and companies
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Develop iOS/Android apps with React Native.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Add smooth React Navigation.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Enable Firebase real-time features.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Implement Push Notifications.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Deploy to App Store/Google Play.</p>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-analysis services__icon"></i>
                <h3 className="services__title">Visual <br />Designer</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(3)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 3 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Visaul Designer</h3>
                        <p className="services__modal-description">
                            Service With more than 2 years of experience.
                            Providing quality work to clients and companies
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">I develop the user interface</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Web page development</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">I create ux element interactions</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">I position your company brand.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moadl-icon"></i>
                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
      </div>
</section>
  )
}

export default Services