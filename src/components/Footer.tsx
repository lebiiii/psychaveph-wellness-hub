import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Individual Therapy",
      "Couples Counseling",
      "Family Therapy",
      "Child Psychology",
      "Group Therapy",
      "Online Sessions"
    ],
    resources: [
      "Mental Health Tips",
      "Crisis Resources",
      "FAQ",
      "Insurance Info",
      "Privacy Policy",
      "Terms of Service"
    ],
    contact: [
      { icon: Phone, text: "+63 XXX XXX XXXX", href: "tel:+63" },
      { icon: Mail, text: "psychaveph.info@gmail.com", href: "mailto:psychaveph.info@gmail.com" },
      { icon: MapPin, text: "Mindanao, Philippines", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/psychaveph", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/psychaveph", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/psychaveph", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center">
                <span className="text-brand-dark font-bold text-lg">PSY</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PsychAve PH</h3>
                <p className="text-brand-light text-sm">Your safe space</p>
              </div>
            </div>
            <p className="text-brand-light leading-relaxed">
              Professional psychological services by Filipino psychologists from Mindanao. 
              Creating a safe space for mental health support since 2022.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-brand-secondary/20 rounded-lg flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-brand-light hover:text-brand-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-brand-light hover:text-brand-accent transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4">
              {footerLinks.contact.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-brand-light hover:text-brand-accent transition-colors"
                >
                  <contact.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="p-4 bg-destructive/20 rounded-lg border border-destructive/30">
              <h5 className="font-semibold text-destructive-foreground mb-2">Emergency?</h5>
              <p className="text-xs text-destructive-foreground/80">
                Call NCMH Crisis Hotline:<br />
                <strong>(02) 7-989-USAP (8727)</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-secondary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-brand-light text-sm">
              <span>© {currentYear} PsychAve PH. All rights reserved.</span>
              <Heart className="w-4 h-4 text-brand-accent" />
            </div>
            <div className="flex items-center space-x-6 text-sm text-brand-light">
              <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;