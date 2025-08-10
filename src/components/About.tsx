import { Award, MapPin, Calendar, Users, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import psychologist1 from "@/assets/psychologist-1.jpg";
import psychologist2 from "@/assets/psychologist-2.jpg";
import mentalWellness from "@/assets/mental-wellness.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Donna Sombrea",
      role: "Lead Clinical Psychologist",
      image: psychologist1,
      specialization: "Anxiety, Depression, Trauma Therapy",
      experience: "8+ Years Experience"
    },
    {
      name: "Dr. Juan Rodriguez",
      role: "Family & Couples Therapist",
      image: psychologist2,
      specialization: "Family Dynamics, Relationship Counseling",
      experience: "6+ Years Experience"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Clients Served" },
    { icon: Calendar, number: "3+", label: "Years of Service" },
    { icon: Award, number: "100%", label: "Licensed Professionals" },
    { icon: MapPin, number: "PH", label: "Mindanao Based" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We provide empathetic, non-judgmental support for every client's unique journey."
    },
    {
      icon: Shield,
      title: "Safe Space",
      description: "Your privacy and confidentiality are our top priorities in creating a secure environment."
    },
    {
      icon: Users,
      title: "Cultural Understanding",
      description: "As Filipino psychologists, we understand the cultural context of mental health in the Philippines."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-brand-accent/20 text-brand-dark rounded-full text-sm font-medium mb-4">
            About PsychAve PH
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your Trusted Mental Health Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In service since 2022 by Filipino psychologists from Mindanao, PsychAve PH is an online safe space 
            offering professional support to Filipinos and their mental health.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image and stats */}
          <div className="space-y-8 animate-slide-in">
            <div className="relative">
              <img
                src={mentalWellness}
                alt="Mental wellness and growth illustration representing psychological health"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="text-center p-6 bg-gradient-card border-border/50 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <stat.icon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Professional Excellence in Mental Health Care
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team of licensed Filipino psychologists brings years of experience and cultural understanding 
                to provide comprehensive mental health services. We specialize in creating a safe, supportive 
                environment where you can explore your thoughts, feelings, and experiences without judgment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that mental health care should be accessible, culturally sensitive, and tailored to 
                each individual's needs. Our approach combines evidence-based therapeutic techniques with deep 
                cultural understanding of the Filipino experience.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Our Core Values</h4>
              {values.map((value, index) => (
                <div key={value.title} className="flex items-start space-x-4 p-4 rounded-lg bg-brand-light/30 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">{value.title}</h5>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-brand-primary hover:bg-brand-secondary text-white">
              Contact Our Team
            </Button>
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Meet Our Professional Team
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our licensed psychologists are dedicated to providing compassionate, professional care 
              with deep understanding of Filipino culture and values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="text-center p-8 bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-medium">
                  <img
                    src={member.image}
                    alt={`${member.name} - Professional headshot of our ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                <p className="text-brand-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-2">{member.specialization}</p>
                <p className="text-brand-accent font-medium text-sm">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;