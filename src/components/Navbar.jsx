import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '../data/siteConfig';
import Button from './Button';

// Custom minimal sun/leaf symbol
function Logo({ size = 'sm' }) {
  const dim = size === 'sm' ? 'w-6 h-6' : 'w-7 h-7';
  return (
    <svg viewBox="0 0 24 24" className={dim} fill="none">
      <path d="M12 3 L17 11 L12 19 L7 11 Z" fill="#D9A441" />
      <path d="M12 19 L12 22" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 11 L17 11" stroke="#12372A" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-forest/8 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-container mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label={`${siteConfig.name} home`}>
            <span className="flex items-center justify-center w-9 h-9 bg-forest rounded">
              <Logo />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading font-extrabold text-[0.95rem] tracking-tight text-forest">{siteConfig.wordmark}</span>
              <span className="font-heading font-semibold text-[0.6rem] tracking-[0.25em] text-gold uppercase">{siteConfig.wordmarkAccent}</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm font-medium tracking-wide transition-colors relative gold-line ${
                      active ? 'text-gold' : 'text-charcoal/70 hover:text-forest'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button to="/contact" variant="primary" size="sm">Get a Quote</Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-forest"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-forest"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              <ul className="space-y-1">
                {navLinks.map((link, i) => {
                  const active = pathname === link.path;
                  return (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.06 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-4 text-3xl font-heading font-bold tracking-tight transition-colors ${
                          active ? 'text-gold' : 'text-ivory/80'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.06 }}
                className="mt-auto pb-10"
              >
                <Button to="/contact" variant="primary" size="lg" className="w-full">Get a Quote</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
