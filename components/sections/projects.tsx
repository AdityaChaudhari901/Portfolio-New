"use client";

import { ExternalLink, Github, Star } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export function Projects() {
    return (
        <Section id="projects">
            <SectionHeader
                title="Featured Projects"
                description="A selection of projects I've worked on"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6"
            >
                {projects.map((project) => (
                    <motion.div key={project.title} variants={itemVariants}>
                        <Card className="h-full flex flex-col group relative overflow-hidden">
                            {/* Featured indicator */}
                            {project.featured && (
                                <div className="absolute top-4 right-4 z-10">
                                    <Badge variant="accent" className="flex items-center gap-1">
                                        <Star className="h-3 w-3 fill-current" />
                                        Featured
                                    </Badge>
                                </div>
                            )}

                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <CardHeader className={`relative ${project.featured ? 'pr-24' : ''}`}>
                                <CardTitle className="flex items-start justify-between gap-4">
                                    <span className="group-hover:text-primary transition-colors">
                                        {project.title}
                                    </span>
                                </CardTitle>
                                <CardDescription className="text-base">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="relative flex-1 flex flex-col">
                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <Badge key={tech} variant="outline" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-3 mt-auto">
                                    <Button variant="outline" size="sm" asChild>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2"
                                        >
                                            <Github className="h-4 w-4" />
                                            Code
                                        </a>
                                    </Button>
                                    {project.live !== "#" && (
                                        <Button size="sm" asChild>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
