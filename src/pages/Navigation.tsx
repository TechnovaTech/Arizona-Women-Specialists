import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Stethoscope } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'General', href: '/general-obgyn' },
    { label: 'OBGYN Specialties', href: '/specialties' },
    { label: 'Programs', href: '/programs' },
    { label: 'Services', href: '/services' },
    { label: 'Provider', href: '/provider' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b text-white"
      style={{backgroundColor: '#217576'}}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                <Stethoscope className="w-6 h-6" style={{color: '#217576'}} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">+</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white leading-tight">Arizona Women</span>
              <span className="text-sm text-white/80 font-medium -mt-1">Specialists</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-white font-medium transition-colors duration-200"
                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="outline" size="sm" className="border-white text-[#217576] bg-white hover:bg-transparent hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4 space-y-4" style={{backgroundColor: '#217576'}}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-2 text-white transition-colors"
                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-4 space-y-3 border-t border-white/20">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-white text-[#217576] bg-white hover:bg-transparent hover:text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;