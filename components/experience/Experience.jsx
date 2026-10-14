/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';
import KaiserLogo from '../../src/assets/Kiaser.png';
import JPMorganLogo from '../../src/assets/chase.png';
import InvizLogo from '../../src/assets/inviz.jpg';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience 💼</h2>
        <span className="section__subtitle">What I work as</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <img src={KaiserLogo} alt="Kaiser Permanente" className="exp__logo" />
                    <h3 className="exp__title">UX Designer </h3>
                </div>

                <div>
                    <span className="exp__comp">Kaiser Permanente</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">UX Designer <br /> Sep 2025 - Present</h3>
                        <p className="exp__modal-description">Designed HIPAA-compliant patient intake workflows and React-based healthcare dashboards focused on accessibility, usability, and clinical efficiency.</p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Mapped patient intake flows and redesigned member portal experiences in Figma.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Built reusable component libraries and design tokens for React and React Native products.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Improved WCAG accessibility, developer handoff quality, and design governance processes.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <img src={JPMorganLogo} alt="JPMorgan Chase" className="exp__logo" />
                    <h3 className="exp__title">UI/UX Designer</h3>
                </div>

                <div>
                    <span className="exp__comp">JPMorgan Chase</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">UI/UX Designer <br /> Oct 2023 - Sep 2025</h3>
                        <p className="exp__modal-description">Worked on banking product experiences, fraud alert dashboards, and governance-driven design systems for responsive web interfaces.</p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Analyzed user flows and redesigned alert and transfer experiences using usability insights.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Created wireframes, prototypes, and a reusable React component library in Figma.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Improved dashboards for accessibility, responsiveness, and design consistency across teams.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <img src={InvizLogo} alt="Inviz AI" className="exp__logo" />
                    <h3 className="exp__title">Junior Software <br /> Engineer</h3>
                </div>

                <div>
                    <span className="exp__comp">Inviz AI</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 3 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Junior Software Engineer <br /> May 2021 - July 2023</h3>
                        <p className="exp__modal-description">Supported senior designers on user flows and wireframes for a consulting analytics tool, transforming client requirements into clear layouts in Figma.</p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Prepared high fidelity designs for React web pages, following component library standards and design patterns.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Participated in usability testing calls with consultants and translated feedback into design iterations.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Updated information architecture, contributed to accessibility audits, and documented design handoff notes for React developers.</p>
                            </li>

                        </ul>

        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience