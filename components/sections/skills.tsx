"use client";

import { Code2, Server, Wrench, Brain } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        icon: Code2,
        skills: skills.frontend,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Backend",
        icon: Server,
        skills: skills.backend,
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "AI / ML",
        icon: Brain,
        skills: skills.aiml,
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        title: "Tools & Others",
        icon: Wrench,
        skills: skills.tools,
        gradient: "from-orange-500 to-yellow-500",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export function Skills() {
    return (
        <Section id="skills" className="bg-muted/30">
            <SectionHeader
                title="Skills & Technologies"
                description="Technologies I work with to bring ideas to life"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {skillCategories.map((category) => (
                    <motion.div
                        key={category.title}
                        variants={itemVariants}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                            style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />

                        <div className="relative bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-colors duration-300">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} text-white`}>
                                    <category.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-semibold">{category.title}</h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="cursor-default hover:bg-primary/10 hover:text-primary transition-colors"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
