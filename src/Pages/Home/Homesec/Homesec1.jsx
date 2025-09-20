// // import React from 'react'
// // import homesec1video from './images/homesec.mp4'
// // const Homesec1 = () => {
// //   return (
// //     <div>
// //         <video className='w-full h-[85vh] object-cover' src={homesec1video} autoPlay muted loop/>
// //     </div>
// //   )
// // }

// // export default Homesec1


// "use client"

// import { useEffect, useState } from "react"

// import videoSrc from './images/homesec.mp4'

// const HomeSec1Variant8 = () => {
//   const [reveal, setReveal] = useState(false)

//   useEffect(() => {
//     setReveal(true)
//   }, [])

//   return (
//     <div className="relative w-full max-h-[50vh] sm:max-h-[70vh] md:max-h-[85vh] overflow-hidden bg-red-400">
//       {/* Video with slide reveal */}
//       <div className="relative w-full h-full">
//         <video  className="w-full h-full object-cover " src={videoSrc} autoPlay muted loop playsInline  preload="metadata" />

//         {/* Sliding overlay panels */}
//         <div
//           className={`absolute inset-0 bg-black transition-transform duration-2000 ease-in-out ${
//             reveal ? "-translate-x-full" : "translate-x-0"
//           }`}
//         />
//         <div
//           className={`absolute inset-0 bg-black transition-transform duration-2000 delay-300 ease-in-out ${
//             reveal ? "translate-x-full" : "translate-x-0"
//           }`}
//         />
//       </div>

//       {/* Sophisticated gradient overlay */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/60 transition-opacity duration-1500 delay-1500 ${
//           reveal ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       {/* Elegant frame border */}
//       <div
//         className={`absolute inset-8 transition-all duration-2000 delay-2000 ${
//           reveal ? "opacity-100 scale-100" : "opacity-0 scale-110"
//         }`}
//       >
//         <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-white/60" />
//         <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-white/60" />
//         <div className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-white/60" />
//         <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-white/60" />
//       </div>

//       {/* Sophisticated content */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="text-white text-center max-w-2xl">
//           <div
//             className={`transition-all duration-1500 delay-2500 ${
//               reveal ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
//             }`}
//           >
//             <h1 className="text-lg sm:text-2xl  md:text-4xl lg:text-5xl font-thin mb-1 md:mb-6 tracking-wide">Every Step, Every Sparkle</h1>
//             <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-1 md:mb-6" />
//             <p className="text-xs sm:text-sm  md:text-lg lg:text-xl font-light opacity-90 leading-relaxed px-10 sm:px-0">
//              From design to final polish, each stage of creation is perfected with precision, passion, and artistry.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HomeSec1Variant8


"use client"

import { useEffect, useState } from "react"
import videoSrc from "./images/homesec.mp4"

const HomeSec1Variant8 = () => {
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setReveal(true), 100) // small delay ensures transition applies
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full max-h-[52vh] sm:max-h-[70vh] md:max-h-[85vh] overflow-hidden ">
      {/* Video */}
      <div className="relative w-full h-full">
        <video
          className="w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Sliding overlays */}
        <div
          className={`absolute inset-0 bg-black transition-transform ease-in-out ${
            reveal ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{ transitionDuration: "2000ms" }}
        />
        <div
          className={`absolute inset-0 bg-black transition-transform ease-in-out ${
            reveal ? "translate-x-full" : "translate-x-0"
          }`}
          style={{ transitionDuration: "1000ms", transitionDelay: "200ms" }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/60 transition-opacity ${
          reveal ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1500ms", transitionDelay: "1500ms" }}
      />

      {/* Frame border */}
      <div
        className={`absolute inset-8 transition-all ${
          reveal ? "opacity-100 scale-100" : "opacity-0 scale-110"
        }`}
        style={{ transitionDuration: "2000ms", transitionDelay: "2000ms" }}
      >
        <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-white/60" />
        <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-white/60" />
        <div className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-white/60" />
        <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-white/60" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center max-w-2xl">
          <div
            className={`transition-all ${
              reveal ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDuration: "1500ms", transitionDelay: "2500ms" }}
          >
            <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-thin mb-1 md:mb-6 tracking-wide">
              Sparkle At Every Step
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-1 md:mb-6" />
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-light opacity-90 leading-relaxed px-10 sm:px-0">
              From design to finished Jewelry, each stage of creation is perfected
              with precision, passion and artistry.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSec1Variant8
