import React, { useEffect } from 'react'
import Homesec1 from './Homesec/Homesec1'
import Homesec2 from './Homesec/Homesec2'
import HomesecPartner from './Homesec/HomesecPartner'
import ServiceSection from './Homesec/ServiceSection'
import HomeBenefits from './Homesec/HomeBenefits'
import HomeGallery from './Homesec/HomeGallery'

const Home = () => {
   useEffect(() => {
    window.scrollTo({
      top: 0,
     
    })
  }, [])
    
  return (
    <>
    <Homesec1 />
    <Homesec2 />
    <HomesecPartner />

    <ServiceSection />
    <HomeBenefits />
    <HomeGallery />

    </>
  )
}

export default Home