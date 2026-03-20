import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpen, Code2, Palette, BarChart3, Brain, Globe,
  Layers, Cpu, PenTool, TrendingUp, Star, Users, Play,
  ArrowRight, Sparkles, ChevronRight,
} from "lucide-react";

// ─── FLOATING ICONS DATA ──────────────────────────────────────────────────────
// Replace icon.src img tags with lucide icons — no broken image paths
const floatingIcons = [
  { Icon: Code2,     color: "#0e7490", bg: "#e0f7fa", top: "12%",  left: "6%",   size: 22, delay: 0 },
  { Icon: Brain,     color: "#0369a1", bg: "#dbeafe", top: "22%",  left: "88%",  size: 20, delay: 0.4 },
  { Icon: Palette,   color: "#0f766e", bg: "#d1fae5", top: "55%",  left: "4%",   size: 18, delay: 0.7 },
  { Icon: BarChart3, color: "#7c3aed", bg: "#ede9fe", top: "70%",  left: "91%",  size: 20, delay: 0.35 },
  { Icon: Globe,     color: "#0e7490", bg: "#e0f7fa", top: "80%",  left: "10%",  size: 18, delay: 1.0 },
  { Icon: Layers,    color: "#0369a1", bg: "#dbeafe", top: "8%",   left: "78%",  size: 16, delay: 0.6 },
  { Icon: Cpu,       color: "#0f766e", bg: "#d1fae5", top: "42%",  left: "94%",  size: 16, delay: 0.9 },
  { Icon: PenTool,   color: "#7c3aed", bg: "#ede9fe", top: "88%",  left: "75%",  size: 18, delay: 0.2 },
  { Icon: TrendingUp,color: "#0e7490", bg: "#e0f7fa", top: "35%",  left: "2%",   size: 16, delay: 1.2 },
];

// ─── STATS ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "12K+",  label: "Students" },
  { value: "240+",  label: "Courses" },
  { value: "94%",   label: "Success Rate" },
  { value: "58",    label: "Countries" },
];

// ─── TRUSTED LOGOS (initials as pill badges — no broken imgs) ─────────────────
const trustedBy = ["Google", "Microsoft", "Stripe", "Figma", "Notion"];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Banner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Tiny delay so CSS animations fire after paint
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-dark:   #0a5c73;
          --cyan-mid:    #0891b2;
          --blue:        #0369a1;
          --teal:        #0f766e;
          --slate:       #475569;
          --slate-light: #94a3b8;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
        }

        /* ── PAGE WRAPPER ──────────────────────────────── */
        .bn-root {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #f0f9ff;
          font-family: var(--ff-body);
          padding: 100px 24px 72px;
        }

        /* ── BACKGROUND MESH ───────────────────────────── */
        .bn-mesh {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .bn-mesh-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
        }

        .bn-mesh-blob-1 {
          width: 520px; height: 520px;
          background: radial-gradient(circle, #a5f3fc, #67e8f9);
          top: -140px; left: -100px;
        }

        .bn-mesh-blob-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #bae6fd, #7dd3fc);
          bottom: -80px; right: -80px;
        }

        .bn-mesh-blob-3 {
          width: 280px; height: 280px;
          background: radial-gradient(circle, #99f6e4, #5eead4);
          top: 40%; left: 55%;
          opacity: 0.2;
        }

        /* Subtle grid texture */
        .bn-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(14,116,144,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* ── FLOATING ICONS ────────────────────────────── */
        .bn-float-wrap {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .bn-float-icon {
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 4px 16px rgba(14,116,144,0.12);
          opacity: 0;
          animation: floatAppear 0.6s ease forwards, floatBob 4s ease-in-out infinite;
        }

        @keyframes floatAppear {
          from { opacity: 0; transform: scale(0.7) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes floatBob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-8px) rotate(1deg); }
          66%       { transform: translateY(4px) rotate(-1deg); }
        }

        /* ── CONTENT ───────────────────────────────────── */
        .bn-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
        }

        /* Announce badge */
        .bn-announce {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px 7px 10px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(14,116,144,0.2);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.02em;
          margin-bottom: 28px;
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 12px rgba(14,116,144,0.08);
          opacity: 0;
          animation: slideDown 0.55s 0.1s ease forwards;
        }

        .bn-announce-dot {
          width: 22px; height: 22px;
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* Headline */
        .bn-headline {
          font-family: var(--ff-display);
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 700;
          color: #0c1a2e;
          line-height: 1.04;
          letter-spacing: -0.025em;
          margin-bottom: 20px;
          opacity: 0;
          animation: slideDown 0.6s 0.2s ease forwards;
        }

        .bn-headline-accent {
          display: block;
          background: linear-gradient(135deg, #0e7490 0%, #0891b2 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        /* Subtext */
        .bn-sub {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          color: var(--slate);
          font-weight: 300;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto 36px;
          opacity: 0;
          animation: slideDown 0.6s 0.32s ease forwards;
        }

        /* CTA row */
        .bn-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 56px;
          opacity: 0;
          animation: slideDown 0.6s 0.44s ease forwards;
        }

        .bn-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 100px;
          font-family: var(--ff-body);
          font-size: 0.9rem;
          font-weight: 500;
          color: #fff;
          background: linear-gradient(135deg, #0a5c73, #0e7490 50%, #0891b2);
          border: none;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(14,116,144,0.35);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          letter-spacing: 0.01em;
        }

        .bn-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(14,116,144,0.45);
        }

        .bn-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 100px;
          font-family: var(--ff-body);
          font-size: 0.9rem;
          font-weight: 400;
          color: var(--cyan);
          background: rgba(255,255,255,0.85);
          border: 1.5px solid rgba(14,116,144,0.25);
          cursor: pointer;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: all 0.22s ease;
        }

        .bn-btn-secondary:hover {
          background: #fff;
          border-color: var(--cyan);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(14,116,144,0.12);
        }

        .bn-play-dot {
          width: 28px; height: 28px;
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* ── STATS ROW ─────────────────────────────────── */
        .bn-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(14,116,144,0.12);
          border-radius: 16px;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 24px rgba(14,116,144,0.08);
          overflow: hidden;
          margin-bottom: 48px;
          opacity: 0;
          animation: slideUp 0.6s 0.55s ease forwards;
        }

        .bn-stat {
          flex: 1;
          padding: 20px 16px;
          text-align: center;
          border-right: 1px solid rgba(14,116,144,0.1);
          transition: background 0.2s ease;
        }

        .bn-stat:last-child { border-right: none; }
        .bn-stat:hover { background: rgba(14,116,144,0.04); }

        .bn-stat-val {
          font-family: var(--ff-display);
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--cyan-dark);
          line-height: 1;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }

        .bn-stat-label {
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--slate-light);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ── TRUSTED BY ────────────────────────────────── */
        .bn-trusted {
          opacity: 0;
          animation: slideUp 0.6s 0.7s ease forwards;
        }

        .bn-trusted-label {
          font-size: 0.72rem;
          font-weight: 400;
          color: var(--slate-light);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .bn-trusted-logos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .bn-trusted-pill {
          padding: 6px 16px;
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(14,116,144,0.12);
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 500;
          color: #475569;
          backdrop-filter: blur(6px);
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        .bn-trusted-pill:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          transform: translateY(-1px);
        }

        /* ── REVIEW STRIP ──────────────────────────────── */
        .bn-reviews {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
          opacity: 0;
          animation: slideUp 0.6s 0.8s ease forwards;
        }

        .bn-avatars {
          display: flex;
        }

        .bn-avatar {
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 2px solid #fff;
          margin-left: -8px;
          background: linear-gradient(135deg, #a5f3fc, #0e7490);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.65rem;
          font-weight: 600;
          color: #fff;
          overflow: hidden;
        }

        .bn-avatar:first-child { margin-left: 0; }

        .bn-avatar img {
          width: 100%; height: 100%;
          object-fit: cover;
        }

        .bn-stars {
          display: flex; gap: 2px;
        }

        .bn-review-text {
          font-size: 0.78rem;
          color: var(--slate);
          font-weight: 300;
        }

        .bn-review-text strong {
          color: #0f172a;
          font-weight: 500;
        }

        /* ── SCROLL HINT ───────────────────────────────── */
        .bn-scroll-hint {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0;
          animation: slideUp 0.6s 1.1s ease forwards;
          z-index: 2;
        }

        .bn-scroll-label {
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--slate-light);
        }

        .bn-scroll-line {
          width: 1px;
          height: 36px;
          background: linear-gradient(to bottom, rgba(14,116,144,0.4), transparent);
          animation: scrollPulse 1.8s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.1); }
        }

        /* ── KEYFRAMES ─────────────────────────────────── */
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 600px) {
          .bn-stats { border-radius: 12px; }
          .bn-stat-val { font-size: 1.3rem; }
          .bn-float-icon { display: none; }
          .bn-cta-row { flex-direction: column; align-items: stretch; }
          .bn-btn-primary, .bn-btn-secondary { justify-content: center; }
        }
      `}</style>

      <div className="bn-root">

        {/* ── BACKGROUND ──────────────────────────────────────────── */}
        <div className="bn-mesh" aria-hidden="true">
          <div className="bn-grid" />
          <div className="bn-mesh-blob bn-mesh-blob-1" />
          <div className="bn-mesh-blob bn-mesh-blob-2" />
          <div className="bn-mesh-blob bn-mesh-blob-3" />
        </div>

        {/* ── FLOATING ICONS ──────────────────────────────────────── */}
        {/* FIX: Using lucide Icon components instead of <img src={icon.src}>
             so there are no broken image paths. animationDelay drives
             both floatAppear AND floatBob via CSS animation stacking. */}
        <div className="bn-float-wrap" aria-hidden="true">
          {floatingIcons.map(({ Icon, color, bg, top, left, size, delay }, i) => (
            <div
              key={i}
              className="bn-float-icon"
              style={{
                top,
                left,
                background: bg,
                animationDelay: `${delay}s, ${delay + 0.6}s`,
                willChange: "transform, opacity",
              }}
            >
              <Icon size={size} color={color} strokeWidth={1.8} />
            </div>
          ))}
        </div>

        {/* ── MAIN CONTENT ────────────────────────────────────────── */}
        <div className="bn-content">

          {/* Announce badge */}
          <div className="bn-announce">
            <div className="bn-announce-dot">
              <Sparkles size={11} color="#fff" />
            </div>
            <span>New cohort starting April 2026 — Limited seats</span>
            <ChevronRight size={13} />
          </div>

          {/* Headline */}
          <h1 className="bn-headline">
            Learn Skills That
            <span className="bn-headline-accent">Actually Matter</span>
          </h1>

          {/* Sub */}
          <p className="bn-sub">
            Join 12,000+ learners building real careers through project-based
            courses taught by industry experts. From code to design — we've got
            every path covered.
          </p>

          {/* CTAs */}
          <div className="bn-cta-row">
            <NavLink to="/courses" className="bn-btn-primary">
              <BookOpen size={16} />
              Explore Courses
              <ArrowRight size={15} />
            </NavLink>
            <NavLink to="/about" className="bn-btn-secondary">
              <div className="bn-play-dot">
                <Play size={11} color="#fff" fill="#fff" />
              </div>
              Watch How It Works
            </NavLink>
          </div>

          {/* Stats strip */}
          <div className="bn-stats">
            {stats.map(({ value, label }) => (
              <div key={label} className="bn-stat">
                <div className="bn-stat-val">{value}</div>
                <div className="bn-stat-label">{label}</div>
              </div>
            ))}
          </div>

          {/* Trusted by */}
          <div className="bn-trusted">
            <div className="bn-trusted-label">Trusted by alumni at</div>
            <div className="bn-trusted-logos">
              {trustedBy.map((name) => (
                <div key={name} className="bn-trusted-pill">{name}</div>
              ))}
            </div>
          </div>

          {/* Review strip */}
          <div className="bn-reviews">
            <div className="bn-avatars">
              {["AK", "SR", "MP", "JL"].map((init, i) => (
                <div
                  key={i}
                  className="bn-avatar"
                  style={{
                    background: `hsl(${190 + i * 18}, 70%, ${40 + i * 5}%)`,
                  }}
                >
                  {init}
                </div>
              ))}
            </div>
            <div className="bn-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} color="#f59e0b" fill="#f59e0b" />
              ))}
            </div>
            <span className="bn-review-text">
              <strong>4.9/5</strong> from 2,400+ reviews
            </span>
          </div>

        </div>

        {/* ── SCROLL HINT ─────────────────────────────────────────── */}
        <div className="bn-scroll-hint" aria-hidden="true">
          <span className="bn-scroll-label">Scroll</span>
          <div className="bn-scroll-line" />
        </div>

      </div>
    </>
  );
}