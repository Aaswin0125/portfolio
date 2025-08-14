"use client"
import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/loading-screen';
import { Header } from '@/components/header'
import { HomeSection } from '@/components/home-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { TeachingSection } from '@/components/teaching-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Simulate a loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TeachingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
