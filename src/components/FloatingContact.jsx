import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hi Evergreen Solar, I'd like to know more about your solar solutions."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col gap-2 mb-1"
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-ivory shadow-card border border-forest/10 px-4 py-2.5 text-sm font-medium text-forest hover:border-gold transition-colors">
              <MessageCircle className="w-4 h-4 text-gold" /> WhatsApp
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2.5 bg-ivory shadow-card border border-forest/10 px-4 py-2.5 text-sm font-medium text-forest hover:border-gold transition-colors">
              <Phone className="w-4 h-4 text-gold" /> Call Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact options"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-forest text-gold shadow-card hover:bg-charcoal transition-colors"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </motion.button>
    </div>
  );
}
