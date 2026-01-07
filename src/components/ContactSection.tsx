import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Shield, Lock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkr7Wy4redffe94Ro63foACzVP6oM4V0GMiyn90TPWo2OwXjOyZ7oJTfFsKnslc2Cp/exec";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   try {
  //     // Submit to Google Sheets via Apps Script
  //     const response = await fetch(GOOGLE_SCRIPT_URL, {
  //       method: "POST",
  //       // mode: "no-cors",
  //       // headers: {
  //       //   "Content-Type": "application/json",
  //       // },
  //       body: JSON.stringify({
  //         ...formData,
  //         timestamp: new Date().toISOString(),
  //       }),
  //     });

  //     // Since no-cors mode doesn't allow reading response, we assume success
  //     toast({
  //       title: "Inquiry Submitted Successfully",
  //       description: "Our team will contact you within 24 hours. All communications are strictly confidential.",
  //     });
      
  //     setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  //   } catch (error) {
  //     toast({
  //       title: "Submission Error",
  //       description: "There was an issue submitting your inquiry. Please try again or contact us directly.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });

    toast({
      title: "Inquiry Submitted Successfully",
      description:
        "Our team will contact you within 24 hours. All communications are strictly confidential.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  } catch (error) {
    toast({
      title: "Submission Error",
      description:
        "There was an issue submitting your inquiry. Please try again or contact us directly.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 98765 43210", subtext: "24/7 Confidential Hotline" },
    { icon: Mail, label: "Email", value: "inquiries@truedetective.in", subtext: "Encrypted Communication" },
    { icon: MapPin, label: "Office", value: "Mumbai, Maharashtra", subtext: "By Appointment Only" },
  ];

  const serviceOptions = [
    "Personal Investigation",
    "Corporate Investigation",
    "Background Verification",
    "Litigation & Specialized Investigations",
    "Other",
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-background to-navy-deep/50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">
            Contact Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Request a <span className="gold-text">Confidential</span> Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your inquiry is protected by strict confidentiality protocols. 
            We understand the sensitive nature of your needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="font-semibold text-lg">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.subtext}</div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card p-6 rounded-xl mt-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-gold" />
                <span className="font-semibold">Confidentiality Guarantee</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All inquiries are handled with the utmost discretion. Your information is protected 
                by non-disclosure agreements and encrypted storage systems.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <Lock className="w-4 h-4" />
                <span>This form is secured and encrypted</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="bg-input/50 border-border/50 focus:border-gold/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number *</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="bg-input/50 border-border/50 focus:border-gold/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="bg-input/50 border-border/50 focus:border-gold/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">Service Required *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-md bg-input/50 border border-border/50 focus:border-gold/50 transition-colors text-foreground"
                  >
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Brief Description (Optional)</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="You may provide a brief overview of your inquiry. Full details can be discussed during consultation."
                  rows={4}
                  className="bg-input/50 border-border/50 focus:border-gold/50 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Request Confidential Consultation"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and consent to be contacted 
                regarding your inquiry. All communications are strictly confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
