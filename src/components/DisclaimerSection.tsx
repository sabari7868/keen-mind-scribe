import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Scale, AlertTriangle, FileCheck } from "lucide-react";

const DisclaimerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const disclaimers = [
    {
      icon: Scale,
      title: "Legal Compliance",
      content: "All investigation services are conducted in strict accordance with the applicable laws of India, including the Indian Penal Code, Information Technology Act, and relevant state regulations. We do not engage in any illegal surveillance, hacking, or data theft activities.",
    },
    {
      icon: FileCheck,
      title: "Evidence Handling",
      content: "Evidence collected during investigations is handled in accordance with legal standards to ensure admissibility in court proceedings where applicable. We maintain chain of custody documentation for all physical and digital evidence.",
    },
    {
      icon: AlertTriangle,
      title: "Service Limitations",
      content: "Our services are provided for lawful purposes only. We reserve the right to decline any case that we believe involves illegal intentions or activities. Clients must provide truthful information about the nature and purpose of their inquiry.",
    },
  ];

  return (
    <section id="disclaimer" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-deep/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">
            Legal Information
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
            Legal & Ethical <span className="gold-text">Disclaimer</span>
          </h2>
          <p className="text-muted-foreground">
            Our commitment to lawful and ethical investigation practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {disclaimers.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/20 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="font-display text-lg font-semibold">{item.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openItems.includes(index) ? "auto" : 0,
                  opacity: openItems.includes(index) ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-border/30">
                  {item.content}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
