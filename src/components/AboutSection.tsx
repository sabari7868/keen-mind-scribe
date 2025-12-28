import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Scale, Eye, Award } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Licensed & Certified",
      description: "All our investigators are licensed professionals with extensive training and certifications.",
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "Every investigation is conducted within the strict framework of applicable laws.",
    },
    {
      icon: Eye,
      title: "Absolute Discretion",
      description: "Your privacy is paramount. We ensure complete confidentiality in all matters.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Over two decades of successful investigations with thousands of satisfied clients.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-deep/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-gold uppercase tracking-[0.3em] text-sm font-medium"
            >
              About Our Agency
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Trusted <span className="gold-text">Investigators</span> Since 1999
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              For over two decades, our agency has been at the forefront of private investigation services. 
              We combine traditional investigative techniques with cutting-edge technology to deliver 
              results that exceed expectations. Our team of seasoned professionals brings expertise 
              from law enforcement, military intelligence, and corporate security backgrounds.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground leading-relaxed"
            >
              Every case we undertake is handled with the utmost professionalism and discretion. 
              We understand that seeking investigative services often comes during challenging times, 
              and we are committed to providing not just answers, but peace of mind.
            </motion.p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card p-6 rounded-xl group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-gold/20 transition-shadow duration-300">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
