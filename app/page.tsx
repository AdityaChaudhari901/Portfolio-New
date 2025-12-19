import { Hero } from "@/components/sections/hero";
import dynamic from "next/dynamic";

// Lazy load below-the-fold sections for faster initial page load
const About = dynamic(() => import("@/components/sections/about").then(mod => ({ default: mod.About })), {
  loading: () => <div className="min-h-[400px]" />,
});

const Skills = dynamic(() => import("@/components/sections/skills").then(mod => ({ default: mod.Skills })), {
  loading: () => <div className="min-h-[400px]" />,
});

const Projects = dynamic(() => import("@/components/sections/projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="min-h-[400px]" />,
});

const Experience = dynamic(() => import("@/components/sections/experience").then(mod => ({ default: mod.Experience })), {
  loading: () => <div className="min-h-[400px]" />,
});

const Contact = dynamic(() => import("@/components/sections/contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-[400px]" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
