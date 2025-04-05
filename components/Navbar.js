'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="flex items-center">
          <Link href="/" className="navbar-logo">
            MS
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="navbar-menu">
          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`navbar-link ${pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Theme toggle and mobile menu button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <svg
              style={{ height: '1.5rem', width: '1.5rem' }}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`mobile-menu-link ${pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mobile-menu-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>Theme:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
