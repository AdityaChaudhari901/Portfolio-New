"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowDown, Github, Linkedin, Twitter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";

// Text Reveal with Mask animation component
function TextRevealMask({ text, animationKey }: { text: string; animationKey: number }) {
    return (
        <span className="relative inline-block overflow-hidden">
            {/* Invisible placeholder for layout */}
            <span className="invisible">
                {text}
            </span>
            {/* Revealed text with mask */}
            <motion.span
                key={`text-${animationKey}`}
                className="gradient-text absolute inset-0"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{
                    duration: 1.5,
                    delay: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                }}
            >
                {text}
            </motion.span>
            {/* Glowing sliding bar indicator */}
            <motion.span
                key={`bar-${animationKey}`}
                className="absolute top-0 bottom-0 w-[3px] rounded-full"
                style={{
                    background: "linear-gradient(180deg, transparent, hsl(var(--primary)), #a855f7, hsl(var(--primary)), transparent)",
                    boxShadow: "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5), 0 0 60px #a855f7",
                }}
                initial={{ left: "-2%", opacity: 0 }}
                animate={{ left: "102%", opacity: [0, 1, 1, 0] }}
                transition={{
                    duration: 1.5,
                    delay: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                }}
            />
        </span>
    );
}

export function Hero() {
    const [mounted, setMounted] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const keyCounterRef = useRef(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Replay animation when section comes into view
    useEffect(() => {
        if (!mounted) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Update key to trigger animation replay using counter
                        keyCounterRef.current += 1;
                        setAnimationKey(keyCounterRef.current);
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [mounted]);

    if (!mounted) return null;

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Simple gradient background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5" />
                <div className="absolute top-1/4 left-0 md:left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 md:right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="section-container text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: [0, -8, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.5 },
                        y: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }
                    }}
                >
                    <p className="text-primary font-medium mb-4 text-lg">
                        <motion.span
                            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut",
                            }}
                            className="inline-block origin-bottom-right"
                        >
                            👋
                        </motion.span>
                        {" "}Hello, I&apos;m
                    </p>
                </motion.div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                    <TextRevealMask text={siteConfig.name} animationKey={animationKey} />
                </h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-8"
                >
                    {siteConfig.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                >
                    {siteConfig.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Button size="lg" asChild>
                        <a href="#projects">View Projects</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            View Resume
                        </a>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center justify-center gap-4 mb-20"
                >
                    <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="h-6 w-6" />
                    </a>
                    <a
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                        href={siteConfig.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter className="h-6 w-6" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                    <span className="text-sm">Scroll down</span>
                    <ArrowDown className="h-5 w-5 animate-bounce" />
                </a>
            </motion.div>
        </section>
    );
}
