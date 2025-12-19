"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = React.useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    setIsScrolled(scrollTop > 50);

                    const scrollHeight = document.documentElement.scrollHeight;
                    const clientHeight = document.documentElement.clientHeight;
                    const isNearBottom = scrollTop + clientHeight >= scrollHeight - 200;

                    if (isNearBottom) {
                        setActiveSection("contact");
                    } else {
                        const sections = navItems.map((item) => item.href.slice(1));
                        let foundSection = "";

                        for (const section of sections) {
                            const element = document.getElementById(section);
                            if (element) {
                                const rect = element.getBoundingClientRect();
                                if (rect.top <= 200 && rect.bottom > 0) {
                                    foundSection = section;
                                }
                            }
                        }

                        if (foundSection) {
                            setActiveSection(foundSection);
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            <nav className="section-container flex items-center justify-center h-20">
                {/* Desktop Navigation - Pill Container Only */}
                <div className="hidden md:flex items-center pointer-events-auto">
                    <div className={cn(
                        "flex items-center gap-1 rounded-full px-2 py-1.5 border transition-all duration-500",
                        isScrolled
                            ? "bg-background/50 backdrop-blur-xl border-border shadow-2xl"
                            : "bg-background/80 backdrop-blur-sm border-border/50 shadow-lg"
                    )}>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                                    activeSection === item.href.slice(1)
                                        ? "text-primary-foreground bg-primary shadow-sm"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="ml-1">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-2 pointer-events-auto">
                    <div className={cn(
                        "flex items-center gap-2 rounded-full px-3 py-2 border transition-all duration-300",
                        isScrolled
                            ? "bg-background/50 backdrop-blur-xl border-border shadow-2xl"
                            : "bg-background/80 backdrop-blur-sm border-border/50 shadow-lg"
                    )}>
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            className="rounded-full h-8 w-8"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-4 w-4" />
                            ) : (
                                <Menu className="h-4 w-4" />
                            )}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300 flex justify-center pointer-events-auto",
                    isMobileMenuOpen ? "max-h-80" : "max-h-0"
                )}
            >
                <div className="mx-6 mb-4 bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg p-2 flex flex-col gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className={cn(
                                "px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-center",
                                activeSection === item.href.slice(1)
                                    ? "text-primary-foreground bg-primary"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
