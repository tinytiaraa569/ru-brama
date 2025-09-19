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
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contact@rubrama.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Trusted by 10,000+ businesses worldwide</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TopBar