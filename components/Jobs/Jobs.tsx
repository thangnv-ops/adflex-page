import Leader from '../Home/Leader'
import Map from '../Map'
import Benefits from './Benefits'
import Gallery from './Gallery'
import Hero from './Hero'
import ListJobs from './ListJobs'
import SearchJobs from './SearchJobs'

function Jobs() {
  return (
    <div>
      <Hero />
      <div className="-mt-[160px] md:-mt-[115px] bg-[#262626]">
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
