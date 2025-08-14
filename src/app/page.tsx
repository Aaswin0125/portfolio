import { Header } from '@/components/header'
import { HomeSection } from '@/components/home-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { TeachingSection } from '@/components/teaching-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TeachingSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
