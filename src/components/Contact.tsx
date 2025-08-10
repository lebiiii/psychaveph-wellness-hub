import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us Today",
      details: ["+63 XXX XXX XXXX", "Available 9 AM - 6 PM"],
      action: "tel:+63"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["psychaveph.info@gmail.com", "We respond within 24 hours"],
      action: "mailto:psychaveph.info@gmail.com"
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Mindanao, Philippines", "Online sessions available"],
      action: "#"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekends by appointment"],
      action: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      handle: "PsychAve PH | Facebook Page",
      link: "https://facebook.com/psychaveph"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "PsychAve PH | Instagram",
      link: "https://instagram.com/psychaveph"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "PsychAve PH | LinkedIn",
      link: "https://linkedin.com/company/psychaveph"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-brand-light/10 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-brand-accent/20 text-brand-dark rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Start Your Mental Health Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Book an appointment through Facebook, Instagram, LinkedIn, or email. All sessions are 
            at an appointment basis and open to non-emergency online mental health care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in">
            <Card className="shadow-medium border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="border-border focus:ring-brand-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="border-border focus:ring-brand-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="border-border focus:ring-brand-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Input
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        placeholder="e.g., Individual Therapy"
                        className="border-border focus:ring-brand-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs or questions..."
                      rows={5}
                      required
                      className="border-border focus:ring-brand-primary"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-brand-primary hover:bg-brand-secondary text-white shadow-medium"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title} 
                  className="p-6 bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-brand-light/50 transition-colors group animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-5 h-5 text-brand-primary group-hover:text-brand-secondary transition-colors" />
                    <div>
                      <p className="font-medium text-foreground text-sm">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Emergency Notice */}
            <Card className="p-6 bg-destructive/10 border-destructive/20">
              <h3 className="font-semibold text-destructive mb-2">Emergency Notice</h3>
              <p className="text-sm text-muted-foreground">
                If you're experiencing a mental health emergency, please contact your local 
                emergency services immediately or call the National Center for Mental Health 
                Crisis Hotline: <strong>(02) 7-989-USAP (8727)</strong>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;