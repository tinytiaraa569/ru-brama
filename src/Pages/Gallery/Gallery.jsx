import React, { useEffect } from 'react'
import GallerySection1 from './GallerySection1'
import GallerySection2 from './GallerySection2'
import SEO from '@/Seo/Seo'

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <SEO
        title="Jewelry Manufacturing Gallery | Ru-Brama Pvt Ltd"
        description="Explore the Ru-Brama Jewelry Manufacturing Gallery showcasing our end-to-end job work process including sketching, CAD/CAM, casting, polishing, stone setting, stamping, and packaging. We specialize in gold, silver, platinum, and diamond jewelry production."
        keywords="Ru-Brama, Jewelry Manufacturing, Job Work, CAD CAM Jewelry, Casting, Polishing, Stone Setting, Stamping, Packaging, Gold Jewelry, Silver Jewelry, Platinum Jewelry, Diamond Jewelry, Custom Jewelry Manufacturing"
        canonical="https://ru-brama.com/gallery"
      />
    {/* <GallerySection1 /> */}
    <GallerySection2 />

    </>
  )
}

export default Gallery