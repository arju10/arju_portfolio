import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const Education = () => {
  const educations = [
    {
      degree: "MSc. in Computer Science",
      institution: "Independent University, Bangladesh",
      period: "Sep 2024 - Aug 2025",
      status: "Completed",
      minor: null
    },
    {
      degree: "BBA in MIS",
      institution: "Independent University, Bangladesh",
      period: "May 2019 - Sep 2024",
      status: "Completed",
      minor: "Big Data and High-Performance Computing"
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Alhera Academy School and College",
      period: "2018",
      status: "Completed",
      minor: null
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "Alhera Academy School and College",
      period: "2016",
      status: "Completed",
      minor: null
    },
    {
      degree: "JSC (Junior School Certificate)",
      institution: "Alhera Academy School and College",
      period: "2013",
      status: "Completed",
      minor: null
    },
    {
      degree: "PSC (Primary School Certificate)",
      institution: "Alhera Academe School and College",
      period: "2010",
      status: "Completed",
      minor: null
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Academic foundation in Computer Science and Business Information Systems with specialization in emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-tech-border hover:shadow-hover transition-all duration-300 group relative overflow-hidden"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary" />
              
              <CardContent className="p-8 pl-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground mb-3">
                      {edu.institution}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === "Ongoing" 
                          ? "bg-cyber-blue/20 text-cyber-blue" 
                          : "bg-cyber-green/20 text-cyber-green"
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    {edu.minor && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span>Minor: {edu.minor}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
