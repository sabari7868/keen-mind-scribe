import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TrueDetective | Professional Private Investigation Agency</title>
        <meta
          name="description"
          content="Trusted private investigation services with 25+ years of experience. Personal investigations, corporate security, background verification, surveillance, and fraud investigation. 100% confidential."
        />
        <meta
          name="keywords"
          content="private detective, investigation agency, background verification, surveillance, fraud investigation, missing person, corporate investigation"
        />
        <meta property="og:title" content="TrueDetective | Private Investigation Agency" />
        <meta
          property="og:description"
          content="Professional investigation services with absolute discretion. Truth. Evidence. Justice."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://truedetective.in" />
      </Helmet>
      
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ContactSection />
        <DisclaimerSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
