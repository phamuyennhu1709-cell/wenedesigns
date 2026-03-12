/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  ArrowRight,
  Play,
  Quote,
  Star,
  Instagram,
  ExternalLink
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brown-500/20 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <h3 className="font-serif font-medium text-brown-700 group-hover:text-brown-500 transition-colors">
          {question}
        </h3>
        {isOpen ? <ChevronUp className="text-brown-500" /> : <ChevronDown className="text-brown-500" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-ink/80 leading-relaxed font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const testimonials = [
  {
    name: "Olivia",
    role: "Apex Clinic",
    content: "I just wanted to say I am beyond happy with the website - it’s absolutely amazing & so professional, exactly how I imagined. It aligns with my branding so well. I’m so so pleased thank you so much. I will post tonight & ensure all of my community know who the talent is behind the website! You’ve been a joy to work with. You will definitely have my custom again",
    avatar: "https://picsum.photos/seed/olivia/100/100",
    instagram: "https://www.instagram.com/apexclinic.co/",
    website: "https://apexaestheticsbyliv.co.uk/"
  },
  {
    name: "Aimee Foster",
    role: "Everlash UK",
    content: "Just wanna say thank you so much I love the website. You’re really good at what you do. I will 100% recommend you to everyone came across, you are amazing xxx",
    avatar: "https://picsum.photos/seed/aimee/100/100",
    instagram: "https://www.instagram.com/everlash.uk/",
    website: "https://everlash.co.uk/"
  },
  {
    name: "Kayleigh",
    role: "Subtle Aesthetics",
    content: "I love what you have done so far, this is amazing x",
    avatar: "https://picsum.photos/seed/kayleigh/100/100",
    instagram: "https://www.instagram.com/subtle_aesthetics_x/"
  },
  {
    name: "Bridie Cleaver",
    role: "ByBridie Aesthetics",
    content: "This little refresh has been a while in the making. Same heart, same values - just a look that finally feels more me. Huge thank you to @wene.designs for taking the stress out of the rebrand and helping me with my new logo",
    avatar: "https://picsum.photos/seed/bridie/100/100",
    instagram: "https://www.instagram.com/ba.bybridie/"
  }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brown-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-beige-100/80 backdrop-blur-md border-b border-brown-500/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-widest text-brown-900 uppercase">
            Wene Designs
          </div>
          <a href="#booking" className="hidden md:block text-sm font-medium uppercase tracking-widest text-brown-900 hover:text-brown-500 transition-colors">
            Book Strategy Call
          </a>
        </div>
      </nav>

      {/* Section 1: Hero Section */}
      <section className="pt-40 pb-20 section-padding bg-beige-100">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-medium uppercase tracking-[0.3em] text-brown-500 mb-6"
          >
            STOP COMPETING ON PRICE. START OWNING THE PREMIUM SPACE
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-medium text-brown-900 mb-12"
          >
            Helping Aesthetic Clinics Attract High-Ticket Clients on Autopilot in Just 14 Days with Premium Branding & High-Converting Websites
          </motion.h1>


          {/* VSL Video Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-16"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/m7CLn4d07Wc" 
              title="VSL Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a href="#booking" className="btn-primary flex items-center gap-3">
                RESERVE YOUR FREE STRATEGY CALL
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/wene.designs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-3"
              >
                CAN WE HAVE A CHAT?
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm font-medium text-brown-500 italic">
              (Only 3 partnership spots remaining for this month)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Testimonials Marquee */}
      <section className="py-16 border-y border-brown-500/10 bg-[#63251c] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-beige-200/60">Trusted by leading Aesthetic Professionals</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="relative bg-white p-8 rounded-2xl shadow-sm border border-brown-500/5 transition-all hover:shadow-md hover:scale-[1.02] group"
              >
                {/* Instagram Link Overlay */}
                <a 
                  href={t.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 z-0"
                  aria-label={`Visit ${t.name}'s Instagram`}
                />
                
                {t.website && (
                  <div className="absolute top-6 right-6 z-20">
                    <a 
                      href={t.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-brown-900 border border-brown-900/20 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-brown-900 hover:text-white transition-all shadow-sm"
                    >
                      VIEW SITE
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
                
                <div className="relative z-10 pointer-events-none">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full object-cover transition-transform group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-brown-900 m-0 group-hover:text-brown-500 transition-colors">{t.name}</h4>
                      <p className="text-xs text-brown-500 m-0">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/70 italic leading-relaxed">"{t.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Case Study */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-beige-100 rounded-full -z-10" />
             <img 
  src="testimonial.webp" 
  alt="Clinic Transformation"
  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
  referrerPolicy="no-referrer"
/>
            </div>
            
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-brown-500 mb-4 block">Case Study</span>
              <h2 className="font-serif font-medium text-brown-900 mb-8">The Transformation: From "Too Busy" to Premium Authority</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brown-500 mb-2">The Situation</h4>
                  <p className="text-ink/70 leading-relaxed">A thriving UK clinic using only a basic booking app. With a Training Academy launch on the horizon, she needed a professional presence but had zero time to build it herself.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-xl bg-beige-100/50 border border-brown-500/10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-red-800/60 mb-4">The Problem</h4>
                    <p className="text-ink/80">"DIY" look was holding back her premium pricing and authority.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-brown-900">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">The Solution</h4>
                    <p className="text-white">A high-end Brand Identity & Website built for conversion and authority.</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-brown-500/10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brown-500 mb-4">The Result</h4>
                  <div className="flex items-center gap-6">
                    <span className="text-7xl md:text-8xl font-serif font-bold text-brown-900 leading-none">5x</span>
                    <p className="text-brown-900 font-serif font-medium text-xl md:text-2xl leading-tight">Return on investment within the first month of the site going live.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Qualifying Section */}
      <section className="section-padding bg-beige-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-medium text-brown-900 mb-6">Is Wene Designs the Right Partner for You?</h2>
            <p className="text-ink/60 italic">We don't work with everyone. We only partner with those ready for elite results.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* This is for you if... */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-brown-500/5">
              <h3 className="font-serif font-medium text-brown-900 mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-emerald-600 w-6 h-6" />
                This is for you if...
              </h3>
              <ul className="space-y-6">
                {[
                  "You are a UK-based clinic owner or educator with a 'Premium' craft.",
                  "You are tired of price-shopping clients and want to attract high-ticket leads.",
                  "You view branding as a high-yield investment, not a business cost.",
                  "You want a dedicated strategic partner, not just a freelancer."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-ink/80 leading-relaxed italic">
                    <span className="text-brown-500 font-serif font-bold">0{i+1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* This is NOT for you if... */}
            <div className="bg-brown-900 p-10 rounded-3xl shadow-xl text-beige-50">
              <h3 className="font-serif font-medium mb-8 flex items-center gap-3 text-beige-50">
                <XCircle className="text-red-400 w-6 h-6" />
                This is NOT for you if...
              </h3>
              <ul className="space-y-6">
                {[
                  "You are looking for a 'quick logo' or a generic, low-cost template.",
                  "You prefer to compete on discounts rather than clinical expertise.",
                  "You aren't ready to outsource the 'DIY' hustle to a professional.",
                  "You only want a 'pretty' site without a backend conversion strategy."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-beige-50/70 leading-relaxed italic">
                    <span className="text-brown-500 font-serif font-bold">0{i+1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-brown-500 mb-4 block">Common Concerns</span>
            <h2 className="font-serif font-medium text-brown-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-2">
            <FAQItem 
              question="Why do I need a website if I already have Instagram?"
              answer="Instagram is a business card; a website is your Digital Flagship. High-ticket clients ready to spend £1,500+ want to vet your authority, safety, and results in one professional place. If they can’t find you, they don’t trust you."
            />
            <FAQItem 
              question="I already close high-ticket clients on Instagram. Why do I need a website?"
              answer="If you’re closing elite clients on Instagram, it’s proof your service is exceptional. Now, it’s time to scale that success without the manual hustle. Right now, you are doing the heavy lifting in DMs. A premium website acts as your Strategic Filter, educating leads and handling objections before they ever reach you. This ensures you only speak to clients who are 90% sold. If you're winning now with just a social profile, imagine the impact of a 24/7 Digital Flagship that pre-sells your authority."
            />
            <FAQItem 
              question="How much time do I need to commit?"
              answer="We know you’re busy in the clinic. Our process is designed to be 'deeply involved but low friction.' You’ll only need a few strategy sessions, we handle the psychology, design, and tech from there."
            />
            <FAQItem 
              question="Do you guarantee revenue?"
              answer="While we don't guarantee specific income (as that depends on your operations), we guarantee Positioning. We build the infrastructure that allows you to stop discounting and start attracting clients who value your expertise over your price tag."
            />
            <FAQItem 
              question="Why should I work with Wene instead of an agency?"
              answer="At big agencies, you’re just a ticket number. At Wene Designs, I personally manage your strategy and design. I only take 2-3 clients a month to ensure every pixel of your brand screams 'Premium Authority.'"
            />
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section id="booking" className="section-padding bg-brown-900 text-beige-50 relative overflow-hidden">
        <div className="w-full px-4 relative z-10 text-center">
          <div className="text-white w-full mx-auto">
            <div className="text-center mb-10">
              <Calendar className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="font-serif font-medium text-white">Ready to Attract High-Ticket Clients on Autopilot?</h3>
              <p className="text-white/80 mt-4 max-w-2xl mx-auto">Let’s spend the next 14 days building the high-converting digital home your expertise deserves so you can finally stop chasing leads and start leading your space.</p>
            </div>
            
            <div className="w-full">
              <iframe 
              src="https://calendly.com/phamuyennhu1709/30min"
        width="100%"
        style={{ minHeight: '700px' }} 
        frameBorder="0"
        title="Calendly Booking"
        className="w-full h-[700px] border-none shadow-lg rounded-lg"
              ></iframe>
            </div>
            
            <p className="text-center text-sm font-medium text-white/60 mt-10 uppercase tracking-widest">
              Limited to 3 partnership spots per month
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-beige-100 border-t border-brown-500/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-serif font-bold tracking-widest text-brown-900 uppercase">
            Wene Designs
          </div>
          <p className="text-xs text-brown-500/60 font-medium uppercase tracking-widest">
            © 2026 Wene Designs. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
