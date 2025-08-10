import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-therapy-office.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-background to-brand-light/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-brand-accent/20 text-brand-dark rounded-full text-sm font-medium">
                Professional Psychology Services Since 2022
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Your Mental Health 
                <span className="text-brand-primary"> Journey</span> 
                <br />Starts Here
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                In service since 2022 by Filipino psychologists from Mindanao, PsychAve PH is an online safe space offering professional support to Filipinos and their mental health.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-secondary text-white shadow-medium">
                Book Your Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                Learn More About Us
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 text-brand-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Compassionate Care</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-brand-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Confidential & Safe</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-brand-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Filipino Psychologists</p>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern therapy office - a safe and welcoming space for mental health support"
                className="w-full h-[600px] object-cover rounded-2xl shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating testimonial card */}
            <Card className="absolute -bottom-6 -left-6 p-6 bg-white shadow-strong animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center">
                  <span className="text-brand-dark font-bold">5.0</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Excellent Reviews</p>
                  <p className="text-sm text-muted-foreground">From our clients</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;