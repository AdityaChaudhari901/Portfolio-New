import { siteConfig } from "@/lib/data";

export function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.name,
        url: "https://adityachaudhari.tech",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        jobTitle: "Full-Stack Developer & AI/ML Engineer",
        description: siteConfig.description,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "India",
        },
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: siteConfig.education.institution,
        },
        knowsAbout: [
            "Full-Stack Development",
            "React.js",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Python",
            "AI/ML",
            "LangChain",
            "RAG",
            "Agentic AI",
        ],
        sameAs: [
            siteConfig.links.github,
            siteConfig.links.linkedin,
            siteConfig.links.twitter,
        ],
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: `${siteConfig.name} - Portfolio`,
        url: "https://adityachaudhari.tech",
        description: siteConfig.description,
        author: {
            "@type": "Person",
            name: siteConfig.name,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}
