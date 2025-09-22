import React, { useEffect } from 'react'
import Homesec1 from './Homesec/Homesec1'
import Homesec2 from './Homesec/Homesec2'
import HomesecPartner from './Homesec/HomesecPartner'
import ServiceSection from './Homesec/ServiceSection'
import HomeBenefits from './Homesec/HomeBenefits'
import HomeGallery from './Homesec/HomeGallery'
import SEO from '@/Seo/Seo'
import HomePassionate from './Homesec/HomePassionate'

const Home = () => {
   useEffect(() => {
    window.scrollTo({
      top: 0,
     
    })
  }, [])
    
  return (
    <>

    <SEO
      title="Ru-Brama Pvt Ltd | Jewelry Manufacturing & Production Experts"
      description="Ru-Brama Pvt Ltd is a trusted jewelry manufacturing company specializing in diamonds, lab-grown diamonds, gold, platinum, and silver. With CAD, CAM, casting, polishing, stone setting, QC, and packaging, Ru-Brama delivers world-class jewelry manufacturing and production services."
      keywords="Ru-Brama, Ru-Brama Pvt Ltd, Ru-Brama Jewelry Manufacturing, Ru-Brama Jewelry Production, Jewelry Manufacturing, Jewelry Production, Diamond Jewelry Manufacturing, Lab Grown Diamond Jewelry, Gold Jewelry Production, Platinum Jewelry Manufacturing, Silver Jewelry Manufacturing, Jewelry CAD CAM, Jewelry Casting, Jewelry Polishing, Jewelry Stone Setting, Jewelry Packaging, Wholesale Jewelry Production, OEM Jewelry Manufacturing, Custom Jewelry Manufacturer, Jewelry Factory India"
      canonical="https://ru-brama.vercel.app/"
    />

    <Homesec1 />
    <Homesec2 />
    <HomesecPartner />

    {/* <ServiceSection /> */}
    <HomePassionate />
    <HomeBenefits />
    <HomeGallery />

    </>
  )
}

export default Home