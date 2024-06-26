"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { HiMenu } from "react-icons/hi"; // Import hamburger icon
import { CgClose } from "react-icons/cg"; // Import close icon
import AboutSection from "./AboutSection.jsx";
import Skills from  "./Skills.jsx";
import EmailSection from "./EmailSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";

export default function NavbarComponent() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility

  const menuItems = [
    { label: "Home", sectionId: "home" },
    { label: "About", sectionId: "about" },
    { label: "Skills", sectionId: "skills" },
    { label: "Projects", sectionId: "projects" },
    { label: "Contact", sectionId: "contact" },
  ];

  const handleLinkClick = (label) => {
    setActiveLink(label);
    const section = document.getElementById(label.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar className="navbar max-w-full bg-[#121212] bg-opacity-100 text-white">
        <NavbarContent style={{ height: '70px', width: '100%' }}> {/* Increase height and width */}
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">OLIVIA</p>
          </NavbarBrand>
        </NavbarContent>

        {/* Hamburger icon */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CgClose /> : <HiMenu />}
          </button>
        </div>

        {/* Navbar content */}
        <NavbarContent className={`hidden sm:flex gap-4 ${menuOpen ? 'flex flex-col' : 'hidden'}`} justify="center">
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
    </div>
  );
}
