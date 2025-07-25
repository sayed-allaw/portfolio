import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">SAYED</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#protfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/sayed.allaw.54/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-facebook-f"></i>
          </a>

          <a
            href="https://wa.me/201001777342"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-whatsapp"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/elsayed-allaw-883647228/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
