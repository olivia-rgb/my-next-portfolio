"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import StarIcon from "./StarIcon";
import FadeInOnScroll from "./FadeInOnScroll"
import  { useEffect } from "react";


const HeroSection = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-8 lg:py-16"
      initial={{ opacity: 0,y:50,  }}
      animate={{opacity:  1,y:0}}
      transition={{ duration: 3, type:"spring" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="lg:col-span-1">
          <h1 className="text-white mb-3 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Olivia",
                1000,
                "Web Developer",
                1000,
                "React Developer",
                1000,
                "Freelancer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-5 lg:text-xl">
          Detailed-oriented Front End Developer with years of experience working with HTML, CSS, Javascript,<br/>TypeScript, Reactjs ,Nextjs and Git 
          </p>
          <div className="mb-5">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        <motion.div
      className="relative mx-auto overflow-hidden rounded-xl w-full lg:w-auto"
      animate={{ y: [0, -20, 0], transition: { duration: 3, ease: "linear", repeat: Infinity } }}
    >
      <Image
        alt="Image"
        className="w-full h-auto"
        layout="responsive"
        width={1200}
        height={450}
        src="/images/oly.png"
      />
    </motion.div>
      </div>
      <nav className="text-white border-b pt-8 pb-10 font-black">
  <ul className="flex flex-wrap justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-12 md:space-x-16 lg:space-x-20">
    <li>
      <a className="flex items-center font-bold text-lg sm:text-xl" href="#">
        <span>Responsive Design</span>
        <StarIcon className="text-purple-400" />
      </a>
    </li>
    <li>
      <a className="flex items-center font-bold text-lg sm:text-xl" href="#">
        <span>Interactive Design</span>
        <StarIcon className="text-purple-400" />
      </a>
    </li>
    <li>
      <a className="flex items-center font-bold text-lg sm:text-xl" href="#">
        <span>Optimization</span>
        <StarIcon className="text-purple-400" />
      </a>
    </li>
    <li>
      <a className="flex items-center font-bold text-lg sm:text-xl" href="#">
        <span>Cloning</span>
        <StarIcon className="text-purple-400" />
      </a>
    </li>
    <li>
      <a className="flex items-center font-bold text-lg sm:text-xl" href="#">
        <span>Figma Design</span>
        <StarIcon className="text-purple-400" />
      </a>
    </li>
  </ul>
</nav>

      </motion.section>
  );
};

export default HeroSection;
