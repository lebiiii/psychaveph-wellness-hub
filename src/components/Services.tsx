import { Brain, Users, Heart, User, Group, FileCheck, Video, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Individual Therapy",
      description: "One-on-one counseling sessions tailored to your personal mental health needs and goals.",
      features: ["Anxiety & Depression", "Trauma Recovery", "Personal Growth", "Stress Management"]
    },
    {
      icon: Heart,
      title: "Couples Counseling",
      description: "Professional guidance to strengthen relationships and improve communication between partners.",
      features: ["Communication Skills", "Conflict Resolution", "Relationship Building", "Trust Issues"]
    },
    {
      icon: Users,
      title: "Family Therapy",
      description: "Family-focused sessions to improve dynamics and resolve conflicts within the family unit.",
      features: ["Family Dynamics", "Parenting Support", "Teen Counseling", "Family Crisis"]
    },
    {
      icon: Brain,
      title: "Child & Adolescent Psychology",
      description: "Specialized care for young minds, addressing developmental and behavioral concerns.",
      features: ["Behavioral Issues", "Learning Difficulties", "Social Skills", "Emotional Regulation"]
    },
    {
      icon: Group,
      title: "Group Therapy",
      description: "Supportive group sessions where individuals share experiences and learn together.",
      features: ["Peer Support", "Social Skills", "Shared Experiences", "Community Healing"]
    },
    {
      icon: FileCheck,
      title: "Psychological Assessments",
      description: "Comprehensive evaluations to understand mental health conditions and treatment needs.",
      features: ["Diagnostic Testing", "Cognitive Assessment", "Personality Evaluation", "Treatment Planning"]
    },
    {
      icon: Video,
      title: "Online Therapy Sessions",
      description: "Convenient and secure online sessions from the comfort of your own space.",
      features: ["Flexible Scheduling", "Secure Platform", "Home Comfort", "Accessible Care"]
    },
    {
      icon: AlertCircle,
      title: "Crisis Intervention",
      description: "Immediate support and intervention during mental health emergencies and crisis situations.",
      features: ["24/7 Support", "Emergency Response", "Safety Planning", "Immediate Care"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-brand-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-brand-accent/20 text-brand-dark rounded-full text-sm font-medium mb-4">
            Our Professional Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Mental Health Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our psychological services include online consultation, counseling, therapy, and more. 
            All sessions are at an appointment basis and open to non-emergency online mental health care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="h-full bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary transition-colors">
                  <service.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center justify-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Book an appointment through Facebook, Instagram, LinkedIn, or email. 
            All sessions are at an appointment basis and open to non-emergency online mental health care.
          </p>
          <Button size="lg" className="bg-brand-primary hover:bg-brand-secondary text-white shadow-medium">
            Schedule Your First Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;