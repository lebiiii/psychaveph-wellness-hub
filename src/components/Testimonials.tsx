import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      text: "How they handled a client was very relieving. It allowed me to release the negativity inside.",
      background: "bg-gradient-to-br from-blue-50 to-teal-50"
    },
    {
      text: "The service is top-tier from reception to the consultation. It gives a superb experience bringing out the best in you.",
      background: "bg-gradient-to-br from-green-50 to-blue-50"
    },
    {
      text: "I felt safe sharing my experiences. I openly and comfortably expressed emotions that I find difficult to do with other people.",
      background: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      text: "Taking care of your mental health is one of the best investments you can make. We're offering special rates to make it easier to start on your journey.",
      background: "bg-gradient-to-br from-orange-50 to-yellow-50"
    },
    {
      text: "The therapeutic approach helped me develop better coping strategies for daily challenges.",
      background: "bg-gradient-to-br from-indigo-50 to-purple-50"
    },
    {
      text: "Professional, compassionate care in a comfortable environment.",
      background: "bg-gradient-to-br from-rose-50 to-pink-50"
    },
    {
      text: "Evidence-based techniques that actually work for real-life situations.",
      background: "bg-gradient-to-br from-emerald-50 to-teal-50"
    },
    {
      text: "Flexible scheduling and understanding staff made the process stress-free.",
      background: "bg-gradient-to-br from-cyan-50 to-blue-50"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Client Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Anonymous feedback from our valued clients who have found their path to mental wellness
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Testimonial Display */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-elegant">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 transform translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 transform -translate-x-full'
                      : 'opacity-0 transform translate-x-full'
                }`}
              >
                {/* Background with overlay */}
                <div className={`w-full h-full ${testimonial.background} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Quote Icon */}
                  <div className="absolute top-8 left-8 z-20">
                    <Quote className="w-16 h-16 text-[#CCFF00] fill-current opacity-80" />
                  </div>

                  {/* Testimonial Content */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 p-8">
                    <div className="bg-[#CCFF00]/95 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <p className="text-lg md:text-2xl font-bold text-black leading-relaxed text-center">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>

                  {/* Brand Logo */}
                  <div className="absolute bottom-8 right-8 z-20">
                    <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                      <span className="text-white font-bold text-sm tracking-wider">
                        PSYCHAVE PH
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white border-[#CCFF00] text-black hover:text-black shadow-lg"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white border-[#CCFF00] text-black hover:text-black shadow-lg"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#CCFF00] scale-125 shadow-lg'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="w-full bg-muted-foreground/20 rounded-full h-1">
            <div 
              className="bg-[#CCFF00] h-1 rounded-full transition-all duration-300 ease-linear"
              style={{
                width: `${((currentSlide + 1) / testimonials.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your own journey to mental wellness?
          </p>
          <Button 
            size="lg" 
            className="bg-[#CCFF00] hover:bg-[#CCFF00]/90 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Your Appointment Today
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Testimonials;