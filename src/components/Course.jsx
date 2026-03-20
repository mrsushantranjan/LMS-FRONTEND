import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Slide } from "react-toastify";
import {
  Search, SlidersHorizontal, SmilePlus,
  User, Star, ChevronDown, ChevronUp,
  BadgeCheck, Tag, BookOpen, X,
} from "lucide-react";

// ─── MOCK DATA (replace with your real source) ────────────────────────────────
const MOCK_COURSES = [
  { id: "1", name: "Full Stack Web Development", teacher: "Arjun Mehta", image: "https://picsum.photos/seed/web/400/220", price: { original: 2999, sale: 1499 }, category: "Development", level: "Beginner" },
  { id: "2", name: "UI/UX Design Mastery", teacher: "Priya Sharma", image: "https://picsum.photos/seed/uiux/400/220", price: { original: 1999, sale: null }, category: "Design", level: "Intermediate" },
  { id: "3", name: "Data Science with Python", teacher: "Rohit Verma", image: "https://picsum.photos/seed/data/400/220", price: null, category: "Data", level: "Advanced" },
  { id: "4", name: "React & Next.js Bootcamp", teacher: "Sneha Patel", image: "https://picsum.photos/seed/react/400/220", price: { original: 3499, sale: 2199 }, category: "Development", level: "Intermediate" },
  { id: "5", name: "Digital Marketing Pro", teacher: "Karan Shah", image: "https://picsum.photos/seed/mkt/400/220", price: null, category: "Marketing", level: "Beginner" },
  { id: "6", name: "Machine Learning A–Z", teacher: "Divya Nair", image: "https://picsum.photos/seed/ml/400/220", price: { original: 4999, sale: 2999 }, category: "Data", level: "Advanced" },
  { id: "7", name: "Graphic Design Essentials", teacher: "Amit Joshi", image: "https://picsum.photos/seed/gfx/400/220", price: { original: 1499, sale: null }, category: "Design", level: "Beginner" },
  { id: "8", name: "Cloud Computing & AWS", teacher: "Neha Gupta", image: "https://picsum.photos/seed/aws/400/220", price: { original: 5999, sale: 3499 }, category: "Development", level: "Advanced" },
  { id: "9", name: "Content Writing Fundamentals", teacher: "Ravi Kumar", image: "https://picsum.photos/seed/cw/400/220", price: null, category: "Marketing", level: "Beginner" },
  { id: "10", name: "Business Analytics", teacher: "Pooja Singh", image: "https://picsum.photos/seed/ba/400/220", price: { original: 2499, sale: 1799 }, category: "Data", level: "Intermediate" },
];

const CATEGORIES = ["All", "Development", "Design", "Data", "Marketing"];
const LEVELS     = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const VISIBLE_COUNT = 8;

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const isCourseFree = (course) =>
  !course.price || (course.price.original == null && course.price.sale == null);

// FIX 1: getPriceDisplay now always returns a consistent shape
// Old code returned either a string OR an object — caused `typeof` checks everywhere
const getPriceDisplay = (course) => {
  if (isCourseFree(course)) return { type: "free" };
  const { original, sale } = course.price ?? {};
  if (sale != null)      return { type: "sale", current: `₹${sale}`, original: original > sale ? `₹${original}` : null };
  if (original != null)  return { type: "paid", current: `₹${original}`, original: null };
  return { type: "free" };
};

const getDiscount = (course) => {
  if (!course.price?.sale || !course.price?.original) return null;
  return Math.round(((course.price.original - course.price.sale) / course.price.original) * 100);
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

// Star rating — interactive, stops event propagation so card click doesn't fire
// FIX 2: Missing e.stopPropagation() on star buttons — clicking star was also
//         triggering openCourse() on the parent card div
const StarRating = ({ courseId, rating, onRate }) => (
  <div style={{ display: "flex", gap: "2px" }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        onClick={(e) => { e.stopPropagation(); onRate(courseId, star); }}
        onKeyDown={(e) => e.stopPropagation()}
        aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
        style={{
          background: "none", border: "none", cursor: "pointer", padding: "1px",
          color: star <= rating ? "#f59e0b" : "#cbd5e1",
          transition: "color 0.15s ease, transform 0.15s ease",
          lineHeight: 1,
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <Star size={14} fill={star <= rating ? "#f59e0b" : "none"} />
      </button>
    ))}
  </div>
);

// Course card
const CourseCard = ({ course, index, userRating, onRate, onOpen }) => {
  const price    = getPriceDisplay(course);
  const discount = getDiscount(course);
  const isFree   = price.type === "free";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(course.id)}
      onKeyDown={(e) => { if (e.key === "Enter") onOpen(course.id); }}
      className="cp-card"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      {/* Thumbnail */}
      <div className="cp-card-img-wrap">
        <img
          src={course.image}
          alt={course.name}
          className="cp-card-img"
          loading="lazy"
        />
        {/* Badges */}
        <div className="cp-card-badges">
          {discount && (
            <span className="cp-badge cp-badge-discount">
              <Tag size={10} /> {discount}% OFF
            </span>
          )}
          {isFree && (
            <span className="cp-badge cp-badge-free">
              <BadgeCheck size={10} /> Free
            </span>
          )}
        </div>
        {/* Level pill */}
        <span className="cp-card-level">{course.level}</span>
        {/* Hover overlay */}
        <div className="cp-card-overlay">
          <BookOpen size={20} color="#fff" />
          <span>View Course</span>
        </div>
      </div>

      {/* Body */}
      <div className="cp-card-body">
        <span className="cp-card-category">{course.category}</span>
        <h3 className="cp-card-name">{course.name}</h3>

        <div className="cp-card-teacher">
          <User size={12} />
          <span>{course.teacher}</span>
        </div>

        <div className="cp-card-footer">
          {/* Rating */}
          <StarRating courseId={course.id} rating={userRating} onRate={onRate} />

          {/* Price */}
          <div className="cp-card-price">
            {isFree ? (
              <span className="cp-price-free">Free</span>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span className="cp-price-current">{price.current}</span>
                {price.original && (
                  <span className="cp-price-original">{price.original}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const CoursePage = () => {
  const navigate = useNavigate();

  // FIX 3: localStorage.getItem inside useState initialiser had no guard for
  //         SSR / private-browsing environments — wrapped in try/catch (kept)
  //         but also normalised the stored value shape to match new rating format
  const [ratings, setRatings] = useState(() => {
    try {
      const raw = localStorage.getItem("userCourseRatings");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  const [searchQuery, setSearchQuery]   = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel]   = useState("All Levels");
  const [showAll, setShowAll]           = useState(false);
  const [showFilters, setShowFilters]   = useState(false);

  // ── Auth helper (replace with your real auth check) ───────────────────────
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const showLoginToast = () => {
    toast.error("Please login to access this course", {
      position: "top-right",
      transition: Slide,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  // ── Open course ────────────────────────────────────────────────────────────
  const openCourse = useCallback((id) => {
    if (!isLoggedIn) { showLoginToast(); return; }
    navigate(`/courses/${id}`);
  }, [isLoggedIn, navigate]);

  // ── Rating handler ─────────────────────────────────────────────────────────
  // FIX 4: handleRating was referenced in JSX but never defined in snippet
  const handleRating = useCallback((courseId, star) => {
    setRatings((prev) => {
      const next = { ...prev, [courseId]: star };
      try { localStorage.setItem("userCourseRatings", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  // ── Filter logic ───────────────────────────────────────────────────────────
  const filteredCourses = MOCK_COURSES.filter((c) => {
    const matchSearch   = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = activeCategory === "All" || c.category === activeCategory;
    const matchLevel    = activeLevel === "All Levels" || c.level === activeLevel;
    return matchSearch && matchCategory && matchLevel;
  });

  // FIX 5: visibleCourses used `showAll` but `showAll` reset was only tied to
  //         searchQuery — now also resets when category/level filters change
  const visibleCourses  = showAll ? filteredCourses : filteredCourses.slice(0, VISIBLE_COUNT);
  const remainingCount  = Math.max(0, filteredCourses.length - VISIBLE_COUNT);
  const hasActiveFilter = activeCategory !== "All" || activeLevel !== "All Levels" || searchQuery;

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    setActiveLevel("All Levels");
    setShowAll(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-dark:   #0a5c73;
          --cyan-mid:    #0891b2;
          --blue:        #0369a1;
          --slate:       #475569;
          --slate-light: #94a3b8;
          --border:      rgba(14,116,144,0.14);
          --bg:          #f0f9ff;
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
          --radius:      14px;
          --shadow:      0 2px 16px rgba(14,116,144,0.07);
          --shadow-hover:0 10px 36px rgba(14,116,144,0.14);
        }

        .cp-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          padding: 88px 24px 72px;
        }

        /* ── HEADER ──────────────────────────────────── */
        .cp-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 48px;
        }

        .cp-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .cp-title {
          font-family: var(--ff-display);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 700;
          color: #0c1a2e;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .cp-title span {
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cp-subtitle {
          font-size: 0.93rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
        }

        /* ── CONTROLS BAR ─────────────────────────────── */
        .cp-controls {
          max-width: 1200px;
          margin: 0 auto 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cp-search-row {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .cp-search-wrap {
          flex: 1;
          position: relative;
        }

        .cp-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--slate-light);
          pointer-events: none;
        }

        .cp-search {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border: 1.5px solid var(--border);
          border-radius: 100px;
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.875rem;
          font-weight: 300;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .cp-search::placeholder { color: #cbd5e1; }
        .cp-search:focus {
          border-color: var(--cyan);
          box-shadow: 0 0 0 3px rgba(14,116,144,0.1);
        }

        .cp-filter-toggle {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 11px 18px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--slate);
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .cp-filter-toggle:hover,
        .cp-filter-toggle.active {
          border-color: var(--cyan);
          color: var(--cyan);
          background: rgba(14,116,144,0.05);
        }

        /* ── FILTER PANEL ────────────────────────────── */
        .cp-filter-panel {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          padding: 20px 24px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          animation: slideDown 0.25s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cp-filter-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
          min-width: 200px;
        }

        .cp-filter-label {
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--slate-light);
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .cp-filter-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .cp-filter-pill {
          padding: 6px 14px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--bg);
          font-family: var(--ff-body);
          font-size: 0.78rem;
          font-weight: 400;
          color: var(--slate);
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .cp-filter-pill:hover {
          border-color: var(--cyan);
          color: var(--cyan);
        }

        .cp-filter-pill.active {
          background: var(--cyan);
          border-color: var(--cyan);
          color: var(--white);
          font-weight: 500;
        }

        /* Active filter summary row */
        .cp-active-filters {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .cp-active-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.2);
          border-radius: 100px;
          font-size: 0.73rem;
          color: var(--cyan);
          font-weight: 500;
        }

        .cp-clear-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          background: none;
          border: 1px solid rgba(239,68,68,0.25);
          border-radius: 100px;
          font-family: var(--ff-body);
          font-size: 0.73rem;
          color: #ef4444;
          cursor: pointer;
          transition: all 0.18s ease;
        }
        .cp-clear-btn:hover {
          background: rgba(239,68,68,0.06);
        }

        /* Result count */
        .cp-result-count {
          font-size: 0.8rem;
          color: var(--slate-light);
          font-weight: 300;
          margin-left: auto;
        }

        /* ── GRID ─────────────────────────────────────── */
        .cp-grid-wrap {
          max-width: 1200px;
          margin: 0 auto;
        }

        .cp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
          gap: 22px;
          margin-bottom: 36px;
        }

        /* ── COURSE CARD ──────────────────────────────── */
        .cp-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow);
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.28s ease,
                      border-color 0.28s ease;
          opacity: 0;
          animation: cardIn 0.45s ease forwards;
          outline: none;
        }

        .cp-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(14,116,144,0.28);
        }

        .cp-card:focus-visible {
          outline: 2px solid var(--cyan);
          outline-offset: 2px;
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Thumbnail */
        .cp-card-img-wrap {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: hidden;
          background: #e2e8f0;
        }

        .cp-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .cp-card:hover .cp-card-img {
          transform: scale(1.06);
        }

        .cp-card-badges {
          position: absolute;
          top: 10px;
          left: 10px;
          display: flex;
          gap: 5px;
        }

        .cp-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 9px;
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .cp-badge-discount {
          background: #0f172a;
          color: #f59e0b;
        }

        .cp-badge-free {
          background: #0f766e;
          color: #fff;
        }

        .cp-card-level {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.63rem;
          font-weight: 500;
          background: rgba(255,255,255,0.88);
          color: var(--slate);
          backdrop-filter: blur(4px);
          letter-spacing: 0.04em;
        }

        .cp-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10,92,115,0.82);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          opacity: 0;
          transition: opacity 0.25s ease;
          backdrop-filter: blur(2px);
        }

        .cp-card:hover .cp-card-overlay {
          opacity: 1;
        }

        /* Card body */
        .cp-card-body {
          padding: 18px 18px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cp-card-category {
          font-size: 0.68rem;
          font-weight: 500;
          color: var(--cyan);
          text-transform: uppercase;
          letter-spacing: 0.09em;
        }

        .cp-card-name {
          font-family: var(--ff-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: #0c1a2e;
          line-height: 1.25;
          letter-spacing: -0.01em;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .cp-card-teacher {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        .cp-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid rgba(14,116,144,0.07);
          margin-top: 2px;
        }

        .cp-price-free {
          font-size: 0.85rem;
          font-weight: 600;
          color: #0f766e;
        }

        .cp-price-current {
          font-size: 0.92rem;
          font-weight: 600;
          color: #0c1a2e;
        }

        .cp-price-original {
          font-size: 0.75rem;
          color: var(--slate-light);
          text-decoration: line-through;
        }

        /* ── EMPTY STATE ──────────────────────────────── */
        .cp-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 72px 24px;
          text-align: center;
          gap: 14px;
        }

        .cp-empty-icon {
          width: 64px; height: 64px;
          background: rgba(14,116,144,0.06);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--slate-light);
        }

        .cp-empty-title {
          font-family: var(--ff-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: #0c1a2e;
        }

        .cp-empty-sub {
          font-size: 0.87rem;
          color: var(--slate-light);
          font-weight: 300;
          max-width: 320px;
        }

        .cp-empty-btn {
          padding: 10px 24px;
          border-radius: 100px;
          background: var(--cyan);
          color: #fff;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 4px;
        }

        .cp-empty-btn:hover {
          background: var(--cyan-dark);
          transform: translateY(-1px);
        }

        /* ── SHOW MORE ────────────────────────────────── */
        .cp-show-more-wrap {
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }

        .cp-show-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 12px 28px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--cyan);
          cursor: pointer;
          transition: all 0.22s ease;
          box-shadow: var(--shadow);
        }

        .cp-show-more-btn:hover {
          border-color: var(--cyan);
          background: rgba(14,116,144,0.05);
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }

        @media (max-width: 640px) {
          .cp-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
          .cp-search-row { flex-direction: column; }
          .cp-filter-toggle { width: 100%; justify-content: center; }
        }

        @media (max-width: 420px) {
          .cp-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cp-page">

        {/* ── HEADER ────────────────────────────────────────────────── */}
        <div className="cp-header">
          <div className="cp-badge">
            <BookOpen size={12} /> Our Courses
          </div>
          <h1 className="cp-title">
            Find Your Next <span>Skill</span>
          </h1>
          <p className="cp-subtitle">
            Browse {MOCK_COURSES.length} expert-led courses across development,
            design, data, and more.
          </p>
        </div>

        {/* ── CONTROLS ──────────────────────────────────────────────── */}
        <div className="cp-controls">

          {/* Search + filter toggle */}
          <div className="cp-search-row">
            <div className="cp-search-wrap">
              <Search size={15} className="cp-search-icon" />
              <input
                className="cp-search"
                type="text"
                placeholder="Search courses or instructors…"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
              />
            </div>
            <button
              className={`cp-filter-toggle ${showFilters ? "active" : ""}`}
              onClick={() => setShowFilters((p) => !p)}
            >
              <SlidersHorizontal size={14} />
              Filters
              {showFilters ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          </div>

          {/* Filter panel */}
          {showFilters && (
            <div className="cp-filter-panel">
              <div className="cp-filter-group">
                <div className="cp-filter-label">Category</div>
                <div className="cp-filter-pills">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      className={`cp-filter-pill ${activeCategory === cat ? "active" : ""}`}
                      onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="cp-filter-group">
                <div className="cp-filter-label">Level</div>
                <div className="cp-filter-pills">
                  {LEVELS.map((lvl) => (
                    <button
                      key={lvl}
                      className={`cp-filter-pill ${activeLevel === lvl ? "active" : ""}`}
                      onClick={() => { setActiveLevel(lvl); setShowAll(false); }}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Active filters summary */}
          {hasActiveFilter && (
            <div className="cp-active-filters">
              {searchQuery && (
                <span className="cp-active-tag">
                  <Search size={10} /> "{searchQuery}"
                </span>
              )}
              {activeCategory !== "All" && (
                <span className="cp-active-tag">{activeCategory}</span>
              )}
              {activeLevel !== "All Levels" && (
                <span className="cp-active-tag">{activeLevel}</span>
              )}
              <button className="cp-clear-btn" onClick={clearFilters}>
                <X size={10} /> Clear all
              </button>
              <span className="cp-result-count">
                {filteredCourses.length} result{filteredCourses.length !== 1 ? "s" : ""}
              </span>
            </div>
          )}
        </div>

        {/* ── GRID ──────────────────────────────────────────────────── */}
        <div className="cp-grid-wrap">
          <div className="cp-grid">
            {filteredCourses.length === 0 ? (
              <div className="cp-empty">
                <div className="cp-empty-icon">
                  <SmilePlus size={28} />
                </div>
                <h3 className="cp-empty-title">No courses found</h3>
                <p className="cp-empty-sub">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button className="cp-empty-btn" onClick={clearFilters}>
                  Show All Courses
                </button>
              </div>
            ) : (
              visibleCourses.map((course, index) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                  userRating={ratings[course.id] || 0}
                  onRate={handleRating}
                  onOpen={openCourse}
                />
              ))
            )}
          </div>

          {/* Show more / less */}
          {filteredCourses.length > VISIBLE_COUNT && (
            <div className="cp-show-more-wrap">
              <button
                className="cp-show-more-btn"
                onClick={() => setShowAll((p) => !p)}
              >
                {showAll ? (
                  <><ChevronUp size={15} /> Show Less</>
                ) : (
                  <><ChevronDown size={15} /> Show {remainingCount} More Courses</>
                )}
              </button>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default CoursePage;