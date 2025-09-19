import React, { useEffect } from 'react'
import Aboutsection1 from './Aboutsection/Aboutsection1'
import Aboutsection2 from './Aboutsection/Aboutsection2'
import AboutCta from './Aboutsection/AboutCta'
import Aboutsection3 from './Aboutsection/Aboutsection3'

const About = () => {

   useEffect(() => {
      window.scrollTo({
        top: 0
        
      })
    }, [])

  return (
    <>
      <Aboutsection1 />
      <Aboutsection2 />
      <AboutCta />
      <Aboutsection3 />
    </>
  )
}

export default About