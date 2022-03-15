import React from 'react'
import './css/Email.css'

export default function Email() {
  return (
    <React.Fragment>
      <p className="spara">
        Ready to start? Enter your email to create or restart your membership
      </p>
      <div className="mail-form-container">
        <div className="email-label-container">
          <input
            type="email"
            name="email_id"
            id="hero-email"
            className="mail-input"
            placeholder=" "
          />
          <label className="mail-label" for="hero-email">
            Email Address
          </label>
        </div>
        <button type="button" className="start-button" value="Get-Started">
          Get Started
          <i className="far fa-chevron-right"></i>
        </button>
      </div>
    </React.Fragment>
  )
}
