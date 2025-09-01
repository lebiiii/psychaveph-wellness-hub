import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      initials: "A.M.",
      role: "Individual Therapy Client",
      text: "The therapeutic approach helped me develop better coping strategies. I found a safe space to work through personal challenges with professional guidance.",
      color: "bg-blue-500"
    },
    {
      id: 2,
      initials: "R.K.",
      role: "Couples Counseling Client", 
      text: "The counseling sessions provided valuable tools for communication. We learned effective techniques that strengthened our relationship significantly.",
      color: "bg-green-500"
    },
    {
      id: 3,
      initials: "S.P.",
      role: "Family Therapy Client",
      text: "Professional, compassionate care that brought our family closer together. The sessions helped us understand each other better.",
      color: "bg-purple-500"
    },
    {
      id: 4,
      initials: "D.L.",
      role: "Teen Counseling Client",
      text: "I felt comfortable expressing myself in a judgment-free environment. The counselor understood my challenges and provided practical solutions.",
      color: "bg-orange-500"
    },
    {
      id: 5,
      initials: "M.R.",
      role: "Anxiety Treatment Client",
      text: "Evidence-based techniques that actually work for managing daily anxiety. I've seen remarkable improvements in my overall well-being.",
      color: "bg-red-500"
    },
    {
      id: 6,
      initials: "J.S.",
      role: "Depression Support Client",
      text: "The support and professional expertise helped me through a difficult period. I learned valuable skills for maintaining mental health.",
      color: "bg-teal-500"
    },
    {
      id: 7,
      initials: "C.T.",
      role: "Trauma Therapy Client",
      text: "I felt safe sharing my experiences. I openly and comfortably expressed emotions that I find difficult to do with other people.",
      color: "bg-indigo-500"
    },
    {
      id: 8,
      initials: "N.H.",
      role: "Relationship Counseling Client",
      text: "Flexible scheduling and understanding staff made the process stress-free. Taking care of mental health is truly an investment.",
      color: "bg-pink-500"
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gradient-to-b from-brand-light/10 to-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center animate-fade-in">
          <span className="inline-block px-4 py-2 bg-brand-accent/20 text-brand-dark rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Our Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of individuals who found healing and growth with PsychAve PH
          </p>
        </div>
      </div>

      <div className="relative">
        <div 
          className="flex gap-6 testimonials-track animate-continuous-scroll"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-80 bg-card/90 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer relative will-change-transform"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-brand-primary font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;