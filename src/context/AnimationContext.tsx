import React, { createContext, useContext, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimationContextProps {
  AnimatedSection: React.FC<AnimatedSectionProps>;
  fadeInVariants: {
    hidden: object;
    visible: object;
  };
  slideUpVariants: {
    hidden: object;
    visible: object;
  };
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'slide';
}

const AnimationContext = createContext<AnimationContextProps | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
    children, 
    className = '', 
    delay = 0,
    animation = 'fade'
  }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const variants = animation === 'fade' ? fadeInVariants : slideUpVariants;

    return (
      <div ref={ref} className={className}>
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  return (
    <AnimationContext.Provider value={{ 
      AnimatedSection,
      fadeInVariants,
      slideUpVariants
    }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};