import React, { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 font-bold text-2xl tracking-tighter cursor-pointer text-toss-text">
          <div className="w-8 h-8 rounded-full bg-toss-blue text-white flex items-center justify-center">
            <Play size={14} fill="currentColor" />
          </div>
          <span>MuseVision</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-toss-nav">
          <a href="#features" className="hover:text-toss-blue transition-colors">서비스 특징</a>
          <a href="#process" className="hover:text-toss-blue transition-colors">제작 과정</a>
          <a href="#showcase" className="hover:text-toss-blue transition-colors">포트폴리오</a>
          <a href="#pricing" className="hover:text-toss-blue transition-colors">요금안내</a>
          <button className="bg-toss-blue text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-sm text-sm">
            무료 견적 받기
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-toss-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-6 flex flex-col items-center space-y-6 text-toss-text font-medium z-50 shadow-lg">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>서비스 특징</a>
          <a href="#process" onClick={() => setIsMobileMenuOpen(false)}>제작 과정</a>
          <a href="#showcase" onClick={() => setIsMobileMenuOpen(false)}>포트폴리오</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>요금안내</a>
          <button className="bg-toss-blue text-white px-8 py-3 rounded-lg font-bold w-3/4">
            무료 견적 받기
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;