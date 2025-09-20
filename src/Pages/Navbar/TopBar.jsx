import React from 'react'
import { motion } from "framer-motion"
import {  Phone, Mail } from "lucide-react"

const TopBar = () => {
  return (
    <div>
        {/* Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-primary text-primary-foreground py-2 text-xs sm:text-sm"
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
              <a href="tel:+918657062519">

            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 8657062519</span>
            </div>
              </a>
          <a href="mailto:sanjay@ru_brama.com">

            <div className="flex items-center space-x-2">

              <Mail className="w-4 h-4" />
              <span>sanjay@ru_brama.com</span>
            </div>
          </a>

          </div>
          <div className="hidden md:block">
            <span>White label your Precious Jewelry</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TopBar