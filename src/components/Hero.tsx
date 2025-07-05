import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Tech Innovator
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground">
            Full Stack Developer • AI Engineer • Cybersecurity Expert • Data Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between cutting-edge technology and practical solutions. 
            Specialized in building secure, intelligent, and scalable systems.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Github className="w-6 h-6 group-hover:text-primary-foreground" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary-foreground" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:text-primary-foreground" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full bg-card hover:bg-primary hover:shadow-glow transition-all duration-300 group"
        >
          <ArrowDown className="w-6 h-6 group-hover:text-primary-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;