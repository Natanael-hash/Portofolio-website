import { motion } from 'framer-motion';
import { useAnimation } from '../context/AnimationContext';
import { GithubIcon, Linkedin } from 'lucide-react';

export const Hero = () => {
  const { AnimatedSection } = useAnimation();

  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-r from-primary-900 to-primary-700 text-white">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <AnimatedSection className="flex-1" animation="slide">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Python Developer <br/>
              <span className="text-secondary-300">Specializing in AI Solutions</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
              Creating innovative AI-driven solutions with a focus on accessibility and healthcare.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href="#project" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore Visual-AI
              </a>
            </div>

            <div className="flex mt-8 space-x-4">
              <a 
                href="https://www.linkedin.com/in/natanael-hordon-b04bb22b5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/Natanael-hash/Visual-AI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={28} />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex-1 flex justify-center" delay={0.3} animation="fade">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-primary-400/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
              <img 
                src="public/assets/6B84E397-8F2C-4963-8376-411A019E266D_1_102_a.jpeg" 
                alt="Natanael Hordon" 
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/30 shadow-xl relative z-10"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};