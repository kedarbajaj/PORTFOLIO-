"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <Logo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-4 mb-4 md:mb-0"
          >
            <Link href="mailto:kedarbajaj475@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://github.com/kedarbajaj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kedar-bajaj-444191250/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Kedar Bajaj. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

