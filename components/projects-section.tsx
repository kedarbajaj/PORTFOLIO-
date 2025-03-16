"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Web Application Security Scanner",
      description: "A scanner to detect SQL injection, XSS, and other web vulnerabilities.",
      image: "/placeholder.svg?height=300&width=500",
      category: "cybersecurity",
      tags: ["Python", "Security", "Web"],
      github: "https://github.com/kedarbajaj",
    },
    {
      id: 2,
      title: "Threat Detection System",
      description: "A system to identify and mitigate potential cyber threats in real-time.",
      image: "/placeholder.svg?height=300&width=500",
      category: "cybersecurity",
      tags: ["Python", "Machine Learning", "Security"],
      github: "https://github.com/kedarbajaj",
    },
    {
      id: 3,
      title: "E-Commerce Web App",
      description: "Built using ReactJS, NodeJS, PostgreSQL with authentication and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      tags: ["ReactJS", "NodeJS", "PostgreSQL"],
      github: "https://github.com/kedarbajaj",
    },
    {
      id: 4,
      title: "Logistics Management System",
      description: "A scalable platform with real-time tracking, admin/vendor portals.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web  admin/vendor portals.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      tags: ["ReactJS", "NodeJS", "MongoDB"],
      github: "https://github.com/kedarbajaj",
    },
    {
      id: 5,
      title: "Network Port Scanner",
      description: "A high-speed security tool using NodeJS to detect vulnerabilities.",
      image: "/placeholder.svg?height=300&width=500",
      category: "cybersecurity",
      tags: ["NodeJS", "Network Security", "Scanning"],
      github: "https://github.com/kedarbajaj",
    },
    {
      id: 6,
      title: "Information Gathering Tool",
      description: "Enhanced Nmap functionality for improved data extraction and scanning.",
      image: "/placeholder.svg?height=300&width=500",
      category: "cybersecurity",
      tags: ["Python", "Nmap", "Reconnaissance"],
      github: "https://github.com/kedarbajaj",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            A showcase of my work in cybersecurity, web development, and application development.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="cybersecurity"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Cybersecurity
              </TabsTrigger>
              <TabsTrigger
                value="web"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Web Dev
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-none bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {project.category === "cybersecurity" ? "Cybersecurity" : "Web Development"}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-primary/10">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

