import { Eye, Code, Brain, LightbulbIcon } from 'lucide-react';
import { useAnimation } from '../context/AnimationContext';

export const About = () => {
  const { AnimatedSection } = useAnimation();

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Computer Vision', level: 85 },
    { name: 'Linux', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'MySQL', level: 80 },
    { name: 'SQLAlchemy', level: 80 },
    { name: 'AWS', level: 70 },
    { name: 'Fast Learner', level: 100 },
    { name: 'Hard Worker', level: 100 },
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 80 },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="slide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            About <span className="text-primary-600">Me</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="space-y-6" animation="slide">
            <h3 className="text-2xl font-semibold text-gray-900">I'm a Python Developer passionate about AI-driven solutions</h3>
            <p className="text-gray-700 leading-relaxed">
              I specialize in building AI-driven solutions with a strong focus on accessibility and healthcare. 
              Currently, I'm developing an AI-powered HealthCare application to assist visually impaired 
              individuals in navigating their surroundings safely and independently.
            </p>
            <p className="text-gray-700 leading-relaxed">
            My work explores advanced concepts in Machine Learning, Deep Learning, and Computer Vision, with an emphasis on creating technology that has a real social impact. I’m experienced in deploying AI systems both locally and in the cloud (e.g., AWS EC2 with GPU), ensuring performance, scalability, and accessibility.
            </p>
            <p className="text-gray-700 leading-relaxed">
            My goal is to turn complex AI systems into meaningful, usable tools that improve people’s lives,especially in the fields of healthcare and assistive technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <Eye className="text-primary-600 mb-3" size={28} />
                <h4 className="font-semibold text-lg text-gray-900 mb-1">Computer Vision</h4>
                <p className="text-gray-600 text-sm">Specialized object detection and depth estimation</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <Brain className="text-primary-600 mb-3" size={28} />
                <h4 className="font-semibold text-lg text-gray-900 mb-1">Machine Learning</h4>
                <p className="text-gray-600 text-sm">Advanced algorithms for intelligent solutions</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <Code className="text-primary-600 mb-3" size={28} />
                <h4 className="font-semibold text-lg text-gray-900 mb-1">Python Development</h4>
                <p className="text-gray-600 text-sm">Efficient and scalable code for AI applications</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide" delay={0.2}>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900">
                <LightbulbIcon className="text-primary-600" />
                Technical Skills
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-600 to-secondary-500 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-3 text-gray-900">Education & Background</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 w-2 h-2 bg-primary-600 rounded-full"></div>
                    <p className="text-gray-700">Bachelor's degree with focus on AI applications in accessibility</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 w-2 h-2 bg-primary-600 rounded-full"></div>
                    <p className="text-gray-700">Advanced studies in Deep Learning and Computer Vision</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 w-2 h-2 bg-primary-600 rounded-full"></div>
                    <p className="text-gray-700">Experience with healthcare applications and assistive technology</p>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};