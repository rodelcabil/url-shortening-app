import React from 'react'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/navbar'
import Statistics from './Sections/AdvanceStatistics/Statistics'
import Boost from './Sections/Boost/Boost'
import Hero from './Sections/Hero/Hero'
import LinkShortener from './Sections/Link/LinkShortener'
const Home = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <LinkShortener/>
    <Statistics/>
    <Boost/>
    <Footer/>
   </>
  )
}

export default Home