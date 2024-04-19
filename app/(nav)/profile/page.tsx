"use client";
import { IconBrandGithub } from "@tabler/icons-react";
import { ArrowRight, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimeButton } from "@/components/shared/AnimeButton";
import { Spotlight } from "@/components/ui/Spotlight";

const Profile = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "tween",
          delay: 0.7,
          duration: 0.5,
        }}
        className="lg:mt-40 w-full max-w-7xl text-center relative mx-auto py-16 px-8 rounded-[40px] "
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                delay: 1,
                duration: 0.5,
              }}
              className="rounded-[30px] w-24 h-24 overflow-hidden flex items-center justify-center border-[.15rem] object-cover  border-slate-900 "
            >
              <Image
                alt="profile"
                src={"/images/ishak.jpg"}
                width={250}
                height={250}
                className="hover:scale-110 transition-all"
                quality={"95"}
                priority={true}
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 1,
                duration: 0.5,
              }}
              className="text-2xl absolute bottom-0 right-0 "
            >
              👍!
            </motion.h1>
          </div>
        </div>
        {/* paragraph */}
        <motion.h1
          className="capitalize mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 1.5,
            duration: 0.5,
          }}
        >
          <span className="font-bold">Hello, i am Ishak Shekh.</span> A
          <span className="font-bold">
            {" "}
            Front-End developer .(Aspiring Full Stack Developer)
          </span>{" "}
          <span className="font-bold"> Student</span> . I enjoy building
          <span className="italic"> sites & apps</span>. My focus is
          <span className="underline"> React (Next.js) and Tailwind </span>.
        </motion.h1>
        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 1.7,
            duration: 0.5,
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-base sm:text-lg font-medium  "
        >
          <Link
            href="/contact"
            className="px-7 py-3 flex items-center gap-2 rounded-full "
          >
            <AnimeButton cont="Contact Me Here" icon={<ArrowRight />} />
          </Link>
          {/* <a
          href="/cv.pdf"
          download
          className="bg-slate-900 border-indigo-950 border  outline-none  hover:scale-110 transition-all hover:bg-slate-950 active:scale-105   px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Download CV <HiDownload />
        </a> */}
          <div className="flex gap-2 mt-2 sm:m-0 ">
            <Link
              href="https://www.linkedin.com/in/ishak-shekh-12bb94247/"
              target="_blank"
              rel="noopener"
            >
              <AnimeButton icon={<LinkedinIcon />} />
            </Link>
            <Link
              href="https://github.com/ishakshekh-org"
              target="_blank"
              rel="noopener"
            >
              <AnimeButton icon={<IconBrandGithub />} />
            </Link>
          </div>
        </motion.div>
      </motion.section>

      <div className="flex justify-center sm:my-32 my-24">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.5,
            duration: 0.5,
          }}
          className="w-1 h-40 bg-white"
        ></motion.div>
      </div>

      <section className="mb-28 max-w-[45rem] mx-auto text-center leading-8 sm:mb-40 ">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="sm:text-6xl text-4xl font-bold capitalize sm:mb-8 mb-16 text-center"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mb-3 max-sm:text-sm"
        >
          After Passing Higher Secondary with{" "}
          <span className="font-medium">Bio Background</span>, I decided to
          pursue my passion for programming. I enrolled in BCA degree for{" "}
          <span className="font-medium">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          Designing and problem-solving aspect. I{" "}
          <span className="underline">love</span> the feeling of finally
          figuring out a solution to a problem. My core stack is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with C , Java and Python. I am always looking to
          learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">Free Lancing opportunity </span> as a
          software developer.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mb-3 max-sm:text-sm"
        >
          <span className="italic">When I am not coding</span>, I enjoy playing
          video games and watching movie. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am
          currently learning about{" "}
          <span className="font-medium">Web Animations </span>.{" "}
        </motion.p>
      </section>
    </>
  );
};

export default Profile;
