import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Projects = () => {
  const [showAllAI, setShowAllAI] = useState(false);
  const [showAllFullStack, setShowAllFullStack] = useState(false);

  const aiProjects = [
{
  title: "Butterfly Species Classifier",
  description: "A deep learning–powered web application that identifies 75 butterfly species from images using transfer learning. Built with an interactive Streamlit interface, confidence-aware predictions, and deployed as a production-ready, containerized application.",
  technologies: [
    "Python",
    "TensorFlow",
    "Keras",
    "Transfer Learning",
    "Streamlit",
    "Docker",
    "Plotly"
  ],
  images: [
    "public/images/ai_ml/butterfly_species_classifier/main_interface.png",
    // "/placeholder.svg"
  ],
  demoUrl: "https://butterfly-species-classifier.streamlit.app/",
  githubUrl: "https://github.com/arju10/butterfly-species-classifier"
},

{
  title: "Bangla Agricultural Advisor Chatbot",
  description: "An AI-powered web application built with Django to assist farmers in Bangladesh. The system supports Bengali text queries, voice-based interaction, and crop disease detection from images using NLP and deep learning models.",
  technologies: [
    "Python",
    "Django",
    "TensorFlow",
    "NLP (TF-IDF, Cosine Similarity)",
    "Speech Recognition",
    "Computer Vision",
    "HTML",
    "Docker"
  ],
  images: [
    "public/images/ai_ml/bangla-agricultural-advisor-chatbot/interface.png",
    // "/placeholder.svg"
  ],
  demoUrl: "https://bangla-agricultural-advisor-chatbot.vercel.app",
  githubUrl: "https://github.com/arju10/Bangla-Agricultural-Advisor-Chatbot-using-django"
}

  ];

  const fullStackProjects = [
{
  title: "Sports Facility Booking Platform",
  description: "A full-stack application for managing sports facility bookings. Built backend APIs for authentication, role-based access, and booking conflict prevention, and integrated them with a responsive frontend for users and admins.",
  technologies: [
    "React",
    "Node.js",
    "Express.js",
    "TypeScript",
    "MongoDB",
    "JWT",
    "RBAC"
  ],
  images: ["public/images/full_stack/sports_facility/landing_page.png", "public/images/Admin_Dashboard_Overview.png"],
  demoUrl: "https://sports-facility-booking-frontend-five.vercel.app/",
  githubUrl: "https://github.com/arju10/sports-facility-booking-frontend"
},
// {
//   title: "Enterprise Resource Planning (ERP) System",
//   description: "A web-based ERP system developed during an industry internship to manage core business operations. Contributed to both frontend interfaces and backend APIs, including authentication, role-based access, and business modules.",
//   technologies: [
//     "React",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "JWT"
//   ],
//   images: ["/placeholder.svg"],
//   demoUrl: "#",
//   githubUrl: "#"
// }
{
  title: "Smart Finance AI",
  description: "An AI-driven personal finance platform that helps users manage accounts, track transactions, set monthly budgets, and receive intelligent spending insights. Built as a full-stack application with secure authentication, background jobs, and AI-powered receipt scanning.",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Prisma",
    "PostgreSQL",
    "Clerk Auth",
    "Google Generative AI",
    "Inngest",
    "Zod",
    "Vercel"
  ],
  images: [
    "public/images/full_stack/smart_finance_ai/dashboard.png",
    "public/images/full_stack/smart_finance_ai/Landing_Page.png"
  ],
  demoUrl: "https://smart-finance-ai-tau.vercel.app/",
  githubUrl: "https://github.com/arju10/smart-finance-ai"
},
{
  title: "Career Launchpad AI",
  description: "An AI-powered career assistant platform that helps users prepare for jobs through industry insights, mock interviews, resume building, and cover letter generation. Built as a full-stack application with secure authentication, scheduled AI tasks, and a responsive UI.",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "PostgreSQL",
    "Prisma",
    "Clerk Auth",
    "Google Gemini AI",
    "Inngest",
    "Vercel"
  ],
  images: [
    "public/images/full_stack/Career-Launchpad-AI/interview_preparation_after_taking_exam.png",
    // "public/images/full_stack/career_launchpad_ai/landing_page.png"
  ],
  demoUrl: "https://career-launchpad-ai.vercel.app/",
  githubUrl: "https://github.com/arju10/Career-Launchpad-AI"
}


  ];

  const ProjectCard = ({ project }: { project: typeof aiProjects[0] }) => (
    <Card className="bg-gradient-card border-tech-border hover:shadow-hover transition-all duration-300 group flex flex-col overflow-hidden">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed text-sm">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between pt-0">
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge 
                key={techIndex}
                variant="secondary" 
                className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            size="sm"
            className="flex-1 bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
            asChild
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A showcase of innovative solutions that demonstrate the intersection of security, intelligence, and scalability.
          </p> */}
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              variant="outline"
              className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                AI/ML Projects
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all duration-300"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Full Stack Projects
              </a>
            </Button>
          </div> */}
        </div>

        {/* AI Projects Section */}
        <div className="mb-16">
          {/* <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyber-blue animate-pulse"></span>
            AI & Machine Learning Projects
          </h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllAI ? aiProjects : aiProjects.slice(0, 3)).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          {aiProjects.length > 3 && (
            <div className="mt-8 text-center">
              <Button 
                size="lg"
                variant="outline"
                className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300"
                onClick={() => setShowAllAI(!showAllAI)}
              >
                {showAllAI ? (
                  <>
                    <ChevronUp className="w-5 h-5 mr-2" />
                    Show Less AI Projects
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5 mr-2" />
                    Show More AI Projects
                  </>
                )}
              </Button>
            </div>
          )}
        </div>

        {/* Full Stack Projects Section */}
        <div className="mb-16">
          {/* <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyber-purple animate-pulse"></span>
            Full Stack Projects
          </h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllFullStack ? fullStackProjects : fullStackProjects.slice(0, 3)).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          {fullStackProjects.length > 3 && (
            <div className="mt-8 text-center">
              <Button 
                size="lg"
                variant="outline"
                className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all duration-300"
                onClick={() => setShowAllFullStack(!showAllFullStack)}
              >
                {showAllFullStack ? (
                  <>
                    <ChevronUp className="w-5 h-5 mr-2" />
                    Show Less Full Stack Projects
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5 mr-2" />
                    Show More Full Stack Projects
                  </>
                )}
              </Button>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg"
            variant="outline"
            className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              {/* View AI/ML Projects on GitHub */}
              View All Projects on GitHub
            </a>
          </Button>
          {/* <Button 
            size="lg"
            variant="outline"
            className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all duration-300"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View Full Stack Projects on GitHub
            </a>
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
