import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { images } from '../data/images';
import { siteConfig } from '../data/siteConfig';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import QuoteForm from '../components/QuoteForm';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}` },
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: 'Address', value: siteConfig.address },
  { icon: Clock, label: 'Business Hours', value: siteConfig.businessHours },
];

export default function Contact() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hi Evergreen Solar, I'd like to know more about your solar solutions."
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start Your Solar Journey"
        subtitle="Have questions about solar? Our team is ready to help you find the right solution."
        image={images.heroContact}
      />

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <Reveal>
                <h2 className="text-2xl font-bold text-forest">Get in Touch</h2>
                <p className="mt-2 text-charcoal/70 leading-relaxed">
                  Reach out to us through any of the channels below, or fill out the form and we'll get back to you with a free solar quote.
                </p>
              </Reveal>

              {contactInfo.map((info, i) => (
                <Reveal key={info.label} delay={i * 0.08}>
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-soft">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-forest/5 text-forest shrink-0">
                      <info.icon className="w-5 h-5" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-gold-600">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-semibold text-forest hover:text-gold-600 transition-colors break-all">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-forest">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Quick action buttons */}
              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button href={waLink} variant="dark" size="md" icon={MessageCircle} className="flex-1">
                    WhatsApp Us
                  </Button>
                  <Button href={`tel:${siteConfig.phoneRaw}`} variant="outline" size="md" icon={Phone} className="flex-1">
                    Call Now
                  </Button>
                </div>
              </Reveal>

              {/* Map placeholder */}
              <Reveal delay={0.35}>
                <div className="rounded-2xl overflow-hidden shadow-soft h-56 bg-forest/5 flex items-center justify-center border border-forest/10">
                  <div className="text-center px-4">
                    <MapPin className="w-10 h-10 text-gold-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-forest">{siteConfig.address}</p>
                    <p className="text-xs text-charcoal/50 mt-1">Google Maps integration placeholder</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <QuoteForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
