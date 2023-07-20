import React from 'react'
import Hero from './Hero'
import Solutions from './Solutions'
import Partner from '../Home/Partner'
import Whyus from './Whyus'
import Banner from './Banner'
import Map from '../Map'

function CPA() {
  return (
    <div>
      <Hero />
      <Solutions />
      <div className="relative z-10 -mt-14">
        <Partner />
      </div>
      <Whyus />
      <Banner />
      {/* <CustomerReviews /> */}
      <Map />
    </div>
  )
}

export default CPA
