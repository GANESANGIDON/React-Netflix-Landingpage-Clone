import React from 'react'
import './css/Header.css'

export default function Header() {
  return (
    <header>
      <div id="logo-container">
        <img
          id="logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="nsetflix-logo"
        />
      </div>
      <div className="header-right-division">
        <div className="lang-container" id="header-lang-container">
          <select
            name="language"
            className="lang-selector"
            id="header-lang-selector"
          >
            <option value="English" selected>
              English
            </option>
            <option value="Hindi">हिंदी</option>
          </select>
        </div>
        <button
          type="submit"
          className="signin-button"
          name="sign_in"
          value="sign in"
        >
          Sign in
        </button>
      </div>
    </header>
  )
}
