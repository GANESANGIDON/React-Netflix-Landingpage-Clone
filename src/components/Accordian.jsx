import React from 'react'
import './css/FAQs.css'

export default function Accordian() {
  let accordian = document.getElementsByClassName('FAQ-button')
for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener('click', function () {
    if (this.childNodes[1].classList.contains('fa-plus')) {
      this.childNodes[1].classList.remove('fa-plus')
      this.childNodes[1].classList.add('fa-times')
    } else {
      this.childNodes[1].classList.remove('fa-times')
      this.childNodes[1].classList.add('fa-plus')
    }
    let content = this.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
}


  return (
    <React.Fragment>
      <div className="FAQs-container">
        <div className="FAQ-accordian">
          <button className="FAQ-button" type="button">
            What is Netflix?
            <i className="fal fa-plus"></i>
          </button>
          <div className="FAQ-answer">
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more on
              thousands of internet-connected devices.
            </p>
            <p>
              You can watch as much as you want, whenever you want, without a
              single ad all for one low monthly price. There's always something
              new to discover, and new TV shows and movies are added every week!
            </p>
          </div>
        </div>
        <div className="FAQ-accordian">
          <button className="FAQ-button" type="button">
            How much does Netflix cost?
            <i className="fal fa-plus"></i>
          </button>
          <div className="FAQ-answer">
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>
        <div className="FAQ-accordian">
          <button className="FAQ-button" type="button">
            Where can I watch?
            <i className="fal fa-plus"></i>
          </button>
          <div className="FAQ-answer">
            <p>
              Watch anywhere, anytime, on an unlimited number of devices. Sign
              in with your Netflix account to watch instantly on the web at
              netflix.com from your personal computer or on any
              internet-connected device that offers the Netflix app, including
              smart TVs, smartphones, tablets, streaming media players and game
              consoles.
            </p>
            <p>
              You can also download your favourite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </p>
          </div>
        </div>
        <div className="FAQ-accordian">
          <button className="FAQ-button" type="button">
            How do I cancel?
            <i className="fal fa-plus"></i>
          </button>
          <div className="FAQ-answer">
            <p>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees start or stop your account
              anytime.
            </p>
          </div>
        </div>
        <div className="FAQ-accordian">
          <button className="FAQ-button" type="button">
            What can I watch on Netflix?
            <i className="fal fa-plus"></i>
          </button>
          <div className="FAQ-answer">
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </div>
        </div>
        <div className="FAQ-accordian">
          <button className="FAQ-button" type="button">
            Is Netflix good for kids?
            <i className="fal fa-plus"></i>
          </button>
          <div className="FAQ-answer">
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space.
            </p>
            <p>
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don't want kids to see.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
