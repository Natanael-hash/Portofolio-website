import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimationProvider } from './context/AnimationContext';

function App() {
  useEffect(() => {
    // Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <AnimationProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  );
}

export default App;