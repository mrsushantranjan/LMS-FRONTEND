import React, { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Star, ArrowRight, BookOpen, Users, Clock,
  TrendingUp, Flame, BadgeCheck, Tag, ChevronRight,
  Sparkles,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────
// Replace with your real import: import { coursesData } from "../assets/dummyData"
const coursesData = [
  { id: "1",  name: "Full Stack Web Development",  teacher: "Arjun Mehta",  image: "https://picsum.photos/seed/c1/480/270",  isFree: false, price: { original: 2999, sale: 1499 }, category: "Development", level: "Intermediate", students: 4820, rating: 4.8, duration: 42, trending: true  },
  { id: "2",  name: "UI/UX Design Mastery",         teacher: "Priya Sharma", image: "https://picsum.photos/seed/c2/480/270",  isFree: false, price: { original: 1999, sale: null  }, category: "Design",       level: "Beginner",     students: 2310, rating: 4.9, duration: 28, trending: true  },
  { id: "3",  name: "Data Science with Python",     teacher: "Rohit Verma",  image: "https://picsum.photos/seed/c3/480/270",  isFree: true,  price: null,                              category: "Data",         level: "Advanced",     students: 6100, rating: 4.7, duration: 56, trending: false },
  { id: "4",  name: "React & Next.js Bootcamp",     teacher: "Sneha Patel",  image: "https://picsum.photos/seed/c4/480/270",  isFree: false, price: { original: 3499, sale: 2199 }, category: "Development", level: "Intermediate", students: 3750, rating: 4.8, duration: 38, trending: true  },
  { id: "5",  name: "Digital Marketing Pro",        teacher: "Karan Shah",   image: "https://picsum.photos/seed/c5/480/270",  isFree: true,  price: null,                              category: "Marketing",    level: "Beginner",     students: 1980, rating: 4.6, duration: 22, trending: false },
  { id: "6",  name: "Machine Learning A–Z",         teacher: "Divya Nair",   image: "https://picsum.photos/seed/c6/480/270",  isFree: false, price: { original: 4999, sale: 2999 }, category: "Data",         level: "Advanced",     students: 5420, rating: 4.9, duration: 64, trending: true  },
  { id: "7",  name: "Graphic Design Essentials",    teacher: "Amit Joshi",   image: "https://picsum.photos/seed/c7/480/270",  isFree: false, price: { original: 1499, sale: null  }, category: "Design",       level: "Beginner",     students: 1240, rating: 4.5, duration: 18, trending: false },
  { id: "8",  name: "Cloud Computing & AWS",        teacher: "Neha Gupta",   image: "https://picsum.photos/seed/c8/480/270",  isFree: false, price: { original: 5999, sale: 3499 }, category: "Development", level: "Advanced",     students: 2890, rating: 4.7, duration: 50, trending: false },
];

const TABS = ["All", "Trending", "Free", "Development", "Design", "Data", "Marketing"];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const isCourseFree = (c) => c.isFree || !c.price || (c.price.original == null && c.price.sale == null);

const getPrice = (c) => {
  if (isCourseFree(c)) return { type: "free" };
  const { original, sale } = c.price ?? {};
  if (sale != null)     return { type: "sale",  display: `₹${sale}`,     original: original > sale ? `₹${original}` : null, pct: Math.round(((original - sale) / original) * 100) };
  if (original != null) return { type: "paid",  display: `₹${original}`, original: null, pct: null };
  return { type: "free" };
};

const fmtStudents = (n) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

// ─── INTERACTIVE STAR RATING ──────────────────────────────────────────────────
// FIX 1: key={star} (1-based value) instead of key={i} (index) — stable identity
// FIX 2: fill driven by prop, not className — no CSS conflict with currentColor
// FIX 3: e.stopPropagation on both the wrapper AND each button — card click never fires
const StarRating = React.memo(({ courseId, rating, hover, onRate, onHover, onLeave }) => {
  const display = hover || rating;
  return (
    <div
      style={{ display: "flex", gap: 2 }}
      onClick={(e) => e.stopPropagation()}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= display;
        return (
          <button
            key={star}                                          // FIX: stable key
            type="button"
            onClick={(e) => { e.stopPropagation(); onRate(courseId, star); }}
            onMouseEnter={() => onHover(courseId, star)}
            onMouseLeave={() => onLeave(courseId)}
            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
            className="hc-star-btn"
          >
            <Star
              size={14}
              fill={filled ? "#f59e0b" : "none"}             // FIX: prop-driven fill
              color={filled ? "#f59e0b" : "#cbd5e1"}          // FIX: prop-driven color
            />
          </button>
        );
      })}
    </div>
  );
});

// ─── COURSE CARD ──────────────────────────────────────────────────────────────
const CourseCard = React.memo(({ course, index, userRating, hover, onRate, onHover, onLeave, onOpen, isLoggedIn }) => {
  const price = getPrice(course);

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Open ${course.name}`}
      onClick={() => onOpen(course.id)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(course.id); } }}
      className="hc-card"
      style={{ animationDelay: `${Math.min(index, 7) * 65}ms` }}
    >
      {/* Thumbnail */}
      <div className="hc-thumb">
        <img src={course.image} alt={course.name} className="hc-thumb-img" loading="lazy" />

        {/* Hover overlay */}
        <div className="hc-thumb-overlay" aria-hidden="true">
          <div className="hc-thumb-play">
            <BookOpen size={18} color="#fff" />
          </div>
          <span className="hc-thumb-cta">View Course</span>
        </div>

        {/* Badges */}
        <div className="hc-badges">
          {price.type === "free" && (
            <span className="hc-badge hc-badge-free"><BadgeCheck size={9} /> Free</span>
          )}
          {price.pct && (
            <span className="hc-badge hc-badge-sale"><Tag size={9} /> {price.pct}% off</span>
          )}
          {course.trending && (
            <span className="hc-badge hc-badge-trending"><Flame size={9} /> Trending</span>
          )}
        </div>

        <span className="hc-level">{course.level}</span>
      </div>

      {/* Body */}
      <div className="hc-body">
        <span className="hc-category">{course.category}</span>
        <h3 className="hc-name">{course.name}</h3>
        <p className="hc-teacher">{course.teacher}</p>

        {/* Meta row */}
        <div className="hc-meta">
          <span className="hc-meta-item"><Clock size={11} />{course.duration}h</span>
          <span className="hc-meta-item"><Users size={11} />{fmtStudents(course.students)}</span>
          <span className="hc-meta-item hc-meta-rating">
            <Star size={11} fill="#f59e0b" color="#f59e0b" />{course.rating}
          </span>
        </div>

        {/* Footer */}
        <div className="hc-footer">
          <StarRating
            courseId={course.id}
            rating={userRating}
            hover={hover}
            onRate={onRate}
            onHover={onHover}
            onLeave={onLeave}
          />
          <div className="hc-price">
            {price.type === "free" ? (
              <span className="hc-price-free">Free</span>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span className="hc-price-current">{price.display}</span>
                {price.original && <span className="hc-price-original">{price.original}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
});

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const HomeCourses = () => {
  const navigate = useNavigate();

  // ── Auth ───────────────────────────────────────────────────────────────────
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  // ── Ratings state ──────────────────────────────────────────────────────────
  // Initialised from localStorage — safe try/catch
  const [userRatings, setUserRatings] = useState(() => {
    try {
      const raw = localStorage.getItem("userCourseRatings");
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  });

  // hoverRatings keyed by courseId — no cross-card interference
  const [hoverRatings, setHoverRatings] = useState({});

  // ── Toast (inline — no react-toastify needed) ──────────────────────────────
  // FIX 4: No ToastContainer mounting issue — self-contained inline toast
  const [toast, setToast] = useState(null);
  const showToast = useCallback((msg, type = "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  // ── Active tab ─────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState("All");

  // ── Filtered courses (memoized) ────────────────────────────────────────────
  const filtered = useMemo(() => {
    if (activeTab === "All")       return coursesData;
    if (activeTab === "Trending")  return coursesData.filter((c) => c.trending);
    if (activeTab === "Free")      return coursesData.filter((c) => isCourseFree(c));
    return coursesData.filter((c) => c.category === activeTab);
  }, [activeTab]);

  // ── Handlers ───────────────────────────────────────────────────────────────
  // FIX 5: handleBrowseClick defined — was missing in original, button was empty & crashed
  const handleBrowseClick = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  const openCourse = useCallback((id) => {
    if (!isLoggedIn) { showToast("Please login to access this course"); return; }
    navigate(`/courses/${id}`);
  }, [isLoggedIn, navigate, showToast]);

  const handleRate = useCallback((courseId, star) => {
    setUserRatings((prev) => {
      const next = { ...prev, [courseId]: star };
      try { localStorage.setItem("userCourseRatings", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const handleHover = useCallback((courseId, star) => {
    setHoverRatings((prev) => ({ ...prev, [courseId]: star }));
  }, []);

  const handleLeave = useCallback((courseId) => {
    setHoverRatings((prev) => ({ ...prev, [courseId]: 0 }));
  }, []);

  // ── Stats ──────────────────────────────────────────────────────────────────
  const totalStudents = useMemo(() => coursesData.reduce((s, c) => s + c.students, 0), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-dark:   #0a5c73;
          --cyan-mid:    #0891b2;
          --cyan-light:  #67e8f9;
          --teal:        #0f766e;
          --amber:       #f59e0b;
          --slate:       #475569;
          --slate-light: #94a3b8;
          --border:      rgba(14,116,144,0.13);
          --bg:          #f0f9ff;
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
          --shadow:      0 2px 14px rgba(14,116,144,0.07);
          --shadow-hover:0 12px 38px rgba(14,116,144,0.15);
          --radius:      16px;
        }

        /* ── SECTION ───────────────────────────────────── */
        .hc-section {
          background: var(--bg);
          padding: 88px 24px 80px;
          font-family: var(--ff-body);
          position: relative;
          overflow: hidden;
        }

        /* Subtle background texture */
        .hc-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(14,116,144,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,0.035) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        /* ── TOAST ─────────────────────────────────────── */
        .hc-toast {
          position: fixed;
          top: 76px; right: 20px;
          z-index: 9999;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 0.83rem;
          font-weight: 500;
          color: #fff;
          box-shadow: 0 8px 28px rgba(0,0,0,0.16);
          animation: hcSlideIn 0.3s ease;
          pointer-events: none;
          font-family: var(--ff-body);
          max-width: 320px;
        }
        .hc-toast.error   { background: #ef4444; }
        .hc-toast.success { background: var(--teal); }

        @keyframes hcSlideIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── HEADER ────────────────────────────────────── */
        .hc-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 20px;
          position: relative;
          animation: hcFadeUp 0.55s ease both;
        }

        .hc-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 100px;
          font-size: 0.71rem;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .hc-title {
          font-family: var(--ff-display);
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 700;
          color: #0c1a2e;
          line-height: 1.06;
          letter-spacing: -0.025em;
          margin-bottom: 14px;
        }

        .hc-title em {
          font-style: italic;
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hc-subtitle {
          font-size: 0.93rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
          margin-bottom: 8px;
        }

        /* Quick stats inline */
        .hc-quick-stats {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 10px 20px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 100px;
          box-shadow: var(--shadow);
          margin-top: 16px;
        }

        .hc-quick-stat {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          color: var(--slate);
          font-weight: 400;
        }

        .hc-quick-stat strong {
          color: var(--cyan);
          font-weight: 600;
        }

        .hc-qs-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: var(--border);
        }

        /* ── TABS ──────────────────────────────────────── */
        .hc-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          flex-wrap: wrap;
          margin: 36px 0 32px;
          position: relative;
          animation: hcFadeUp 0.55s 0.08s ease both;
        }

        .hc-tab {
          padding: 8px 18px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--slate);
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: var(--shadow);
          white-space: nowrap;
        }

        .hc-tab:hover {
          border-color: var(--cyan);
          color: var(--cyan);
        }

        .hc-tab.active {
          background: var(--cyan);
          border-color: var(--cyan);
          color: var(--white);
          font-weight: 500;
          box-shadow: 0 4px 16px rgba(14,116,144,0.3);
        }

        /* ── GRID ──────────────────────────────────────── */
        .hc-grid-wrap {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .hc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
          gap: 20px;
          margin-bottom: 48px;
        }

        /* ── COURSE CARD ───────────────────────────────── */
        .hc-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow);
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.28s ease,
                      border-color 0.22s ease;
          display: flex;
          flex-direction: column;
          opacity: 0;
          animation: hcCardIn 0.42s ease forwards;
          outline: none;
        }

        .hc-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(14,116,144,0.28);
        }

        .hc-card:focus-visible {
          outline: 2px solid var(--cyan);
          outline-offset: 2px;
        }

        @keyframes hcCardIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Thumbnail */
        .hc-thumb {
          position: relative;
          width: 100%;
          height: 162px;
          overflow: hidden;
          background: #e2e8f0;
          flex-shrink: 0;
        }

        .hc-thumb-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .hc-card:hover .hc-thumb-img { transform: scale(1.06); }

        .hc-thumb-overlay {
          position: absolute; inset: 0;
          background: rgba(10,92,115,0.8);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 7px;
          opacity: 0;
          transition: opacity 0.24s ease;
          backdrop-filter: blur(2px);
        }
        .hc-card:hover .hc-thumb-overlay { opacity: 1; }

        .hc-thumb-play {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 1.5px solid rgba(255,255,255,0.35);
          display: flex; align-items: center; justify-content: center;
        }

        .hc-thumb-cta {
          font-size: 0.75rem;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.05em;
        }

        .hc-badges {
          position: absolute; top: 9px; left: 9px;
          display: flex; gap: 5px;
        }

        .hc-badge {
          display: inline-flex; align-items: center; gap: 3px;
          padding: 3px 8px; border-radius: 100px;
          font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.04em; text-transform: uppercase;
        }
        .hc-badge-free     { background: var(--teal); color: #fff; }
        .hc-badge-sale     { background: #0f172a; color: var(--amber); }
        .hc-badge-trending { background: rgba(239,68,68,0.85); color: #fff; }

        .hc-level {
          position: absolute; top: 9px; right: 9px;
          padding: 3px 9px; border-radius: 100px;
          font-size: 0.6rem; font-weight: 500;
          background: rgba(255,255,255,0.9);
          color: var(--slate); backdrop-filter: blur(4px);
          letter-spacing: 0.04em;
        }

        /* Card body */
        .hc-body {
          padding: 16px 16px 14px;
          display: flex; flex-direction: column;
          gap: 6px; flex: 1;
        }

        .hc-category {
          font-size: 0.65rem; font-weight: 600;
          color: var(--cyan); text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .hc-name {
          font-family: var(--ff-display);
          font-size: 1.02rem; font-weight: 600;
          color: #0c1a2e; line-height: 1.25;
          letter-spacing: -0.01em;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .hc-teacher {
          font-size: 0.73rem; color: var(--slate-light);
          font-weight: 300;
        }

        .hc-meta {
          display: flex; align-items: center; gap: 10px;
          flex-wrap: wrap;
        }

        .hc-meta-item {
          display: flex; align-items: center; gap: 3px;
          font-size: 0.69rem; color: var(--slate-light);
          font-weight: 300;
        }

        .hc-meta-rating { color: #92400e; font-weight: 500; }

        .hc-footer {
          display: flex; align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid rgba(14,116,144,0.07);
          margin-top: auto;
        }

        /* Star button */
        .hc-star-btn {
          background: none; border: none;
          cursor: pointer; padding: 2px; line-height: 0;
          transition: transform 0.15s ease;
        }
        .hc-star-btn:hover { transform: scale(1.25); }

        /* Price */
        .hc-price-free    { font-size: 0.82rem; font-weight: 700; color: var(--teal); }
        .hc-price-current { font-size: 0.88rem; font-weight: 700; color: #0c1a2e; }
        .hc-price-original{ font-size: 0.72rem; color: var(--slate-light); text-decoration: line-through; }

        /* ── EMPTY STATE ───────────────────────────────── */
        .hc-empty {
          grid-column: 1 / -1;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 72px 24px; text-align: center; gap: 12px;
        }

        .hc-empty-icon {
          width: 60px; height: 60px;
          background: rgba(14,116,144,0.07);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--slate-light);
        }

        .hc-empty-title {
          font-family: var(--ff-display);
          font-size: 1.4rem; font-weight: 600; color: #0c1a2e;
        }

        /* ── CTA BLOCK ─────────────────────────────────── */
        .hc-cta-wrap {
          display: flex; flex-direction: column;
          align-items: center; gap: 12px;
          animation: hcFadeUp 0.55s 0.3s ease both;
        }

        .hc-cta-note {
          font-size: 0.78rem; color: var(--slate-light);
          font-weight: 300;
          display: flex; align-items: center; gap: 6px;
        }

        /* FIX 6: CTA button has real children + uses cyan palette (not pink/purple conic) */
        .hc-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 36px;
          border-radius: 100px;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--white);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          letter-spacing: 0.01em;
          background: linear-gradient(135deg, #0a5c73 0%, #0e7490 50%, #0891b2 100%);
          box-shadow: 0 6px 24px rgba(14,116,144,0.35);
        }

        /* FIX 6b: Glow uses cyan palette — no pink/purple */
        .hc-cta-btn::before {
          content: '';
          position: absolute; inset: -2px;
          border-radius: 100px;
          background: conic-gradient(
            from 0deg,
            rgba(14,116,144,0.8),
            rgba(8,145,178,0.8),
            rgba(103,232,249,0.6),
            rgba(14,116,144,0.8)
          );
          filter: blur(6px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .hc-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 36px rgba(14,116,144,0.45);
        }

        .hc-cta-btn:hover::before { opacity: 0.7; }

        .hc-cta-btn:active { transform: translateY(-1px); }

        .hc-cta-btn-arrow {
          transition: transform 0.22s ease;
        }
        .hc-cta-btn:hover .hc-cta-btn-arrow { transform: translateX(3px); }

        /* Secondary link */
        .hc-cta-secondary {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.82rem; color: var(--cyan);
          font-weight: 400; text-decoration: none;
          cursor: pointer; background: none; border: none;
          font-family: var(--ff-body);
          transition: gap 0.18s ease;
        }
        .hc-cta-secondary:hover { gap: 8px; }

        /* ── ANIMATIONS ────────────────────────────────── */
        @keyframes hcFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 640px) {
          .hc-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .hc-tabs { justify-content: flex-start; overflow-x: auto; flex-wrap: nowrap; padding-bottom: 4px; }
          .hc-quick-stats { flex-wrap: wrap; gap: 10px; }
        }

        @media (max-width: 400px) {
          .hc-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Inline toast */}
      {toast && (
        <div className={`hc-toast ${toast.type}`} role="alert">
          {toast.msg}
        </div>
      )}

      <section className="hc-section" aria-labelledby="hc-heading">

        {/* ── HEADER ──────────────────────────────────────────────── */}
        <div className="hc-header">
          <div className="hc-header-badge">
            <Sparkles size={11} /> Popular Courses
          </div>
          <h2 className="hc-title" id="hc-heading">
            Skills That Open <em>Real Doors</em>
          </h2>
          <p className="hc-subtitle">
            Hand-picked courses trusted by {(totalStudents / 1000).toFixed(0)}k+ learners.
            Project-based, mentor-supported, career-ready.
          </p>

          {/* Quick stats pill */}
          <div className="hc-quick-stats">
            <span className="hc-quick-stat">
              <BookOpen size={12} color="var(--cyan)" />
              <strong>{coursesData.length}</strong> courses
            </span>
            <div className="hc-qs-dot" />
            <span className="hc-quick-stat">
              <TrendingUp size={12} color="var(--cyan)" />
              <strong>{coursesData.filter(c => c.trending).length}</strong> trending
            </span>
            <div className="hc-qs-dot" />
            <span className="hc-quick-stat">
              <BadgeCheck size={12} color="var(--teal)" />
              <strong>{coursesData.filter(c => isCourseFree(c)).length}</strong> free
            </span>
          </div>
        </div>

        {/* ── TABS ────────────────────────────────────────────────── */}
        <div className="hc-tabs" role="tablist" aria-label="Filter courses">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`hc-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Trending" && <Flame size={12} style={{ marginRight: 3 }} />}
              {tab}
            </button>
          ))}
        </div>

        {/* ── COURSE GRID ─────────────────────────────────────────── */}
        <div className="hc-grid-wrap">
          <div className="hc-grid">
            {filtered.length === 0 ? (
              <div className="hc-empty">
                <div className="hc-empty-icon">
                  <BookOpen size={26} />
                </div>
                <h3 className="hc-empty-title">No courses in this category</h3>
              </div>
            ) : (
              filtered.map((course, index) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                  userRating={userRatings[course.id] || 0}
                  hover={hoverRatings[course.id] || 0}
                  onRate={handleRate}
                  onHover={handleHover}
                  onLeave={handleLeave}
                  onOpen={openCourse}
                  isLoggedIn={isLoggedIn}
                />
              ))
            )}
          </div>

          {/* ── CTA ───────────────────────────────────────────────── */}
          <div className="hc-cta-wrap">
            {/* FIX 5: handleBrowseClick defined + button has real children */}
            {/* FIX 6: CTA uses cyan gradient — not pink/purple conic */}
            <button
              type="button"
              className="hc-cta-btn"
              onClick={handleBrowseClick}
              aria-label="Browse all courses"
            >
              <BookOpen size={16} />
              Browse All Courses
              <ArrowRight size={15} className="hc-cta-btn-arrow" />
            </button>

            <button
              type="button"
              className="hc-cta-secondary"
              onClick={() => navigate("/faculty")}
            >
              Meet our instructors <ChevronRight size={13} />
            </button>

            <p className="hc-cta-note">
              <BadgeCheck size={12} color="var(--teal)" />
              No subscription needed · Learn at your own pace
            </p>
          </div>
        </div>

      </section>
    </>
  );
};

export default HomeCourses;