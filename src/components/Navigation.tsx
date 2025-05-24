
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-navy-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-10">
              <img
                src="/lovable-uploads/525ad2db-40d9-4495-8d8b-dd280777336d.png"
                alt="Vivekananda Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-300 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-300 transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('why-choose')} className="hover:text-blue-300 transition-colors">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('founder')} className="hover:text-blue-300 transition-colors">
              Founder
            </button>
            <button onClick={() => scrollToSection('rankers')} className="hover:text-blue-300 transition-colors">
              State First Rankers
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-blue-300 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-300 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-navy-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy-800 rounded-lg mt-2 p-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-blue-300">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-blue-300">
              About Us
            </button>
            <button onClick={() => scrollToSection('why-choose')} className="block w-full text-left py-2 hover:text-blue-300">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('founder')} className="block w-full text-left py-2 hover:text-blue-300">
              Founder
            </button>
            <button onClick={() => scrollToSection('rankers')} className="block w-full text-left py-2 hover:text-blue-300">
              State First Rankers
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 hover:text-blue-300">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-blue-300">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
