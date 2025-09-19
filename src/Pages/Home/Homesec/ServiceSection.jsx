// // "use client"

// // import { useState } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import { Card } from "@/components/ui/card"
// // import { Button } from "@/components/ui/button"
// // import { Badge } from "@/components/ui/badge"
// // import { ChevronLeft, ChevronRight, Palette, Cog, Stamp, Package, List, Camera } from "lucide-react"

// // import img1 from './servicesimage/cad-jewelry-design-software-3d-modeling.jpg'
// // import img2 from './servicesimage/jewelry-manufacturing-cnc-machine-production.jpg'
// // import img3 from './servicesimage/jewelry-laser-engraving-stamping-hallmark.jpg'
// // import img4 from './servicesimage/luxury-jewelry-packaging-boxes-elegant.jpg'
// // import img5 from './servicesimage/jewelry-documentation-certificates-specifications.jpg'
// // import img6 from './servicesimage/jewelry-photography-studio-professional-rendering.jpg'



// // const services = [
// //   {
// //     icon: Palette,
// //     title: "CAD/CAM Design",
// //     description: "Professional 3D modeling and computer-aided design for precise jewelry creation",
// //     image: img1,
// //     details:
// //       "Advanced software tools including Rhino, Matrix, and KeyShot for creating detailed technical drawings and photorealistic 3D models",
// //     timeline: "2-5 business days",
// //   },
// //   {
// //     icon: Cog,
// //     title: "Production",
// //     description: "State-of-the-art manufacturing using cutting-edge technology and traditional craftsmanship",
// //     image: img2,
// //     details: "CNC machining, 3D printing, lost-wax casting, and precision assembly with quality control at every step",
// //     timeline: "5-10 business days",
// //   },
// //   {
// //     icon: Stamp,
// //     title: "Stamping & Engraving",
// //     description: "Custom hallmarking, logo stamping, and detailed engraving services",
// //     image: img3,
// //     details: "Laser engraving, hand stamping, quality assurance marking, and custom logo application",
// //     timeline: "1-2 business days",
// //   },
// //   {
// //     icon: Package,
// //     title: "Luxury Packaging",
// //     description: "Premium packaging solutions that reflect your brand's quality and elegance",
// //     image: img4,
// //     details: "Custom boxes, velvet pouches, certificates of authenticity, and branded presentation materials",
// //     timeline: "1-3 business days",
// //   },
// //   {
// //     icon: List,
// //     title: "Documentation",
// //     description: "Complete product documentation and catalog preparation for professional listings",
// //     image: img5,
// //     details: "Technical specifications, care instructions, authenticity certificates, and marketing materials",
// //     timeline: "1-2 business days",
// //   },
// //   {
// //     icon: Camera,
// //     title: "Professional Rendering",
// //     description: "High-quality product photography and 3D rendering for marketing and e-commerce",
// //     image: img6,
// //     details: "Studio photography, 360-degree product views, photorealistic 3D renders, and lifestyle imagery",
// //     timeline: "2-4 business days",
// //   },
// // ]

// // export default function ServiceSection() {
// //   const [currentSlide, setCurrentSlide] = useState(0)

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % services.length)
// //   }

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
// //   }

// //   const currentService = services[currentSlide]

// //   return (
// //     <div className="max-w-6xl mx-auto">
// //       <div className="text-center mb-4">
// //         <motion.h2
// //           className="text-xl sm:text-3xl font-bold  text-balance"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //         >
// //           Manufacturing Process Showcase
// //         </motion.h2>
// //         <motion.p
// //           className="text-sm sm:text-lg text-muted-foreground text-pretty"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.2 }}
// //         >
// //           Explore each step of our comprehensive jewelry manufacturing process
// //         </motion.p>
// //       </div>

// //       <div className="relative">
// //         <Card className="overflow-hidden py-0">
// //           <div className="relative h-96 md:h-[480px]">
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={currentSlide}
// //                 initial={{ opacity: 0, x: 300 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 exit={{ opacity: 0, x: -300 }}
// //                 transition={{ duration: 0.5, ease: "easeInOut" }}
// //                 className="absolute inset-0"
// //               >
// //                 <div className="grid md:grid-cols-2 h-full">
// //                   {/* Image Section */}
// //                   <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
// //                     <img
// //                       src={currentService.image || "/placeholder.svg"}
// //                       alt={currentService.title}
// //                       className="w-full h-full object-cover"
// //                     />
// //                     <div className="absolute inset-0 bg-black/20" />
// //                     <div className="absolute top-4 left-4">
// //                       <Badge className="bg-background/90 text-foreground">
// //                         {currentSlide + 1} of {services.length}
// //                       </Badge>
// //                     </div>
// //                   </div>

// //                   {/* Content Section */}
// //                   <div className="p-8 flex flex-col justify-center">
// //                     <div className="flex items-center gap-3 mb-4">
// //                       <div className="p-3 bg-primary/10 text-primary rounded-lg">
// //                         <currentService.icon className="w-6 h-6" />
// //                       </div>
// //                       <Badge variant="outline">{currentService.timeline}</Badge>
// //                     </div>

// //                     <h3 className="text-2xl font-bold mb-4">{currentService.title}</h3>

// //                     <p className="text-muted-foreground mb-6 text-pretty">{currentService.description}</p>

// //                     <div className="bg-muted/50 p-4 rounded-lg mb-6">
// //                       <p className="text-sm text-pretty">{currentService.details}</p>
// //                     </div>

// //                     <Button className="w-full">Learn More About {currentService.title}</Button>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>
// //         </Card>

// //         {/* Navigation Buttons */}
// //         <Button
// //           variant="outline"
// //           size="icon"
// //           className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
// //           onClick={prevSlide}
// //         >
// //           <ChevronLeft className="w-4 h-4" />
// //         </Button>

// //         <Button
// //           variant="outline"
// //           size="icon"
// //           className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
// //           onClick={nextSlide}
// //         >
// //           <ChevronRight className="w-4 h-4" />
// //         </Button>
// //       </div>

// //       {/* Slide Indicators */}
// //       <div className="flex justify-center gap-2 mt-6">
// //         {services.map((_, index) => (
// //           <button
// //             key={index}
           

// //             className={`cursor-pointer h-2 rounded-full transition-all duration-300 relative overflow-hidden ${
// //               index === currentSlide ? "bg-gray-800 w-8" : "bg-gray-400 w-2"
// //             }`}
// //             whileHover={{ scale: 1.2, backgroundColor: "#374151" }}
// //             whileTap={{ scale: 0.9 }}
// //             animate={{
// //               opacity: Math.abs(index - currentSlide) <= 7 ? 1 : 0.3,
// //             }}
// //             onClick={() => setCurrentSlide(index)}
// //           />
// //         ))}
// //       </div>



// //       {/* Auto-play indicator */}
// //       <div className="text-center mt-4">
// //         <p className="text-sm text-muted-foreground">
// //           Click indicators to jump to any step, or use arrow keys to navigate
// //         </p>
// //       </div>
// //     </div>
// //   )
// // }


// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { ChevronLeft, ChevronRight, Palette, Cog, Stamp, Package, List, Camera } from "lucide-react"

// import img1 from './servicesimage/cad-jewelry-design-software-3d-modeling.jpg'
// import img2 from './servicesimage/jewelry-manufacturing-cnc-machine-production.jpg'
// import img3 from './servicesimage/jewelry-laser-engraving-stamping-hallmark.jpg'
// import img4 from './servicesimage/luxury-jewelry-packaging-boxes-elegant.jpg'
// import img5 from './servicesimage/jewelry-documentation-certificates-specifications.jpg'
// import img6 from './servicesimage/jewelry-photography-studio-professional-rendering.jpg'



// const services = [
//   {
//     icon: Palette,
//     title: "CAD/CAM Design",
//     description: "Professional 3D modeling and computer-aided design for precise jewelry creation",
//     image: img1,
//     details:
//       "Advanced software tools including Rhino, Matrix, and KeyShot for creating detailed technical drawings and photorealistic 3D models",
//     timeline: "2-5 business days",
//   },
//   {
//     icon: Cog,
//     title: "Production",
//     description: "State-of-the-art manufacturing using cutting-edge technology and traditional craftsmanship",
//     image: img2,
//     details: "CNC machining, 3D printing, lost-wax casting, and precision assembly with quality control at every step",
//     timeline: "5-10 business days",
//   },
//   {
//     icon: Stamp,
//     title: "Stamping & Engraving",
//     description: "Custom hallmarking, logo stamping, and detailed engraving services",
//     image: img3,
//     details: "Laser engraving, hand stamping, quality assurance marking, and custom logo application",
//     timeline: "1-2 business days",
//   },
//   {
//     icon: Package,
//     title: "Luxury Packaging",
//     description: "Premium packaging solutions that reflect your brand's quality and elegance",
//     image: img4,
//     details: "Custom boxes, velvet pouches, certificates of authenticity, and branded presentation materials",
//     timeline: "1-3 business days",
//   },
//   {
//     icon: List,
//     title: "Documentation",
//     description: "Complete product documentation and catalog preparation for professional listings",
//     image: img5,
//     details: "Technical specifications, care instructions, authenticity certificates, and marketing materials",
//     timeline: "1-2 business days",
//   },
//   {
//     icon: Camera,
//     title: "Professional Rendering",
//     description: "High-quality product photography and 3D rendering for marketing and e-commerce",
//     image: img6,
//     details: "Studio photography, 360-degree product views, photorealistic 3D renders, and lifestyle imagery",
//     timeline: "2-4 business days",
//   },
// ]


// export default function ServiceSectionVariant5() {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % services.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
//   }

//   const currentService = services[currentSlide]

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 opacity-30">
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute border border-gray-200"
//               style={{
//                 width: Math.random() * 300 + 100,
//                 height: Math.random() * 300 + 100,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 borderRadius: i % 2 === 0 ? "50%" : "0%",
//               }}
//               animate={{
//                 rotate: [0, 360],
//                 scale: [1, 1.1, 1],
//                 opacity: [0.1, 0.3, 0.1],
//               }}
//               transition={{
//                 duration: Math.random() * 20 + 15,
//                 repeat: Number.POSITIVE_INFINITY,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>

//         {/* Subtle dot pattern */}
//         <div
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage: `radial-gradient(circle, #64748b 1px, transparent 1px)`,
//             backgroundSize: "30px 30px",
//           }}
//         />

//         <div className="absolute inset-0 opacity-20">
//           <div
//             className="w-full h-full"
//             style={{
//               backgroundImage: `
//                 radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 2px),
//                 radial-gradient(circle at 75px 75px, rgba(255,255,255,0.1) 1px, transparent 1px)
//               `,
//               backgroundSize: "100px 100px, 50px 50px",
//             }}
//           />
//         </div>

//         {/* Floating metallic elements */}
//         <div className="absolute inset-0">
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute bg-gradient-to-r from-gray-400/20 to-slate-400/20 backdrop-blur-sm"
//               style={{
//                 width: Math.random() * 120 + 60,
//                 height: Math.random() * 120 + 60,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 borderRadius: i % 2 === 0 ? "50%" : "0%",
//                 border: "1px solid rgba(255,255,255,0.1)",
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 x: [0, 10, 0],
//                 rotate: [0, 180, 360],
//                 opacity: [0.3, 0.6, 0.3],
//               }}
//               transition={{
//                 duration: Math.random() * 8 + 6,
//                 repeat: Number.POSITIVE_INFINITY,
//                 ease: "easeInOut",
//               }}
//             />
//           ))}
//         </div>


       
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 sm:py-10">
//         <motion.div
//           className="text-center mb-3 sm:mb-8"
          
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <motion.h2
//             className="text-xl sm:text-3xl  font-bold text-balance"
//             initial={{ letterSpacing: "0.5em", opacity: 0 }}
//             animate={{ letterSpacing: "normal", opacity: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//           >
//             Manufacturing Process Showcase
//           </motion.h2>
//           <motion.p
//             className="text-sm sm:text-lg text-muted-foreground text-pretty"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             Explore each step of our comprehensive jewelry manufacturing process
//           </motion.p>
//         </motion.div>

//         <div className="relative">
//           <motion.div
//             className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//             style={{
//               boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
//             }}
//           >
//             <div className="relative min-h-[100vh] lg:min-h-[470px]">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -50 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                   className="absolute inset-0"
//                 >
//                   <div className="grid lg:grid-cols-2 h-full">
//                     {/* Image Section */}
//                     <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-slate-100">
//                       <motion.img
//                         src={currentService.image}
//                         alt={currentService.title}
//                         className="w-full h-[53vh] md:h-full object-cover"
//                         initial={{ scale: 1.1, filter: "grayscale(100%)" }}
//                         animate={{ scale: 1, filter: "grayscale(0%)" }}
//                         transition={{ duration: 1.2, ease: "easeOut" }}
//                       />
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.5 }}
//                       />
//                       <motion.div
//                         className="absolute top-6 left-6"
//                         initial={{ opacity: 0, scale: 0 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
//                       >
//                         <Badge className="bg-background/90 text-foreground">
//                           {currentSlide + 1} of {services.length}
//                         </Badge>
//                       </motion.div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="p-5 sm:p-3 lg:px-8 flex flex-col justify-center">
//                       <motion.div
//                         className="flex items-center gap-4 mb-3"
//                         initial={{ opacity: 0, x: -30 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.4, duration: 0.6 }}
//                       >
//                         <motion.div
//                           className="p-3 bg-primary/10 text-primary rounded-lg"
                         
//                           transition={{ type: "spring", stiffness: 300 }}
//                         >
//                           <currentService.icon className="w-6 h-6" />
//                         </motion.div>
//                         <Badge variant="outline" className="border-slate-300 text-slate-700 text-sm px-3 py-1">
//                           {currentService.timeline}
//                         </Badge>
//                       </motion.div>

//                       <motion.h3
//                         className="text-md md:text-2xl font-bold mb-1 sm:mb-4 "
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.5, duration: 0.6 }}
//                       >
//                         {currentService.title}
//                       </motion.h3>

//                       <motion.p
//                         className="text-muted-foreground mb-2 sm:mb-5 text-pretty"
//                         initial={{ opacity: 0, y: 15 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.6, duration: 0.6 }}
//                       >
//                         {currentService.description}
//                       </motion.p>

//                       <motion.div
//                         className="bg-muted/50 p-4 rounded-lg mb-3 sm:mb-6"
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: 0.7, duration: 0.6 }}
//                       >
//                         <p className="text-sm text-pretty">{currentService.details}</p>
//                       </motion.div>

//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.8, duration: 0.6 }}
//                       >
//                         <Button
//                           className="w-full cursor-pointer  transition-all duration-300"
                         
//                         >
//                           Learn More About {currentService.title}
//                         </Button>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           {/* Navigation Buttons */}
//           <motion.div
//             className=" rounded-full cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
          
//           >
//             <Button
//               variant="outline"
//               size="icon"
//               className="cursor-pointer rounded-full "
//               onClick={prevSlide}
//             >
//               <ChevronLeft className="w-4 h-4" />
//             </Button>
//           </motion.div>

//           <motion.div
//             className="rounded-full  cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
//             whileHover={{ scale: 1.05, x: 3 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Button
//               variant="outline"
//               size="icon"
//               className="cursor-pointer rounded-full"
//               onClick={nextSlide}
//             >
//               <ChevronRight className="w-4 h-4" />
//             </Button>
//           </motion.div>
//         </div>

//         {/* Slide Indicators */}
//         <div className="flex justify-center gap-2 mt-5">
//           {services.map((_, index) => (
//             <motion.button
//               key={index}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentSlide ? "bg-slate-800 w-8" : "bg-slate-300 w-2 hover:bg-slate-400"
//               }`}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               animate={{
//                 y: index === currentSlide ? -1 : 0,
//               }}
//               onClick={() => setCurrentSlide(index)}
//             />
//           ))}
//         </div>

//         <motion.div
//           className="text-center mt-3"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//         >
//           <p className="text-sm text-slate-500">Click indicators to jump to any step, or use arrow keys to navigate</p>
//         </motion.div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Palette, Cog, Stamp, Package, List, Camera } from "lucide-react"

import img1 from './servicesimage/cad-jewelry-design-software-3d-modeling.jpg'
import img2 from './servicesimage/jewelry-manufacturing-cnc-machine-production.jpg'
import img3 from './servicesimage/jewelry-laser-engraving-stamping-hallmark.jpg'
import img4 from './servicesimage/luxury-jewelry-packaging-boxes-elegant.jpg'
import img5 from './servicesimage/jewelry-documentation-certificates-specifications.jpg'
import img6 from './servicesimage/jewelry-photography-studio-professional-rendering.jpg'
import { useNavigate } from "react-router-dom"



const services = [
  {
    icon: Palette,
    title: "CAD/CAM Design",
    description: "Professional 3D modeling and computer-aided design for precise jewelry creation",
    image: img1,
    details:
      "Advanced software tools including Rhino, Matrix, and KeyShot for creating detailed technical drawings and photorealistic 3D models",
    timeline: "2-5 business days",
  },
  {
    icon: Cog,
    title: "Production",
    description: "State-of-the-art manufacturing using cutting-edge technology and traditional craftsmanship",
    image: img2,
    details: "CNC machining, 3D printing, lost-wax casting, and precision assembly with quality control at every step",
    timeline: "5-10 business days",
  },
  {
    icon: Stamp,
    title: "Stamping & Engraving",
    description: "Custom hallmarking, logo stamping, and detailed engraving services",
    image: img3,
    details: "Laser engraving, hand stamping, quality assurance marking, and custom logo application",
    timeline: "1-2 business days",
  },
  {
    icon: Package,
    title: "Luxury Packaging",
    description: "Premium packaging solutions that reflect your brand's quality and elegance",
    image: img4,
    details: "Custom boxes, velvet pouches, certificates of authenticity, and branded presentation materials",
    timeline: "1-3 business days",
  },
  {
    icon: List,
    title: "Documentation",
    description: "Complete product documentation and catalog preparation for professional listings",
    image: img5,
    details: "Technical specifications, care instructions, authenticity certificates, and marketing materials",
    timeline: "1-2 business days",
  },
  {
    icon: Camera,
    title: "Professional Rendering",
    description: "High-quality product photography and 3D rendering for marketing and e-commerce",
    image: img6,
    details: "Studio photography, 360-degree product views, photorealistic 3D renders, and lifestyle imagery",
    timeline: "2-4 business days",
  },
]
export default function ServiceSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const navigate = useNavigate()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  const currentService = services[currentSlide]

  return (
    <div
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-gray-200"
              style={{
                width: Math.random() * 200 + 80,
                height: Math.random() * 200 + 80,
                left: i < 4 ? `${60 + Math.random() * 40}%` : `${Math.random() * 30}%`,
                top: i < 4 ? `${Math.random() * 30}%` : `${60 + Math.random() * 40}%`,
                borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "20%" : "0%",
              }}
              initial={{ rotate: 0, scale: 1, opacity: 0.1 }}
              animate={
                isInView
                  ? {
                      rotate: [0, 180],
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.4, 0.1],
                    }
                  : {}
              }
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: 0,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #64748b 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-gray-400/20 to-slate-400/20 backdrop-blur-sm"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${(i * 15) % 100}%`,
                top: `${(i * 12) % 100}%`,
                borderRadius: i % 2 === 0 ? "50%" : "10px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              initial={{ y: 0, x: 0, rotate: 0, opacity: 0.3 }}
              animate={
                isInView
                  ? {
                      y: [-10, 10, -10],
                      x: [-5, 15, -5],
                      rotate: [0, 90, 180],
                      opacity: [0.3, 0.7, 0.3],
                    }
                  : {}
              }
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: 0,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <motion.div
          className="text-center mb-3 sm:mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-xl sm:text-3xl font-bold text-balance"
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={isInView ? { letterSpacing: "normal", opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Manufacturing Process Showcase
          </motion.h2>
          <motion.p
            className="text-sm sm:text-lg text-muted-foreground text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Explore each step of our comprehensive jewelry manufacturing process
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            style={{
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
            }}
          >
            <div className="relative min-h-[100vh] lg:min-h-[470px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="grid lg:grid-cols-2 h-full">
                    {/* Image Section */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-slate-100">
                      <motion.img
                        src={currentService.image}
                        alt={currentService.title}
                        className="w-full h-[53vh] md:h-full object-cover"
                        initial={{ scale: 1.1, filter: "grayscale(100%)" }}
                        animate={{ scale: 1, filter: "grayscale(0%)" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      />
                      <motion.div
                        className="absolute top-6 left-6"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      >
                        <Badge className="bg-background/90 text-foreground">
                          {currentSlide + 1} of {services.length}
                        </Badge>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-3 lg:px-8 flex flex-col justify-center">
                      <motion.div
                        className="flex items-center gap-4 mb-3"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        <motion.div
                          className="p-3 bg-primary/10 text-primary rounded-lg"
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <currentService.icon className="w-6 h-6" />
                        </motion.div>
                        <Badge variant="outline" className="border-slate-300 text-slate-700 text-sm px-3 py-1">
                          {currentService.timeline}
                        </Badge>
                      </motion.div>

                      <motion.h3
                        className="text-md md:text-2xl font-bold mb-1 sm:mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        {currentService.title}
                      </motion.h3>

                      <motion.p
                        className="text-muted-foreground mb-2 sm:mb-5 text-pretty"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        {currentService.description}
                      </motion.p>

                      <motion.div
                        className="bg-muted/50 p-4 rounded-lg mb-3 sm:mb-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                      >
                        <p className="text-sm text-pretty">{currentService.details}</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        <Button className="w-full cursor-pointer transition-all duration-300" onClick={()=>{navigate("/jewelry-manufacturing-process")}}>
                          Learn More About {currentService.title}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div className="rounded-full cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm">
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full bg-transparent"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            className="rounded-full cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full bg-transparent"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {services.map((_, index) => (
            <motion.button
              key={index}
              className={` h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-slate-800 w-8" : "bg-slate-300 w-2 hover:bg-slate-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: index === currentSlide ? -1 : 0,
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="text-sm text-slate-500">Click indicators to jump to any step, or use arrow keys to navigate</p>
        </motion.div>
      </div>
    </div>
  )
}
