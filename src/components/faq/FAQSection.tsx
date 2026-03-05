'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { faqs } from '@/lib/data';

export function FAQSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );
    if (listRef.current) {
      const items = listRef.current.querySelectorAll('.faq-item');
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, delay: 0.3 }
      );
    }
  }, []);

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div ref={headingRef} className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
            Questions
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink-white sm:text-5xl md:text-6xl">
            FAQs &amp; Aftercare
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-ink-purple to-transparent" />
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
            Everything you need to know before, during, and after your tattoo.
          </p>
        </div>

        <div ref={listRef} className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-white/5 bg-ink-charcoal p-8 text-center">
          <h3 className="font-display text-xl font-bold text-ink-white">
            Still have questions?
          </h3>
          <p className="mt-2 text-sm text-ink-muted">
            We&apos;re here to help. Reach out anytime.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-ink-purple px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ink-purple-light"
            >
              Contact Us
            </Link>
            <a
              href="sms:+18453852136"
              className="rounded-full border border-white/10 px-6 py-2.5 text-sm font-semibold text-ink-white transition-all hover:border-white/20"
            >
              Text (845) 385-2136
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="faq-item rounded-xl border border-white/5 bg-ink-charcoal transition-all hover:border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <span className="pr-4 text-sm font-semibold text-ink-white sm:text-base">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ink-muted transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="px-5 text-sm leading-relaxed text-ink-silver">{answer}</div>
      </div>
    </div>
  );
}
