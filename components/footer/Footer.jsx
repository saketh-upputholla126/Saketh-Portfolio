/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Saketh Upputholla/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/sakethu/?isSelfProfile=true" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/saketh-upputholla126" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Saketh Upputholla. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer