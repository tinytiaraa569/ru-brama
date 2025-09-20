// "use client"

// import { Card } from "@/components/ui/card"
// import { Gem, Award, Users, Shield } from "lucide-react"
// import { motion, useInView, animate } from "framer-motion"
// import { useRef, useEffect, useState } from "react"

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// }

// // ✅ Smooth Counter with Framer Motion animate()
// export function Counter({ end, duration = 2, suffix = "", prefix = "", className = "" }) {
//   const [count, setCount] = useState(0)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })

//   useEffect(() => {
//     if (!isInView) return
//     const controls = animate(0, end, {
//       duration,
//       ease: "easeOut", // smooth easing
//       onUpdate: (latest) => setCount(Math.floor(latest)),
//     })
//     return () => controls.stop()
//   }, [end, duration, isInView])

//   return (
//     <motion.span
//       ref={ref}
//       className={className}
//       initial={{ opacity: 0, y: 20, scale: 0.95 }}
//       animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       {prefix}
//       {count}
//       {suffix}
//     </motion.span>
//   )
// }

// const ContactSection2 = () => {
//   return (
//     <div className="min-h-auto bg-gradient-to-br from-muted/90 via-background to-muted/90 dark pb-10">
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="py-4 sm:py-8 md:py-12 px-6"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.div variants={itemVariants} className="text-center mb-4 md:mb-10">
//             <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-foreground mb-1">
//               About Our Craft
//             </h2>
//             <p className="text-sm sm:text-md md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//               With decades of expertise in jewelry manufacturing, we combine traditional
//               craftsmanship with modern precision to create exceptional pieces that tell
//               your story.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: Award, number: 25, suffix: "+", desc: "Years Experience" },
//               { icon: Users, number: 500, suffix: "+", desc: "Satisfied Clients" },
//               { icon: Gem, number: 10000, suffix: "+", desc: "Pieces Crafted" },
//               { icon: Shield, number: 100, suffix: "%", desc: "Quality Assured" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.07, rotate: 1 }}
//                 className="text-center"
//               >
//                 <Card className="gap-3 sm:gap-6 p-8 bg-card/50 backdrop-blur-sm border-border/60 hover:bg-card/80 transition-all duration-300 shadow-md">
//                   <motion.div
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     transition={{ type: "spring", stiffness: 120, damping: 10 }}
//                   >
//                     <stat.icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 text-white" />
//                   </motion.div>
//                   <Counter
//                     end={stat.number}
//                     suffix={stat.suffix}
//                     className="text-lg sm:text-2xl font-semibold text-foreground mb-2 block"
//                   />
//                   <p className="text-muted-foreground">{stat.desc}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   )
// }

// export default ContactSection2


"use client"

import { Card } from "@/components/ui/card"
import { Gem, Award, Users, Shield } from "lucide-react"
import { motion, useInView, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"

// Wave animation from bottom
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const waveVariants = {
  hidden: { opacity: 0, y: 100, rotateX: 90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export function Counter({ end, duration = 2, suffix = "", prefix = "", className = "" }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, end, {
      duration,
      ease: "easeInOut",
      onUpdate: (latest) => setCount(Math.floor(latest)),
    })
    return () => controls.stop()
  }, [end, duration, isInView])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30, rotateY: 90 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              rotateY: 0,
            }
          : {}
      }
      transition={{
        duration: 0.6,
        ease: "backOut",
        delay: 0.4,
      }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.span>
  )
}

const ContactSection2 = () => {
  return (
    <div className="min-h-auto bg-gradient-to-br from-muted/90 via-background to-muted/90 dark pb-10">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.2 }}
        className="py-6 sm:py-8 md:py-12 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true }}
            className="text-center mb-4 md:mb-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: "backOut",
                  delay: 0.2,
                },
              }}
              className="text-lg sm:text-2xl md:text-4xl font-bold text-foreground mb-1"
            >
              About Our Craft
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.4,
                },
              }}
              className="text-sm sm:text-md md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              With decades of expertise in jewelry manufacturing, we combine traditional craftsmanship with modern
              precision to create exceptional pieces that tell your story.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, number: 25, suffix: "+", desc: "Years Experience" },
              { icon: Users, number: 500, suffix: "+", desc: "Satisfied Clients" },
              { icon: Gem, number: 10000, suffix: "+", desc: "Pieces Crafted" },
              { icon: Shield, number: 100, suffix: "%", desc: "Quality Assured" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={waveVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="text-center"
              >
                <Card className="gap-3 sm:gap-6 p-8 bg-card/50 backdrop-blur-sm border-border/60 hover:bg-card/80 transition-all duration-300 shadow-md">
                  <motion.div
                    initial={{ scale: 0, rotateY: -90 }}
                    whileInView={{
                      scale: 1,
                      rotateY: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: index * 0.1 + 0.3,
                      },
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotateY: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <stat.icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 text-white" />
                  </motion.div>
                  <Counter
                    end={stat.number}
                    suffix={stat.suffix}
                    className="text-lg sm:text-2xl font-semibold text-foreground mb-2 block"
                  />
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.4 }}
                    className="text-muted-foreground"
                  >
                    {stat.desc}
                  </motion.p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactSection2
