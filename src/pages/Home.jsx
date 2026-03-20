import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/react";
import {
  Home, BookOpen, BookMarked, Users, Contact,
  Star, ArrowRight, CheckCircle, Sparkles, ChevronRight,
  Code2, Palette, BarChart3, Megaphone, TrendingUp,
  GraduationCap, Clock, BadgeCheck, Flame,
  Zap, Shield, Target, Heart, Play,
  Globe, Award, Quote,
} from "lucide-react";

// ─── NAVBAR DATA ──────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { name: "Home",    icon: Home,      href: "/"        },
  { name: "Courses", icon: BookOpen,  href: "/courses" },
  { name: "About",   icon: BookMarked,href: "/about"   },
  { name: "Faculty", icon: Users,     href: "/faculty" },
  { name: "Contact", icon: Contact,   href: "/contact" },
];

// ─── PAGE DATA ────────────────────────────────────────────────────────────────
const STATS = [
  { value: "12K+", label: "Students",    icon: Users    },
  { value: "240+", label: "Courses",     icon: BookOpen },
  { value: "94%",  label: "Success",     icon: Award    },
  { value: "58",   label: "Countries",   icon: Globe    },
];

const FEATURES = [
  { icon: Zap,    title: "Learn at Your Pace",  desc: "Lifetime access. Resume exactly where you left off, on any device, any time." },
  { icon: Shield, title: "Expert Instructors",  desc: "Every teacher is a vetted industry professional with real shipped products." },
  { icon: Target, title: "Career-Ready Skills", desc: "Curriculum built around what employers actually hire for — zero fluff." },
  { icon: Heart,  title: "Community Support",   desc: "Cohort peers, alumni mentors and weekly live Q&A sessions included." },
];

const CATEGORIES = [
  { label: "Development", icon: Code2,     count: 4, color: "#0e7490", bg: "#e0f7fa" },
  { label: "Design",      icon: Palette,   count: 3, color: "#0f766e", bg: "#d1fae5" },
  { label: "Data",        icon: BarChart3, count: 3, color: "#0369a1", bg: "#dbeafe" },
  { label: "Marketing",   icon: Megaphone, count: 2, color: "#7c3aed", bg: "#ede9fe" },
];

const COURSES = [
  { id:"1", name:"Full Stack Web Development", teacher:"Arjun Mehta",  image:"https://picsum.photos/seed/c1/480/270", cat:"Development", level:"Intermediate", rating:4.8, students:4820, isFree:false, price:{original:2999,sale:1499}, hot:true  },
  { id:"2", name:"UI/UX Design Mastery",        teacher:"Priya Sharma", image:"https://picsum.photos/seed/c2/480/270", cat:"Design",       level:"Beginner",     rating:4.9, students:2310, isFree:false, price:{original:1999,sale:null }, hot:true  },
  { id:"3", name:"Data Science with Python",    teacher:"Rohit Verma",  image:"https://picsum.photos/seed/c3/480/270", cat:"Data",         level:"Advanced",     rating:4.7, students:6100, isFree:true,  price:null,                      hot:false },
  { id:"4", name:"React & Next.js Bootcamp",    teacher:"Sneha Patel",  image:"https://picsum.photos/seed/c4/480/270", cat:"Development", level:"Intermediate", rating:4.8, students:3750, isFree:false, price:{original:3499,sale:2199}, hot:true  },
];

const TESTIMONIALS = [
  { name:"Aisha Rahman",  role:"Frontend Engineer @ Google", avatar:"https://i.pravatar.cc/80?img=47", text:"LearnHub changed my career completely. Real-world projects, genuine mentorship — I landed my dream job in 5 months.", rating:5 },
  { name:"Marcus Chen",   role:"Data Scientist @ Stripe",    avatar:"https://i.pravatar.cc/80?img=12", text:"Switched careers at 34 with zero ML background. The pacing was perfect — challenging but never overwhelming.", rating:5 },
  { name:"Sofia Alvarez", role:"UX Designer @ Figma",        avatar:"https://i.pravatar.cc/80?img=29", text:"Most thoughtfully designed course I've ever taken. Real briefs, real feedback, a portfolio I'm proud of.", rating:5 },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const getPrice = (c) => {
  if (c.isFree || !c.price) return { free: true };
  const { original, sale } = c.price;
  if (sale) return { free:false, display:`₹${sale}`, original:`₹${original}`, pct: Math.round(((original-sale)/original)*100) };
  return { free:false, display:`₹${original}`, original:null, pct:null };
};

const fmt = (n) => n >= 1000 ? `${(n/1000).toFixed(1)}k` : String(n);

// ─── SCROLL HOOK ──────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── MINI STARS ───────────────────────────────────────────────────────────────
const Stars = ({ n = 5, size = 12 }) => (
  <div style={{ display:"flex", gap:2 }}>
    {[1,2,3,4,5].map(s => (
      <Star key={s} size={size} fill={s<=n?"#f59e0b":"none"} color={s<=n?"#f59e0b":"#cbd5e1"} />
    ))}
  </div>
);

// ─── HOME PAGE (navbar + all sections, fully self-contained) ──────────────────
export default function LMSHomePage() {
  const navigate  = useNavigate();
  const { openSignUp } = useClerk();
  const { isSignedIn }  = useUser();

  // Navbar scroll state
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Section reveal refs
  const [statsRef,  statsVis]  = useInView(0.3);
  const [featRef,   featVis]   = useInView(0.15);
  const [catRef,    catVis]    = useInView(0.15);
  const [crRef,     crVis]     = useInView(0.1);
  const [tmRef,     tmVis]     = useInView(0.1);
  const [ctaRef,    ctaVis]    = useInView(0.2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin:0; padding:0; }

        :root {
          --cyan:      #0e7490;
          --cyan-dk:   #0a5c73;
          --cyan-md:   #0891b2;
          --teal:      #0f766e;
          --amber:     #f59e0b;
          --slate:     #475569;
          --slate-lt:  #94a3b8;
          --border:    rgba(14,116,144,0.13);
          --bg:        #f0f9ff;
          --white:     #ffffff;
          --dark:      #0c1a2e;
          --ff-d:      'Cormorant Garamond', Georgia, serif;
          --ff-b:      'DM Sans', sans-serif;
          --sh:        0 2px 16px rgba(14,116,144,0.08);
          --sh-md:     0 8px 32px rgba(14,116,144,0.12);
          --sh-lg:     0 16px 48px rgba(14,116,144,0.16);
        }

        /* ══════════════════════════════════════
           NAVBAR
        ══════════════════════════════════════ */
        .h-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 999;
          padding: 10px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--ff-b);
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(18px) saturate(1.8);
          -webkit-backdrop-filter: blur(18px) saturate(1.8);
          border-bottom: 1px solid rgba(14,116,144,0.14);
          box-shadow: 0 2px 20px rgba(14,116,144,0.06);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .h-nav.scrolled {
          background: rgba(255,255,255,0.97);
          box-shadow: 0 2px 24px rgba(14,116,144,0.13);
          border-bottom-color: rgba(14,116,144,0.18);
        }

        /* Brand */
        .h-brand {
          display: flex; align-items: center; gap: 9px;
          text-decoration: none; flex-shrink: 0;
        }

        .h-brand-icon {
          width: 34px; height: 34px;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 3px 10px rgba(14,116,144,0.3);
        }

        .h-brand-name {
          font-family: var(--ff-d);
          font-size: 1.25rem; font-weight: 700;
          background: linear-gradient(135deg, #0c4a6e, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1; letter-spacing: -0.01em;
        }

        .h-brand-sub {
          font-size: 0.58rem; font-weight: 300;
          color: var(--slate-lt); letter-spacing: 0.13em;
          text-transform: uppercase; margin-top: 1px;
        }

        /* Center pill nav */
        .h-pill {
          display: flex; align-items: center; gap: 2px;
          background: rgba(240,249,255,0.85);
          border: 1px solid rgba(14,116,144,0.14);
          border-radius: 100px; padding: 4px;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(14,116,144,0.06);
          position: absolute; left: 50%; transform: translateX(-50%);
        }

        .h-link {
          display: flex; align-items: center; gap: 6px;
          padding: 7px 13px; border-radius: 100px;
          text-decoration: none;
          font-size: 0.79rem; font-weight: 500;
          color: #64748b; white-space: nowrap;
          transition: all 0.2s ease;
        }

        .h-link:hover { color: var(--cyan); background: rgba(14,116,144,0.07); }
        .h-link.active { color: var(--cyan); background: rgba(14,116,144,0.1); }
        .h-link svg { opacity: 0.7; transition: opacity 0.2s; }
        .h-link:hover svg, .h-link.active svg { opacity: 1; }

        /* Auth */
        .h-auth { display: flex; align-items: center; flex-shrink: 0; }

        .h-signup {
          display: flex; align-items: center; gap: 7px;
          padding: 8px 18px; border-radius: 100px;
          font-family: var(--ff-b); font-size: 0.82rem; font-weight: 500;
          color: var(--cyan);
          background: rgba(240,249,255,0.8);
          border: 1.5px solid rgba(14,116,144,0.28);
          cursor: pointer; outline: none;
          transition: all 0.2s ease;
        }

        .h-signup:hover {
          background: var(--cyan); color: #fff;
          border-color: var(--cyan);
          box-shadow: 0 4px 16px rgba(14,116,144,0.28);
          transform: translateY(-1px);
        }

        .h-userBtn {
          padding: 3px; border-radius: 50%;
          border: 2px solid rgba(14,116,144,0.2);
          display: flex; align-items: center;
          transition: border-color 0.2s;
        }

        .h-userBtn:hover { border-color: var(--cyan); }

        /* ══════════════════════════════════════
           SHARED
        ══════════════════════════════════════ */
        .h-page { font-family: var(--ff-b); background: var(--bg); overflow-x: hidden; }

        .h-sec-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 6px 14px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 100px;
          font-size: 0.7rem; font-weight: 500; color: var(--cyan);
          letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 14px;
        }

        .h-sec-title {
          font-family: var(--ff-d);
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700; color: var(--dark);
          line-height: 1.08; letter-spacing: -0.02em; margin-bottom: 10px;
        }

        .h-sec-title em {
          font-style: italic;
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .h-sec-sub {
          font-size: 0.91rem; color: var(--slate);
          font-weight: 300; line-height: 1.65;
        }

        .h-sec-head { text-align: center; max-width: 560px; margin: 0 auto 48px; }

        /* Reveal animation */
        .h-reveal {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .h-reveal.on { opacity: 1; transform: translateY(0); }

        /* CTA buttons */
        .h-btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border-radius: 100px;
          font-family: var(--ff-b); font-size: 0.9rem; font-weight: 500;
          color: #fff; border: none; cursor: pointer; text-decoration: none;
          background: linear-gradient(135deg, #0a5c73, #0e7490 55%, #0891b2);
          box-shadow: 0 6px 22px rgba(14,116,144,0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          letter-spacing: 0.01em;
        }
        .h-btn-p:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(14,116,144,0.45); }

        .h-btn-s {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 22px; border-radius: 100px;
          font-family: var(--ff-b); font-size: 0.9rem; font-weight: 400;
          color: var(--cyan); background: rgba(255,255,255,0.92);
          border: 1.5px solid rgba(14,116,144,0.24);
          cursor: pointer; text-decoration: none;
          transition: all 0.2s ease;
        }
        .h-btn-s:hover { background:#fff; border-color:var(--cyan); transform:translateY(-2px); box-shadow:var(--sh); }

        /* ══════════════════════════════════════
           HERO
        ══════════════════════════════════════ */
        .h-hero {
          min-height: 100vh;
          padding: 110px 28px 72px;          /* 110px clears the fixed navbar */
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          background: linear-gradient(150deg, #dff4fb 0%, #f0f9ff 45%, #e0f2fe 100%);
        }

        /* Grid texture */
        .h-hero::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(14,116,144,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,0.045) 1px, transparent 1px);
          background-size: 54px 54px;
        }

        /* Mesh blobs */
        .h-blob { position:absolute; border-radius:50%; filter:blur(75px); pointer-events:none; }
        .h-blob-1 { width:520px;height:520px; background:radial-gradient(#a5f3fc,#67e8f9); opacity:.25; top:-160px; left:-100px; }
        .h-blob-2 { width:400px;height:400px; background:radial-gradient(#bae6fd,#7dd3fc); opacity:.2;  bottom:-80px; right:-80px; }

        /* Floating icons */
        .h-fi {
          position:absolute; width:44px; height:44px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          border:1px solid rgba(255,255,255,0.9);
          box-shadow:0 4px 14px rgba(14,116,144,0.1);
          opacity:0; z-index:1;
          animation: fiIn .6s ease forwards, fiBob 4s ease-in-out infinite;
        }

        @keyframes fiIn  { from{opacity:0;transform:scale(.7) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes fiBob { 0%,100%{transform:translateY(0) rotate(0deg)} 40%{transform:translateY(-8px) rotate(1deg)} 70%{transform:translateY(4px) rotate(-1deg)} }

        /* Hero two-col grid */
        .h-hero-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 52px; max-width: 1180px; width:100%;
          align-items: center; position:relative; z-index:2;
        }

        @media(max-width:900px) {
          .h-hero-grid { grid-template-columns:1fr; gap:36px; text-align:center; }
          .h-hero-right { display:none; }
          .h-fi { display:none; }
          .h-pill { display:none; }
          .h-links-mobile { display:flex !important; }
        }

        /* Hero left */
        .h-hero-left { animation: hSlide .65s ease both; }

        @keyframes hSlide {
          from { opacity:0; transform:translateX(-24px); }
          to   { opacity:1; transform:translateX(0); }
        }

        .h-announce {
          display:inline-flex; align-items:center; gap:8px;
          padding:7px 16px 7px 10px;
          background:rgba(255,255,255,0.88);
          border:1px solid rgba(14,116,144,0.2);
          border-radius:100px;
          font-size:.74rem; font-weight:500; color:var(--cyan);
          backdrop-filter:blur(8px); box-shadow:var(--sh);
          margin-bottom:22px;
          animation: hSlide .5s .1s ease both;
        }

        .h-ann-dot {
          width:22px; height:22px;
          background:linear-gradient(135deg,#0e7490,#06b6d4);
          border-radius:50%; display:flex; align-items:center; justify-content:center;
        }

        .h-hero-title {
          font-family: var(--ff-d);
          font-size: clamp(2.6rem, 5.5vw, 4.4rem);
          font-weight: 700; color: var(--dark);
          line-height: 1.03; letter-spacing: -0.03em;
          margin-bottom: 18px;
          animation: hSlide .55s .15s ease both;
        }

        .h-hero-title em {
          font-style:italic;
          background:linear-gradient(135deg,#0e7490 0%,#0891b2 55%,#06b6d4 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
        }

        .h-hero-sub {
          font-size:1rem; color:var(--slate); font-weight:300;
          line-height:1.7; max-width:470px; margin-bottom:26px;
          animation: hSlide .55s .22s ease both;
        }

        .h-checks {
          display:grid; grid-template-columns:1fr 1fr;
          gap:9px 22px; margin-bottom:34px;
          animation: hSlide .55s .28s ease both;
        }

        .h-check {
          display:flex; align-items:center; gap:8px;
          font-size:.83rem; color:var(--slate); font-weight:400;
        }

        .h-ctas {
          display:flex; gap:12px; flex-wrap:wrap;
          animation: hSlide .55s .34s ease both;
        }

        /* Hero right card */
        .h-hero-right { animation: hSlideR .65s .1s ease both; position:relative; }

        @keyframes hSlideR {
          from { opacity:0; transform:translateX(24px); }
          to   { opacity:1; transform:translateX(0); }
        }

        .h-card {
          background:var(--white);
          border:1px solid var(--border);
          border-radius:22px; padding:28px;
          box-shadow:var(--sh-lg); position:relative; overflow:hidden;
        }

        .h-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#0e7490,#0891b2,#06b6d4);
        }

        .h-card-img {
          width:100%; border-radius:13px; display:block;
          margin-bottom:18px; aspect-ratio:16/9; object-fit:cover;
        }

        .h-card-title {
          font-family:var(--ff-d);
          font-size:1.15rem; font-weight:600; color:var(--dark); margin-bottom:8px;
        }

        .h-card-meta {
          display:flex; align-items:center; gap:10px;
          font-size:.75rem; color:var(--slate-lt); font-weight:300;
        }

        .h-card-tag {
          position:absolute; top:18px; right:18px;
          padding:5px 12px; border-radius:100px;
          background:linear-gradient(135deg,#0e7490,#06b6d4);
          color:#fff; font-size:.68rem; font-weight:600; letter-spacing:.05em;
        }

        /* Floating stat chips */
        .h-chip {
          position:absolute;
          background:var(--white); border:1px solid var(--border);
          border-radius:12px; padding:9px 13px;
          box-shadow:var(--sh-md);
          display:flex; align-items:center; gap:8px;
          font-size:.75rem; font-weight:500; color:var(--dark);
          animation: fiBob 5s ease-in-out infinite;
        }

        .h-chip-1 { bottom:-14px; left:-22px; animation-delay:.3s; }
        .h-chip-2 { top:22px;    left:-26px;  animation-delay:.9s; }

        .h-chip-ico {
          width:28px; height:28px; border-radius:8px;
          display:flex; align-items:center; justify-content:center;
        }

        /* ══════════════════════════════════════
           STATS BAND
        ══════════════════════════════════════ */
        .h-stats {
          background:linear-gradient(135deg,#0a5c73,#0e7490 60%,#0369a1);
          padding:52px 28px; position:relative; overflow:hidden;
        }

        .h-stats::before {
          content:''; position:absolute; inset:0;
          background:url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='10' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E");
        }

        .h-stats-grid {
          display:grid; grid-template-columns:repeat(4,1fr);
          max-width:900px; margin:0 auto; position:relative; z-index:1;
        }

        @media(max-width:640px) { .h-stats-grid { grid-template-columns:repeat(2,1fr); } }

        .h-st {
          text-align:center; padding:18px 10px;
          border-right:1px solid rgba(255,255,255,0.12);
          transition:background .2s;
        }
        .h-st:last-child { border-right:none; }
        .h-st:hover { background:rgba(255,255,255,0.06); }

        .h-st-ico {
          width:34px; height:34px; background:rgba(255,255,255,0.1); border-radius:9px;
          display:flex; align-items:center; justify-content:center;
          margin:0 auto 9px; color:rgba(255,255,255,.85);
        }

        .h-st-val {
          font-family:var(--ff-d);
          font-size:2rem; font-weight:700; color:#fff;
          line-height:1; margin-bottom:4px; letter-spacing:-.02em;
          opacity:0; transform:translateY(10px);
          transition:opacity .5s ease, transform .5s ease;
        }
        .h-st-val.on { opacity:1; transform:translateY(0); }

        .h-st-lbl {
          font-size:.68rem; color:rgba(255,255,255,.6);
          text-transform:uppercase; letter-spacing:.09em; font-weight:400;
        }

        /* ══════════════════════════════════════
           FEATURES
        ══════════════════════════════════════ */
        .h-features { padding:88px 28px; background:var(--white); }

        .h-feat-grid {
          display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr));
          gap:18px; max-width:1100px; margin:0 auto;
        }

        .h-feat-card {
          background:var(--bg); border:1px solid var(--border);
          border-radius:16px; padding:26px 22px;
          opacity:0; transform:translateY(18px);
          transition:opacity .5s ease, transform .5s ease, box-shadow .28s ease, border-color .22s;
        }
        .h-feat-card.on { opacity:1; transform:translateY(0); }
        .h-feat-card:hover { transform:translateY(-4px); box-shadow:var(--sh-md); border-color:rgba(14,116,144,.25); }

        .h-feat-ico {
          width:44px; height:44px; border-radius:12px;
          background:rgba(14,116,144,0.09);
          border:1px solid rgba(14,116,144,.14);
          display:flex; align-items:center; justify-content:center;
          color:var(--cyan); margin-bottom:15px;
        }

        .h-feat-title { font-family:var(--ff-d); font-size:1.08rem; font-weight:600; color:var(--dark); margin-bottom:7px; }
        .h-feat-desc  { font-size:.81rem; color:var(--slate); font-weight:300; line-height:1.65; }

        /* ══════════════════════════════════════
           CATEGORIES
        ══════════════════════════════════════ */
        .h-cats { padding:72px 28px; background:var(--bg); }

        .h-cat-grid {
          display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
          gap:15px; max-width:1100px; margin:0 auto;
        }

        .h-cat-card {
          background:var(--white); border:1px solid var(--border); border-radius:16px;
          padding:26px 20px; cursor:pointer; text-decoration:none;
          display:flex; flex-direction:column; gap:11px;
          opacity:0; transform:translateY(14px);
          transition:opacity .45s ease, transform .45s ease, box-shadow .25s, border-color .2s;
        }
        .h-cat-card.on { opacity:1; transform:translateY(0); }
        .h-cat-card:hover { transform:translateY(-4px); box-shadow:var(--sh-md); border-color:rgba(14,116,144,.28); }

        .h-cat-ico { width:46px; height:46px; border-radius:13px; display:flex; align-items:center; justify-content:center; }
        .h-cat-name { font-family:var(--ff-d); font-size:1.08rem; font-weight:600; color:var(--dark); }
        .h-cat-cnt  { font-size:.74rem; color:var(--slate-lt); font-weight:300; }
        .h-cat-arr  { margin-top:auto; color:var(--slate-lt); transition:transform .2s, color .2s; }
        .h-cat-card:hover .h-cat-arr { transform:translateX(4px); color:var(--cyan); }

        /* ══════════════════════════════════════
           COURSES
        ══════════════════════════════════════ */
        .h-courses { padding:80px 28px; background:var(--white); }

        .h-cr-grid {
          display:grid; grid-template-columns:repeat(auto-fill,minmax(265px,1fr));
          gap:18px; max-width:1200px; margin:0 auto 40px;
        }

        .h-cr-card {
          background:var(--bg); border:1px solid var(--border); border-radius:16px;
          overflow:hidden; cursor:pointer;
          opacity:0; transform:translateY(16px);
          transition:opacity .45s ease, transform .45s ease, box-shadow .28s, border-color .22s;
          outline:none;
        }
        .h-cr-card.on { opacity:1; transform:translateY(0); }
        .h-cr-card:hover { transform:translateY(-5px); box-shadow:var(--sh-lg); border-color:rgba(14,116,144,.3); }

        .h-cr-thumb { position:relative; height:158px; overflow:hidden; background:#e2e8f0; }
        .h-cr-thumb img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .4s ease; }
        .h-cr-card:hover .h-cr-thumb img { transform:scale(1.06); }

        .h-cr-ov {
          position:absolute; inset:0;
          background:rgba(10,92,115,.78);
          display:flex; flex-direction:column;
          align-items:center; justify-content:center; gap:6px;
          opacity:0; transition:opacity .22s ease; backdrop-filter:blur(2px);
        }
        .h-cr-card:hover .h-cr-ov { opacity:1; }
        .h-cr-ov span { font-size:.74rem; font-weight:500; color:rgba(255,255,255,.9); letter-spacing:.05em; }

        .h-cr-bgs { position:absolute; top:8px; left:8px; display:flex; gap:4px; }
        .h-cr-bg {
          display:inline-flex; align-items:center; gap:3px;
          padding:3px 7px; border-radius:100px;
          font-size:.61rem; font-weight:700; letter-spacing:.04em; text-transform:uppercase;
        }
        .h-cr-bg-free { background:var(--teal); color:#fff; }
        .h-cr-bg-sale { background:#0f172a; color:var(--amber); }
        .h-cr-bg-hot  { background:rgba(239,68,68,.85); color:#fff; }

        .h-cr-lvl {
          position:absolute; top:8px; right:8px;
          padding:3px 9px; border-radius:100px;
          font-size:.59rem; font-weight:500;
          background:rgba(255,255,255,.92); color:var(--slate);
          backdrop-filter:blur(4px);
        }

        .h-cr-body { padding:15px 15px 13px; }
        .h-cr-cat  { font-size:.64rem; font-weight:600; color:var(--cyan); text-transform:uppercase; letter-spacing:.1em; margin-bottom:4px; }

        .h-cr-name {
          font-family:var(--ff-d);
          font-size:.99rem; font-weight:600; color:var(--dark);
          line-height:1.25; margin-bottom:4px;
          display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
        }

        .h-cr-teacher { font-size:.71rem; color:var(--slate-lt); font-weight:300; margin-bottom:7px; }

        .h-cr-meta { display:flex; align-items:center; gap:9px; font-size:.68rem; color:var(--slate-lt); margin-bottom:9px; }
        .h-cr-mi   { display:flex; align-items:center; gap:3px; }
        .h-cr-rat  { color:#92400e; font-weight:500; }

        .h-cr-foot {
          display:flex; align-items:center; justify-content:space-between;
          padding-top:9px; border-top:1px solid rgba(14,116,144,.07);
        }

        .h-pf { font-size:.81rem; font-weight:700; color:var(--teal); }
        .h-pc { font-size:.86rem; font-weight:700; color:var(--dark); }
        .h-po { font-size:.71rem; color:var(--slate-lt); text-decoration:line-through; margin-left:4px; }

        /* ══════════════════════════════════════
           TESTIMONIALS
        ══════════════════════════════════════ */
        .h-tm { background:var(--dark); padding:80px 28px; position:relative; overflow:hidden; }

        .h-tm::before {
          content:''; position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(14,116,144,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,.05) 1px, transparent 1px);
          background-size:52px 52px;
        }

        .h-tm-grid {
          display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
          gap:18px; max-width:1100px; margin:0 auto; position:relative; z-index:1;
        }

        .h-tm-card {
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.08);
          border-radius:18px; padding:26px 22px;
          display:flex; flex-direction:column; gap:13px;
          position:relative; overflow:hidden;
          opacity:0; transform:translateY(14px);
          transition:opacity .5s ease, transform .5s ease, box-shadow .28s;
        }
        .h-tm-card.on { opacity:1; transform:translateY(0); }
        .h-tm-card:hover { transform:translateY(-4px); box-shadow:0 16px 44px rgba(0,0,0,.35); }
        .h-tm-card::before { content:''; position:absolute; top:0;left:0;right:0; height:2px; background:linear-gradient(90deg,#0e7490,#67e8f9); }

        .h-tm-qt {
          position:absolute; top:14px; right:16px;
          color:rgba(14,116,144,.14);
          font-family:var(--ff-d); font-size:5rem; line-height:1; font-weight:700;
        }

        .h-tm-text { font-size:.86rem; color:rgba(255,255,255,.72); font-weight:300; line-height:1.72; font-style:italic; flex:1; }

        .h-tm-author {
          display:flex; align-items:center; gap:11px;
          padding-top:13px; border-top:1px solid rgba(255,255,255,.06);
        }

        .h-tm-av { width:42px; height:42px; border-radius:50%; object-fit:cover; border:2px solid rgba(14,116,144,.3); }
        .h-tm-name { font-size:.85rem; font-weight:500; color:#fff; margin-bottom:2px; }
        .h-tm-role { font-size:.71rem; color:var(--slate-lt); font-weight:300; }

        /* ══════════════════════════════════════
           FINAL CTA
        ══════════════════════════════════════ */
        .h-cta { padding:96px 28px; background:var(--bg); position:relative; overflow:hidden; text-align:center; }

        .h-cta::before {
          content:''; position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(14,116,144,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,.04) 1px, transparent 1px);
          background-size:50px 50px;
        }

        .h-cta-inner {
          position:relative; z-index:1;
          max-width:600px; margin:0 auto;
          opacity:0; transform:translateY(18px);
          transition:opacity .6s ease, transform .6s ease;
        }
        .h-cta-inner.on { opacity:1; transform:translateY(0); }

        .h-cta-title {
          font-family:var(--ff-d);
          font-size:clamp(2rem,4vw,3rem); font-weight:700; color:var(--dark);
          line-height:1.08; letter-spacing:-.025em; margin-bottom:13px;
        }
        .h-cta-title em {
          font-style:italic;
          background:linear-gradient(135deg,#0e7490,#06b6d4);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
        }

        .h-cta-sub { font-size:.94rem; color:var(--slate); font-weight:300; line-height:1.65; margin-bottom:34px; }
        .h-cta-btns { display:flex; align-items:center; justify-content:center; gap:12px; flex-wrap:wrap; margin-bottom:20px; }
        .h-cta-note { font-size:.74rem; color:var(--slate-lt); font-weight:300; display:flex; align-items:center; justify-content:center; gap:5px; }

        /* ══════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════ */
        @media(max-width:640px) {
          .h-checks { grid-template-columns:1fr; }
          .h-ctas   { justify-content:center; }
          .h-hero-sub { max-width:100%; }
          .h-nav { padding:10px 16px; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════
          NAVBAR — built directly into this page, no import needed
      ══════════════════════════════════════════════════════════ */}
      <nav className={`h-nav${scrolled ? " scrolled" : ""}`}>

        {/* Brand */}
        <NavLink to="/" className="h-brand">
          <div className="h-brand-icon">
            <GraduationCap size={17} color="#fff" />
          </div>
          <div>
            <div className="h-brand-name">LearnHub</div>
            <div className="h-brand-sub">Learning Platform</div>
          </div>
        </NavLink>

        {/* Center pill */}
        <div className="h-pill">
          {NAV_ITEMS.map(({ name, icon: Icon, href }) => (
            <NavLink
              key={name}
              to={href}
              className={({ isActive }) => `h-link${isActive ? " active" : ""}`}
            >
              <Icon size={14} />
              <span>{name}</span>
            </NavLink>
          ))}
        </div>

        {/* Auth */}
        <div className="h-auth">
          {!isSignedIn ? (
            <button type="button" className="h-signup" onClick={() => openSignUp({})}>
              Create Account
            </button>
          ) : (
            <div className="h-userBtn">
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>

      </nav>

      {/* ══════════════════════════════════════════════════════════
          PAGE BODY
      ══════════════════════════════════════════════════════════ */}
      <div className="h-page">

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="h-hero">
          <div className="h-blob h-blob-1" />
          <div className="h-blob h-blob-2" />

          {/* Floating icons */}
          {[
            { Icon:Code2,     color:"#0e7490", bg:"#e0f7fa", top:"15%",  left:"5%",  size:19, d:0    },
            { Icon:Palette,   color:"#0f766e", bg:"#d1fae5", top:"62%",  left:"3%",  size:17, d:.5   },
            { Icon:BarChart3, color:"#0369a1", bg:"#dbeafe", top:"18%",  left:"89%", size:19, d:.35  },
            { Icon:Megaphone, color:"#7c3aed", bg:"#ede9fe", top:"74%",  left:"92%", size:16, d:.8   },
            { Icon:Star,      color:"#f59e0b", bg:"#fef3c7", top:"40%",  left:"2%",  size:15, d:1.0  },
          ].map(({ Icon, color, bg, top, left, size, d }, i) => (
            <div key={i} className="h-fi" style={{ top, left, background:bg, animationDelay:`${d}s, ${d+.6}s` }}>
              <Icon size={size} color={color} strokeWidth={1.8} />
            </div>
          ))}

          <div className="h-hero-grid">
            {/* Left */}
            <div className="h-hero-left">
              <div className="h-announce">
                <div className="h-ann-dot"><Sparkles size={11} color="#fff" /></div>
                New cohort starting April 2026 — Limited seats
                <ChevronRight size={13} />
              </div>

              <h1 className="h-hero-title">
                Learn Skills That<br />Open <em>Real Doors</em>
              </h1>

              <p className="h-hero-sub">
                Join 12,000+ learners building real careers through project-based courses
                taught by industry experts. Code, design, data — every path covered.
              </p>

              <div className="h-checks">
                {["Project-based learning","Expert instructors","Lifetime access","Career support"].map(t => (
                  <div key={t} className="h-check">
                    <CheckCircle size={15} color="#0e7490" />{t}
                  </div>
                ))}
              </div>

              <div className="h-ctas">
                <NavLink to="/courses" className="h-btn-p">
                  <BookOpen size={16} /> Explore Courses <ArrowRight size={14} />
                </NavLink>
                <NavLink to="/about" className="h-btn-s">
                  <div style={{ width:26, height:26, borderRadius:"50%", background:"linear-gradient(135deg,#0e7490,#06b6d4)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Play size={10} color="#fff" fill="#fff" />
                  </div>
                  How It Works
                </NavLink>
              </div>
            </div>

            {/* Right */}
            <div className="h-hero-right">
              <div className="h-card">
                <span className="h-card-tag">🔥 Trending</span>
                <img src="https://picsum.photos/seed/hero/600/340" alt="Course" className="h-card-img" />
                <div className="h-card-title">Full Stack Web Development</div>
                <div className="h-card-meta">
                  <Stars n={5} size={13} />
                  <span>4.8 · 4,820 students · 42h</span>
                </div>
              </div>
              <div className="h-chip h-chip-1">
                <div className="h-chip-ico" style={{ background:"#d1fae5" }}><GraduationCap size={14} color="#0f766e" /></div>
                <div><div style={{ fontSize:".81rem", fontWeight:600 }}>12K+</div><div style={{ fontSize:".63rem", color:"var(--slate-lt)" }}>Students</div></div>
              </div>
              <div className="h-chip h-chip-2">
                <div className="h-chip-ico" style={{ background:"#fef3c7" }}><Star size={14} color="#f59e0b" fill="#f59e0b" /></div>
                <div><div style={{ fontSize:".81rem", fontWeight:600 }}>4.9/5</div><div style={{ fontSize:".63rem", color:"var(--slate-lt)" }}>Rating</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ─────────────────────────────────────────── */}
        <div className="h-stats" ref={statsRef}>
          <div className="h-stats-grid">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <div key={label} className="h-st">
                <div className="h-st-ico"><Icon size={16} /></div>
                <div className={`h-st-val${statsVis ? " on" : ""}`} style={{ transitionDelay:`${i*.1}s` }}>{value}</div>
                <div className="h-st-lbl">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FEATURES ──────────────────────────────────────── */}
        <section className="h-features" ref={featRef}>
          <div className="h-sec-head">
            <div className="h-sec-badge"><Sparkles size={11} /> Why LearnHub</div>
            <h2 className="h-sec-title">Built for <em>Real Growth</em></h2>
            <p className="h-sec-sub">Everything you need to go from beginner to career-ready, in one place.</p>
          </div>
          <div className="h-feat-grid">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className={`h-feat-card${featVis ? " on" : ""}`} style={{ transitionDelay:`${i*.09}s` }}>
                <div className="h-feat-ico"><Icon size={20} /></div>
                <div className="h-feat-title">{title}</div>
                <div className="h-feat-desc">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CATEGORIES ────────────────────────────────────── */}
        <section className="h-cats" ref={catRef}>
          <div className="h-sec-head">
            <div className="h-sec-badge"><BookOpen size={11} /> Explore Topics</div>
            <h2 className="h-sec-title">Pick Your <em>Path</em></h2>
            <p className="h-sec-sub">Four career tracks, hundreds of hours, all on one platform.</p>
          </div>
          <div className="h-cat-grid">
            {CATEGORIES.map(({ label, icon: Icon, count, color, bg }, i) => (
              <NavLink key={label} to="/courses" className={`h-cat-card${catVis ? " on" : ""}`} style={{ transitionDelay:`${i*.09}s` }}>
                <div className="h-cat-ico" style={{ background:bg }}><Icon size={22} color={color} /></div>
                <div>
                  <div className="h-cat-name">{label}</div>
                  <div className="h-cat-cnt">{count} courses available</div>
                </div>
                <ChevronRight size={15} className="h-cat-arr" />
              </NavLink>
            ))}
          </div>
        </section>

        {/* ── COURSES PREVIEW ───────────────────────────────── */}
        <section className="h-courses" ref={crRef}>
          <div className="h-sec-head">
            <div className="h-sec-badge"><Flame size={11} /> Popular Now</div>
            <h2 className="h-sec-title">Top <em>Courses</em></h2>
            <p className="h-sec-sub">Hand-picked, loved by thousands of learners worldwide.</p>
          </div>
          <div className="h-cr-grid">
            {COURSES.map((c, i) => {
              const p = getPrice(c);
              return (
                <article
                  key={c.id}
                  className={`h-cr-card${crVis ? " on" : ""}`}
                  style={{ transitionDelay:`${i*.08}s` }}
                  onClick={() => navigate("/courses")}
                  role="button" tabIndex={0}
                  onKeyDown={(e) => { if(e.key==="Enter") navigate("/courses"); }}
                >
                  <div className="h-cr-thumb">
                    <img src={c.image} alt={c.name} loading="lazy" />
                    <div className="h-cr-ov">
                      <BookOpen size={18} color="#fff" />
                      <span>View Course</span>
                    </div>
                    <div className="h-cr-bgs">
                      {p.free   && <span className="h-cr-bg h-cr-bg-free"><BadgeCheck size={9}/> Free</span>}
                      {p.pct    && <span className="h-cr-bg h-cr-bg-sale"><TrendingUp size={9}/> {p.pct}% off</span>}
                      {c.hot    && <span className="h-cr-bg h-cr-bg-hot"><Flame size={9}/> Hot</span>}
                    </div>
                    <span className="h-cr-lvl">{c.level}</span>
                  </div>
                  <div className="h-cr-body">
                    <div className="h-cr-cat">{c.cat}</div>
                    <div className="h-cr-name">{c.name}</div>
                    <div className="h-cr-teacher">{c.teacher}</div>
                    <div className="h-cr-meta">
                      <span className="h-cr-mi"><Clock size={10}/>{c.duration ?? 30}h</span>
                      <span className="h-cr-mi"><Users size={10}/>{fmt(c.students)}</span>
                      <span className="h-cr-mi h-cr-rat"><Star size={10} fill="#f59e0b" color="#f59e0b"/>{c.rating}</span>
                    </div>
                    <div className="h-cr-foot">
                      <Stars n={Math.round(c.rating)} size={12} />
                      {p.free
                        ? <span className="h-pf">Free</span>
                        : <span><span className="h-pc">{p.display}</span>{p.original && <span className="h-po">{p.original}</span>}</span>
                      }
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div style={{ textAlign:"center" }}>
            <NavLink to="/courses" className="h-btn-p" style={{ display:"inline-flex" }}>
              <BookOpen size={15}/> View All Courses <ArrowRight size={14}/>
            </NavLink>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────── */}
        <section className="h-tm" ref={tmRef}>
          <div className="h-sec-head" style={{ position:"relative", zIndex:1 }}>
            <div className="h-sec-badge" style={{ background:"rgba(14,116,144,.14)", color:"#67e8f9", borderColor:"rgba(14,116,144,.28)" }}>
              <Star size={11} fill="#67e8f9" color="#67e8f9"/> Student Stories
            </div>
            <h2 className="h-sec-title" style={{ color:"#fff" }}>Real People, <em>Real Results</em></h2>
            <p className="h-sec-sub" style={{ color:"var(--slate-lt)" }}>12,000+ learners transformed their careers. Here's what they say.</p>
          </div>
          <div className="h-tm-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`h-tm-card${tmVis ? " on" : ""}`} style={{ transitionDelay:`${i*.12}s` }}>
                <div className="h-tm-qt" aria-hidden="true">"</div>
                <Stars n={t.rating} size={13} />
                <p className="h-tm-text">"{t.text}"</p>
                <div className="h-tm-author">
                  <img src={t.avatar} alt={t.name} className="h-tm-av" />
                  <div>
                    <div className="h-tm-name">{t.name}</div>
                    <div className="h-tm-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────── */}
        <section className="h-cta" ref={ctaRef}>
          <div className={`h-cta-inner${ctaVis ? " on" : ""}`}>
            <div className="h-sec-badge" style={{ marginBottom:14 }}><GraduationCap size={11}/> Start Today</div>
            <h2 className="h-cta-title">Your Next Chapter<br />Starts <em>Here</em></h2>
            <p className="h-cta-sub">
              Join thousands who chose LearnHub to build real skills, gain confidence,
              and land the careers they deserve.
            </p>
            <div className="h-cta-btns">
              <NavLink to="/courses" className="h-btn-p">
                <BookOpen size={16}/> Get Started Free <ArrowRight size={14}/>
              </NavLink>
              <NavLink to="/faculty" className="h-btn-s">
                Meet Instructors <ChevronRight size={13}/>
              </NavLink>
            </div>
            <p className="h-cta-note">
              <BadgeCheck size={13} color="#0e7490"/> No credit card required · Free courses available
            </p>
          </div>
        </section>

      </div>
    </>
  );
}