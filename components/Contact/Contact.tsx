import React from 'react'
import Hero from './Hero'
import BriefUs from './BriefUs'
import Address from './Address'
import Banner from './Banner'

function Contact() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="-mt-[230px] pb-20">
        <BriefUs />
      </div>
      <Address />
      <Banner />
    </div>
  )
}

export default Contact
