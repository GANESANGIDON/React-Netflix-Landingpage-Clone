import React from 'react'
import { Accordian, Email } from '.'
import './css/FAQs.css'

export default function FAQs() {
  return (
    <React.Fragment>
      <section class="FAQs-section">
        <h1 class="FAQs-heading">Frequently Asked Questions</h1>
        {/* Accordian component */}
        <Accordian />
        {/* Email component */}
        <Email />
      </section>
    </React.Fragment>
  )
}
