import React from 'react'
import './css/Feature2.css'

export default function Feature2() {
  return (
    <React.Fragment>
      <section className="features even-section">
        <div className="feature-details">
          <h2 className="feature-title">
            Download your shows to watch offline.
          </h2>
          <p className="feature-subtitle">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
        <div className="fimage-container">
          <img
            className="fimage"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="feature image2"
          />
          <div className="poster-container">
            <div className="poster-image-container">
              <img
                className="poster-image"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt="feature_poster"
              />
            </div>
            <div className="poster-details">
              <h3 className="poster-title">Stranger things</h3>
              <p className="poster-subtitle">Downloading...</p>
            </div>
            <div className="poster-gif-container">
              <img
                className="poster-gif"
                src=" https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="download_gif"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
