import { Hero } from '@/components/sections/Hero';
import { AboutSkills } from '@/components/sections/AboutSkills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { BackgroundAnimation } from '@/components/ui/BackgroundAnimation';
import { ContactBubble } from '@/components/ui/ContactBubble';

export default function Home() {
  return (
    <main className="relative">
      <BackgroundAnimation />
      {/* Full-screen Hero */}
      <Hero />
      
      {/* Compact GitHub-style content */}
      <div className="bg-gray-900 space-y-16">
        <AboutSkills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </div>
      
      <ContactBubble />
    </main>
  );
}
