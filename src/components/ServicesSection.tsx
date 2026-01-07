import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Users, 
  Building2, 
  FileSearch, 
  Gavel,
  ArrowRight,
  X,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceDetail {
  title: string;
  description: string;
}

interface Service {
  icon: typeof Users;
  title: string;
  description: string;
  features: string[];
  image: string;
  fullDescription: string;
  details: ServiceDetail[];
}

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: Users,
      title: "Personal Investigation",
      description: "We specialize in discreet and reliable personal investigations tailored to individual needs. Whether it's safeguarding your future or uncovering the truth, our team ensures complete confidentiality and professionalism at every step.",
      features: ["Matrimonial Inquiries", "Premarital Verification", "Character Verification"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      fullDescription: "We specialize in discreet and reliable personal investigations tailored to individual needs. Whether it's safeguarding your future or uncovering the truth, our team ensures complete confidentiality and professionalism at every step.",
      details: [
        {
          title: "Matrimonial Inquiries",
          description: "Comprehensive investigations into marital concerns, including suspicions of infidelity or hidden activities, conducted with sensitivity and discretion."
        },
        {
          title: "Premarital Verification",
          description: "Detailed background checks to verify the authenticity of personal, professional, and financial claims before marriage, helping clients make informed decisions."
        },
        {
          title: "Character Verification",
          description: "Thorough assessments of an individual's personal and professional reputation, ensuring clarity and peace of mind in sensitive matters."
        }
      ]
    },
    {
      icon: Building2,
      title: "Corporate Investigation",
      description: "We provide end-to-end investigative solutions to protect organizations from risks, fraud, and reputational damage. Our services are designed to strengthen business resilience and ensure informed decision-making.",
      features: ["Fraud Detection", "Corporate Espionage", "Asset Tracing"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      fullDescription: "We provide end-to-end investigative solutions to protect organizations from risks, fraud, and reputational damage. Our services are designed to strengthen business resilience and ensure informed decision-making.",
      details: [
        {
          title: "Fraud Detection & Prevention",
          description: "Investigations into financial irregularities, embezzlement, or accounting discrepancies to safeguard company assets."
        },
        {
          title: "Corporate Espionage Detection",
          description: "Identifying and mitigating threats from competitors or insiders attempting to access confidential business information."
        },
        {
          title: "Asset Tracing",
          description: "Locating and verifying hidden or misappropriated company assets to support recovery and legal action."
        },
        {
          title: "Vendor & Partner Verification",
          description: "Comprehensive background checks on suppliers, contractors, and business partners to reduce risks in collaborations."
        },
        {
          title: "Workplace Harassment & Ethics Violations",
          description: "Discreet inquiries into harassment claims, discrimination, or breaches of corporate ethics to maintain a safe work environment."
        },
        {
          title: "Financial Background Checks",
          description: "Assessing the credibility and solvency of individuals or entities before entering into contracts or investments."
        },
        {
          title: "Compliance & Regulatory Investigations",
          description: "Ensuring adherence to industry regulations and uncovering violations that could expose the company to penalties or reputational harm."
        }
      ]
    },
    {
      icon: FileSearch,
      title: "Background Verification",
      description: "We provide comprehensive background verification services to ensure trust, transparency, and informed decision-making. Whether for employment, business partnerships, or personal relationships, our checks are conducted with the highest level of confidentiality and accuracy.",
      features: ["Pre-Employment Checks", "Criminal Records", "Financial Background"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      fullDescription: "We provide comprehensive background verification services to ensure trust, transparency, and informed decision-making. Whether for employment, business partnerships, or personal relationships, our checks are conducted with the highest level of confidentiality and accuracy.",
      details: [
        {
          title: "Pre-Employment Checks",
          description: "Detailed verification of a candidate's professional history, qualifications, and references to help organizations hire with confidence."
        },
        {
          title: "Criminal Records",
          description: "Thorough screening for any past or pending criminal cases, ensuring safety and compliance in sensitive engagements."
        },
        {
          title: "Financial Background",
          description: "In-depth assessment of financial stability, credit history, and liabilities to evaluate credibility in business or personal dealings."
        }
      ]
    },
    {
      icon: Gavel,
      title: "Litigation & Specialized Investigations",
      description: "We provide specialized investigative services to support legal, financial, and personal matters. Our team ensures accuracy, discretion, and actionable insights that empower clients to make informed decisions.",
      features: ["Litigation Check", "Asset Tracing", "Whereabouts Investigation"],
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&q=80",
      fullDescription: "We provide specialized investigative services to support legal, financial, and personal matters. Our team ensures accuracy, discretion, and actionable insights that empower clients to make informed decisions.",
      details: [
        {
          title: "Litigation Check",
          description: "Comprehensive verification of ongoing or past litigation involving individuals or businesses, helping clients assess risks before partnerships, investments, or employment."
        },
        {
          title: "Asset Tracing",
          description: "Detailed investigations to locate, verify, and assess hidden or misappropriated assets, supporting recovery efforts and strengthening legal claims."
        },
        {
          title: "Whereabouts Investigation",
          description: "Discreet tracking and verification of an individual's location or movements, conducted with professionalism and confidentiality to provide clarity in sensitive situations."
        }
      ]
    },
  ];

  return (
    <>
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

          <div className="grid md:grid-cols-2 gap-8">
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
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>


                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedService(service)}
                    className="flex items-center text-gold text-sm font-medium cursor-pointer hover:underline"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-border/50 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={() => setSelectedService(null)}
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Image Header */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-6 left-8 right-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center backdrop-blur-sm">
                      <selectedService.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h2 className="font-display text-3xl font-bold text-white">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                <Accordion type="single" collapsible className="space-y-3">
                  {selectedService.details.map((detail, index) => (
                    <AccordionItem 
                      key={detail.title} 
                      value={`item-${index}`}
                      className="glass-card rounded-xl border-none overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gold/5 transition-colors [&[data-state=open]>svg]:rotate-180">
                        <span className="font-display text-lg font-semibold text-gold text-left">
                          {detail.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-0">
                        <p className="text-muted-foreground leading-relaxed">
                          {detail.description}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 flex justify-center">
                  <Button
                    variant="gold"
                    size="lg"
                    onClick={() => {
                      setSelectedService(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Request Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
