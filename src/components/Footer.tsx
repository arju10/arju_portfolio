import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-tech-border bg-tech-dark">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Tech Innovator
            </h3>
            <p className="text-muted-foreground">
              Building the future with secure, intelligent solutions
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-tech-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" /> by Tech Innovator
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;