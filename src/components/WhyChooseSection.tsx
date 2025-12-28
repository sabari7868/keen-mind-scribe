import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle, Clock, Globe, Lock } from "lucide-react";

const AnimatedCounter = ({ value, suffix = "", inView }: { value: number; suffix?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 25, suffix: "+", label: "Years of Excellence" },
    { value: 5000, suffix: "+", label: "Cases Solved" },
    { value: 98, suffix: "%", label: "Success Rate" },
    { value: 50, suffix: "+", label: "Expert Investigators" },
  ];

  const reasons = [
    {
      icon: CheckCircle,
      title: "Licensed & Experienced",
      description: "Our team consists of former law enforcement, military intelligence, and security professionals.",
    },
    {
      icon: Lock,
      title: "Strict Confidentiality",
      description: "All client information and investigation details are protected under strict NDA protocols.",
    },
    {
      icon: Globe,
      title: "Pan-India Network",
      description: "Extensive network of field operatives across all major cities and states.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support and real-time updates on your investigation status.",
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-deep/40 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            The <span className="gold-text">Trusted</span> Name in Investigation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When discretion and accuracy matter most, experience makes all the difference.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-card p-8 rounded-2xl text-center group hover:border-gold/30 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold gold-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="flex gap-6 p-6 glass-card rounded-xl group cursor-default"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-300">
                  <reason.icon className="w-7 h-7 text-gold" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
