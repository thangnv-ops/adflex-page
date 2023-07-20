import React from 'react'
import Hero from './Hero'
import WhatIsPushtimize from './WhatIsPushtimize'
import Partner from './Partner'
import Technology from './Technology'
import WhyUs from './WhyUs'
import Banner from './Banner'
import CustomerReviews from './CustomerReviews'
import Map from '../Map'

function Pushtimize() {
  return (
    <div>
      <Hero />
      <WhatIsPushtimize />
      <div className="-mt-14">
        <Partner />
      </div>
      <Technology />
      <WhyUs />
      <Banner />
      <CustomerReviews />
      <Map />
    </div>
  )
}

export default Pushtimize
