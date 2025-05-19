"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react'; // Added useEffect
import { usePathname } from 'next/navigation'; // To highlight active link

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/activities", label: "Activities" },
    { href: "/contact", label: "Contact" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 py-4 bg-uchicago-off-black/80 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-uchicago-maroon hover:opacity-80 transition-opacity"
        >
          Marco Sukhatme
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-sans transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-uchicago-maroon font-semibold' // Active link style
                  : 'text-uchicago-light-greystone hover:text-uchicago-maroon'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-uchicago-light-greystone hover:text-uchicago-maroon focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-uchicago-off-black/95 shadow-xl py-4">
          <div className="container mx-auto px-6 sm:px-8 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-sans py-2 text-center transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-uchicago-maroon font-semibold' // Active link style
                    : 'text-uchicago-light-greystone hover:text-uchicago-maroon'
                }`}
                // onClick is automatically handled by useEffect for route changes
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
