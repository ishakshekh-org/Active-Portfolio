"use client";
import {
  Github,
  Instagram,
  Linkedin,
  Youtube,
  Menu,
  Contact2,
  UserSearch,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  IconBrandWindows,
  IconDeviceProjector,
  IconStack2,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { AnimeButton } from "./AnimeButton";

const Header = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, top: -100, width: "0" }}
        animate={{
          opacity: 1,
          top: 0,
          position: "fixed",
          width: "100%",
          left: "50%",
          translateX: "-50%",
          translateY: "0",
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className="max-lg:hidden max-w-6xl mx-auto z-50  flex justify-between items-center py-10 bg-transparent backdrop-blur-sm"
      >
        <div className="flex justify-center items-center gap-5">
          <Link
            href={"https://www.youtube.com/channel/UCBawpRpmUwtTWl7SexkcxBA"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ishak-shekh-12bb94247/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </Link>
          <Link
            href={"https://github.com/ishakshekh-org"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </Link>
          <Link
            href={"https://www.instagram.com/ishak_shekh_/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </Link>
        </div>
        <Link href={"/"}>
          <p className="text-3xl font-bold tracking-wider">
            Ishak&apos;s Portfolio{" "}
          </p>
        </Link>
        <div className="flex justify-center items-center gap-5">
          <Link href={"/skills"}>
            <IconStack2 />
          </Link>
          <Link href={"/services"}>
            <IconBrandWindows />
          </Link>
          <Link href={"/projects"}>
            <IconDeviceProjector />
          </Link>
          <Link href={"/contact"}>
            <Contact2 />
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          position: "fixed",
          width: "100%",
          top: "0",
          left: "0",
          right: "0",
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className="lg:hidden z-50 flex justify-between items-center px-6 py-2 bg-transparent backdrop-blur-sm"
      >
        <Link href={"/"}>
          <p className="text-3xl max-sm:text-xl font-bold tracking-wider">
            Ishak&apos;s Portfolio{" "}
          </p>
        </Link>
        <div className="">
          <Sheet>
            <SheetTrigger>
              <AnimeButton icon={<Menu />} />
            </SheetTrigger>
            <SheetContent className="backdrop-blur-sm text-center">
              <div className="text-center mb-10">
                <Link href={"/"} className="text-2xl font-bold">
                  Ishak&apos;s Portfolio
                </Link>
              </div>

              <div className="flex flex-col justify-between  h-full w-full ">
                <div className="">
                  <p className="text-2xl mb-5 underline">Navigation</p>
                  <div className="flex flex-col gap-5 items-center justify-center mb-8">
                    <Link className="flex gap-3" href={"/profile"}>
                      <UserSearch />
                      <p>About Me</p>
                    </Link>
                    <Link className="flex gap-3" href={"/skills"}>
                      <IconStack2 />
                      <p>Skills</p>
                    </Link>
                    <Link href={"/services"} className="flex gap-3">
                      <IconBrandWindows />
                      <p>Services</p>
                    </Link>
                    <Link href={"/projects"} className="flex gap-3">
                      <IconDeviceProjector />
                      <p>Projects</p>
                    </Link>
                    <Link href={"/contact"} className="flex gap-3">
                      <Contact2 />
                      <p>Contact</p>
                    </Link>
                  </div>
                </div>
                <div className="pb-36">
                  <hr className="mb-6" />
                  <p className="text-2xl mb-5 font-bold  underline">Reach Me</p>
                  <div className="flex flex-col gap-5 items-center justify-center">
                    <Link
                      className="flex gap-3"
                      href={
                        "https://www.youtube.com/channel/UCBawpRpmUwtTWl7SexkcxBA"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube />
                      <p>Youtube</p>
                    </Link>
                    <Link
                      href={
                        "https://www.linkedin.com/in/ishak-shekh-12bb94247/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3"
                    >
                      <Linkedin />
                      <p>LinkedIn</p>
                    </Link>
                    <Link
                      href={"https://github.com/ishakshekh-org"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3"
                    >
                      <Github />
                      <p>Github</p>
                    </Link>
                    <Link
                      href={"https://www.instagram.com/ishak_shekh_/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3"
                    >
                      <Instagram />
                      <p>Instagram</p>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
