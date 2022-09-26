import React from 'react'
import Hero from '../Homesection/Hero'
import HomeAbout from '../Homesection/HomeAbout'
import DestinationHome from '../Homesection/Destina/DestinationHome'
import MostPopular from '../Homesection/popular/MostPopular'
import Download from '../Homesection/Download/Download'
import Work from '../Homesection/Work/Work'
import Gallery from '../Homesection/gallery/Gallery'
import Footer from '../Homesection/Footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout/>
      <MostPopular/>
      <DestinationHome/>
      <Download/>
      <Work/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default Home;