"use client";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  year: number;
  description: string;
  image: string;
  github: string;
  url?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  year,
  description,
  image,
  github,
  url,
}: ProjectCardProps) => {
  return (
    <div className="group w-full aspect-4/5 odd:mb-0 md:odd:mb-10 xl:odd:mb-20 even:mt-0 md:even:mt-10 xl:even:mt-20 flex flex-col gap-2 md:gap-5 lg:gap-6 relative">
      <div className="absolute top-5 right-5 z-9 flex gap-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
        <Link
          href={github}
          className="p-1 border-b-2 border-transparent hover:border-brand-secondary"
        >
          <SiGithub />
        </Link>
        {url && (
          <Link
            href={url}
            className="p-1 border-b-2 border-transparent hover:border-brand-secondary"
          >
            <ExternalLink />
          </Link>
        )}
      </div>

      <div className="relative flex-9/10 overflow-hidden">
        <div className="absolute bottom-0 left-0 z-9 px-3 pb-6 pt-12 bg-[linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0.3),rgba(0,0,0,0))] w-full font-noto-serif text-brand-secondary tracking-wide opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
          {description}
        </div>
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          src={image}
          alt={title}
        />
      </div>

      <div className="flex-1/10 flex justify-between items-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-5 md:leading-8 lg:leading-10 tracking-tight uppercase group-hover:text-primary transition-all duration-300">
          {title}
        </h3>
        <div className="h-8 lg:h-10 flex items-center border-b border-brand-neutral-dim/20">
          <span className="font-noto-serif text-[12px] lg:text-sm leading-4 lg:leading-5 text-brand-neutral-dim uppercase">
            {year} / {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "RTC Board",
    subtitle: "Collaboration Board",
    year: 2026,
    description: "Real-time collaboration platform",
    image: "/priyanshu-glasses.jpg",
    github: "https://github.com/Priyanshu8433/rtc-board",
  },
  {
    id: 2,
    title: "Aivory",
    subtitle: "AI SaaS platform",
    year: 2025,
    description: "Collection of AI-powered tools",
    image: "/priyanshu-glasses.jpg",
    github: "https://github.com/Priyanshu8433/aivory",
    url: "https://aivory-two.vercel.app/",
  },
  {
    id: 3,
    title: "Chat.ly",
    year: 2025,
    subtitle: "Chat application",
    description: "Real-time Chat Application",
    image: "/chatly-image.jpg",
    github: "https://github.com/Priyanshu8433/chat.ly",
    url: "https://chat-ly-sigma.vercel.app/",
  },
  {
    id: 4,
    title: "Herness",
    subtitle: "Women Safety App",
    year: 2024,
    description: "(Frontend-only) Mobile app for women safety",
    image: "/priyanshu-glasses.jpg",
    github: "https://github.com/Priyanshu8433/herness",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="px-6 py-12 md:px-10 md:py-32 ">
      <div className="border-l-4 border-primary pl-8 py-2">
        <h2 className="mb-2 md:mb-6 text-5xl md:text-7xl xl:text-8xl font-black leading-10 sm:leading-12 md:leading-16 xl:leading-18 tracking-tight uppercase lg:mx-auto">
          What I’m Building
        </h2>
        <p className="text-sm md:text-base lg:text-lg font-noto-serif font-normal leading-5 md:leading-6 lg:leading-7 tracking-wide uppercase text-brand-neutral-dim lg:max-w-2/3 2xl:max-w-1/2">
          A collection of hands-on projects demonstrating my experience in
          developing efficient, production-ready solutions.{" "}
          <span className="hidden md:inline">
            Focused on building reliable systems with thoughtful design and
            modern technologies.
          </span>
        </p>
      </div>
      <div className="mt-8 md:mt-12 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 max-w-md md:max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
