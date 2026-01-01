import { GraduationCap, Store, Calendar, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'CSE (AIML) at Gharda Institute of Technology, Khed',
  },
  {
    icon: Store,
    title: 'Entrepreneur',
    description: 'Founder of Daisyverse — customized jewellery & gifts',
  },
  {
    icon: Calendar,
    title: 'Leadership',
    description: 'Decoration Head for Codebit 3.0 Hackathon',
  },
  {
    icon: Heart,
    title: 'Creative Soul',
    description: 'Artist, calligrapher & handcraft enthusiast',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="section-heading mt-3">
              Where <span className="gradient-text">Tech</span> Meets{' '}
              <span className="gradient-text">Art</span>
            </h2>
          </AnimatedSection>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <AnimatedSection className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Rutuja Ganesh Salunkhe</span>, 
                a passionate Computer Science and Engineering student specializing in 
                <span className="text-foreground font-medium"> AI/ML</span>. My journey bridges 
                the analytical world of technology with the expressive realm of creative arts.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As the <span className="text-foreground font-medium">Founder of Daisyverse</span>, 
                I've turned my love for handmade crafts into a thriving e-commerce brand, offering 
                customized jewellery and personalized gifts that bring joy to every occasion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding and crafting, I've led teams as the 
                <span className="text-foreground font-medium"> Decoration Head for Codebit 3.0 Hackathon</span>, 
                combining my organizational skills with artistic vision to create memorable experiences.
              </p>
            </AnimatedSection>

            {/* Highlights Grid */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    className="p-6 bg-background rounded-2xl shadow-soft group h-full"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
