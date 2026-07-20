import { useState, useEffect } from 'react';
import './Navbar.scss';
import { personal } from '../../data/personal';

const NAV_LINKS = [
  { id: 'about', index: '01', label: 'About' },
  { id: 'projects', index: '02', label: 'Projects' },
  { id: 'experience', index: '03', label: 'Experience' },
  { id: 'skills', index: '04', label: 'Skills' },
  { id: 'contact', index: '05', label: 'Contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <button
          type="button"
          className="navbar__logo"
          onClick={() => scrollToSection('hero')}
          aria-label="Scroll to top"
        >
          {personal.name.split(' ')[0]}
        </button>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <ul id="navbar-menu" className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button type="button" onClick={() => scrollToSection(link.id)}>
                <span className="navbar__index">{link.index}</span>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
