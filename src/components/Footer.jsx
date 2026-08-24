import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig, navLinks } from '../data/siteConfig';

function Logo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 3 L17 11 L12 19 L7 11 Z" fill="#D9A441" />
      <path d="M12 19 L12 22" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const socials = [
  { Icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { Icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { Icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { Icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
];

const solutions = [
  'Solar Panels', 'Inverters', 'Batteries', 'Rooftop Systems',
];

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory/70">
      <div className="max-w-container mx-auto px-5 sm:px-8 pt-16 pb-8">
        {/* Top: large wordmark + statement */}
        <div className="grid lg:grid-cols-2 gap-10 pb-12 border-b border-ivory/10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 bg-ivory/10 rounded">
                <Logo />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading font-extrabold text-xl tracking-tight text-ivory">{siteConfig.wordmark}</span>
                <span className="font-heading font-semibold text-[0.65rem] tracking-[0.25em] text-gold uppercase">{siteConfig.wordmarkAccent}</span>
              </span>
            </div>
            <p className="font-heading text-2xl font-bold text-ivory tracking-tight max-w-md">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Contact quick info */}
          <div className="flex flex-col gap-3 lg:items-end">
            <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
              <Phone className="w-4 h-4 text-gold shrink-0" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
              <Mail className="w-4 h-4 text-gold shrink-0" /> {siteConfig.email}
            </a>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span className="lg:text-right max-w-xs">{siteConfig.address}</span>
            </div>
          </div>
        </div>

        {/* Middle: nav columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-ivory/10">
          <div>
            <p className="label text-ivory/40 mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-ivory/40 mb-4">Solutions</p>
            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s}>
                  <Link to="/products" className="text-sm hover:text-gold transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-ivory/40 mb-4">Resources</p>
            <ul className="space-y-2.5">
              <li><Link to="/solar-calculator" className="text-sm hover:text-gold transition-colors">Solar Calculator</Link></li>
              <li><Link to="/projects" className="text-sm hover:text-gold transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-gold transition-colors">Get a Quote</Link></li>
              <li><span className="text-sm hover:text-gold cursor-pointer transition-colors">Privacy Policy</span></li>
            </ul>
          </div>
          <div>
            <p className="label text-ivory/40 mb-4">Follow</p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded border border-ivory/15 hover:border-gold hover:text-gold transition-colors">
                  <Icon style={{ width: 16, height: 16 }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">© 2026 {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex gap-5">
            <span className="text-xs text-ivory/40 hover:text-gold cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-ivory/40 hover:text-gold cursor-pointer transition-colors">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
