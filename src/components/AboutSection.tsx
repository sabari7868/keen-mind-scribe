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
      description: "Seven years of successful investigations with thousands of satisfied clients.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-deep/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
              Trusted Investigators Since 2018
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 sm:mb-6"
            >
              Truth. <span className="gold-text">Evidence.</span> Confidence.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
            >
              For the past seven years, our agency has stood as a trusted leader in private investigation services. 
              With a proven track record of success, we blend time-tested investigative methods with modern 
              technology to deliver results that consistently exceed expectations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              Each investigation is conducted with the highest standards of professionalism, confidentiality, 
              and integrity. We understand that clients turn to us during some of the most challenging moments 
              of their lives, and we are committed to providing not only clear answers but also the reassurance 
              and peace of mind they deserve.
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
                className="glass-card p-4 sm:p-6 rounded-xl group cursor-default"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-gold/20 transition-shadow duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
