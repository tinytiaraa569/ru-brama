import React from 'react'
import galleryimg from './galleryimg.jpg'

const GallerySection1 = () => {
  return (
     <div className="relative max-h-[40vh] h-[40vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${galleryimg}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      <div className="relative h-full flex items-end justify-center pb-8">
        <div className="text-center text-white max-w-4xl px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-balance">Manufacturing Excellence</h1>
          <p className="text-white/90 text-lg text-pretty">State-of-the-art facilities producing world-class jewelry</p>
        </div>
      </div>
    </div>
  )
}

export default GallerySection1