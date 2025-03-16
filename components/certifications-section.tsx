"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      title: "Cloud Fundamental",
      issuer: "AWS",
      date: "2023",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      id: 2,
      title: "AWS Machine Learning Essentials",
      issuer: "AWS",
      date: "2023",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      id: 3,
      title: "Network Security Fundamentals",
      issuer: "Cisco",
      date: "2022",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      id: 4,
      title: "Palo Alto Cybersecurity Intern",
      issuer: "Palo Alto Networks",
      date: "2024",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
  ]

  const achievements = [
    "Developed a security tool that identified 15+ critical vulnerabilities in a client's web application",
    "Contributed to open-source security projects with over 500+ stars on GitHub",
    "Completed 10+ cybersecurity challenges on HackTheBox and TryHackMe platforms",
    "Recognized for outstanding performance during Palo Alto Networks internship",
  ]

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications & Achievements</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Professional certifications and notable achievements in cybersecurity and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-none bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">{cert.icon}</div>
                        <div>
                          <h4 className="font-bold">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Achievements</h3>
            <Card className="border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

