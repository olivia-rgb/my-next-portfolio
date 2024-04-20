"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import ThemeButton from "./ThemeButton.jsx";
import AboutSection from "./AboutSection.jsx";
import Skills from  "./Skills.jsx"
import EmailSection from "./EmailSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";


export default function NavbarComponent() {
  const [activeLink, setActiveLink] = useState("Home");

  const menuItems = [
    { label: "Home", sectionId: "home" },
    { label: "About", sectionId: "about" },
    { label: "Skills", sectionId: "skills" },
    { label: "Projects", sectionId: "projects" },
    { label: "Contact", sectionId: "contact" },
  ];

  const handleLinkClick = (label) => {
    setActiveLink(label);
  };

  return (
    <div>
      <Navbar className="navbar max-w-full bg-[#121212] bg-opacity-100 text-white">
        <NavbarContent>
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">OLIVIA</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={item.label} isActive={activeLink === item.label}>
              <button
                className={`links ${activeLink === item.label ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.label)}
                style={activeLink === item.label ? { 
                  borderBottom: '2px solid transparent',
                  backgroundImage: 'linear-gradient(90deg, #8e44ad, #e74c3c)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  transition: 'border-bottom  0.5s ease',
                } : {}}
              >
                {item.label}
              </button>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
      <div className="content">
        {activeLink === "About" &&  <AboutSection content={null} />}
        {activeLink === "Skills" &&  <Skills content={null} />}
        {activeLink === "Projects" &&  <ProjectsSection content={null} />}
        {activeLink === "Contact" &&  <EmailSection content={null} />}
      </div>
    </div>
  );
}
