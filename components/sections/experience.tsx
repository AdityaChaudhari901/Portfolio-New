"use client";

import { Calendar, MapPin, Sparkles, Building2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            duration: 0.6,
        },
    },
};

const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 10,
            delay: 0.2,
        },
    },
};

const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
        scaleY: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut" as const,
        },
    },
};



export function Experience() {
    return (
        <Section id="experience" className="bg-muted/30 overflow-hidden">
            <SectionHeader
                title="Work Experience"
                description="My professional journey and career milestones"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative max-w-4xl mx-auto"
            >
                {/* Animated Timeline line with gradient */}
                <motion.div
                    variants={lineVariants}
                    className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2"
                    style={{
                        background: "linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.5) 50%, hsl(var(--primary)/0.1) 100%)",
                    }}
                />

                {/* Glowing effect behind timeline */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-8 md:-translate-x-1/2 bg-primary/5 blur-xl" />

                {experiences.map((experience, index) => (
                    <motion.div
                        key={experience.company}
                        variants={itemVariants}
                        className={`relative pl-16 md:pl-0 pb-16 last:pb-0 ${index % 2 === 0
                            ? "md:pr-[52%]"
                            : "md:pl-[52%]"
                            }`}
                    >
                        {/* Animated Timeline dot with glow */}
                        <motion.div
                            variants={dotVariants}
                            className="absolute left-4 md:left-1/2 top-8 md:-translate-x-1/2 z-10"
                        >
                            <div className="relative">
                                {/* Outer glow ring */}
                                <div className={`absolute inset-0 w-5 h-5 rounded-full ${experience.current
                                    ? "bg-primary/30 animate-ping"
                                    : "bg-primary/20"
                                    }`} />
                                {/* Main dot */}
                                <div className={`relative w-5 h-5 rounded-full border-4 border-background ${experience.current
                                    ? "bg-primary shadow-lg shadow-primary/50"
                                    : "bg-primary/80"
                                    }`}>
                                    {experience.current && (
                                        <Sparkles className="absolute -top-3 -right-3 h-3 w-3 text-primary animate-pulse" />
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Content card with enhanced styling */}
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            className={`relative group ${index % 2 === 0 ? "md:mr-0" : "md:ml-0"
                                }`}
                        >
                            {/* Card background with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Glow effect on hover */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:border-primary/30 transition-all duration-500">
                                {/* Current badge with enhanced styling */}
                                {experience.current && (
                                    <Badge
                                        variant="accent"
                                        className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-1 shadow-lg shadow-primary/20"
                                    >
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                                        </span>
                                        Current Position
                                    </Badge>
                                )}

                                {/* Header section */}
                                <div className="flex flex-col gap-4 mb-6">
                                    {/* Company and role */}
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors duration-300">
                                            <Building2 className="h-6 w-6" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                                                {experience.role}
                                            </h3>
                                            <p className="text-primary font-semibold text-lg mt-1">
                                                {experience.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Meta info */}
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="h-4 w-4 text-primary/70" />
                                            {experience.period}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <MapPin className="h-4 w-4 text-primary/70" />
                                            {experience.location || "Remote / Hybrid"}
                                        </span>
                                    </div>
                                </div>

                                {/* Description with enhanced bullets */}
                                <ul className="space-y-3 mb-6">
                                    {experience.description.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3 text-muted-foreground group/item"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-200" />
                                            <span className="text-sm md:text-base leading-relaxed">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Tech stack tags */}
                                {experience.tech && (
                                    <div className="pt-4 border-t border-border/50">
                                        <div className="flex flex-wrap gap-2">
                                            {experience.tech.map((tech: string) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="text-xs px-2.5 py-1 bg-background/50 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
