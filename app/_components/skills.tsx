const skills = [
  {
    type: "Languages",
    list: ["JavaScript", "TypeScript", "Python", "C++", "C"],
  },
  {
    type: "Frameworks",
    list: ["React", "NextJS", "NodeJS", "ExpressJS"],
  },
  {
    type: "Databases",
    list: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    type: "Tools",
    list: ["Git", "Docker", "Postman"],
  },
];

interface SkillCardProps {
  type: string;
  list: string[];
}
const SkillCard = ({ type, list }: SkillCardProps) => {
  return (
    <div className="selection:bg-brand-neutral selection:text-brand-secondary">
      <div className="px-2 lg:px-3 lg:py-2 border-l-4 w-fit border-brand-neutral flex items-center mb-2 lg:mb-4">
        <span className="text-2xl md:text-3xl lg:text-4xl font-noto-serif font-black leading-10 uppercase">
          {type}
        </span>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8">
        {list.map((item) => (
          <div
            key={item}
            className="group pr-2 py-1 border-b-2 border-brand-neutral/30 transition-all duration-300 hover:border-brand-neutral/80"
          >
            <span className="text-brand-neutral/90 font-noto-serif font-medium group-hover:translate-x-2 transition-all duration-300 block">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-24 md:px-10 md:py-32 bg-primary text-black selection:bg-brand-neutral selection:text-brand-secondary"
    >
      <div className="w-full mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-5xl md:text-7xl xl:text-8xl font-black leading-10 sm:leading-12 md:leading-16 xl:leading-18 tracking-tight uppercase lg:mx-auto">
          Tech Stack
        </h2>
        <span className="text-base font-noto-serif font-bold tracking-widest block mt-4 lg:mt-8">
          00 // RAW CAPABILITIES
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {skills.map((skill) => (
          <SkillCard key={skill.type} {...skill} />
        ))}
      </div>
    </section>
  );
};
