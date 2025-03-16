"use client"

import { motion } from "framer-motion"
import { Shield, Code } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center"
      >
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-80 blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-50 animate-pulse"></div>
          <Shield className="w-6 h-6 text-white relative z-10" />
          <Code className="w-4 h-4 text-white absolute z-20 bottom-1 right-1" />
        </div>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Kedar Bajaj
        </motion.span>
      </motion.div>
    </Link>
  )
}

