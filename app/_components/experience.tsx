import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  idx: number;
  role: string;
  description: string;
  company: string;
  from: string;
  to: string;
}

const ExperienceCard = ({
  idx,
  role,
  description,
  company,
  from,
  to,
}: ExperienceCardProps) => {
  return (
    <div className="group flex gap-12 xl:gap-18 py-12 border-b border-outline-variant/40">
      <div className="min-w-40 h-16 translate-y-4 hidden md:block">
        <span
          className={cn(
            "text-2xl font-black uppercase leading-8 tracking-tight",
            idx === 0 ? "text-primary" : "text-outline-variant",
          )}
        >
          {from} —
          <br /> {to}
        </span>
      </div>

      <div className="flex-1">
        <div className="relative mb-1 gap-2">
          <span className="block text-sm md:text-base font-noto-serif font-medium tracking-widest uppercase text-brand-secondary/40  max-w-1/2">
            {company}
          </span>

          <span
            className={cn(
              "md:hidden text-sm font-black uppercase tracking-wide absolute right-0 top-1/2 -translate-y-1/2",
              idx === 0 ? "text-primary" : "text-outline-variant",
            )}
          >
            {from} — {to}
          </span>
        </div>
        <h3 className="mb-2 md:mb-4 text-3xl md:text-5xl font-black leading-8 md:leading-12 tracking-normal uppercase max-w-2xl group-hover:text-primary transition-all duration-300">
          {role}
        </h3>
        <p className="font-noto-serif leading-6.5 text-brand-neutral-dim">
          {description}
        </p>
      </div>
    </div>
  );
};

const experiences = [
  {
    role: "Software Engineer",
    description: "",
    company: "PayPal",
    from: "Upcoming",
    to: "∞",
  },
  {
    role: "Software Development Engineer",
    description:
      "Engineered and deployed high-performance web applications using React, Node.js, and cloud infrastructure, consistently meeting project deadlines and quality standards.",
    company: "ConceptsHQ",
    from: "July 2024",
    to: "Sept 2025",
  },
  {
    role: "Open Source Contributer",
    description: "Contributing to various open source projects",
    company: "",
    from: "∞",
    to: "Global",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 py-24 md:px-10 md:py-32 flex flex-col xl:flex-row xl:gap-22 border-b border-outline-variant/30"
    >
      <div className="w-full xl:w-2/5">
        <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-10 sm:leading-12 md:leading-16 xl:leading-18 tracking-tight uppercase lg:mx-auto">
          Professional <br />
          Trajectory
        </h2>
        <span className="text-sm font-noto-serif font-bold tracking-widest text-brand-neutral-dim block mt-4 lg:mt-8">
          00 // THE RECORD
        </span>
      </div>
      <div className="w-full xl:w-3/5">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={`${exp.company}-${exp.role}`}
            {...exp}
            idx={idx}
          />
        ))}
      </div>
    </section>
  );
};
