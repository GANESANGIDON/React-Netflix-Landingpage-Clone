import React from 'react'

export default function Feature3() {
  return (
    <>
      <section className="features odd-section">
        <div className="feature-details">
          <h2 className="feature-title">Watch everywhere.</h2>
          <p className="feature-subtitle">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="fimage-container">
          <img
            className="fimage"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="feature image3"
          />
          <div className="feature3-video-container">
            <video className="feature-video" autoPlay loop muted>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
    </>
  )
}
