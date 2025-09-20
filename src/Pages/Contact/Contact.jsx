import React, { useEffect } from 'react'
import ContactSection1 from './ContactSection/ContactSection1'
import SEO from '@/Seo/Seo'
import ContactSection2 from './ContactSection/ContactSection2'
import ContactInformation from './ContactSection/ContactInformation'
import ContactBusiness from './ContactSection/ContactBusiness'

const Contact = () => {
     useEffect(() => {
        window.scrollTo({
          top: 0,
        })
      }, [])
  return (
    <>
    <SEO
      title="Contact Ru-Brama Pvt Ltd | Jewelry Manufacturing & Production House"
      description="Get in touch with Ru-Brama Pvt Ltd, a leading jewelry manufacturing and production company. Email us at sanjay@ru_brama.com or call 8657062519. Visit our Mumbai office at Plot F-11 & 12-1, Second Floor, Admin Bldg., MIDC (Marol), Opp. Seepz Main Gate, WICEL, Andheri East, Mumbai-400093."
      keywords="Contact Ru-Brama, Ru-Brama Contact, Jewelry Manufacturing Contact, Jewelry Production Contact, Ru-Brama Mumbai Office, Jewelry Factory Mumbai, Jewelry Manufacturer Contact India, Diamond Jewelry Manufacturing Contact, Custom Jewelry Manufacturing Contact, Private Label Jewelry Contact, Jewelry Export Contact, Jewelry Manufacturing Website, Jewelry Production Website, Jewelry Factory Website, ru-brama.com contact, sanjay@ru_brama.com, 8657062519, Plot F-11 & 12-1 Admin Bldg MIDC Marol Mumbai, Seepz Andheri East Jewelry Factory, Jewelry Supplier Mumbai, Jewelry Exporter Andheri East, Jewelry Production House Contact"
      canonical="https://ru-brama.vercel.app/contact"
    />

    <ContactSection1 />
    <ContactInformation />
    <ContactSection2 />
    <ContactBusiness />

    </>
  )
}

export default Contact