import { motion } from 'framer-motion';
import { useAnimation } from '../context/AnimationContext';
import { Eye, Bot, Box, LayoutGrid, CloudCog, Github } from 'lucide-react';

export const Project = () => {
  const { AnimatedSection } = useAnimation();

  const features = [
    {
      icon: <Eye />,
      title: 'Real-time Object Detection',
      description: 'Using a customized YOLOv12m model trained on a curated dataset for practical environments.'
    },
    {
      icon: <Box />,
      title: 'Depth Estimation',
      description: 'Powered by Apple\'s Depth Pro model to assess distances and detect nearby obstacles.'
    },
    {
      icon: <Bot />,
      title: 'Dynamic Voice Feedback',
      description: 'Real-time audio alerts and guidance via PyTTSX3 for safe navigation assistance.'
    },
    {
      icon: <LayoutGrid />,
      title: 'Streamlit Interface',
      description: 'User-friendly interface for quick deployment, testing, and interaction.'
    },
    {
      icon: <CloudCog />,
      title: 'Cloud Compatible',
      description: 'Works in both local and cloud environments, including AWS EC2 with GPU support.'
    }
  ];

  const technologies = [
    'Python', 'YOLOv12m', 'OpenCV', 'NumPy', 
    'Apple Depth Pro', 'PyTTSX3', 'Streamlit', 'AWS EC2'
  ];

  return (
    <section id="project" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="slide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Visual-<span className="text-primary-600">AI</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            An AI-powered assistant for visually impaired individuals, providing real-time scene understanding and audio guidance.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-100 rounded-lg transform rotate-3"></div>
              <img 
                src="/Visual-AI.png" 
                alt="Screenshot of Visual-AI Application interface" 
                className="rounded-lg shadow-xl relative z-10"
              />
              
              <a 
                href="https://github.com/Natanael-hash/Visual-AI"
                target="_blank"
                rel="noopener noreferrer" 
                className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-primary-700 font-medium py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 transition-colors z-20"
              >
                <Github size={18} />
                View on GitHub
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection className="space-y-6" animation="slide" delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About the Project</h3>
              <p className="text-gray-700 leading-relaxed">
                Visual-AI is an innovative application designed to assist visually impaired users in navigating safely and independently 
                through their environment. Developed as part of a Bachelor's thesis, the project integrates cutting-edge computer vision 
                and artificial intelligence technologies to deliver real-time scene understanding and spoken feedback.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
                <h4 className="font-semibold text-lg mb-4 text-gray-900">Key Features</h4>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-primary-600 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">{feature.title}</h5>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4 text-gray-900">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-20" animation="slide" delay={0.3}>
          <div className="bg-gradient-to-r from-primary-800 to-primary-700 rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-4">How Visual-AI Works</h3>
                <p className="text-gray-100 mb-6">
                  Visual-AI combines real-time object detection with depth estimation to create a comprehensive understanding of the 
                  environment. The system then converts this information into helpful voice guidance for the user.
                </p>
                <ul className="space-y-3 text-gray-100">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                    </div>
                    <p>Captures video from user's phone</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                    </div>
                    <p>Processes frames to detect objects and estimate their distance</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                    </div>
                    <p>Prioritizes the most relevant information based on proximity and type</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                    </div>
                    <p>Provides clear audio guidance like "Obstacle ahead. Please go around to the left."</p>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-700/20"
                  animate={{ 
                    background: [
                      'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(29, 78, 216, 0.2))',
                      'linear-gradient(to right, rgba(29, 78, 216, 0.2), rgba(59, 130, 246, 0.2))',
                      'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(29, 78, 216, 0.2))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <div className="h-full flex items-center justify-center p-8">
                  <img 
                    src="/Visual-AI.png" 
                    alt="Diagram illustrating Visual-AI workflow" 
                    className="rounded-lg shadow-lg max-h-64 md:max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};