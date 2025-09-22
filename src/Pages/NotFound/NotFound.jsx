"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const DecorativeDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex items-center justify-center mb-8"
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "5rem" }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-gray-800"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
        className="w-4 h-4 border-2 border-gray-800 rounded-full mx-3 bg-white"
      ></motion.div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "5rem" }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="h-0.5 bg-gradient-to-l from-transparent via-gray-800 to-gray-800"
      ></motion.div>
    </motion.div>
  )
}

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-background relative overflow-hidden">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute -left-40 top-40 w-64 h-64 bg-gradient-to-br from-gray-100/40 to-gray-200/30 rounded-full blur-3xl z-0"
      ></motion.div>
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute -right-20 top-40 w-64 h-64 bg-gradient-to-br from-gray-100/40 to-gray-200/30 rounded-full blur-3xl z-0"
      ></motion.div>

      <div className="text-center px-4 max-w-md mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-8xl font-bold text-gray-900 mb-4">404</h1>
        </motion.div>

        <DecorativeDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/">
            <Button className="cursor-pointer bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-2">Go Home</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
