import { Hero } from '@/components/sections/Hero';
import { AboutSkills } from '@/components/sections/AboutSkills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { BackgroundAnimation } from '@/components/ui/BackgroundAnimation';
import { ContactBubble } from '@/components/ui/ContactBubble';
import { Footer } from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="relative">
      <BackgroundAnimation />
      {/* Full-screen Hero */}
      <Hero />
      
      {/* Sections with gaps */}
      <AboutSkills />
      
      {/* Gap between AboutSkills (ends gray-900) and Projects (starts gray-900) */}
      <div className="h-16 md:h-24 bg-gray-900"></div>
      
      <Projects />
      
      {/* Gap between Projects (ends black) and Contact (starts black) */}
      <div className="h-16 md:h-24 bg-black"></div>
      
      <Contact />
      
      {/* Gap between Contact and Footer */}
      <div className="h-16 md:h-24 bg-gray-900"></div>
      
      <Footer />
      
      <ContactBubble />
    </main>
  );
}
