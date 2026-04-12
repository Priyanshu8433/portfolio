"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

const info = {
  role: "Software Engineer",
  firstname: "Priyanshu",
  lastname: "Singh",
  description:
    "Building scalable digital products with a focus on performance, usability, and clean architecture. Turning complex ideas into efficient, production-ready solutions in fast-paced environments.",
};

const ExploreButton = () => {
  return (
    <div
      className="group w-fit flex items-center justify-center gap-4 hover:translate-y-[-4px] duration-300 p-2 mx-auto lg:mx-0"
      onClick={() => {
        setTimeout(() => {
          document
            .getElementById("experience")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }}
    >
      <button className="group-hover:bg-brand-neutral-dim/80 transition-all duration-300 border-2 border-brand-secondary/60 group-hover:border-brand-neutral-dim/80 h-12 w-12 lg:h-16 lg:w-16 flex justify-center items-center">
        <ArrowDown className="group-hover:text-brand-primary transition-all duration-300 text-brand-secondary/60 animate-osci" />
      </button>
      <span className="text-sm lg:text-base text-brand-secondary/90 font-noto-serif font-bold tracking-widest">
        Explore Portfolio
      </span>
    </div>
  );
};

export const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen w-full flex flex-col justify-center mx-auto lg:items-baseline bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,var(--color-primary-fixed-dim)_90%)] overflow-hidden"
    >
      <div className="absolute right-0 top-0 h-full w-full lg:w-[60%]">
        <Image
          src="/priyanshu-glasses.jpg"
          alt="Hero"
          fill
          className="lg:object-cover lg:object-left object-cover"
        />
      </div>

      <div className="z-10 w-full uppercase text-brand-secondary lg:text-brand-neutral px-6 md:px-12 lg:bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-primary)_20%,transparent)_0%,transparent_90%)]">
        <div className="flex flex-col justify-center h-full text-center lg:text-start">
          <span className="text-sm lg:text-base font-noto-serif font-bold tracking-widest">
            {info.role}
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[118px] xl:text-[192px] font-black -mb-2 mt-2 md:-mb-4 md:-mt-2 lg:-mt-2">
            {info.firstname}
          </h1>
          <h1 className="text-5xl sm:text-7xl md:text-[118px] xl:text-[192px] font-black ">
            {info.lastname}
          </h1>
          <div className="flex gap-4 justify-center lg:justify-between flex-col lg:flex-row mt-8 lg:mt-0">
            <p className="hidden md:block text-sm lg:text-base font-source-serif font-medium -mt-2 md:-mt-2 lg:-mt-2 w-full lg:w-1/2 xl:1/2">
              {info.description}
            </p>
            <ExploreButton />
          </div>
        </div>
      </div>
    </div>
  );
};
