import { ArrowRight } from "lucide-react";

const email = "priyanshusingh.work23@gmail.com";

const links = [
  {
    title: "GitHub",
    href: "https://github.com/Priyanshu8433",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/priyanshu-singh-3985b8288/",
  },
  {
    title: "Read.cv",
    href: "https://drive.google.com/file/d/1OTIa3j5uk_e1YGTXxCCU46gnGU95fOW7/view?usp=sharing",
  },
];

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="px-6 py-12 md:px-10 md:py-32 bg-surface border-b border-outline-variant/30 flex flex-col text-center md:text-start md:flex-row justify-between"
    >
      <div className="flex flex-col gap-2 md:gap-4 uppercase mb-8 md:mb-0">
        <span className="text-[20px] font-bold leading-7 font-noto-serif">
          The Curator
        </span>
        <span className="text-brand-neutral-dim text-sm leading-5 tracking-wide font-noto-serif">
          © {new Date().getFullYear()} Priyanshu. ALL RIGHTS RESERVED.
        </span>
      </div>

      <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 items-center md:items-end">
        <div className="flex gap-6 md:gap-10">
          {links.map((link) => (
            <a
              href={link.href}
              className="text-brand-neutral-dim text-sm leading-5 tracking-wide font-noto-serif uppercase hover:text-primary hover:underline transition-all duration-300"
              key={link.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${email}?subject=Project%20Inquiry`}
          className="flex gap-2 md:gap-4 items-center hover:text-primary hover:translate-x-4 transition-all duration-300"
        >
          <span className="text-2xl md:text-3xl lg:text-6xl font-black leading-24 tracking-tighter uppercase">
            Start a Project
          </span>
          <ArrowRight className="w-8 h-8 md:w-12 md:h-12 lg:w-18 lg:h-18" />
        </a>
      </div>
    </footer>
  );
};
