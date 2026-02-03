import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Corp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Implementing AI-powered features and optimizing system performance.",
      achievements: [
        "Led a team of 5 developers to deliver 3 major product releases",
        "Reduced application load time by 40% through optimization",
        "Implemented ML-based recommendation system increasing user engagement by 25%"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Python", "TensorFlow"]
    },
    {
      title: "AI/ML Engineer",
      company: "DataDriven Solutions",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed and deployed machine learning models for predictive analytics and natural language processing applications.",
      achievements: [
        "Built NLP pipeline processing 1M+ documents daily",
        "Developed predictive models with 95% accuracy for customer churn",
        "Created automated ML training pipelines reducing deployment time by 60%"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "Kubernetes", "FastAPI", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupHub Inc",
      location: "Austin, TX",
      period: "2018 - 2020",
      description: "Built and maintained multiple web applications from scratch, working closely with stakeholders to deliver business-critical solutions.",
      achievements: [
        "Developed 5+ production applications serving 100k+ users",
        "Integrated third-party APIs and payment systems",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Vue.js", "Node.js", "MongoDB", "Docker", "Redis"]
    },
    {
      title: "Junior Developer",
      company: "WebSolutions Ltd",
      location: "Remote",
      period: "2016 - 2018",
      description: "Started career building responsive web applications and learning modern development practices.",
      achievements: [
        "Contributed to 10+ client projects",
        "Learned agile methodologies and CI/CD practices",
        "Built reusable component libraries"
      ],
      technologies: ["JavaScript", "React", "CSS", "Git", "REST APIs"]
    },
    {
      title: "Intern Developer",
      company: "TechStart Academy",
      location: "Boston, MA",
      period: "2015 - 2016",
      description: "Gained foundational experience in software development through hands-on projects and mentorship.",
      achievements: [
        "Completed 3-month intensive training program",
        "Built first production application",
        "Collaborated with senior developers on real projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL"]
    }
  ];

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through my professional career, building innovative solutions and leading impactful projects.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {displayedExperiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow hidden md:block" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="bg-gradient-card border-tech-border hover:shadow-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary" 
                            className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {experiences.length > 3 && (
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
                  Show Less Experience
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  Show More Experience
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
