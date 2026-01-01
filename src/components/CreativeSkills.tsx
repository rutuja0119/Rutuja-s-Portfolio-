import { Palette, PenTool, Gem, Scissors, Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const creativeSkills = [
  {
    icon: Palette,
    title: 'Painting',
    description: 'Acrylic and watercolor artworks expressing emotions through colors',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: PenTool,
    title: 'Drawing & Sketching',
    description: 'Pencil portraits, illustrations, and creative sketches',
    color: 'bg-charcoal/10 text-charcoal',
  },
  {
    icon: Gem,
    title: 'Beaded Jewellery',
    description: 'Handcrafted custom jewellery using beads and semi-precious stones',
    color: 'bg-accent/20 text-accent-foreground',
  },
  {
    icon: Scissors,
    title: 'Embroidery',
    description: 'Traditional and modern embroidery patterns on fabric',
    color: 'bg-secondary text-secondary-foreground',
  },
  {
    icon: PenTool,
    title: 'Calligraphy',
    description: 'Elegant hand-lettering for invitations and artistic pieces',
    color: 'bg-dusty-rose/30 text-foreground',
  },
];

const CreativeSkills = () => {
  return (
    <section id="creative" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Artistic Side
            </span>
            <h2 className="section-heading mt-3">
              Creative <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Art is not just a hobby — it's a language I speak fluently. Here's how 
              I express my creativity beyond code.
            </p>
          </AnimatedSection>

          {/* Creative Skills Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeSkills.map((skill) => (
              <StaggerItem key={skill.title}>
                <motion.div
                  className="group p-8 bg-card rounded-2xl shadow-soft relative overflow-hidden h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
                  
                  <div className={`w-14 h-14 rounded-xl ${skill.color} flex items-center justify-center mb-5 relative z-10`}>
                    <skill.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold mb-3 relative z-10">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {skill.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}

            {/* Daisyverse Highlight */}
            <StaggerItem className="sm:col-span-2 lg:col-span-3">
              <motion.div
                className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl relative overflow-hidden"
                whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <motion.div
                    className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart className="w-10 h-10 text-primary" />
                  </motion.div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      Daisyverse — Where Creativity Becomes Business
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      I combined my passion for handmade crafts with entrepreneurship to create 
                      <span className="text-foreground font-medium"> Daisyverse</span> — an e-commerce 
                      brand offering customized jewellery, personalized gifts, and handcrafted accessories 
                      that bring smiles to every occasion. From beaded bracelets to custom gift hampers, 
                      every piece is crafted with love and attention to detail.
                    </p>
                    <motion.a
                      href="https://daisyversebyrrs.lovable.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Daisyverse
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default CreativeSkills;
