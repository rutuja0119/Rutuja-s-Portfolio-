import { ExternalLink, Github, ShoppingBag, Calendar, Printer } from 'lucide-react';

const projects = [
  {
    title: 'Daisyverse',
    description: 'A customized e-commerce platform for handmade jewellery and personalized gifts. Features product customization, order management, and seamless checkout experience.',
    icon: ShoppingBag,
    tags: ['E-Commerce', 'React.js', 'Node.js', 'MongoDB'],
    color: 'from-primary to-accent',
    featured: true,
  },
  {
    title: 'Event Booking & Management',
    description: 'A comprehensive marketplace connecting event organizers with service providers. Supports both public and private event bookings with real-time availability.',
    icon: Calendar,
    tags: ['Marketplace', 'Full-Stack', 'MySQL', 'REST API'],
    color: 'from-secondary to-sage',
    featured: true,
  },
  {
    title: 'PrintMaster',
    description: 'Smart college printing system that eliminates queues and saves time. Students can upload documents, select preferences, and pick up prints when ready.',
    icon: Printer,
    tags: ['Automation', 'Python', 'React.js', 'MySQL'],
    color: 'from-charcoal to-muted-foreground',
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              My Work
            </span>
            <h2 className="section-heading mt-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              From e-commerce platforms to smart automation systems — each project 
              reflects my commitment to solving real-world problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-card rounded-2xl overflow-hidden shadow-soft card-hover ${
                  project.featured ? 'md:col-span-1' : ''
                }`}
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon className="w-12 h-12 text-primary-foreground opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
