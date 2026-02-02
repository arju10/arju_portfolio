import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "AI-Powered Threat Detection System",
      description: "Machine learning system that analyzes network traffic patterns to identify potential security threats in real-time. Reduced false positives by 85% compared to traditional methods.",
      technologies: ["Python", "TensorFlow", "Elasticsearch", "Docker", "AWS"],
      category: "AI + Cybersecurity",
      color: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Distributed Data Pipeline Platform",
      description: "Scalable data processing platform handling 10TB+ daily data ingestion with real-time analytics and automated quality checks. Built for enterprise-level financial services.",
      technologies: ["Apache Spark", "Kafka", "PostgreSQL", "Kubernetes", "Python"],
      category: "Data Engineering",
      color: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Intelligent Code Review Assistant",
      description: "AI-powered tool that performs automated code reviews, detects vulnerabilities, and suggests optimizations. Integrated with popular git platforms and CI/CD pipelines.",
      technologies: ["Node.js", "OpenAI", "React", "TypeScript", "MongoDB"],
      category: "Full Stack + AI",
      color: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Zero-Trust Network Architecture",
      description: "Complete network security overhaul implementing zero-trust principles with micro-segmentation, continuous monitoring, and adaptive access controls.",
      technologies: ["Go", "Istio", "Prometheus", "Grafana", "Terraform"],
      category: "Cybersecurity",
      color: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard processing millions of events per second with advanced visualizations and predictive analytics. Used by major e-commerce platforms.",
      technologies: ["React", "D3.js", "WebSocket", "Redis", "PostgreSQL"],
      category: "Full Stack + Data",
      color: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Automated Penetration Testing Suite",
      description: "Comprehensive security testing framework that automatically discovers vulnerabilities and generates detailed reports with remediation recommendations.",
      technologies: ["Python", "Nmap", "Metasploit", "Docker", "FastAPI"],
      category: "Cybersecurity + AI",
      color: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions that demonstrate the intersection of security, intelligence, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-tech-border hover:shadow-hover transition-all duration-300 group flex flex-col"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant="outline" 
                    className={`${project.color} text-xs`}
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="mb-6">
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
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-12 text-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  Show More Projects
                </>
              )}
            </Button>
          </div>
        )}

        <div className="mt-8 text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;