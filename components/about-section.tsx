"use client"

import { motion } from "framer-motion"
import { Shield, Code, Smartphone } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            I'm a cybersecurity enthusiast and full-stack developer with expertise in penetration testing, network
            security, and secure application development. My passion lies in building robust, secure systems and
            applications that protect against modern threats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="h-full border-none bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
                <p className="text-muted-foreground">
                  Specialized in penetration testing, vulnerability assessment, digital forensics, and implementing
                  robust security measures to protect against cyber threats.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={1} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="h-full border-none bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p className="text-muted-foreground">
                  Full-stack developer with expertise in ReactJS, NodeJS, and modern web technologies. Building secure,
                  scalable, and user-friendly web applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={2} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="h-full border-none bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">App Development</h3>
                <p className="text-muted-foreground">
                  Creating mobile applications with a focus on security, performance, and user experience. Developing
                  AI-driven solutions for modern challenges.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

