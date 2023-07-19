import React from 'react'
import Hero from './Hero'
import Solution from './Solution'
import WhyUs from './WhyUs'
import Effective from './Effective'
import Roadmap from './Roadmap'
import Leader from './Leader'
import FAQs from './FAQs'
import Partner from './Partner'

function Home() {
  return (
    <div className="overflow-hidden">
      <div
        style={{
          backgroundImage: 'url(/images/top-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="pb-36"
      >
        <Hero />
        <Solution />
      </div>
      <WhyUs />
      <Partner />
      <Effective />
      <Roadmap />
      <Leader />
      <FAQs />
    </div>
  )
}

export default Home
