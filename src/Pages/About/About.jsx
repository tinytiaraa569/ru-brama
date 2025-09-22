import React, { useEffect } from 'react'
import Aboutsection1 from './Aboutsection/Aboutsection1'
import Aboutsection2 from './Aboutsection/Aboutsection2'
import AboutCta from './Aboutsection/AboutCta'
import Aboutsection3 from './Aboutsection/Aboutsection3'
import SEO from '@/Seo/Seo'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

      <SEO
        title="About Us | Ru-Brama Pvt Ltd - Jewelry Manufacturing Production"
        description="Ru-Brama Pvt Ltd specializes in jewelry manufacturing production. From sketch, CAD, CAM, casting, polishing, and stone setting to stamping, packaging, and rendering, we deliver end-to-end jewelry manufacturing in gold, silver, platinum, and diamonds."
        keywords="Ru-Brama , Ru-Brama Pvt Ltd ,Jewelry Manufacturing Production, Jewelry Job Work, Custom Jewelry Manufacturing, Diamond Jewelry Manufacturing, Gold Jewelry Manufacturing, Silver Jewelry Manufacturing, Platinum Jewelry Manufacturing, Jewelry CAD CAM Services, Jewelry Casting, Jewelry Polishing, Jewelry Finishing, Jewelry Stone Setting, Jewelry Rendering Services, Jewelry Stamping, Jewelry Packaging, Jewelry Mass Production, OEM Jewelry Manufacturer, Jewelry Factory India, Jewelry Export Quality, Ru-Brama, Tiny Tiaraa"
        canonical="https://ru-brama.com/about"
      />

      <Aboutsection1 />
      <Aboutsection2 />
      <AboutCta />
      <Aboutsection3 />
    </>
  )
}

export default About