// // // "use client"

// // // import { motion } from "framer-motion"
// // // import { Card, CardContent } from "@/components/ui/card"
// // // import { Badge } from "@/components/ui/badge"
// // // import { Button } from "@/components/ui/button"
// // // import { Users, Factory, Award, ArrowRight, CheckCircle ,Globe } from "lucide-react"
// // // import homesec2img from './homesec2images/homesec2.jpg'
// // // import { useEffect, useState } from "react"

// // // export function AnimatedCounter({ value, duration = 2, className = "" }) {
// // //   const [count, setCount] = useState(0)

// // //   // Extract numeric value from string (e.g., "50+" -> 50, "15,000" -> 15000)
// // //   const numericValue = Number.parseInt(value.replace(/[^\d]/g, "")) || 0
// // //   const suffix = value.replace(/[\d,]/g, "") // Get non-numeric parts like "+", "ISO", etc.
// // //   const hasComma = value.includes(",")

// // //   useEffect(() => {
// // //     let startTime
// // //     let animationFrame

// // //     const animate = (timestamp) => {
// // //       if (!startTime) startTime = timestamp
// // //       const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

// // //       // Easing function for smooth animation
// // //       const easeOutQuart = 1 - Math.pow(1 - progress, 4)
// // //       const currentCount = Math.floor(easeOutQuart * numericValue)

// // //       setCount(currentCount)

// // //       if (progress < 1) {
// // //         animationFrame = requestAnimationFrame(animate)
// // //       }
// // //     }

// // //     animationFrame = requestAnimationFrame(animate)

// // //     return () => {
// // //       if (animationFrame) {
// // //         cancelAnimationFrame(animationFrame)
// // //       }
// // //     }
// // //   }, [numericValue, duration])

// // //   const formatNumber = (num) => {
// // //     if (hasComma && num >= 1000) {
// // //       return num.toLocaleString()
// // //     }
// // //     return num.toString()
// // //   }

// // //   return (
// // //     <motion.div
// // //       className={className}
// // //       initial={{ opacity: 0, scale: 0.5 }}
// // //       whileInView={{ opacity: 1, scale: 1 }}
// // //       transition={{ duration: 0.5 }}
// // //     >
// // //       {formatNumber(count)}
// // //       {suffix}
// // //     </motion.div>
// // //   )
// // // }

// // //  function Homesec2() {
// // //   const stats = [
// // //     {
// // //       icon: Users,
// // //       value: "50+",
// // //       label: "Skilled Artisans",
// // //       description: "Master craftsmen with decades of experience",
// // //     },
// // //     {
// // //       icon: Factory,
// // //       value: "15,000",
// // //       label: "Sq Ft Facility",
// // //       description: "State-of-the-art manufacturing space",
// // //     },
// // //     {
// // //       icon: Award,
// // //       value: "ISO 9001",
// // //       label: "Certified Quality",
// // //       description: "International quality standards",
// // //     },
// // //     {
// // //       icon: Globe,
// // //       value: "25+",
// // //       label: "Countries Served",
// // //       description: "Global export network and partnerships",
// // //     },
// // //   ]

// // //   const features = [
// // //     "Advanced CAD/CAM Technology",
// // //     "Precision Casting Equipment",
// // //     "Multi-stage Quality Control",
// // //     "Export Documentation",
// // //     "Custom Design Capabilities",
// // //     "Sustainable Practices",
// // //   ]

// // //   return (
// // //     <section className="py-8 sm:py-14 bg-gradient-to-br from-background via-card to-muted">
// // //       <div className="container mx-auto px-4">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           className="text-center mb-6"
// // //         >
// // //           <Badge variant="secondary" className="mb-2 text-sm font-medium px-3 shadow-2xs">
// // //             Manufacturing Excellence
// // //           </Badge>
// // //           <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground mb-1 text-balance">
// // //             World-Class Infrastructure
// // //           </h2>
// // //           <p className="text-sm sm:text-md md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
// // //             Our state-of-the-art facility combines traditional craftsmanship with cutting-edge technology to deliver
// // //             jewelry of unparalleled quality and precision.
// // //           </p>
// // //         </motion.div>

// // //          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
// // //           {stats.map((stat, index) => (
// // //             <motion.div
// // //               key={index}
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.6, delay: index * 0.1 }}
// // //             >
// // //               <Card className="h-full py-2 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden group">
// // //                {/* Organic shape decoration */}
// // //                 <div className="absolute -top-5 -right-10 w-32 h-32 bg-gradient-to-br from-black/05 to-black/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
                
// // //                 <CardContent className="p-4 md:p-5 text-center">
// // //                   <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
// // //                     <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
// // //                   </div>
// // //                   <AnimatedCounter value={stat.value} className="text-md md:text-2xl font-bold text-primary mb-1" />
// // //                   <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1 ">{stat.label}</h3>
// // //                   <p className="text-xs md:text-base text-muted-foreground text-pretty hidden sm:block">
// // //                     {stat.description}
// // //                   </p>
// // //                 </CardContent>
// // //               </Card>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //           >
// // //             <div className="relative">
// // //               <img
// // //                 src={homesec2img}
// // //                 alt="Modern Manufacturing Facility"
// // //                 className="rounded-2xl shadow-2xl w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
// // //               />
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
// // //             </div>
// // //           </motion.div>

// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.6, delay: 0.2 }}
// // //             className="space-y-6"
// // //           >
// // //             <h3 className="text-3xl font-bold text-foreground">Export Quality Standards</h3>
// // //             <p className="text-lg text-muted-foreground text-pretty">
// // //               Every piece undergoes rigorous quality control processes, ensuring our jewelry meets international export
// // //               standards and exceeds customer expectations worldwide.
// // //             </p>

// // //             <div className="grid grid-cols-1 gap-3">
// // //               {features.map((feature, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   initial={{ opacity: 0, x: 20 }}
// // //                   whileInView={{ opacity: 1, x: 0 }}
// // //                   transition={{ duration: 0.4, delay: index * 0.1 }}
// // //                   className="flex items-center gap-3"
// // //                 >
// // //                   <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
// // //                   <span className="text-foreground font-medium">{feature}</span>
// // //                 </motion.div>
// // //               ))}
// // //             </div>

// // //             <Button size="lg" className="mt-8 group">
// // //               Explore Our Process
// // //               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
// // //             </Button>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }


// // // export default Homesec2


// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Users, Factory, Award, ArrowRight, CheckCircle, Globe } from "lucide-react"
// import homesec2img from "./homesec2images/homesec2.jpg"
// import { useEffect, useState, useRef } from "react"

// export function AnimatedCounter({ value, duration = 2, className = "" }) {
//   const [count, setCount] = useState(0)
//   const [shouldAnimate, setShouldAnimate] = useState(false)
//   const ref = useRef(null)

//   // Extract numeric value from string (e.g., "50+" -> 50, "15,000" -> 15000)
//   const numericValue = Number.parseInt(value.replace(/[^\d]/g, "")) || 0
//   const suffix = value.replace(/[\d,]/g, "") // Get non-numeric parts like "+", "ISO", etc.
//   const hasComma = value.includes(",")

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !shouldAnimate) {
//           setShouldAnimate(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (ref.current) {
//       observer.observe(ref.current)
//     }

//     return () => observer.disconnect()
//   }, [shouldAnimate])

//   useEffect(() => {
//     if (!shouldAnimate) return

//     let startTime
//     let animationFrame

//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp
//       const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

//       // Easing function for smooth animation
//       const easeOutQuart = 1 - Math.pow(1 - progress, 4)
//       const currentCount = Math.floor(easeOutQuart * numericValue)

//       setCount(currentCount)

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate)
//       }
//     }

//     animationFrame = requestAnimationFrame(animate)

//     return () => {
//       if (animationFrame) {
//         cancelAnimationFrame(animationFrame)
//       }
//     }
//   }, [numericValue, duration, shouldAnimate])

//   const formatNumber = (num) => {
//     if (hasComma && num >= 1000) {
//       return num.toLocaleString()
//     }
//     return num.toString()
//   }

//   return (
//     <motion.div
//       ref={ref}
//       className={className}
//       initial={{ opacity: 0, scale: 0.5 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {formatNumber(count)}
//       {suffix}
//     </motion.div>
//   )
// }

// function Homesec2() {
//   const stats = [
//     {
//       icon: Users,
//       value: "50+",
//       label: "Skilled Artisans",
//       description: "Master craftsmen with decades of experience",
//     },
//     {
//       icon: Factory,
//       value: "15,000",
//       label: "Sq Ft Facility",
//       description: "State-of-the-art manufacturing space",
//     },
//     {
//       icon: Award,
//       value: "ISO 9001",
//       label: "Certified Quality",
//       description: "International quality standards",
//     },
//     {
//       icon: Globe,
//       value: "25+",
//       label: "Countries Served",
//       description: "Global export network and partnerships",
//     },
//   ]

//   const features = [
//     "Advanced CAD/CAM Technology",
//     "Precision Casting Equipment",
//     "Multi-stage Quality Control",
//     "Export Documentation",
//     "Custom Design Capabilities",
//     "Sustainable Practices",
//   ]

//   return (
//     <section className="py-8 sm:py-14 bg-gradient-to-br from-background via-card to-muted">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-6"
//         >
//           <Badge variant="secondary" className="mb-2 text-sm font-medium px-3 shadow-2xs">
//             Manufacturing Excellence
//           </Badge>
//           <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground mb-1 text-balance">
//             World-Class Infrastructure
//           </h2>
//           <p className="text-sm sm:text-md md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
//             Our state-of-the-art facility combines traditional craftsmanship with cutting-edge technology to deliver
//             jewelry of unparalleled quality and precision.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <Card className="h-full py-2 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden group">
//                 {/* Organic shape decoration */}
//                 <div className="absolute -top-5 -right-10 w-32 h-32 bg-gradient-to-br from-black/05 to-black/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />

//                 <CardContent className="p-4 md:p-5 text-center">
//                   <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
//                     <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
//                   </div>
//                   <AnimatedCounter value={stat.value} className="text-md md:text-2xl font-bold text-primary mb-1" />
//                   <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1 ">{stat.label}</h3>
//                   <p className="text-xs md:text-base text-muted-foreground text-pretty hidden sm:block">
//                     {stat.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="relative">
//               <img
//                 src={homesec2img || "/placeholder.svg"}
//                 alt="Modern Manufacturing Facility"
//                 className="rounded-2xl shadow-2xl w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <h3 className="text-3xl font-bold text-foreground">Export Quality Standards</h3>
//             <p className="text-lg text-muted-foreground text-pretty">
//               Every piece undergoes rigorous quality control processes, ensuring our jewelry meets international export
//               standards and exceeds customer expectations worldwide.
//             </p>

//             <div className="grid grid-cols-1 gap-3">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   className="flex items-center gap-3"
//                 >
//                   <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
//                   <span className="text-foreground font-medium">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>

//             <Button size="lg" className="mt-8 group">
//               Explore Our Process
//               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Homesec2

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Factory, Award, ArrowRight, CheckCircle, Globe } from "lucide-react"
import homesec2img from "./homesec2images/homesec2.jpg"
import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

export function AnimatedCounter({ value, duration = 2, className = "" }) {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const ref = useRef(null)

  // Extract numeric value
  const numericValue = Number.parseInt(value.replace(/[^\d]/g, "")) || 0
  const suffix = value.replace(/[\d,]/g, "")
  const hasComma = value.includes(",")

  const isNumeric = !isNaN(numericValue) && numericValue > 0

  useEffect(() => {
    if (!isNumeric) return // skip animation for non-numeric values
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime
          let animationFrame

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(easeOutQuart * numericValue)

            setCount(currentCount)

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate)
            }
          }

          // restart counter each time visible
          setCount(0)
          animationFrame = requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [numericValue, duration])

  const formatNumber = (num) => {
    if (hasComma && num >= 1000) {
      return num.toLocaleString()
    }
    return num.toString()
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
     {isNumeric ? (
        <>
          {formatNumber(count)}
          {suffix}
        </>
      ) : (
        value // plain text if not numeric
      )}
    </motion.div>
  )
}

function Homesec2() {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Skilled Artisans",
      description: "Master craftsmen with decades of experience",
    },
    {
      icon: Factory,
      value: "4,000",
      label: "Sq Ft Facility",
      description: "State-of-the-art manufacturing space",
    },
    {
      icon: Award,
      value: "High",
      label: "High Standards",
      description: "Committed to uncompromising global quality benchmarks",
    },
    {
      icon: Globe,
      value: "100%",
      label: "Facility",
      description: "In-house facility ensuring full control of production",
    },
  ]

  const features = [
    "Advanced CAD/CAM Technology",
    "Precision Casting Equipment",
    "Multi-stage Quality Control",
    "Export Documentation",
    "Custom Design Capabilities",
    "Sustainable Practices",
  ]

  return (
    <section className="py-8 sm:py-14 bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <Badge variant="secondary" className="mb-2 text-sm font-medium px-3 shadow-2xs">
            Manufacturing Excellence
          </Badge>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground mb-1 text-balance">
            World-Class Infrastructure
          </h2>
          <p className="text-sm sm:text-md md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our state-of-the-art facility combines traditional craftsmanship with cutting-edge technology to deliver
            jewelry of unparalleled quality and precision.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-2 md:mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full py-2 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden group">
                <div className="absolute -top-5 -right-10 w-32 h-32 bg-gradient-to-br from-black/05 to-black/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
                <CardContent className="p-4 md:p-5 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <AnimatedCounter value={stat.value} className="text-md md:text-2xl font-bold text-primary mb-1" />
                  <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1">{stat.label}</h3>
                  <p className="text-xs md:text-base text-muted-foreground text-pretty hidden sm:block">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        {/* <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={homesec2img || "/placeholder.svg"}
                alt="Modern Manufacturing Facility"
                className="rounded-2xl shadow-2xl w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground">Export Quality Standards</h3>
            <p className="text-lg text-muted-foreground text-pretty">
              Every piece undergoes rigorous quality control processes, ensuring our jewelry meets international export
              standards and exceeds customer expectations worldwide.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="mt-8 group cursor-pointer" onClick={()=>navigate("/jewelry-manufacturing-process")}>
              Explore Our Process
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div> */}
      </div>
    </section>
  )
}

export default Homesec2
