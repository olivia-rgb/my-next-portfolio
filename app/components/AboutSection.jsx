"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image'
import TabButton from './TabButton'
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutSection = ({ content }) => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 3 } });
  }, [controls]);

  return (
    <motion.section
      className="container mx-auto px-4 py-8 lg:py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="flex flex-col md:flex-row items-start justify-start gap-8 py-8 xl:gap-16 sm:py-16 text-white">
        <div className="flex-shrink-0">
          <Image src="/images/oly2.png" alt="" width={500} height={600} className="rounded-sm" />
        </div>
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>A Passionate Frontend Developer 🎨, who finds joy in crafting visually stunning responsive website.I have experience working with  JavaScript, React, Redux, Next.js,TypeScript, HTML, CSS, and Git.  I am a dedicated team player synergizing our strengths to create amazing applications.Together, let us build something truly extraordinary! 🚀🎨</p>
          <div className='flex flex-row mt-3'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {content}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection;
