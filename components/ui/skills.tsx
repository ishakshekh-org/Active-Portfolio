import { HoverEffect } from "../ui/card-hover-effect";

export function Skills() {
  return (
    <div className="w-full h-full ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Javscript",
  },
  {
    title: "React",
  },
  {
    title: "Next JS",
  },
  {
    title: "Tailwind",
  },
  {
    title: "JAVA",
  },
  {
    title: "TypeScript",
  },
  {
    title: "MongoDB",
  },
  {
    title: "Node JS",
  },
  {
    title: "Express",
  },
  {
    title: "GSAP",
  },
];
