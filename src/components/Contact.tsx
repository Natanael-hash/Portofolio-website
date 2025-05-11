import { useState, useRef } from 'react';
import { useAnimation } from '../context/AnimationContext';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { AnimatedSection } = useAnimation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  
  // This will need to be configured with your EmailJS account details
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setFormStatus('submitting');
    
    try {
      //Uncomment and update these with your actual EmailJS service IDs
      await emailjs.sendForm(
        'service_a52zs7b',
        'template_mzn1qho',
        formRef.current,
        '9i4B12XQq486lqApK'
      );
      
      // For demo purposes, we'll simulate a successful response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus('success');
      setFormMessage('Thank you! Your message has been sent. I will get back to you as soon as possible.');
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setFormStatus('error');
      setFormMessage('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="slide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Have a question about my projects or want to discuss potential collaborations? I'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatedSection className="lg:col-span-1" animation="slide">
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">natanaelhordon@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">Feel free to email me anytime!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">(+40) 744 371 364</p>
                    <p className="text-sm text-gray-500 mt-1">Available during business hours or after.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">Arad,Romania</p>
                    <p className="text-sm text-gray-500 mt-1">Available for remote work worldwide.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4 text-gray-900">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/natanael-hordon-b04bb22b5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#0A66C2] text-white p-2 rounded-full hover:bg-[#0A66C2]/90 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/Natanael-hash/Visual-AI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#181717] text-white p-2 rounded-full hover:bg-[#181717]/90 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2" animation="slide" delay={0.2}>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Send Me a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full md:w-auto px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
                
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                    {formMessage}
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                    {formMessage}
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};