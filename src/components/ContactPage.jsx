import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  User,
  Send,
  CheckCircle2,
  Clock,
  MessageCircle,
} from "lucide-react";

// ─── CONTACT INFO CARDS ───────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 82994 31275",
    sub: "Mon–Sat, 9am–6pm IST",
    accent: "#0e7490",
    light: "#e0f7fa",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@learnhub.in",
    sub: "We reply within 24 hours",
    accent: "#0369a1",
    light: "#dbeafe",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Rajkot, Gujarat",
    sub: "India — 360001",
    accent: "#0f766e",
    light: "#d1fae5",
  },
];

const subjectOptions = [
  "General Inquiry",
  "Project Collaboration",
  "Support",
  "Feedback",
  "Other",
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ── Validation ──────────────────────────────────────────────────────────────
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    validatePhone(formData.phone) &&
    formData.subject &&
    formData.message.trim();

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live phone validation
    if (name === "phone") {
      if (value && !validatePhone(value)) {
        setPhoneError("Phone number must be exactly 10 digits.");
      } else {
        setPhoneError("");
      }
    }
  };

  // FIX 1: Missing e.preventDefault() — form was submitting & reloading page
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    setIsSubmitting(true);

    const whatsappMessage =
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Subject: ${formData.subject}%0A` +
      `Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/918299431275?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    // FIX 2: isSubmitting was never reset — button stayed stuck in loading state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 800);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-dark:   #0a5c73;
          --cyan-light:  #e0f7fa;
          --blue:        #0369a1;
          --slate:       #475569;
          --slate-light: #94a3b8;
          --border:      rgba(14,116,144,0.15);
          --bg:          #f0f9ff;
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
          --radius:      14px;
          --shadow:      0 4px 24px rgba(14,116,144,0.08);
          --shadow-hover:0 12px 40px rgba(14,116,144,0.14);
        }

        .cp-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          padding: 80px 24px 64px;
        }

        /* ── HERO HEADER ──────────────────────── */
        .cp-header {
          text-align: center;
          max-width: 580px;
          margin: 0 auto 64px;
        }

        .cp-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 16px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.2);
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .cp-title {
          font-family: var(--ff-display);
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 600;
          color: #0f172a;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
        }

        .cp-title span {
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cp-subtitle {
          font-size: 0.95rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
        }

        /* ── INFO CARDS ───────────────────────── */
        .cp-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          max-width: 860px;
          margin: 0 auto 56px;
        }

        .cp-info-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          box-shadow: var(--shadow);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cp-info-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }

        .cp-info-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cp-info-label {
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--slate-light);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .cp-info-value {
          font-size: 0.9rem;
          font-weight: 500;
          color: #0f172a;
          margin-bottom: 3px;
        }

        .cp-info-sub {
          font-size: 0.75rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── MAIN GRID ────────────────────────── */
        .cp-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }

        @media (max-width: 860px) {
          .cp-main { grid-template-columns: 1fr; }
          .cp-lottie { order: -1; }
        }

        /* ── FORM CARD ────────────────────────── */
        .cp-form-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: var(--shadow);
        }

        .cp-form-title {
          font-family: var(--ff-display);
          font-size: 1.6rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .cp-form-sub {
          font-size: 0.83rem;
          color: var(--slate-light);
          font-weight: 300;
          margin-bottom: 32px;
        }

        /* ── FORM ELEMENTS ────────────────────── */
        .cp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 560px) {
          .cp-row { grid-template-columns: 1fr; }
          .cp-form-card { padding: 28px 20px; }
        }

        .cp-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 18px;
        }

        .cp-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 500;
          color: #334155;
          letter-spacing: 0.01em;
        }

        .cp-input, .cp-select, .cp-textarea {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid rgba(14,116,144,0.18);
          border-radius: 10px;
          font-family: var(--ff-body);
          font-size: 0.875rem;
          font-weight: 300;
          color: #0f172a;
          background: #f8fafc;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          appearance: none;
        }

        .cp-input::placeholder, .cp-textarea::placeholder {
          color: #cbd5e1;
        }

        .cp-input:focus, .cp-select:focus, .cp-textarea:focus {
          border-color: var(--cyan);
          background: var(--white);
          box-shadow: 0 0 0 3px rgba(14,116,144,0.1);
        }

        .cp-input.error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.08);
        }

        .cp-error {
          font-size: 0.73rem;
          color: #ef4444;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .cp-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }

        .cp-textarea {
          resize: vertical;
          min-height: 110px;
          line-height: 1.6;
        }

        /* ── SUBMIT BUTTON ────────────────────── */
        .cp-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 100px;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #0e7490, #0369a1);
          color: #fff;
          box-shadow: 0 4px 18px rgba(14,116,144,0.3);
          transition: all 0.25s ease;
          margin-top: 4px;
        }

        .cp-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(14,116,144,0.4);
        }

        .cp-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .cp-submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .cp-submit.success {
          background: linear-gradient(135deg, #0f766e, #059669);
          box-shadow: 0 4px 18px rgba(5,150,105,0.3);
        }

        /* ── WA NOTE ──────────────────────────── */
        .cp-wa-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 14px;
          font-size: 0.74rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        .cp-wa-note svg {
          color: #25d366;
        }

        /* ── LOTTIE SIDE ──────────────────────── */
        .cp-lottie {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .cp-lottie-wrap {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* ── HOURS CARD ───────────────────────── */
        .cp-hours {
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 16px;
          padding: 28px 24px;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .cp-hours::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='20' cy='20' r='10'/%3E%3C/g%3E%3C/svg%3E");
        }

        .cp-hours-title {
          font-family: var(--ff-display);
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 16px;
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cp-hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          font-size: 0.82rem;
          position: relative;
        }

        .cp-hours-row:last-child {
          border-bottom: none;
        }

        .cp-hours-day {
          color: rgba(255,255,255,0.7);
          font-weight: 300;
        }

        .cp-hours-time {
          color: #fff;
          font-weight: 500;
        }

        /* ── SPINNER ──────────────────────────── */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .cp-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* ── FADE UP ──────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cp-page > * { animation: fadeUp 0.5s ease both; }
        .cp-header   { animation-delay: 0.05s; }
        .cp-info-grid{ animation-delay: 0.1s; }
        .cp-main     { animation-delay: 0.18s; }
      `}</style>

      <div className="cp-page">

        {/* ── HEADER ──────────────────────────────────────────────────────── */}
        <div className="cp-header">
          <div className="cp-badge">
            <MessageCircle size={12} />
            Get In Touch
          </div>
          <h1 className="cp-title">
            Let's Start a <span>Conversation</span>
          </h1>
          <p className="cp-subtitle">
            Have a question, idea, or just want to say hello? We'd love to hear from you.
            Fill out the form and we'll get back to you via WhatsApp.
          </p>
        </div>

        {/* ── INFO CARDS ──────────────────────────────────────────────────── */}
        <div className="cp-info-grid">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div className="cp-info-card" key={info.label}>
                <div
                  className="cp-info-icon"
                  style={{ background: info.light }}
                >
                  <Icon size={18} style={{ color: info.accent }} />
                </div>
                <div>
                  <div className="cp-info-label">{info.label}</div>
                  <div className="cp-info-value">{info.value}</div>
                  <div className="cp-info-sub">{info.sub}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── MAIN GRID ───────────────────────────────────────────────────── */}
        <div className="cp-main">

          {/* FORM CARD */}
          <div className="cp-form-card">
            <h2 className="cp-form-title">Send Us a Message</h2>
            <p className="cp-form-sub">All fields marked * are required</p>

            {/* FIX 1: e.preventDefault() added inside handleSubmit */}
            <form onSubmit={handleSubmit} noValidate>

              {/* Name + Email row */}
              <div className="cp-row">
                <div className="cp-field">
                  <label className="cp-label">
                    <User size={13} color="#0e7490" />
                    Full Name *
                  </label>
                  <input
                    className="cp-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="cp-field">
                  <label className="cp-label">
                    <Mail size={13} color="#0369a1" />
                    Email Address *
                  </label>
                  <input
                    className="cp-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              {/* FIX 2: </form> was closed BEFORE Subject & Message fields
                   causing them to render outside the form and never submit */}
              <div className="cp-field">
                <label className="cp-label">
                  <Phone size={13} color="#0f766e" />
                  Phone Number *
                </label>
                <input
                  className={`cp-input ${phoneError ? "error" : ""}`}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  inputMode="numeric"
                  maxLength={10}
                  required
                />
                {phoneError && (
                  <span className="cp-error">⚠ {phoneError}</span>
                )}
              </div>

              {/* Subject — FIX 3: was outside </form> in original code */}
              <div className="cp-field">
                <label className="cp-label">
                  <MessageSquare size={13} color="#7c3aed" />
                  Subject *
                </label>
                <select
                  className="cp-select"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message — FIX 3: was also outside </form> in original code */}
              <div className="cp-field">
                <label className="cp-label">
                  <MessageCircle size={13} color="#0e7490" />
                  Message *
                </label>
                <textarea
                  className="cp-textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`cp-submit ${submitted ? "success" : ""}`}
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? (
                  <><div className="cp-spinner" /> Opening WhatsApp…</>
                ) : submitted ? (
                  <><CheckCircle2 size={16} /> Message Sent!</>
                ) : (
                  <><Send size={15} /> Send via WhatsApp</>
                )}
              </button>

              <div className="cp-wa-note">
                <MessageCircle size={13} />
                This form opens WhatsApp with your message pre-filled
              </div>

            </form>
          </div>

          {/* ILLUSTRATION + HOURS */}
          <div className="cp-lottie">

            <div className="cp-lottie-wrap">
              {/* Pure CSS animated illustration — zero dependencies */}
              <div style={{
                width: "100%", height: "340px",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
              }}>
                <style>{`
                  @keyframes cpFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
                  @keyframes cpPulse  { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
                  @keyframes cpSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                  @keyframes cpBounce { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
                  @keyframes cpDash   { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
                  @keyframes cpFadeIn { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
                `}</style>

                {/* Background circle */}
                <div style={{
                  position:"absolute", width:260, height:260, borderRadius:"50%",
                  background:"linear-gradient(135deg,rgba(14,116,144,.07),rgba(8,145,178,.05))",
                  border:"1.5px solid rgba(14,116,144,.12)",
                  animation:"cpPulse 3s ease-in-out infinite",
                }}/>

                {/* Outer ring */}
                <div style={{
                  position:"absolute", width:300, height:300, borderRadius:"50%",
                  border:"1px dashed rgba(14,116,144,.15)",
                  animation:"cpSpin 20s linear infinite",
                }}/>

                {/* Main envelope icon group — floats */}
                <div style={{ animation:"cpFloat 3.5s ease-in-out infinite", zIndex:2, textAlign:"center" }}>

                  {/* Envelope SVG */}
                  <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="15" width="90" height="60" rx="8" fill="white" stroke="#0e7490" strokeWidth="2"/>
                    <path d="M5 23 L50 48 L95 23" stroke="#0e7490" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M5 75 L35 48" stroke="#0e7490" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
                    <path d="M95 75 L65 48" stroke="#0e7490" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
                    {/* Animated check on envelope */}
                    <circle cx="75" cy="22" r="12" fill="#0e7490"/>
                    <path d="M69 22 L73 26 L81 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      strokeDasharray="18" strokeDashoffset="18"
                      style={{ animation:"cpDash 1s .5s ease forwards", strokeDashoffset:18 }}
                    />
                  </svg>

                  <div style={{
                    marginTop:12, fontFamily:"Cormorant Garamond, Georgia, serif",
                    fontSize:"1.1rem", fontWeight:600, color:"#0e7490",
                  }}>
                    We'd love to hear from you
                  </div>
                  <div style={{
                    marginTop:4, fontFamily:"DM Sans, sans-serif",
                    fontSize:".78rem", fontWeight:300, color:"#94a3b8",
                  }}>
                    Fill the form and we'll reply on WhatsApp
                  </div>
                </div>

                {/* Floating badge — top right */}
                <div style={{
                  position:"absolute", top:32, right:24,
                  background:"#fff", border:"1px solid rgba(14,116,144,.15)",
                  borderRadius:12, padding:"8px 12px",
                  boxShadow:"0 4px 16px rgba(14,116,144,.1)",
                  display:"flex", alignItems:"center", gap:7,
                  animation:"cpBounce 2.8s ease-in-out infinite",
                  animationDelay:".4s",
                }}>
                  <div style={{ width:24, height:24, borderRadius:7, background:"#d1fae5", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <MessageCircle size={13} color="#0f766e"/>
                  </div>
                  <div>
                    <div style={{ fontSize:".72rem", fontWeight:600, color:"#0c1a2e" }}>WhatsApp</div>
                    <div style={{ fontSize:".62rem", color:"#94a3b8", fontWeight:300 }}>Instant reply</div>
                  </div>
                </div>

                {/* Floating badge — bottom left */}
                <div style={{
                  position:"absolute", bottom:36, left:20,
                  background:"#fff", border:"1px solid rgba(14,116,144,.15)",
                  borderRadius:12, padding:"8px 12px",
                  boxShadow:"0 4px 16px rgba(14,116,144,.1)",
                  display:"flex", alignItems:"center", gap:7,
                  animation:"cpBounce 3.2s ease-in-out infinite",
                  animationDelay:".8s",
                }}>
                  <div style={{ width:24, height:24, borderRadius:7, background:"#e0f7fa", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Clock size={13} color="#0e7490"/>
                  </div>
                  <div>
                    <div style={{ fontSize:".72rem", fontWeight:600, color:"#0c1a2e" }}>24h</div>
                    <div style={{ fontSize:".62rem", color:"#94a3b8", fontWeight:300 }}>Response time</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Office Hours */}
            <div className="cp-hours">
              <div className="cp-hours-title">
                <Clock size={16} />
                Office Hours
              </div>
              {[
                { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
                { day: "Saturday",        time: "10:00 AM – 4:00 PM" },
                { day: "Sunday",          time: "Closed" },
              ].map((r) => (
                <div className="cp-hours-row" key={r.day}>
                  <span className="cp-hours-day">{r.day}</span>
                  <span className="cp-hours-time">{r.time}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </>
  );
}