import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:rutujasalunkhe0410@gmail.com',
    label: 'rutujasalunkhe0410@gmail.com',
    color: 'hover:bg-primary/10 hover:text-primary',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rutuja-salunkhe',
    label: 'linkedin.com/in/rutuja-salunkhe',
    color: 'hover:bg-[#0077b5]/10 hover:text-[#0077b5]',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/rutuja0119',
    label: 'github.com/rutuja0119',
    color: 'hover:bg-charcoal/10 hover:text-charcoal',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="section-heading mt-3">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6">
                  Reach Out Directly
                </h3>
                <p className="text-muted-foreground mb-8">
                  Whether it's a collaboration, opportunity, or just a friendly chat, 
                  I'm always open to connecting with like-minded individuals.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft transition-all ${link.color}`}
                  >
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{link.name}</p>
                      <p className="text-muted-foreground text-sm">{link.label}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Khed, Maharashtra, India</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell me about your project or just say hi..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
