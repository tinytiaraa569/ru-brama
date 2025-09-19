import React from 'react'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"


const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}




const AboutCta = () => {
  return (
    <div>
          {/* CTA Section */}
      <motion.section
        className="py-20 sm:py-24 bg-primary text-primary-foreground"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className=" text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6 text-balance">Ready to Create Something Extraordinary?</h2>
          <p className="text-sm sm:text-xl mb-8 text-pretty opacity-90">
            Let's discuss your project and bring your jewelry vision to life with our expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button  variant="secondary" className="cursor-pointer text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-6">
                Start Your Project
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                
                variant="outline"
                className="cursor-pointer text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default AboutCta