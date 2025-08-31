'use client';

import React, { useState, useEffect } from 'react';
import Container from './Container';
import { useModal } from '../../contexts/ModalContext';
import { useInternalNavigation } from '../../contexts/InternalNavigationContext';
import { megaMenuComponents } from './MegaMenuContent';

const NavLink: React.FC<{ path: string; children: React.ReactNode; onMouseEnter?: () => void; }> = ({ path, children, onMouseEnter }) => {
  const { navigate } = useInternalNavigation();
  return (
    <button
      onClick={() => navigate(path)}
      onMouseEnter={onMouseEnter}
      className="text-text-primary hover:text-apx-growth-green font-semibold text-body-lg tracking-tight-title relative group transition-colors duration-300 py-2 leading-tighter bg-transparent border-none cursor-pointer"
    >
      {children}
      <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-apx-growth-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </button>
  );
}

interface HeaderProps {
  onMegaMenuToggle: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMegaMenuToggle }) => {
  const { openContactModal } = useModal();
  const { navigate } = useInternalNavigation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const MegaMenuComponent = activeMenu ? megaMenuComponents[activeMenu] : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    onMegaMenuToggle(!!activeMenu);
  }, [activeMenu, onMegaMenuToggle]);

  const navItems = [
    { name: 'APX의 관점', path: '/perspective', megaMenuKey: 'perspective' },
    { name: '프로젝트 솔루션', path: '/solutions', megaMenuKey: 'projectSolutions' },
    { name: '경영지원 서비스', path: '/services' },
    { name: '인사이트', path: '/insights' },
    { name: '회사소개', path: '/about' },
  ];

  return (
    <div onMouseLeave={() => setActiveMenu(null)} className="sticky top-0 z-50">
      <header className={`transition-shadow duration-300 ${isScrolled && !activeMenu ? 'soft-shadow' : ''} bg-white/80 backdrop-blur-lg`}>
        <Container className="flex items-end justify-between h-[100px] md:h-[120px] pb-6">
          <span onClick={() => navigate('/')} className="cursor-pointer flex items-center">
            <img src="https://storage.googleapis.com/apxhomepage-asset/APX_Logo(G).png" alt="APX Consulting Logo" className="h-10 w-auto" />
          </span>
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                path={item.path} 
                onMouseEnter={() => setActiveMenu(item.megaMenuKey || null)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <button
              onClick={(e) => { e.preventDefault(); openContactModal(); }}
              className="px-6 py-3 bg-apx-growth-green text-white font-semibold text-body-base leading-none rounded-full border-2 border-transparent hover:bg-transparent hover:text-apx-growth-green hover:border-apx-growth-green hover:-translate-y-0.5 transform transition-all duration-300"
            >
              문의하기
            </button>
          </div>
           <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </Container>
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white border-t border-border-light">
              {navItems.map((item) => (
                  <span key={item.name} onClick={() => { navigate(item.path); setMobileMenuOpen(false); }} className="cursor-pointer block px-6 py-3 text-body-base font-medium text-text-secondary hover:text-apx-growth-green hover:bg-gray-50">{item.name}</span>
              ))}
              <div className="p-4">
                 <button
                    onClick={(e) => { e.preventDefault(); openContactModal(); setMobileMenuOpen(false); }}
                    className="block w-full text-center px-6 py-3 bg-apx-growth-green text-white font-semibold text-body-base leading-none rounded-full"
                  >
                    문의하기
                  </button>
              </div>
            </div>
        </div>
      </header>
      {/* Mega Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white/80 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden ${
          activeMenu ? 'max-h-[600px] py-12' : 'max-h-0 py-0'
        }`}
      >
        <Container>
          {MegaMenuComponent && <MegaMenuComponent />}
        </Container>
      </div>
    </div>
  );
};

export default Header;