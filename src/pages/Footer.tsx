import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Clock
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'About Us', href: '#about' },
      { label: 'Our Services', href: '#specialties' },

      { label: 'Locations', href: '#locations' },
      { label: 'Contact Us', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  ];

  return (
    <footer className="text-white" style={{backgroundColor: '#217576'}}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg" style={{color: '#217576'}}>WH</span>
              </div>
              <span className="text-xl font-bold">
Arizona Women Specialists</span>
            </div>
            
            <p className="text-white/80 leading-relaxed text-sm">
              Comprehensive healthcare for women of all ages, providing compassionate, 
              expert care throughout every stage of life.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-white/60" />
                <span>623-846-7597</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-white/60" />
                <span>info@womenshealth.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-white/60" />
                <span>4700 N 51st Ave<br />Phoenix, AZ 85031<br />United States</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 mr-3 mt-0.5 text-white/60" />
                <span>24/7 Emergency Support<br />Mon-Fri: 7AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.8!2d-112.1736!3d33.5206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6e0d4b5c5c5d%3A0x1234567890abcdef!2s4700%20N%2051st%20Ave%2C%20Phoenix%2C%20AZ%2085031!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Women's Health Center Location"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;