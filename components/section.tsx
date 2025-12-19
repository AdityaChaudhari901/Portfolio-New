"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id={id}
            ref={ref}
            className={cn(
                "py-20 md:py-28 transition-all duration-700",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                className
            )}
        >
            <div className="section-container">{children}</div>
        </section>
    );
}

interface SectionHeaderProps {
    title: string;
    description?: string;
    className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
    return (
        <div className={cn("mb-12 md:mb-16 text-center", className)}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {description && (
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
}
