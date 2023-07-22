import React from 'react'
import Hero from './Hero'
import SearchJobs from './SearchJobs'
import Benefits from './Benefits'
import Leader from '../Home/Leader'
import ListJobs from './ListJobs'
import Gallery from './Gallery'
import Map from '../Map'

function Jobs() {
  return (
    <div>
      <Hero />
      <div className="-mt-[160px] md:-mt-[115px]">
        <SearchJobs />
      </div>
      <Benefits />
      <Leader />
      <ListJobs />
      <Gallery />
      <Map />
    </div>
  )
}

export default Jobs
