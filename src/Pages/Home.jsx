import React from 'react'
import Hero from '../Components/Hero'

import Sliders from '../Components/Sliders'
import Partners from '../Components/Partners'
import LetsB from '../Components/LetsB'
import Menu from '../Components/Menu'
import Quality from '../Components/Quality'
import Poster from '../Components/Poster'

function Home() {
  return (
    <div>
      <Poster/>
      <Hero/>
      <Menu/>
      <Sliders/>
      <Quality/>
      <Partners/>
      <LetsB/>
    </div>
  )
}

export default Home
