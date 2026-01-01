import { Download, Briefcase, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { SlideInLeft, SlideInRight } from './AnimatedSection';

const experiences = [
  {
    title: 'Founder',
    company: 'Daisyverse',
    period: 'Present',
    description: 'Built and managing an e-commerce brand for customized jewellery and personalized gifts.',
  },
  {
    title: 'Decoration Head',
    company: 'Codebit 3.0 Hackathon',
    period: '2024',
    description: 'Led the decoration team, combining artistic vision with event management skills.',
  },
];

const Resume = () => {
  return (
    <section id="resume" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Experience
            </span>
            <h2 className="section-heading mt-3">
              My <span className="gradient-text">Resume</span>
            </h2>
          </AnimatedSection>

          {/* Experience Timeline */}
          <SlideInLeft className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="font-serif text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-primary/20 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-primary rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  />
                  <motion.div
                    className="bg-background p-6 rounded-xl shadow-soft"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <span className="text-muted-foreground">at</span>
                      <span className="text-primary font-medium">{exp.company}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </SlideInLeft>

          {/* Education */}
          <SlideInRight className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="font-serif text-2xl font-bold">Education</h3>
            </div>
            
            <motion.div
              className="bg-background p-6 rounded-xl shadow-soft"
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <h4 className="font-semibold text-lg mb-1">
                B.E. in Computer Science & Engineering (AIML)
              </h4>
              <p className="text-primary font-medium mb-2">
                Gharda Institute of Technology, Khed
              </p>
              <p className="text-sm text-muted-foreground">
                Pursuing undergraduate degree with specialization in Artificial Intelligence 
                and Machine Learning.
              </p>
            </motion.div>
          </SlideInRight>

          {/* Download Resume */}
          <AnimatedSection className="text-center">
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium shadow-soft"
              whileHover={{ scale: 1.05, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
            <p className="text-sm text-muted-foreground mt-4">
              Get a detailed overview of my qualifications and experience
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Resume;
