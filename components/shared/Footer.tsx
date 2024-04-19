"use client";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className=" pt-4 sm:pt-10 lg:pt-12"
    >
      <footer className="mx-auto  max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t py-6 md:flex-row">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link
              href="/profile"
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              About
            </Link>
            <Link
              href="/skills"
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Skills
            </Link>
            <Link
              href="/services"
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Contact Me
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link
              href={"https://www.instagram.com/ishak_shekh_/"}
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <IconBrandInstagram />
            </Link>

            <Link
              href="https://www.youtube.com/channel/UCBawpRpmUwtTWl7SexkcxBA"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <IconBrandYoutube />
            </Link>

            <Link
              href="https://www.linkedin.com/in/ishak-shekh-12bb94247/"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <IconBrandLinkedin />
            </Link>

            <Link
              href={"https://github.com/ishakshekh-org"}
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <IconBrandGithub />
            </Link>
          </div>
        </div>

        <div className="py-8 text-center text-sm text-gray-400">
          © 2024 - Made By Ishak Shekh with 💖
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
