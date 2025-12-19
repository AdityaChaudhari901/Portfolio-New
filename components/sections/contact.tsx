"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";

const socialLinks = [
    {
        name: "GitHub",
        href: siteConfig.links.github,
        icon: Github,
        color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
        name: "LinkedIn",
        href: siteConfig.links.linkedin,
        icon: Linkedin,
        color: "hover:text-blue-600",
    },
    {
        name: "Twitter",
        href: siteConfig.links.twitter,
        icon: Twitter,
        color: "hover:text-sky-500",
    },
];

export function Contact() {
    return (
        <Section id="contact">
            <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <SectionHeader
                        title="Let's Work Together"
                        description="Have a project in mind or just want to say hello? I'd love to hear from you!"
                    />

                    {/* Email CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <p className="text-lg text-muted-foreground mb-2">Email me at:</p>
                        <span className="text-xl md:text-2xl font-semibold text-primary select-all">
                            {siteConfig.email}
                        </span>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-muted-foreground mb-4">
                            Or connect with me on social media
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-full bg-muted text-muted-foreground transition-all duration-200 hover:bg-primary/10 ${link.color}`}
                                    aria-label={link.name}
                                >
                                    <link.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Availability status */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium">{siteConfig.availability}</span>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
}
