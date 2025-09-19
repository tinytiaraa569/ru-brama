import React from 'react'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gem, Palette, Shield, Star, Users, Zap } from "lucide-react"
import aboutsection2img from './aboutsection2.jpg'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
}

const Aboutsection2 = () => {
  return (
    <div>
         {/* Mission & Values Section */}
      <motion.section
        className="py-8 sm:py-14 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-2 sm:mb-4">
                Our Philosophy
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-balance">Where Your Vision Meets Our Mastery</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                We believe that every piece of jewelry tells a unique story. That's why we've built our entire business
                around a simple principle: your materials, your design, our craftsmanship.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-lg">Your design stays yours - complete ownership</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-primary" />
                  <span className="text-lg">Premium craftsmanship with every piece</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-lg">Collaborative design process</span>
                </div>
              </div>
            
            <div className='my-6'>

              <Button className="px-5 py-2 cursor-pointer">
                Explore Manufacturing
              </Button>
            </div>
            </motion.div>

            <motion.div variants={scaleIn} className="relative">
              <Card className="overflow-hidden p-0">
                <CardContent className="p-0">
                  <img src={aboutsection2img} alt="Artisan at work" className="w-full h-96 object-cover" />
                </CardContent>
              </Card>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Aboutsection2