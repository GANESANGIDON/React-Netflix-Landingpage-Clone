import React from 'react'
import './css/Footer.css'

export default function Footer() {
  return (
    <React.Fragment>
      <footer id="footer">
        <div className="contact-number">
          <a href="/">Questions? Call 000-800-040-1843</a>
        </div>
        <div className="footer-links-container">
          <span>
            <a className="footer-links" href="/">
              FAQ
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Help Center
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Account
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Media Center
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Investor Relations
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Jobs
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Ways to Watch
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Terms of Use
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Privacy
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Cookie Preferences
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Corporate Information
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Contact Us
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Speed Test
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Legal Notice
            </a>
          </span>
          <span>
            <a className="footer-links" href="/">
              Only on Netflix
            </a>
          </span>
        </div>
        <div className="footer-lang-division">
          <div className="lang-container" id="footer-lang-container">
            <select
              name="language"
              className="lang-selector"
              id="footer-lang-selector"
            >
              <option value="English" selected>
                English
              </option>
              <option value="Hindi">हिंदी</option>
            </select>
          </div>
        </div>
        <div className="footer-end">
          <p>Netflix India</p>
        </div>
      </footer>
    </React.Fragment>
  )
}
