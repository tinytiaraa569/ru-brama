"use client"

import { motion } from "framer-motion"

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const ContactBusinessVariant3 = () => {
  return (
    <motion.div
      className="py-6 sm:py-8 md:py-12 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      {/* Address Details */}
      <motion.section variants={scaleIn} className="py-2 sm:py-3 md:py-6 px-6">
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-md sm:text-xl md:text-2xl font-bold text-foreground mb-3">{"Workshop Address"}</h3>
            <p className="text-sm sm:text-md text-muted-foreground font-light leading-relaxed">
              {
                "Plot F-11 & 12-1, Second Floor, Admin Bldg., MIDC (Marol), Opp. Seepz Main Gate, WICEL, Andheri(East), Mumbai-400093"
              }
            </p>
          </div>
        </div>
      </motion.section>

      {/* Business Hours */}
      <motion.section variants={scaleIn} className="py-2 sm:py-3 md:py-6 px-6">
        <div className="text-center">
          <h3 className="text-md sm:text-xl md:text-2xl font-bold text-foreground mb-3">{"Business Hours"}</h3>
          <div className="text-sm sm:text-md space-y-2 text-muted-foreground font-light">
            <p>{"Monday - Friday: 9:00 AM - 7:00 PM"}</p>
            <p>{"Saturday: 9:00 AM - 5:00 PM"}</p>
            <p>{"Sunday: By Appointment"}</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default ContactBusinessVariant3
