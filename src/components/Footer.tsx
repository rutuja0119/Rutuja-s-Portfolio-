import { Heart, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-12 bg-card border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <a href="#" className="font-serif text-2xl font-bold gradient-text">
                Rutuja Salunkhe
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                © {currentYear} All rights reserved.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[
                { href: 'mailto:rutujasalunkhe0410@gmail.com', icon: Mail, label: 'Email', hoverClass: 'hover:text-primary hover:bg-primary/10' },
                { href: 'https://www.linkedin.com/in/rutuja-salunkhe', icon: Linkedin, label: 'LinkedIn', hoverClass: 'hover:text-[#0077b5] hover:bg-[#0077b5]/10' },
                { href: 'https://github.com/rutuja0119', icon: Github, label: 'GitHub', hoverClass: 'hover:text-foreground hover:bg-muted' },
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground transition-all ${link.hoverClass}`}
                  aria-label={link.label}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Made with love */}
            <motion.div
              className="flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </motion.div>
              <span>& creativity</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
