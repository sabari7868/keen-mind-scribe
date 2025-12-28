import { motion } from "framer-motion";
import { Eye, Lock, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-navy-deep" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <Eye className="w-6 h-6 text-navy-deep" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Shadow Detective</h3>
                <p className="text-sm text-muted-foreground">Private Investigation Agency</p>
              </div>
            </motion.div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Professional investigation services with absolute discretion. 
              Trusted by individuals and corporations across India for over two decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Why Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">24/7 Helpline</h4>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <a
                href="mailto:inquiries@shadowdetective.in"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                inquiries@shadowdetective.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shadow Detective Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors duration-300">
              Terms of Service
            </a>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-gold" />
              <span>Secure & Confidential</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
