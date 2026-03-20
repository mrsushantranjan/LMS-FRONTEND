import React, { useState, useEffect, useRef } from "react";
import { Star, ShieldCheck, GraduationCap, Globe, Award, Clock, TrendingUp, Users } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

// FIX 1: counterTargets defined as a stable constant OUTSIDE the component
// so it never triggers infinite re-renders in useEffect([counterTargets])
const counterTargets = {
  students: 12000,
  courses: 240,
  successRate: 94,
  countries: 58,
  certificates: 31500,
  support: 0, // special case — rendered as "24/7"
};

const statMeta = [
  { key: "students",    label: "Students Enrolled",   icon: GraduationCap },
  { key: "courses",     label: "Courses Available",   icon: TrendingUp },
  { key: "successRate", label: "Success Rate",         icon: Award },
  { key: "countries",   label: "Countries Reached",   icon: Globe },
  { key: "certificates",label: "Certificates Issued", icon: Award },
  { key: "support",     label: "Support Available",   icon: Clock },
];

const values = [
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards in every course, every interaction, every outcome.",
    features: ["Peer-reviewed curriculum", "Expert-led instruction", "Continuous improvement"],
    accent: "#0e7490",
    light: "#e0f7fa",
  },
  {
    title: "Accessibility",
    description: "World-class education should never be gated by geography, background, or budget.",
    features: ["Affordable pricing tiers", "Mobile-first design", "Multi-language support"],
    accent: "#0369a1",
    light: "#dbeafe",
  },
  {
    title: "Community",
    description: "Learning thrives in connection. We build spaces where collaboration sparks growth.",
    features: ["Live cohort sessions", "Peer mentorship", "Alumni network"],
    accent: "#0f766e",
    light: "#d1fae5",
  },
  {
    title: "Innovation",
    description: "The future of learning is adaptive, interactive, and built for how humans actually learn.",
    features: ["AI-powered paths", "Project-based learning", "Real-world challenges"],
    accent: "#7c3aed",
    light: "#ede9fe",
  },
];

const testimonials = [
  {
    name: "Aisha Rahman",
    role: "Frontend Engineer @ Google",
    rating: 5,
    text: "LearnHub didn't just teach me to code — it taught me how to think like an engineer. The projects were real, the mentorship was genuine.",
    image: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "Marcus Chen",
    role: "Data Scientist @ Stripe",
    rating: 5,
    text: "I switched careers at 34. LearnHub gave me the confidence and the skills to land a role I'd only dreamed about. Incredible platform.",
    image: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Sofia Alvarez",
    role: "UX Designer @ Figma",
    rating: 5,
    text: "The UI/UX track is the most thoughtfully designed course I've ever taken. Real briefs, real feedback, real portfolio pieces.",
    image: "https://i.pravatar.cc/80?img=29",
  },
];

// ─── HOOK: Intersection Observer for scroll-triggered animation ───────────────
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── COUNTER HOOK (FIX 2: stable deps, no infinite loop) ─────────────────────
function useCounters(shouldStart) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(Object.keys(counterTargets).map((k) => [k, 0]))
  );

  useEffect(() => {
    if (!shouldStart) return;
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const timers = [];

    Object.keys(counterTargets).forEach((key) => {
      if (key === "support") return; // 24/7 is static
      let current = 0;
      const target = counterTargets[key];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setValues((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);

      timers.push(timer);
    });

    return () => timers.forEach((t) => clearInterval(t));
  }, [shouldStart]); // FIX: only re-run when shouldStart changes, not on every render

  return values;
}

// ─── FORMAT HELPER ────────────────────────────────────────────────────────────
const formatStatNumber = (key, val) => {
  if (key === "support") return "24/7";
  if (key === "successRate") return `${val}%`;
  return `${val.toLocaleString()}+`;
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function AboutUsSections() {
  // Scroll-triggered counters
  const [statsRef, statsInView] = useInView(0.3);
  const counterValues = useCounters(statsInView);

  // Scroll-triggered section fades
  const [valuesRef, valuesInView] = useInView(0.15);
  const [testimonialsRef, testimonialsInView] = useInView(0.15);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan: #0e7490;
          --cyan-dark: #0a5c73;
          --blue: #0369a1;
          --teal: #0f766e;
          --slate: #475569;
          --slate-light: #94a3b8;
          --bg: #f8fafc;
          --white: #ffffff;
          --border: rgba(14,116,144,0.12);
          --ff-display: 'Cormorant Garamond', Georgia, serif;
          --ff-body: 'DM Sans', sans-serif;
        }

        /* ── HERO VIGNETTE ─────────────────────────── */
        .hero-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.0) 30%,
            rgba(0,0,0,0.0) 70%,
            rgba(0,0,0,0.72) 100%
          );
        }

        /* ── SHARED SECTION ────────────────────────── */
        .section {
          padding: 96px 24px;
          font-family: var(--ff-body);
        }

        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.2);
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .section-title {
          font-family: var(--ff-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .section-subtitle {
          font-size: 1rem;
          color: var(--slate);
          font-weight: 300;
          max-width: 480px;
          line-height: 1.6;
        }

        /* ── STATS STRIP ───────────────────────────── */
        .stats-section {
          background: linear-gradient(135deg, #0a5c73 0%, #0e7490 40%, #0369a1 100%);
          padding: 72px 24px;
          position: relative;
          overflow: hidden;
        }

        .stats-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .stat-card {
          padding: 36px 24px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
          transition: background 0.25s ease;
        }

        .stat-card:hover {
          background: rgba(255,255,255,0.06);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.12);
          border-radius: 10px;
          margin: 0 auto 16px;
          color: rgba(255,255,255,0.9);
        }

        .stat-number {
          font-family: var(--ff-display);
          font-size: 2.6rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-family: var(--ff-body);
          font-size: 0.78rem;
          font-weight: 400;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── VALUES SECTION ────────────────────────── */
        .values-section {
          background: var(--bg);
        }

        .values-header {
          margin-bottom: 56px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .value-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(14,116,144,0.1);
        }

        .value-card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 16px 16px 0 0;
        }

        .value-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .value-card-title {
          font-family: var(--ff-display);
          font-size: 1.4rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .value-card-desc {
          font-size: 0.88rem;
          color: var(--slate);
          line-height: 1.65;
          margin-bottom: 20px;
          font-weight: 300;
        }

        .value-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .value-feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #475569;
          font-weight: 400;
        }

        .value-feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── TESTIMONIALS SECTION ──────────────────── */
        .testimonials-section {
          background: #fff;
        }

        .testimonials-header {
          margin-bottom: 56px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .testimonial-card {
          background: #f8fafc;
          border: 1px solid rgba(14,116,144,0.1);
          border-radius: 16px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          position: relative;
          overflow: hidden;
        }

        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: -8px;
          right: 20px;
          font-family: var(--ff-display);
          font-size: 8rem;
          color: rgba(14,116,144,0.06);
          line-height: 1;
          pointer-events: none;
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(14,116,144,0.09);
        }

        .testimonial-stars {
          display: flex;
          gap: 3px;
        }

        .testimonial-star {
          width: 14px;
          height: 14px;
          color: #f59e0b;
          fill: #f59e0b;
        }

        .testimonial-text {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.7;
          font-weight: 300;
          font-style: italic;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(14,116,144,0.08);
        }

        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(14,116,144,0.2);
        }

        .testimonial-name {
          font-size: 0.88rem;
          font-weight: 500;
          color: #0f172a;
        }

        .testimonial-role {
          font-size: 0.76rem;
          color: var(--slate-light);
          font-weight: 300;
          margin-top: 2px;
        }

        /* ── FADE-IN ANIMATION ─────────────────────── */
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-up-delay-1 { transition-delay: 0.1s; }
        .fade-up-delay-2 { transition-delay: 0.2s; }
        .fade-up-delay-3 { transition-delay: 0.3s; }
        .fade-up-delay-4 { transition-delay: 0.4s; }
      `}</style>

      {/* ── HERO VIGNETTE (drop-in replacement) ──────────────────────────── */}
      <div className="hero-vignette" />

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <section className="stats-section" ref={statsRef}>
        <div className="stats-grid">
          {statMeta.map(({ key, label, icon: Icon }, i) => (
            <div className="stat-card" key={key}>
              <div className="stat-icon">
                <Icon size={18} />
              </div>
              <div className="stat-number">
                {formatStatNumber(key, counterValues[key] ?? 0)}
              </div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES SECTION ───────────────────────────────────────────────── */}
      {/* FIX 3: ShieldUser → ShieldCheck (correct lucide-react icon name) */}
      <section className="section values-section" ref={valuesRef}>
        <div className="section-inner">
          <div className={`values-header fade-up ${valuesInView ? "visible" : ""}`}>
            <div className="section-badge">
              <ShieldCheck size={13} />
              <span>Our Guiding Principles</span>
            </div>
            <h2 className="section-title">Core Values That Define Us</h2>
            <p className="section-subtitle">
              The foundation of everything we do at LearnHub
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className={`value-card fade-up ${valuesInView ? "visible" : ""} fade-up-delay-${Math.min(index + 1, 4)}`}
              >
                <div
                  className="value-card-accent"
                  style={{ background: value.accent }}
                />
                <div
                  className="value-icon-wrap"
                  style={{ background: value.light }}
                >
                  <ShieldCheck size={20} style={{ color: value.accent }} />
                </div>
                <h3 className="value-card-title">{value.title}</h3>
                <p className="value-card-desc">{value.description}</p>
                <ul className="value-features">
                  {value.features.map((feature, fi) => (
                    <li key={fi} className="value-feature-item">
                      <div
                        className="value-feature-dot"
                        style={{ background: value.accent }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ─────────────────────────────────────────── */}
      <section className="section testimonials-section" ref={testimonialsRef}>
        <div className="section-inner">
          <div className={`testimonials-header fade-up ${testimonialsInView ? "visible" : ""}`}>
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle">
              Real stories from real learners who transformed their careers
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card fade-up ${testimonialsInView ? "visible" : ""} fade-up-delay-${Math.min(index + 1, 4)}`}
              >
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="testimonial-star" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}