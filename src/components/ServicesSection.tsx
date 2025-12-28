import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Users, 
  Building2, 
  FileSearch, 
  Video, 
  Search, 
  UserX,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Users,
      title: "Personal Investigation",
      description: "Matrimonial inquiries, premarital verification, and personal background checks conducted with complete confidentiality.",
      features: ["Spouse surveillance", "Premarital checks", "Character verification"],
    },
    {
      icon: Building2,
      title: "Corporate Investigation",
      description: "Protect your business interests with thorough corporate espionage detection, due diligence, and employee investigations.",
      features: ["Employee misconduct", "Intellectual property theft", "Due diligence"],
    },
    {
      icon: FileSearch,
      title: "Background Verification",
      description: "Comprehensive background checks for employment, business partnerships, or personal relationships.",
      features: ["Employment history", "Criminal records", "Financial background"],
    },
    {
      icon: Video,
      title: "Surveillance Services",
      description: "State-of-the-art surveillance operations using advanced technology and experienced field operatives.",
      features: ["Video documentation", "GPS tracking", "Digital forensics"],
    },
    {
      icon: Search,
      title: "Fraud Investigation",
      description: "Uncover deception with our specialized fraud investigation services for insurance, financial, and relationship fraud.",
      features: ["Insurance fraud", "Financial scams", "Identity theft"],
    },
    {
      icon: UserX,
      title: "Missing Person",
      description: "Locate missing family members, debtors, or witnesses with our extensive network and investigative resources.",
      features: ["Family reunification", "Debtor tracing", "Witness location"],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-background to-navy-deep/50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive <span className="gold-text">Investigation</span> Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From personal matters to corporate security, we offer a full range of professional 
            investigation services tailored to your specific needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass-card p-8 rounded-2xl h-full transition-all duration-500 group-hover:border-gold/30 group-hover:shadow-xl group-hover:shadow-gold/10">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-electric-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="absolute -inset-2 bg-gold/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gold text-sm font-medium cursor-pointer"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
