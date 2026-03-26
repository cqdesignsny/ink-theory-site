'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Send,
  Upload,
  X,
  Contrast,
  Eye,
  Sun,
  Pen,
  CircleDot,
  Palette,
  Hexagon,
  Search,
  Type,
  Cpu,
  User,
  Flame,
  Sparkles,
  Minus,
  Droplets,
  Circle,
  Dumbbell,
  RectangleVertical,
  Shield,
  Shirt,
  Footprints,
  AlignJustify,
  Hand,
  CircleUser,
  Smile,
  Minimize2,
  ArrowUpDown,
  ArrowLeftRight,
  Maximize2,
  Equal,
  Layers,
  Ruler,
  Target,
  Gem,
} from 'lucide-react';
import Image from 'next/image';
import {
  tattooStyles,
  bodyPlacements,
  tattooSizes,
  placementSizeMap,
  detailLevels,
  artists,
  getRecommendedArtists,
  type Artist,
} from '@/lib/data';

// ─── Icon maps ──────────────────────────────────────────────
const styleIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Contrast, Eye, Sun, Pen, CircleDot, Palette,
  Hexagon, Search, Type, Cpu, User, Flame,
  Sparkles, Minus, Droplets, Circle,
};

const bodyIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Dumbbell, RectangleVertical, Shield, Shirt,
  Footprints, AlignJustify, Hand, CircleUser,
  Smile, Ruler, Target, Gem,
};

const sizeIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Minimize2, Hand, ArrowUpDown, ArrowLeftRight, Maximize2,
};

const detailIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Minus, Equal, Layers,
};

// ─── Step definitions ───────────────────────────────────────
const STEPS = [
  { id: 'style', label: 'Style', number: 1 },
  { id: 'placement', label: 'Placement', number: 2 },
  { id: 'size', label: 'Size', number: 3 },
  { id: 'details', label: 'Details', number: 4 },
  { id: 'info', label: 'Your Info', number: 5 },
  { id: 'match', label: 'Your Match', number: 6 },
];

// ─── Form state ─────────────────────────────────────────────
interface FormData {
  styles: string[];
  placement: string;
  size: string;
  detailLevel: string;
  description: string;
  referenceImages: string[];
  isCoverUp: boolean;
  preferredArtist: string;
  location: 'ny' | 'dallas';
  name: string;
  phone: string;
  email: string;
  instagram: string;
}

const initialForm: FormData = {
  styles: [],
  placement: '',
  size: '',
  detailLevel: '',
  description: '',
  referenceImages: [],
  isCoverUp: false,
  preferredArtist: '',
  location: 'ny',
  name: '',
  phone: '',
  email: '',
  instagram: '',
};

// ─── Animation variants ─────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export function TattooQuestionnaire() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [matchedArtists, setMatchedArtists] = useState<Artist[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${((step + 1) / STEPS.length) * 100}%`,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [step]);

  // Calculate matches when reaching the match step
  useEffect(() => {
    if (step === 5) {
      const matches = getRecommendedArtists(form.styles, form.location);
      setMatchedArtists(matches);
    }
  }, [step, form.styles, form.location]);

  const nextStep = () => {
    if (step < STEPS.length - 1) {
      setDirection(1);
      setStep(s => s + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(s => s - 1);
    }
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 0: return form.styles.length > 0;
      case 1: return form.placement !== '';
      case 2: return form.size !== '';
      case 3: return form.detailLevel !== '' && form.description.trim() !== '';
      case 4: return form.name.trim() !== '' && (form.phone.trim() !== '' || form.email.trim() !== '');
      default: return true;
    }
  };

  const toggleStyle = (id: string) => {
    setForm(prev => ({
      ...prev,
      styles: prev.styles.includes(id)
        ? prev.styles.filter(s => s !== id)
        : [...prev.styles, id],
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessScreen name={form.name} />;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-ink-white sm:text-4xl">
          Design Your Tattoo
        </h1>
        <p className="mt-2 text-ink-muted">
          Tell us your vision. We&apos;ll match you with the perfect artist.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-10">
        <div className="relative h-1 overflow-hidden rounded-full bg-white/5">
          <div
            ref={progressRef}
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-ink-purple to-ink-purple-light"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between">
          {STEPS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                if (i < step) {
                  setDirection(i < step ? -1 : 1);
                  setStep(i);
                }
              }}
              disabled={i > step}
              className={`text-xs font-medium uppercase tracking-wider transition-colors ${
                i <= step ? 'text-ink-silver' : 'text-ink-muted/40'
              } ${i < step ? 'cursor-pointer hover:text-ink-white' : ''}`}
            >
              <span className="hidden sm:inline">{s.label}</span>
              <span className="sm:hidden">{s.number}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {step === 0 && (
            <StepStyle
              selected={form.styles}
              onToggle={toggleStyle}
            />
          )}
          {step === 1 && (
            <StepPlacement
              selected={form.placement}
              onSelect={v => setForm(f => ({ ...f, placement: v, size: '' }))}
            />
          )}
          {step === 2 && (
            <StepSize
              selected={form.size}
              placement={form.placement}
              onSelect={v => setForm(f => ({ ...f, size: v }))}
            />
          )}
          {step === 3 && (
            <StepDetails
              form={form}
              setForm={setForm}
            />
          )}
          {step === 4 && (
            <StepInfo
              form={form}
              setForm={setForm}
            />
          )}
          {step === 5 && (
            <StepMatch
              matchedArtists={matchedArtists}
              form={form}
              setForm={setForm}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {step < 5 && (
        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={step === 0}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              step === 0
                ? 'cursor-not-allowed text-ink-muted/30'
                : 'text-ink-silver hover:text-ink-white'
            }`}
          >
            <ChevronLeft size={16} />
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={!canProceed()}
            className={`flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold transition-all ${
              canProceed()
                ? 'bg-ink-purple text-white hover:bg-ink-purple-light'
                : 'cursor-not-allowed bg-white/5 text-ink-muted/40'
            }`}
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Step 1: Style Selection ─────────────────────────────────
function StepStyle({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-ink-white">
        What style are you looking for?
      </h2>
      <p className="mt-1 text-sm text-ink-muted">Select one or more styles that speak to you.</p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {tattooStyles.map((style) => {
          const Icon = styleIconMap[style.icon] || Circle;
          const isSelected = selected.includes(style.id);
          return (
            <button
              key={style.id}
              onClick={() => onToggle(style.id)}
              className={`group relative flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-200 ${
                isSelected
                  ? 'border-ink-purple bg-ink-purple/10 text-ink-white'
                  : 'border-white/5 bg-ink-charcoal text-ink-muted hover:border-white/10 hover:bg-ink-gray hover:text-ink-silver'
              }`}
            >
              {isSelected && (
                <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-ink-purple">
                  <Check size={12} className="text-white" />
                </div>
              )}
              <Icon size={24} className={isSelected ? 'text-ink-purple' : ''} />
              <span className="text-xs font-semibold">{style.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step 2: Body Placement ──────────────────────────────────
function StepPlacement({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-ink-white">
        Where do you want your tattoo?
      </h2>
      <p className="mt-1 text-sm text-ink-muted">Choose the body placement for your piece.</p>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
        {bodyPlacements.map((bp) => {
          const Icon = bodyIconMap[bp.icon] || Circle;
          const isSelected = selected === bp.id;
          return (
            <button
              key={bp.id}
              onClick={() => onSelect(bp.id)}
              className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-200 ${
                isSelected
                  ? 'border-ink-purple bg-ink-purple/10 text-ink-white'
                  : 'border-white/5 bg-ink-charcoal text-ink-muted hover:border-white/10 hover:bg-ink-gray hover:text-ink-silver'
              }`}
            >
              <Icon size={24} className={isSelected ? 'text-ink-purple' : ''} />
              <span className="text-xs font-semibold">{bp.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step 3: Size Selection (filtered by placement) ─────────
function StepSize({
  selected,
  placement,
  onSelect,
}: {
  selected: string;
  placement: string;
  onSelect: (id: string) => void;
}) {
  // Filter sizes based on the selected placement
  const allowedSizeIds = placementSizeMap[placement] || tattooSizes.map(s => s.id);
  const filteredSizes = tattooSizes.filter(s => allowedSizeIds.includes(s.id));

  // Find the placement name for the description
  const placementName = bodyPlacements.find(bp => bp.id === placement)?.name || placement;

  return (
    <div>
      <h2 className="font-display text-xl font-bold text-ink-white">
        How big are you thinking?
      </h2>
      <p className="mt-1 text-sm text-ink-muted">
        Showing sizes available for <span className="font-medium text-ink-silver">{placementName}</span> placement.
      </p>

      <div className="mt-6 space-y-3">
        {filteredSizes.map((size) => {
          const Icon = sizeIconMap[size.icon] || Circle;
          const isSelected = selected === size.id;
          return (
            <button
              key={size.id}
              onClick={() => onSelect(size.id)}
              className={`flex w-full items-center gap-4 rounded-xl border p-5 text-left transition-all duration-200 ${
                isSelected
                  ? 'border-ink-purple bg-ink-purple/10'
                  : 'border-white/5 bg-ink-charcoal hover:border-white/10 hover:bg-ink-gray'
              }`}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                isSelected ? 'bg-ink-purple/20 text-ink-purple' : 'bg-white/5 text-ink-silver'
              }`}>
                <Icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-ink-white">{size.name}</span>
                  <span className="text-sm text-ink-muted">— {size.description}</span>
                </div>
                <span className="text-xs text-ink-muted">Est. {size.estimatedTime}</span>
              </div>
              {isSelected && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-purple">
                  <Check size={14} className="text-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step 4: Details & Description ───────────────────────────
function StepDetails({
  form,
  setForm,
}: {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-xl font-bold text-ink-white">
          Tell us about your vision
        </h2>
        <p className="mt-1 text-sm text-ink-muted">The more detail, the better we can bring it to life.</p>
      </div>

      {/* Detail Level */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-ink-silver">Detail Level</label>
        <div className="grid grid-cols-3 gap-3">
          {detailLevels.map((d) => {
            const Icon = detailIconMap[d.icon] || Circle;
            const isSelected = form.detailLevel === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setForm(f => ({ ...f, detailLevel: d.id }))}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all ${
                  isSelected
                    ? 'border-ink-purple bg-ink-purple/10 text-ink-white'
                    : 'border-white/5 bg-ink-charcoal text-ink-muted hover:border-white/10'
                }`}
              >
                <Icon size={20} className={isSelected ? 'text-ink-purple' : ''} />
                <span className="text-xs font-semibold">{d.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-semibold text-ink-silver">
          Describe your tattoo idea
        </label>
        <textarea
          id="description"
          value={form.description}
          onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
          rows={4}
          placeholder="Tell us about your design concept, any specific elements, references, or meaning behind the tattoo..."
          className="w-full rounded-xl border border-white/5 bg-ink-charcoal px-4 py-3 text-sm text-ink-white placeholder-ink-muted/50 outline-none transition-colors focus:border-ink-purple/50 focus:ring-1 focus:ring-ink-purple/20"
        />
      </div>

      {/* Cover-up */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setForm(f => ({ ...f, isCoverUp: !f.isCoverUp }))}
          className={`flex h-6 w-6 items-center justify-center rounded border transition-all ${
            form.isCoverUp
              ? 'border-ink-purple bg-ink-purple text-white'
              : 'border-white/10 bg-ink-charcoal'
          }`}
        >
          {form.isCoverUp && <Check size={14} />}
        </button>
        <span className="text-sm text-ink-silver">This is a cover-up tattoo</span>
      </div>

      {/* Reference Images Note */}
      <div className="rounded-xl border border-white/5 bg-ink-dark p-4">
        <div className="flex items-center gap-3 text-ink-silver">
          <Upload size={18} />
          <span className="text-sm font-medium">Have reference images?</span>
        </div>
        <p className="mt-2 text-xs text-ink-muted">
          You can share reference photos directly with your matched artist via text or email after booking.
        </p>
      </div>
    </div>
  );
}

// ─── Step 5: Contact Info ────────────────────────────────────
function StepInfo({
  form,
  setForm,
}: {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-xl font-bold text-ink-white">
          Almost there — tell us about you
        </h2>
        <p className="mt-1 text-sm text-ink-muted">We&apos;ll reach out within 24 hours to schedule your consultation.</p>
      </div>

      {/* Location */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-ink-silver">Preferred Location</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setForm(f => ({ ...f, location: 'ny' }))}
            className={`rounded-xl border p-4 text-center transition-all ${
              form.location === 'ny'
                ? 'border-ink-purple bg-ink-purple/10 text-ink-white'
                : 'border-white/5 bg-ink-charcoal text-ink-muted hover:border-white/10'
            }`}
          >
            <div className="font-semibold">Montgomery, NY</div>
            <div className="mt-1 text-xs text-ink-muted">Hudson Valley</div>
          </button>
          <button
            onClick={() => setForm(f => ({ ...f, location: 'dallas' }))}
            className={`relative rounded-xl border p-4 text-center transition-all ${
              form.location === 'dallas'
                ? 'border-ink-purple bg-ink-purple/10 text-ink-white'
                : 'border-white/5 bg-ink-charcoal text-ink-muted hover:border-white/10'
            }`}
          >
            <div className="font-semibold">Dallas, TX</div>
            <div className="mt-1 text-xs text-ink-purple">By Appointment Only — Steven Only</div>
          </button>
        </div>
      </div>

      {/* Contact Fields */}
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink-silver">
            Full Name <span className="text-ink-purple">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="Your full name"
            className="w-full rounded-xl border border-white/5 bg-ink-charcoal px-4 py-3 text-sm text-ink-white placeholder-ink-muted/50 outline-none transition-colors focus:border-ink-purple/50 focus:ring-1 focus:ring-ink-purple/20"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink-silver">
              Phone Number <span className="text-ink-purple">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              placeholder="(555) 123-4567"
              className="w-full rounded-xl border border-white/5 bg-ink-charcoal px-4 py-3 text-sm text-ink-white placeholder-ink-muted/50 outline-none transition-colors focus:border-ink-purple/50 focus:ring-1 focus:ring-ink-purple/20"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink-silver">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              placeholder="you@email.com"
              className="w-full rounded-xl border border-white/5 bg-ink-charcoal px-4 py-3 text-sm text-ink-white placeholder-ink-muted/50 outline-none transition-colors focus:border-ink-purple/50 focus:ring-1 focus:ring-ink-purple/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="instagram" className="mb-2 block text-sm font-semibold text-ink-silver">
            Instagram Handle <span className="text-xs text-ink-muted">(optional)</span>
          </label>
          <input
            id="instagram"
            type="text"
            value={form.instagram}
            onChange={e => setForm(f => ({ ...f, instagram: e.target.value }))}
            placeholder="@yourhandle"
            className="w-full rounded-xl border border-white/5 bg-ink-charcoal px-4 py-3 text-sm text-ink-white placeholder-ink-muted/50 outline-none transition-colors focus:border-ink-purple/50 focus:ring-1 focus:ring-ink-purple/20"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Step 6: Artist Match & Submit ───────────────────────────
function StepMatch({
  matchedArtists,
  form,
  setForm,
  onSubmit,
  isSubmitting,
}: {
  matchedArtists: Artist[];
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: () => void;
  isSubmitting: boolean;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-xl font-bold text-ink-white">
          Your Perfect Match{matchedArtists.length > 1 ? 'es' : ''}
        </h2>
        <p className="mt-1 text-sm text-ink-muted">
          Based on your selections, {matchedArtists.length > 1 ? 'these artists are' : 'this artist is'} the best fit for your tattoo.
        </p>
      </div>

      <div className="space-y-3">
        {matchedArtists.map((artist, i) => {
          const isSelected = form.preferredArtist === artist.id;
          const matchingStyles = artist.styles.filter(s => form.styles.includes(s));
          return (
            <button
              key={artist.id}
              onClick={() => setForm(f => ({ ...f, preferredArtist: artist.id }))}
              className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                isSelected
                  ? 'border-ink-purple bg-ink-purple/10'
                  : 'border-white/5 bg-ink-charcoal hover:border-white/10'
              }`}
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-ink-white">{artist.name}</span>
                  {i === 0 && (
                    <span className="rounded-full bg-ink-purple/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-purple">
                      Best Match
                    </span>
                  )}
                </div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {matchingStyles.map(s => (
                    <span key={s} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] capitalize text-ink-silver">
                      {s.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
              {isSelected && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-purple">
                  <Check size={14} className="text-white" />
                </div>
              )}
            </button>
          );
        })}

        {/* "No preference" option */}
        <button
          onClick={() => setForm(f => ({ ...f, preferredArtist: '' }))}
          className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
            form.preferredArtist === ''
              ? 'border-ink-purple bg-ink-purple/10'
              : 'border-white/5 bg-ink-charcoal hover:border-white/10'
          }`}
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white/5">
            <User size={24} className="text-ink-silver" />
          </div>
          <div>
            <span className="font-display font-bold text-ink-white">Let Us Decide</span>
            <p className="mt-0.5 text-xs text-ink-muted">We&apos;ll assign the best available artist</p>
          </div>
          {form.preferredArtist === '' && (
            <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-ink-purple">
              <Check size={14} className="text-white" />
            </div>
          )}
        </button>
      </div>

      {/* Summary */}
      <div className="rounded-xl border border-white/5 bg-ink-dark p-5">
        <h3 className="text-sm font-semibold text-ink-silver">Your Tattoo Summary</h3>
        <div className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-ink-muted">Style</span>
            <span className="text-ink-white capitalize">
              {form.styles.map(s => s.replace(/-/g, ' ')).join(', ')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink-muted">Placement</span>
            <span className="capitalize text-ink-white">{form.placement.replace(/-/g, ' ')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink-muted">Size</span>
            <span className="capitalize text-ink-white">
              {tattooSizes.find(s => s.id === form.size)?.name}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink-muted">Detail</span>
            <span className="capitalize text-ink-white">
              {detailLevels.find(d => d.id === form.detailLevel)?.name}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink-muted">Location</span>
            <span className="text-ink-white">{form.location === 'ny' ? 'Montgomery, NY' : 'Dallas, TX'}</span>
          </div>
          {form.isCoverUp && (
            <div className="flex justify-between">
              <span className="text-ink-muted">Type</span>
              <span className="text-ink-white">Cover-up</span>
            </div>
          )}
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={onSubmit}
        disabled={isSubmitting}
        className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-ink-purple py-4 text-base font-bold text-white transition-all hover:bg-ink-purple-light hover:shadow-xl hover:shadow-ink-purple/20 disabled:cursor-wait disabled:opacity-70"
      >
        {isSubmitting ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        ) : (
          <>
            <Send size={18} />
            <span className="relative z-10">Submit &amp; Get Matched</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-ink-purple-dark to-ink-purple transition-transform duration-500 group-hover:translate-x-0" />
          </>
        )}
      </button>

      {/* Back button */}
      <button
        onClick={() => window.history.back()}
        className="mt-2 flex w-full items-center justify-center gap-2 py-2 text-sm text-ink-muted hover:text-ink-silver"
      >
        <ChevronLeft size={14} />
        Go back and edit
      </button>
    </div>
  );
}

// ─── Success Screen ──────────────────────────────────────────
function SuccessScreen({ name }: { name: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="mx-auto max-w-lg px-6 pb-24 pt-16 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
        <Check size={40} className="text-emerald-400" />
      </div>
      <h2 className="mt-6 font-display text-3xl font-bold text-ink-white">
        You&apos;re All Set, {name.split(' ')[0]}!
      </h2>
      <p className="mt-4 text-lg text-ink-silver">
        We&apos;ve received your tattoo request. Our team will review your submission and text you within 24 hours to schedule your consultation.
      </p>
      <div className="mt-8 rounded-xl border border-white/5 bg-ink-charcoal p-6">
        <p className="text-sm font-medium text-ink-silver">What happens next?</p>
        <ol className="mt-4 space-y-3 text-left text-sm text-ink-muted">
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-purple/20 text-xs font-bold text-ink-purple">1</span>
            <span>We review your design request and match you with the ideal artist</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-purple/20 text-xs font-bold text-ink-purple">2</span>
            <span>Your artist will text or call you within 24 hours</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-purple/20 text-xs font-bold text-ink-purple">3</span>
            <span>Schedule your consultation &amp; finalize the design</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-purple/20 text-xs font-bold text-ink-purple">4</span>
            <span>Get your dream tattoo!</span>
          </li>
        </ol>
      </div>
      <p className="mt-6 text-sm text-ink-muted">
        Can&apos;t wait? Text us directly at{' '}
        <a href="sms:+18453852136" className="font-medium text-ink-silver hover:text-ink-white">
          (845) 385-2136
        </a>
      </p>
    </div>
  );
}
