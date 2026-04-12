import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}
