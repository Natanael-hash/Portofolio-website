import { Eye } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-white font-bold text-xl mb-4 md:mb-0">
            <Eye size={24} className="text-primary-400" />
            <span>Natanael Hordon</span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#about"
              className="hover:text-primary-400 transition-colors"
            >
              About
            </a>
            <a 
              href="#project"
              className="hover:text-primary-400 transition-colors"
            >
              Visual-AI
            </a>
            <a 
              href="#contact"
              className="hover:text-primary-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Natanael Hordon. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/natanael-hordon-b04bb22b5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="https://github.com/Natanael-hash/Visual-AI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};