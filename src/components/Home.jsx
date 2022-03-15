import React from 'react'
import { Header, Email } from '.'
import './css/Home.css'

export default function Home() {
  return (
    <React.Fragment>
      {/* Header component */}
      <Header />
      {/* Hero section */}
      <section className="hero-section">
        <div id="bg-image-container">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="background_image"
            className="bg-image"
          />
        </div>
        <div id="hero-content-container">
          <h2 className="heading">Unlimited movies, TV shows and more</h2>
          <p className="fpara">Watch anywhere. Cancel anytime.</p>
          {/* Email component */}
          <Email />
        </div>
      </section>
    </React.Fragment>
  )
}
