import React from 'react'

export default function Feature1() {
  return (
    <React.Fragment>
      <section className="features odd-section">
        <div className="feature-details">
          <h2 className="feature-title">Enjoy on your TV.</h2>
          <p className="feature-subtitle">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="fimage-container">
          <img
            className="fimage"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="feature image1"
          />
          <div className="feature1-video-container">
            <video className="feature-video" autoPlay loop muted>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
