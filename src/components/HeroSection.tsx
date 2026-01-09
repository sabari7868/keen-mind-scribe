import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock } from "lucide-react";
import heroImage from "@/assets/logonew.png";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initial delay before starting
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted || isComplete) return;

    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [hasStarted, text, isComplete]);

  return (
    <span className="inline">
      {displayedText}
      {!isComplete && <span className="animate-pulse text-gold">|</span>}
    </span>
  );
};

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </motion.div>

      {/* Floating Elements - Hidden on small screens */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-4 md:left-10 opacity-10 md:opacity-20 hidden sm:block"
      >
        <Eye className="w-10 md:w-16 h-10 md:h-16 text-gold" />
      </motion.div>
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-4 md:right-10 opacity-10 md:opacity-20 hidden sm:block"
      >
        <Shield className="w-12 md:w-20 h-12 md:h-20 text-electric-blue" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
        >
          <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.3em] text-muted-foreground font-medium">
            Confidential Investigation Services
          </span>
          <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="text-foreground">Truth.</span>{" "}
          <span className="gold-text">Evidence.</span>{" "}
          <span className="text-foreground">Confidence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-10 font-light px-2"
        >
          <TypewriterText text="Professional private investigation services with absolute discretion and unwavering commitment to uncovering the truth." delay={1000} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
        >
          <Button variant="hero" size="xl" onClick={scrollToContact} className="text-sm sm:text-base px-4 sm:px-8">
            Request Confidential Consultation
          </Button>
          <Button variant="glass" size="xl" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="text-sm sm:text-base px-4 sm:px-8">
            Explore Our Services
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 md:gap-10 px-2"
        >
          {[
            { icon: Shield, text: "Licensed & Certified" },
            { icon: Lock, text: "100% Confidential" },
            { icon: Eye, text: "Discreet Operations" },
          ].map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-gold/30 bg-background/50 backdrop-blur-sm"
            >
              <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-foreground/90 uppercase tracking-wider">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
