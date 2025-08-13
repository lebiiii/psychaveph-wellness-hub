import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-end py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center space-x-6">
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/lovable-uploads/39bcdd1c-a1f5-4d39-87e8-0f301e557c52.png"
                alt="PsychAve PH Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary">PsychAve PH</h2>
              <p className="text-xs text-muted-foreground">Your safe space</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-brand-primary hover:bg-brand-secondary">
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" className="bg-brand-primary hover:bg-brand-secondary mt-4">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;