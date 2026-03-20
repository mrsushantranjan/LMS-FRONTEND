import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  BookOpen,
  Users,
  FileText,
  HelpCircle,
  Shield,
  HeartHandshake,  // FIX: HandHelping doesn't exist → HeartHandshake is correct
  GraduationCap,
  ChevronRight,
  Heart,
  Send,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

// FIX: socialIcons defined here as data — not imported from a styles file
// FIX: icon stored as component reference, not string key — no iconMap needed,
//      no silent fallback to wrong icon
const socialLinks = [
  { name: "Twitter",   Icon: Twitter,   href: "#", color: "#1da1f2", bg: "rgba(29,161,242,0.12)"  },
  { name: "Instagram", Icon: Instagram, href: "#", color: "#e1306c", bg: "rgba(225,48,108,0.12)"  },
  { name: "LinkedIn",  Icon: Linkedin,  href: "#", color: "#0a66c2", bg: "rgba(10,102,194,0.12)"  },
  { name: "YouTube",   Icon: Youtube,   href: "#", color: "#ff0000", bg: "rgba(255,0,0,0.10)"     },
];

const footerLinks = [
  {
    heading: "Platform",
    icon: BookOpen,
    links: [
      { label: "Browse Courses",  to: "/courses"  },
      { label: "Meet Faculty",    to: "/faculty"  },
      { label: "About Us",        to: "/about"    },
      { label: "Contact",         to: "/contact"  },
      { label: "Become Instructor", to: "/faculty" },
    ],
  },
  {
    heading: "Community",
    icon: Users,
    links: [
      { label: "Student Stories",  to: "/about"   },
      { label: "Events & Webinars",to: "/contact" },
      { label: "Blog & Articles",  to: "/"        },
      { label: "Career Resources", to: "/"        },
      { label: "Referral Program", to: "/"        },
    ],
  },
  {
    heading: "Support",
    icon: HeartHandshake,   // FIX: valid lucide icon
    links: [
      { label: "Help Center",      to: "/" },
      { label: "FAQs",             to: "/" },
      { label: "Privacy Policy",   to: "/" },
      { label: "Terms of Service", to: "/" },
      { label: "Cookie Settings",  to: "/" },
    ],
  },
];

const contactItems = [
  { Icon: Mail,   value: "hello@learnhub.in",   href: "mailto:hello@learnhub.in"  },
  { Icon: Phone,  value: "+91 82994 31275",      href: "tel:+918299431275"         },
  { Icon: MapPin, value: "Rajkot, Gujarat, India", href: null                      },
];

const stats = [
  { value: "12K+",  label: "Students"     },
  { value: "240+",  label: "Courses"      },
  { value: "94%",   label: "Success Rate" },
  { value: "58",    label: "Countries"    },
];

// ─── NEWSLETTER FORM ──────────────────────────────────────────────────────────
const NewsletterForm = () => {
  const [email,     setEmail]     = useState("");
  const [status,    setStatus]    = useState("idle"); // idle | loading | success | error
  const [errorMsg,  setErrorMsg]  = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) { setErrorMsg("Please enter your email."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErrorMsg("Please enter a valid email."); return; }

    setErrorMsg("");
    setStatus("loading");
    // Simulate API call — replace with your real subscribe endpoint
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="ft-newsletter">
      <p className="ft-newsletter-label">
        <Send size={12} /> Stay in the loop
      </p>
      <p className="ft-newsletter-sub">
        Get new course announcements, tips and career insights — no spam, ever.
      </p>

      {status === "success" ? (
        <div className="ft-newsletter-success">
          <Heart size={14} fill="#0e7490" color="#0e7490" />
          You're subscribed! Thanks for joining.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="ft-newsletter-form">
          <div className="ft-newsletter-input-wrap">
            <Mail size={13} className="ft-newsletter-icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrorMsg(""); }}
              placeholder="your@email.com"
              className="ft-newsletter-input"
              aria-label="Email address"
              disabled={status === "loading"}
            />
          </div>
          {errorMsg && <p className="ft-newsletter-error">{errorMsg}</p>}
          <button
            type="submit"
            className="ft-newsletter-btn"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className="ft-spinner" />
            ) : (
              <><ArrowRight size={14} /> Subscribe</>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

// ─── MAIN FOOTER ──────────────────────────────────────────────────────────────
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-mid:    #0891b2;
          --cyan-light:  #67e8f9;
          --cyan-dark:   #0a5c73;
          --slate:       #94a3b8;
          --slate-dim:   #64748b;
          --border:      rgba(255,255,255,0.07);
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
        }

        /* ── ROOT ──────────────────────────────────────── */
        .ft-root {
          background: #050f1a;
          font-family: var(--ff-body);
          position: relative;
          overflow: hidden;
        }

        /* ── BACKGROUND ────────────────────────────────── */
        .ft-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* FIX: Grid uses cyan palette — not purple/indigo */
        .ft-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(14,116,144,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,0.06) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .ft-bg-glow-1 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(14,116,144,0.12) 0%, transparent 70%);
          top: -180px; left: -100px;
        }

        .ft-bg-glow-2 {
          position: absolute;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%);
          bottom: 0; right: 0;
        }

        /* ── STATS BAND ────────────────────────────────── */
        .ft-stats-band {
          position: relative;
          z-index: 1;
          border-bottom: 1px solid var(--border);
        }

        .ft-stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 28px 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .ft-stat-item {
          text-align: center;
          padding: 8px 0;
          border-right: 1px solid var(--border);
          transition: background 0.2s;
        }
        .ft-stat-item:last-child { border-right: none; }
        .ft-stat-item:hover { background: rgba(14,116,144,0.05); }

        .ft-stat-val {
          font-family: var(--ff-display);
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--cyan-light);
          line-height: 1;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }

        .ft-stat-lbl {
          font-size: 0.68rem;
          color: var(--slate);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 400;
        }

        /* ── MAIN BODY ─────────────────────────────────── */
        .ft-body {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px 40px;
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 64px;
        }

        /* ── LEFT COLUMN ───────────────────────────────── */
        .ft-left {}

        .ft-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          text-decoration: none;
        }

        .ft-brand-icon {
          width: 38px; height: 38px;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 14px rgba(14,116,144,0.35);
        }

        .ft-brand-name {
          font-family: var(--ff-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .ft-brand-tagline {
          font-size: 0.6rem;
          font-weight: 300;
          color: var(--slate);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 1px;
        }

        .ft-desc {
          font-size: 0.84rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 24px;
          max-width: 280px;
        }

        /* Contact items */
        .ft-contact-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .ft-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--slate);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.18s;
        }
        .ft-contact-item:hover { color: var(--cyan-light); }

        .ft-contact-icon {
          width: 28px; height: 28px;
          border-radius: 7px;
          background: rgba(14,116,144,0.12);
          border: 1px solid rgba(14,116,144,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: var(--cyan-mid);
        }

        /* Social icons */
        /* FIX: bg color set via inline style from data — not raw Tailwind className */
        .ft-socials {
          display: flex;
          gap: 9px;
          margin-bottom: 32px;
        }

        .ft-social-btn {
          width: 36px; height: 36px;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
        }

        .ft-social-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.18);
        }

        /* Tooltip */
        .ft-social-tooltip {
          position: absolute;
          bottom: calc(100% + 7px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255,255,255,0.9);
          color: #0c1a2e;
          font-size: 0.65rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 5px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s ease;
          font-family: var(--ff-body);
        }

        .ft-social-tooltip::after {
          content: '';
          position: absolute;
          top: 100%; left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-top-color: rgba(255,255,255,0.9);
        }

        .ft-social-btn:hover .ft-social-tooltip { opacity: 1; }

        /* Newsletter */
        .ft-newsletter {
          background: rgba(14,116,144,0.07);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 12px;
          padding: 18px 16px;
        }

        .ft-newsletter-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--cyan-mid);
          text-transform: uppercase;
          letter-spacing: 0.09em;
          margin-bottom: 5px;
        }

        .ft-newsletter-sub {
          font-size: 0.76rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.55;
          margin-bottom: 12px;
        }

        .ft-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ft-newsletter-input-wrap {
          position: relative;
        }

        .ft-newsletter-icon {
          position: absolute;
          left: 11px; top: 50%;
          transform: translateY(-50%);
          color: var(--slate-dim);
          pointer-events: none;
        }

        .ft-newsletter-input {
          width: 100%;
          padding: 9px 12px 9px 32px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          font-weight: 300;
          color: var(--white);
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .ft-newsletter-input::placeholder { color: var(--slate-dim); }
        .ft-newsletter-input:focus {
          border-color: rgba(14,116,144,0.5);
          background: rgba(255,255,255,0.08);
        }
        .ft-newsletter-input:disabled { opacity: 0.6; cursor: not-allowed; }

        .ft-newsletter-error {
          font-size: 0.71rem;
          color: #f87171;
          font-weight: 300;
        }

        .ft-newsletter-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 16px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          color: var(--white);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 3px 12px rgba(14,116,144,0.3);
        }
        .ft-newsletter-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(14,116,144,0.4);
        }
        .ft-newsletter-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .ft-newsletter-success {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.8rem;
          color: var(--cyan-light);
          font-weight: 400;
          padding: 8px 0;
        }

        .ft-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.25);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── RIGHT COLUMN — LINK GRID ──────────────────── */
        .ft-right {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .ft-link-group {}

        .ft-link-heading {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }

        .ft-link-heading-icon {
          width: 22px; height: 22px;
          background: rgba(14,116,144,0.15);
          border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          color: var(--cyan-mid);
          flex-shrink: 0;
        }

        .ft-link-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
          list-style: none;
        }

        .ft-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--slate);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.18s ease, gap 0.18s ease;
          line-height: 1;
        }

        .ft-link:hover {
          color: var(--cyan-light);
          gap: 10px;
        }

        .ft-link-arrow {
          opacity: 0;
          transition: opacity 0.18s ease;
          flex-shrink: 0;
          color: var(--cyan-mid);
        }

        .ft-link:hover .ft-link-arrow { opacity: 1; }

        /* ── DIVIDER ───────────────────────────────────── */
        .ft-divider {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          height: 1px;
          background: var(--border);
        }

        /* ── BOTTOM BAR ────────────────────────────────── */
        .ft-bottom {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .ft-copyright {
          font-size: 0.76rem;
          color: var(--slate-dim);
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .ft-copyright span {
          color: var(--cyan-mid);
          font-weight: 500;
        }

        .ft-bottom-links {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ft-bottom-link {
          font-size: 0.74rem;
          color: var(--slate-dim);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.18s;
        }
        .ft-bottom-link:hover { color: var(--cyan-light); }

        .ft-made-with {
          font-size: 0.72rem;
          color: var(--slate-dim);
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 1024px) {
          .ft-body {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ft-desc { max-width: 100%; }
          .ft-newsletter { max-width: 420px; }
        }

        @media (max-width: 640px) {
          .ft-right { grid-template-columns: 1fr 1fr; }
          .ft-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .ft-stat-item:nth-child(2) { border-right: none; }
          .ft-bottom { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 400px) {
          .ft-right { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="ft-root" role="contentinfo">

        {/* ── BACKGROUND ──────────────────────────────────────────── */}
        <div className="ft-bg" aria-hidden="true">
          <div className="ft-bg-grid" />
          <div className="ft-bg-glow-1" />
          <div className="ft-bg-glow-2" />
        </div>

        {/* ── STATS BAND ──────────────────────────────────────────── */}
        <div className="ft-stats-band">
          <div className="ft-stats-inner">
            {stats.map(({ value, label }) => (
              <div key={label} className="ft-stat-item">
                <div className="ft-stat-val">{value}</div>
                <div className="ft-stat-lbl">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MAIN BODY ───────────────────────────────────────────── */}
        <div className="ft-body">

          {/* LEFT — brand + contact + social + newsletter */}
          <div className="ft-left">

            {/* Brand */}
            <NavLink to="/" className="ft-brand">
              <div className="ft-brand-icon">
                <GraduationCap size={18} color="#fff" />
              </div>
              <div>
                <div className="ft-brand-name">LearnHub</div>
                <div className="ft-brand-tagline">Learning Platform</div>
              </div>
            </NavLink>

            <p className="ft-desc">
              Empowering 12,000+ learners across 58 countries with expert-led
              courses in development, design, data &amp; marketing.
            </p>

            {/* Contact */}
            <div className="ft-contact-list">
              {contactItems.map(({ Icon, value, href }) =>
                href ? (
                  <a key={value} href={href} className="ft-contact-item">
                    <div className="ft-contact-icon"><Icon size={13} /></div>
                    {value}
                  </a>
                ) : (
                  <div key={value} className="ft-contact-item">
                    <div className="ft-contact-icon"><Icon size={13} /></div>
                    {value}
                  </div>
                )
              )}
            </div>

            {/* Social icons */}
            {/* FIX: bg set via inline style from data object — no Tailwind className needed */}
            <div className="ft-socials">
              {socialLinks.map(({ name, Icon, href, color, bg }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="ft-social-btn"
                  style={{ background: bg }}
                >
                  <Icon size={15} color={color} />
                  <span className="ft-social-tooltip">{name}</span>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <NewsletterForm />

          </div>

          {/* RIGHT — link columns */}
          <div className="ft-right">
            {footerLinks.map(({ heading, icon: HeadingIcon, links }) => (
              <div key={heading} className="ft-link-group">
                <div className="ft-link-heading">
                  <div className="ft-link-heading-icon">
                    <HeadingIcon size={12} />
                  </div>
                  {heading}
                </div>
                <ul className="ft-link-list">
                  {links.map(({ label, to }) => (
                    <li key={label}>
                      <NavLink to={to} className="ft-link">
                        <ChevronRight size={11} className="ft-link-arrow" />
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* ── DIVIDER ─────────────────────────────────────────────── */}
        <div className="ft-divider" />

        {/* ── BOTTOM BAR ──────────────────────────────────────────── */}
        <div className="ft-bottom">
          <p className="ft-copyright">
            © {year} <span>LearnHub</span>. All rights reserved.
          </p>

          <nav className="ft-bottom-links" aria-label="Legal links">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((label) => (
              <NavLink key={label} to="/" className="ft-bottom-link">
                {label}
              </NavLink>
            ))}
          </nav>

          <p className="ft-made-with">
            Made with <Heart size={11} fill="#0e7490" color="#0e7490" /> in India
          </p>
        </div>

      </footer>
    </>
  );
};

export default Footer;