import { Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/data";

const socialLinks = [
    { name: "GitHub", href: siteConfig.links.github, icon: Github },
    { name: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
    { name: "Twitter", href: siteConfig.links.twitter, icon: Twitter },
];

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="section-container py-8">
                {/* Main row - branding left, icons right */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Branding - Left */}
                    <div className="text-center md:text-left">
                        <span className="font-bold text-xl gradient-text">
                            {siteConfig.name}
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                            {siteConfig.title}
                        </p>
                    </div>

                    {/* Social Links - Right */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.name === "Email" ? undefined : "_blank"}
                                rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label={link.name}
                            >
                                <link.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
