"use client";

import { Section, SectionHeader } from "@/components/section";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="about">
            <SectionHeader
                title="About Me"
                description="Get to know me better"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
            >
                {/* Main content card */}
                <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Full-Stack Developer & AI/ML Enthusiast
                    </h3>

                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            I&apos;m a passionate developer with hands-on experience in web development,
                            software engineering, and modern AI technologies. I specialize in building
                            scalable applications using JavaScript frameworks like React and Next.js.
                        </p>
                        <p>
                            My expertise includes integrating LLMs through LangChain/LangGraph,
                            developing RAG-based intelligent solutions, and working with cutting-edge
                            AI technologies including Agentic AI and Model Context Protocol (MCP).
                        </p>
                        <p>
                            I&apos;m a fast learner who adapts quickly to emerging technologies and
                            collaborates effectively in agile development environments.
                        </p>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
