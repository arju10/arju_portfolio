import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Shield, Database } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern frameworks and technologies. Expertise in React, Node.js, Python, and cloud platforms.",
      color: "text-cyber-blue"
    },
    {
      icon: Brain,
      title: "AI Engineering",
      description: "Developing intelligent systems using machine learning, deep learning, and natural language processing. Experience with TensorFlow, PyTorch, and LLMs.",
      color: "text-cyber-purple"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Implementing robust security measures and conducting threat assessments. Specialized in penetration testing, vulnerability analysis, and secure coding practices.",
      color: "text-cyber-blue"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing and maintaining data pipelines, warehouses, and analytics platforms. Proficient in SQL, NoSQL, ETL processes, and big data technologies.",
      color: "text-cyber-purple"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate technologist who thrives at the intersection of innovation and security. 
            With expertise spanning multiple domains, I bring a unique perspective to solving complex challenges 
            in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-tech-border hover:shadow-hover transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-muted ${item.color} transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card border border-tech-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">My Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To create secure, intelligent, and scalable technology solutions that make a meaningful impact. 
              I believe in the power of combining traditional software engineering with cutting-edge AI and 
              robust security practices to build the future of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;