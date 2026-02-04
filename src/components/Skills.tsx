import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      color: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20",
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT",
        "RBAC",
        "Python",
        "Django",
      ],
      color: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20",
    },
    {
      title: "Databases & Data Management",
      skills: ["MongoDB", "PostgreSQL", "ChromaDB", "SQL"],
      color: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20",
    },
    {
      title: "AI / ML Systems",
      skills: [
        "Natural Language Processing (NLP)",
        "Large Language Models (LLMs)",
        "Hugging Face",
        "TensorFlow",
        "Scikit-learn",
        "Vector Databases",
        "OCR",
        "Image Classification",
      ],
      color: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20",
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "Jira"],
      color: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20",
    },
    {
      title: "Cloud & Deployment",
      skills: ["AWS", "Vercel", "Render"],
      color: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20",
    },

    // {
    //   title: "Frontend Development",
    //   skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "WebGL", "Three.js"],
    //   color: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20"
    // },
    // {
    //   title: "Backend Development",
    //   skills: ["Node.js", "Python", "Go", "Java", "Express.js", "FastAPI", "GraphQL", "REST APIs"],
    //   color: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20"
    // },
    // {
    //   title: "AI/ML Technologies",
    //   skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "LangChain", "Computer Vision", "NLP"],
    //   color: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20"
    // },
    // {
    //   title: "Data Engineering",
    //   skills: ["Apache Spark", "Kafka", "Elasticsearch", "PostgreSQL", "MongoDB", "Redis", "ETL Pipelines", "Data Warehousing"],
    //   color: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20"
    // },
    // {
    //   title: "Cybersecurity",
    //   skills: ["Penetration Testing", "OWASP", "Security Auditing", "Encryption", "Network Security", "Incident Response", "Threat Modeling", "SIEM"],
    //   color: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20"
    // },
    // {
    //   title: "Cloud & DevOps",
    //   skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
    //   color: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20"
    // }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience
            across diverse technology domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-tech-border hover:shadow-hover transition-all duration-300 group"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`${category.color} hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "10+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-card border border-tech-border rounded-lg hover:shadow-hover transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
