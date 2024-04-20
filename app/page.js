import NavbarComponent from './components/NavbarComponent'
import HeroSection from './components/HeroSection'
import * as React from "react";
import AboutSection from './components/AboutSection';
import AchievementsSection from './components/AchievementsSection'
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import Skills from './components/Skills';




export default function Home() {
  return (
        <main className=" flex min-h-screen flex-col bg-[#121212]">
             <NavbarComponent />
          <div className="container mx-auto px-12">
              <HeroSection />
              <AboutSection />
              <AchievementsSection />
              <Skills />
              <ProjectsSection />
              <EmailSection />          
          </div>
          <Footer />
        </main>
     
  )
}
