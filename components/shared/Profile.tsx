"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconUserCircle,
  IconStack3Filled,
  IconBrandWindows,
  IconArrowUpRight,
  IconDeviceProjector,
  IconPhone,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skills } from "../ui/skills";
import InfiniteCards from "../ui/InfiniteCards";
import Link from "next/link";
import { ArrowUpRight, User2Icon, UserCircle2Icon } from "lucide-react";
import { AnimeButton } from "./AnimeButton";

export function Bento() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
    >
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[22rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
            route={item.route}
          />
        ))}
      </BentoGrid>
    </motion.div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="relative group">
      <div className="absolute opacity-0 backdrop-blur-sm  group-hover:opacity-100 transition-all  h-full w-full z-10 flex justify-center items-center bg-black/60 ">
        <Link
          href={"/profile"}
          className="border rounded-full border-white/10  hover:scale-110 transition-all"
        >
          <AnimeButton cont="About Me" icon={<IconArrowUpRight />} />
        </Link>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <Image
            src={"/images/ishak.jpg"}
            width={150}
            height={150}
            alt="Ishak"
            className="rounded-full saturate-150 hover:scale-110 transition-all"
          />
        </div>
      </div>
    </div>
  );
};
const SkeletonTwo = () => {
  return (
    <div className="">
      <Skills />
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="relative group">
      <div className="absolute opacity-0 backdrop-blur-sm  group-hover:opacity-100 transition-all  h-full w-full z-10 flex justify-center items-center bg-black/60 ">
        <Link
          href={"/services"}
          className="border rounded-full border-white/10  hover:scale-110 transition-all"
        >
          <AnimeButton cont="View Services" icon={<IconArrowUpRight />} />
        </Link>
      </div>
      <div className="magicpattern"></div>
      <marquee direction="left">
        <p className="bg-white/10 w-64 text-center px-2 py-1 rounded-full backdrop-blur-sm">
          Full Stack Web Development
        </p>
      </marquee>
      <marquee direction="right">
        <p className="bg-white/10 w-52 text-center px-2 py-1 rounded-full backdrop-blur-sm">
          Front End Develoment
        </p>
      </marquee>
      <marquee direction="left">
        <p className="bg-white/10 w-28 text-center px-2 py-1 rounded-full backdrop-blur-sm">
          UI Design
        </p>
      </marquee>
      <marquee direction="right">
        <p className="bg-white/10 w-32 text-center px-2 py-1 rounded-full backdrop-blur-sm">
          Animations
        </p>
      </marquee>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="relative group">
      <div className="absolute opacity-0 backdrop-blur-sm  group-hover:opacity-100 transition-all  h-full w-full z-10 flex justify-center items-center bg-black/60 ">
        <Link
          href={"/projects"}
          className="border rounded-full border-white/10  hover:scale-110 transition-all"
        >
          <AnimeButton cont="Explore Projects" icon={<IconArrowUpRight />} />
        </Link>
      </div>
      <InfiniteCards />
    </div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex relative group flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-white/[0.2] p-2  items-start space-x-2 bg-black"
      >
        <User2Icon className="rounded-full h-10 w-10 " />
        <p className="text-xs text-neutral-300">
          Hey , Ishak I Wanted to Create A Awsome Site For MySelf !
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black"
      >
        <p className="text-xs text-neutral-100">
          Don&apos;t Worry , I Got You !
        </p>
        <UserCircle2Icon />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Myself !",
    description: (
      <span className="text-sm">
        Ishak Shekh is a FrontEnd developer with a passion for building Awsome
        applications.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconUserCircle className="h-4 w-4 text-neutral-500" />,
    route: "/profile",
  },
  {
    title: `Tech Stack `,
    description: (
      <span className="text-sm">
        Skills that I have in my toolbox to build your next project and more
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconStack3Filled className="h-4 w-4 text-neutral-500" />,
    route: "/skills",
  },
  {
    title: "Services",
    description: (
      <span className="text-sm">
        Services that I can offer to help you with your next project
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconBrandWindows className="h-4 w-4 text-neutral-500" />,
    route: "/services",
  },
  {
    title: "Projects",
    description: (
      <span className="text-sm">
        View My Work Gallary and Projects that i Created
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconDeviceProjector className="h-4 w-4 text-neutral-500" />,
    route: "/projects",
  },

  {
    title: "Reach Me",
    description: (
      <span className="text-sm">Connect To Me And Let&apos;s Get To Work!</span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconPhone className="h-4 w-4 text-neutral-500" />,
    route: "/contact",
  },
];
