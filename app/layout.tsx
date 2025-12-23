import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adityachaudhari.tech"),
  title: {
    default: "Aditya Chaudhari | Full-Stack Developer & AI/ML Engineer",
    template: "%s | Aditya Chaudhari",
  },
  description:
    "Aditya Chaudhari - Full-Stack Developer and AI/ML Engineer from Pune, India. Expert in React, Next.js, Python, LangChain, and building scalable web applications with AI integration.",
  keywords: [
    "Aditya Chaudhari",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "LangChain",
    "RAG",
    "Agentic AI",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Software Engineer",
    "Pune",
    "India",
  ],
  authors: [{ name: "Aditya Chaudhari", url: "https://adityachaudhari.tech" }],
  creator: "Aditya Chaudhari",
  publisher: "Aditya Chaudhari",
  alternates: {
    canonical: "https://adityachaudhari.tech",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityachaudhari.tech",
    siteName: "Aditya Chaudhari Portfolio",
    title: "Aditya Chaudhari | Full-Stack Developer & AI/ML Engineer",
    description:
      "Full-Stack Developer and AI/ML Engineer building scalable web applications and intelligent, LLM-powered solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aditya Chaudhari - Full-Stack Developer & AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Chaudhari | Full-Stack Developer & AI/ML Engineer",
    description:
      "Full-Stack Developer and AI/ML Engineer building scalable web applications and intelligent, LLM-powered solutions.",
    images: ["/og-image.png"],
    creator: "@adityamsn11",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "4RJwo547QNVa0zQfq0IXfxNUp0C95PzARa08OVt8kNQ",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
