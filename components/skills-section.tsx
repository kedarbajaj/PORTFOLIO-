"use client"

import { motion } from "framer-motion"
import { Shield, Code, Database, Cloud, Network, Terminal } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const cybersecuritySkills = [
    { name: "Penetration Testing", level: 90 },
    { name: "OWASP Top 10", level: 85 },
    { name: "Threat Intelligence", level: 80 },
    { name: "Digital Forensics", level: 75 },
  ]

  const webDevSkills = [
    { name: "ReactJS", level: 90 },
    { name: "NodeJS", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "ExpressJS", level: 80 },
  ]

  const otherSkills = [
    { name: "Python", level: 85 },
    { name: "C/C++", level: 75 },
    { name: "AWS Security", level: 70 },
    { name: "Azure Security", level: 65 },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            My technical expertise spans cybersecurity, web development, and programming languages, allowing me to build
            secure and efficient solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-none bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold">Cybersecurity</h3>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {cybersecuritySkills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>

          <Card className="border-none bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Code className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold">Web Development</h3>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {webDevSkills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>

          <Card className="border-none bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Terminal className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold">Other Skills</h3>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {otherSkills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <span className="text-sm text-center">Security Tools</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <span className="text-sm text-center">Databases</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Cloud className="h-8 w-8 text-primary" />
            </div>
            <span className="text-sm text-center">Cloud Security</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Network className="h-8 w-8 text-primary" />
            </div>
            <span className="text-sm text-center">Networking</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

