interface ExpertiseCardProps {
  idx: number;
  title: string;
  description: string;
}

const ExpertiseCard = ({ idx, title, description }: ExpertiseCardProps) => {
  return (
    <div className="group bg-surface hover:bg-primary hover:text-black transition-all duration-300 aspect-square p-4 md:px-8 md:p-12 flex justify-center items-center max-w-sm">
      <div>
        <div className="text-3xl md:text-4xl xl:text-3xl 2xl:text-4xl 3xl:leading-12 leading-8 tracking-tight font-black mb-4">
          <span>{`0${idx + 1}`}</span>
          <h4>{title}</h4>
        </div>
        <span className="text-sm md:text-base xl:text-sm 2xl:text-base leading-4 2xl:leading-6 font-noto-serif font-medium text-brand-neutral-dim group-hover:text-black transition-all duration-300">
          {description}
        </span>
      </div>
    </div>
  );
};

const expertise = [
  {
    title: "SCALABLE SYSTEMS",
    description:
      "Designing and building systems that perform under real-world load.",
  },
  {
    title: "FULL-STACK ARCHITECTURE",
    description: "From frontend interactions to backend logic and data flow.",
  },
  {
    title: "PERFORMANCE OPTIMIZATION",
    description: "Improving speed, efficiency, and overall system reliability.",
  },
  {
    title: "REAL-WORLD PRODUCTS",
    description:
      "Shipping impactful applications that solve meaningful problems.",
  },
];

export const Expertise = () => {
  return (
    <section id="expertise" className="px-6 py-12 md:px-10 md:py-32 bg-black border-b border-outline-variant/30">
      <div className="w-full mb-8 md:mb-12 lg:mb-16 text-brand-neutral-dim ">
        <h2 className="text-5xl md:text-7xl xl:text-8xl font-black leading-10 sm:leading-12 md:leading-16 xl:leading-18 tracking-tight uppercase lg:mx-auto ">
          Core Expertise
        </h2>
        <span className="text-base font-noto-serif font-bold tracking-widest block mt-4 lg:mt-8">
          00 // DOMAIN MASTERY
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 w-fit mx-auto">
        {expertise.map((exp, idx) => (
          <ExpertiseCard key={exp.title} {...exp} idx={idx} />
        ))}
      </div>
    </section>
  );
};
