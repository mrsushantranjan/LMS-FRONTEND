import React, { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search, SlidersHorizontal, SmilePlus, User,
  Star, ChevronDown, ChevronUp, BadgeCheck,
  Tag, BookOpen, X, Clock, Users, TrendingUp,
  Layers, Code2, Palette, BarChart3, Megaphone,
} from "lucide-react";

// ─── COURSE DATA ──────────────────────────────────────────────────────────────
// Replace this with your real data import:  import { coursesData } from "../assets/dummyData"
const coursesData = [
  { id: "1",  name: "Full Stack Web Development",    teacher: "Arjun Mehta",   image: "https://picsum.photos/seed/c1/400/220",  isFree: false, price: { original: 2999, sale: 1499 }, category: "Development", level: "Intermediate", students: 4820, rating: 4.8, duration: 42 },
  { id: "2",  name: "UI/UX Design Mastery",           teacher: "Priya Sharma",  image: "https://picsum.photos/seed/c2/400/220",  isFree: false, price: { original: 1999, sale: null  }, category: "Design",       level: "Beginner",     students: 2310, rating: 4.9, duration: 28 },
  { id: "3",  name: "Data Science with Python",       teacher: "Rohit Verma",   image: "https://picsum.photos/seed/c3/400/220",  isFree: true,  price: null,                              category: "Data",         level: "Advanced",     students: 6100, rating: 4.7, duration: 56 },
  { id: "4",  name: "React & Next.js Bootcamp",       teacher: "Sneha Patel",   image: "https://picsum.photos/seed/c4/400/220",  isFree: false, price: { original: 3499, sale: 2199 }, category: "Development", level: "Intermediate", students: 3750, rating: 4.8, duration: 38 },
  { id: "5",  name: "Digital Marketing Pro",          teacher: "Karan Shah",    image: "https://picsum.photos/seed/c5/400/220",  isFree: true,  price: null,                              category: "Marketing",    level: "Beginner",     students: 1980, rating: 4.6, duration: 22 },
  { id: "6",  name: "Machine Learning A–Z",           teacher: "Divya Nair",    image: "https://picsum.photos/seed/c6/400/220",  isFree: false, price: { original: 4999, sale: 2999 }, category: "Data",         level: "Advanced",     students: 5420, rating: 4.9, duration: 64 },
  { id: "7",  name: "Graphic Design Essentials",      teacher: "Amit Joshi",    image: "https://picsum.photos/seed/c7/400/220",  isFree: false, price: { original: 1499, sale: null  }, category: "Design",       level: "Beginner",     students: 1240, rating: 4.5, duration: 18 },
  { id: "8",  name: "Cloud Computing & AWS",          teacher: "Neha Gupta",    image: "https://picsum.photos/seed/c8/400/220",  isFree: false, price: { original: 5999, sale: 3499 }, category: "Development", level: "Advanced",     students: 2890, rating: 4.7, duration: 50 },
  { id: "9",  name: "Content Writing Fundamentals",   teacher: "Ravi Kumar",    image: "https://picsum.photos/seed/c9/400/220",  isFree: true,  price: null,                              category: "Marketing",    level: "Beginner",     students: 890,  rating: 4.4, duration: 14 },
  { id: "10", name: "Business Analytics",             teacher: "Pooja Singh",   image: "https://picsum.photos/seed/c10/400/220", isFree: false, price: { original: 2499, sale: 1799 }, category: "Data",         level: "Intermediate", students: 3200, rating: 4.6, duration: 32 },
  { id: "11", name: "Node.js & Express APIs",         teacher: "Arjun Mehta",   image: "https://picsum.photos/seed/c11/400/220", isFree: false, price: { original: 2799, sale: 1699 }, category: "Development", level: "Intermediate", students: 2100, rating: 4.7, duration: 30 },
  { id: "12", name: "Figma for Beginners",            teacher: "Priya Sharma",  image: "https://picsum.photos/seed/c12/400/220", isFree: true,  price: null,                              category: "Design",       level: "Beginner",     students: 3400, rating: 4.8, duration: 16 },
];

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const VISIBLE_COUNT = 8;

const CATEGORIES = [
  { label: "All",         icon: Layers     },
  { label: "Development", icon: Code2      },
  { label: "Design",      icon: Palette    },
  { label: "Data",        icon: BarChart3  },
  { label: "Marketing",   icon: Megaphone  },
];

const LEVELS   = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const SORT_OPS = ["Popular", "Newest", "Price: Low to High", "Price: High to Low", "Top Rated"];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const isCourseFree = (course) =>
  course.isFree || !course.price ||
  (course.price.original == null && course.price.sale == null);

const getPrice = (course) => {
  if (isCourseFree(course)) return { type: "free" };
  const { original, sale } = course.price ?? {};
  if (sale != null)     return { type: "sale",  current: sale,     display: `₹${sale}`,     original: original > sale ? `₹${original}` : null, discount: Math.round(((original - sale) / original) * 100) };
  if (original != null) return { type: "paid",  current: original, display: `₹${original}`, original: null, discount: null };
  return { type: "free" };
};

const fmtStudents = (n) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

// ─── STAR RATING COMPONENT ────────────────────────────────────────────────────
const StarRating = React.memo(({ courseId, rating, onRate }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={(e) => { e.stopPropagation(); onRate(courseId, star); }}
        onKeyDown={(e) => e.stopPropagation()}
        aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
        className="cr-star-btn"
        data-filled={star <= rating}
      >
        <Star
          size={13}
          fill={star <= rating ? "#f59e0b" : "none"}
          color={star <= rating ? "#f59e0b" : "#cbd5e1"}
        />
      </button>
    ))}
  </div>
));

// ─── COURSE CARD ──────────────────────────────────────────────────────────────
const CourseCard = React.memo(({ course, index, userRating, onRate, onOpen }) => {
  const price = getPrice(course);

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Open course: ${course.name}`}
      onClick={() => onOpen(course.id)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(course.id); } }}
      className="cr-card"
      style={{ animationDelay: `${Math.min(index, 7) * 65}ms` }}
    >
      {/* Thumbnail */}
      <div className="cr-thumb">
        <img
          src={course.image}
          alt={course.name}
          className="cr-thumb-img"
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div className="cr-thumb-overlay" aria-hidden="true">
          <div className="cr-thumb-play">
            <BookOpen size={18} color="#fff" />
          </div>
          <span className="cr-thumb-cta">View Course</span>
        </div>

        {/* Badges */}
        <div className="cr-badges">
          {price.type === "free" && (
            <span className="cr-badge cr-badge-free">
              <BadgeCheck size={9} /> Free
            </span>
          )}
          {price.discount && (
            <span className="cr-badge cr-badge-sale">
              <Tag size={9} /> {price.discount}% off
            </span>
          )}
        </div>

        {/* Level */}
        <span className="cr-level">{course.level}</span>
      </div>

      {/* Body */}
      <div className="cr-body">
        <span className="cr-category">{course.category}</span>

        <h3 className="cr-name">{course.name}</h3>

        <div className="cr-teacher">
          <User size={11} />
          <span>{course.teacher}</span>
        </div>

        <div className="cr-meta">
          <span className="cr-meta-item">
            <Clock size={11} /> {course.duration}h
          </span>
          <span className="cr-meta-item">
            <Users size={11} /> {fmtStudents(course.students)}
          </span>
          <span className="cr-meta-item cr-rating-display">
            <Star size={11} fill="#f59e0b" color="#f59e0b" />
            {course.rating}
          </span>
        </div>

        <div className="cr-footer">
          {/* Interactive user rating */}
          <StarRating courseId={course.id} rating={userRating} onRate={onRate} />

          {/* Price */}
          <div className="cr-price">
            {price.type === "free" ? (
              <span className="cr-price-free">Free</span>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span className="cr-price-current">{price.display}</span>
                {price.original && (
                  <span className="cr-price-original">{price.original}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
});

// ─── MAIN PAGE COMPONENT ──────────────────────────────────────────────────────
const CoursePage = () => {
  const navigate = useNavigate();

  // ── State ──────────────────────────────────────────────────────────────────
  const [ratings, setRatings] = useState(() => {
    try {
      const raw = localStorage.getItem("userCourseRatings");
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  });

  const [searchQuery,     setSearchQuery]     = useState("");
  const [activeCategory,  setActiveCategory]  = useState("All");
  const [activeLevel,     setActiveLevel]     = useState("All Levels");
  const [sortBy,          setSortBy]          = useState("Popular");
  const [showAll,         setShowAll]         = useState(false);
  const [showFilters,     setShowFilters]     = useState(false);

  // ── Auth ───────────────────────────────────────────────────────────────────
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  // ── Toast (inline — no external lib dependency) ───────────────────────────
  const [toastMsg, setToastMsg] = useState(null);
  const showToast = useCallback((msg, type = "error") => {
    setToastMsg({ msg, type });
    setTimeout(() => setToastMsg(null), 3000);
  }, []);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const openCourse = useCallback((id) => {
    if (!isLoggedIn) { showToast("Please login to access this course"); return; }
    navigate(`/courses/${id}`);
  }, [isLoggedIn, navigate, showToast]);

  const handleRating = useCallback((courseId, star) => {
    setRatings((prev) => {
      const next = { ...prev, [courseId]: star };
      try { localStorage.setItem("userCourseRatings", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setActiveCategory("All");
    setActiveLevel("All Levels");
    setSortBy("Popular");
    setShowAll(false);
  }, []);

  const handleCategoryChange = useCallback((cat) => {
    setActiveCategory(cat);
    setShowAll(false);
  }, []);

  const handleLevelChange = useCallback((lvl) => {
    setActiveLevel(lvl);
    setShowAll(false);
  }, []);

  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value);
    setShowAll(false);
  }, []);

  // ── Filter + Sort (memoized) ───────────────────────────────────────────────
  const filteredCourses = useMemo(() => {
    let list = coursesData.filter((c) => {
      const q = searchQuery.toLowerCase();
      const matchSearch   = !q || c.name.toLowerCase().includes(q) || c.teacher.toLowerCase().includes(q) || c.category.toLowerCase().includes(q);
      const matchCategory = activeCategory === "All" || c.category === activeCategory;
      const matchLevel    = activeLevel === "All Levels" || c.level === activeLevel;
      return matchSearch && matchCategory && matchLevel;
    });

    switch (sortBy) {
      case "Top Rated":           list = [...list].sort((a, b) => b.rating - a.rating);   break;
      case "Popular":             list = [...list].sort((a, b) => b.students - a.students); break;
      case "Price: Low to High":  list = [...list].sort((a, b) => { const pa = getPrice(a); const pb = getPrice(b); return (pa.current ?? 0) - (pb.current ?? 0); }); break;
      case "Price: High to Low":  list = [...list].sort((a, b) => { const pa = getPrice(a); const pb = getPrice(b); return (pb.current ?? 0) - (pa.current ?? 0); }); break;
      default: break;
    }
    return list;
  }, [searchQuery, activeCategory, activeLevel, sortBy]);

  const visibleCourses  = useMemo(() => showAll ? filteredCourses : filteredCourses.slice(0, VISIBLE_COUNT), [filteredCourses, showAll]);
  const remainingCount  = Math.max(0, filteredCourses.length - VISIBLE_COUNT);
  const hasActiveFilter = activeCategory !== "All" || activeLevel !== "All Levels" || searchQuery !== "" || sortBy !== "Popular";

  // ── Category stats ─────────────────────────────────────────────────────────
  const categoryCounts = useMemo(() => {
    const counts = {};
    coursesData.forEach((c) => { counts[c.category] = (counts[c.category] || 0) + 1; });
    return counts;
  }, []);

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-dark:   #0a5c73;
          --cyan-mid:    #0891b2;
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
          --shadow-hover:0 10px 36px rgba(14,116,144,0.15);
          --radius:      16px;
        }

        /* ── PAGE ──────────────────────────────────────── */
        .cr-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          padding: 88px 24px 80px;
        }

        /* ── TOAST ─────────────────────────────────────── */
        .cr-toast {
          position: fixed;
          top: 76px; right: 20px;
          z-index: 9999;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 0.83rem;
          font-weight: 500;
          color: #fff;
          box-shadow: 0 8px 28px rgba(0,0,0,0.16);
          animation: slideInRight 0.3s ease;
          pointer-events: none;
          font-family: var(--ff-body);
        }
        .cr-toast.error   { background: #ef4444; }
        .cr-toast.success { background: var(--teal); }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── HEADER ────────────────────────────────────── */
        .cr-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 48px;
          animation: fadeUp 0.5s ease both;
        }

        .cr-header-badge {
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

        .cr-title {
          font-family: var(--ff-display);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 700;
          color: #0c1a2e;
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin-bottom: 12px;
        }

        .cr-title span {
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cr-subtitle {
          font-size: 0.92rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
        }

        /* ── CATEGORY TABS ─────────────────────────────── */
        .cr-cat-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          animation: fadeUp 0.5s 0.1s ease both;
        }

        .cr-cat-tab {
          display: inline-flex;
          align-items: center;
          gap: 6px;
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
        }

        .cr-cat-tab:hover {
          border-color: var(--cyan);
          color: var(--cyan);
        }

        .cr-cat-tab.active {
          background: var(--cyan);
          border-color: var(--cyan);
          color: var(--white);
          font-weight: 500;
          box-shadow: 0 4px 14px rgba(14,116,144,0.25);
        }

        .cr-cat-count {
          font-size: 0.65rem;
          padding: 1px 6px;
          border-radius: 100px;
          background: rgba(255,255,255,0.25);
          font-weight: 600;
        }

        .cr-cat-tab:not(.active) .cr-cat-count {
          background: rgba(14,116,144,0.08);
          color: var(--cyan);
        }

        /* ── SEARCH + CONTROLS ─────────────────────────── */
        .cr-controls {
          max-width: 1200px;
          margin: 0 auto 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeUp 0.5s 0.15s ease both;
        }

        .cr-search-row {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .cr-search-wrap {
          position: relative;
          flex: 1;
        }

        .cr-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--slate-light);
          pointer-events: none;
        }

        .cr-search-clear {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: var(--slate-light);
          padding: 2px;
          display: flex;
          align-items: center;
          transition: color 0.15s;
        }
        .cr-search-clear:hover { color: #ef4444; }

        .cr-search {
          width: 100%;
          padding: 12px 40px 12px 42px;
          border: 1.5px solid var(--border);
          border-radius: 100px;
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.875rem;
          font-weight: 300;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-shadow: var(--shadow);
        }
        .cr-search::placeholder { color: #cbd5e1; }
        .cr-search:focus {
          border-color: var(--cyan);
          box-shadow: 0 0 0 3px rgba(14,116,144,0.1);
        }

        .cr-sort-select {
          padding: 11px 14px;
          border: 1.5px solid var(--border);
          border-radius: 100px;
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--slate);
          cursor: pointer;
          outline: none;
          transition: border-color 0.2s;
          box-shadow: var(--shadow);
          appearance: none;
          padding-right: 32px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          min-width: 170px;
        }
        .cr-sort-select:focus { border-color: var(--cyan); }

        .cr-filter-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 11px 18px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--slate);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
          box-shadow: var(--shadow);
        }
        .cr-filter-btn:hover,
        .cr-filter-btn.open {
          border-color: var(--cyan);
          color: var(--cyan);
        }

        /* ── FILTER PANEL ──────────────────────────────── */
        .cr-filter-panel {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 24px;
          box-shadow: var(--shadow);
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          animation: slideDown 0.25s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cr-filter-group {
          flex: 1;
          min-width: 180px;
        }

        .cr-filter-label {
          font-size: 0.68rem;
          font-weight: 500;
          color: var(--slate-light);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .cr-filter-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .cr-filter-pill {
          padding: 6px 14px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--bg);
          font-family: var(--ff-body);
          font-size: 0.76rem;
          color: var(--slate);
          cursor: pointer;
          transition: all 0.18s;
        }
        .cr-filter-pill:hover   { border-color: var(--cyan); color: var(--cyan); }
        .cr-filter-pill.active  { background: var(--cyan); border-color: var(--cyan); color: #fff; font-weight: 500; }

        /* ── ACTIVE FILTER BAR ─────────────────────────── */
        .cr-filter-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .cr-filter-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 11px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 100px;
          font-size: 0.72rem;
          color: var(--cyan);
          font-weight: 500;
        }

        .cr-clear-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          background: none;
          border: 1px solid rgba(239,68,68,0.25);
          border-radius: 100px;
          font-family: var(--ff-body);
          font-size: 0.72rem;
          color: #ef4444;
          cursor: pointer;
          transition: background 0.18s;
        }
        .cr-clear-btn:hover { background: rgba(239,68,68,0.06); }

        .cr-result-count {
          margin-left: auto;
          font-size: 0.78rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── GRID ──────────────────────────────────────── */
        .cr-grid-wrap {
          max-width: 1200px;
          margin: 0 auto;
        }

        .cr-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }

        /* ── COURSE CARD ───────────────────────────────── */
        .cr-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow);
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.28s ease,
                      border-color 0.22s ease;
          opacity: 0;
          animation: cardIn 0.42s ease forwards;
          outline: none;
          display: flex;
          flex-direction: column;
        }

        .cr-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(14,116,144,0.3);
        }

        .cr-card:focus-visible {
          outline: 2px solid var(--cyan);
          outline-offset: 2px;
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Thumbnail */
        .cr-thumb {
          position: relative;
          width: 100%;
          height: 158px;
          overflow: hidden;
          background: #e2e8f0;
          flex-shrink: 0;
        }

        .cr-thumb-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .cr-card:hover .cr-thumb-img { transform: scale(1.06); }

        .cr-thumb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10,92,115,0.8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 7px;
          opacity: 0;
          transition: opacity 0.24s ease;
          backdrop-filter: blur(2px);
        }
        .cr-card:hover .cr-thumb-overlay { opacity: 1; }

        .cr-thumb-play {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          border: 1.5px solid rgba(255,255,255,0.4);
          display: flex; align-items: center; justify-content: center;
        }

        .cr-thumb-cta {
          font-size: 0.76rem;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.05em;
        }

        .cr-badges {
          position: absolute;
          top: 9px; left: 9px;
          display: flex; gap: 5px;
        }

        .cr-badge {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 3px 8px;
          border-radius: 100px;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .cr-badge-free { background: var(--teal); color: #fff; }
        .cr-badge-sale { background: #0f172a; color: var(--amber); }

        .cr-level {
          position: absolute;
          top: 9px; right: 9px;
          padding: 3px 9px;
          border-radius: 100px;
          font-size: 0.6rem;
          font-weight: 500;
          background: rgba(255,255,255,0.9);
          color: var(--slate);
          backdrop-filter: blur(4px);
          letter-spacing: 0.04em;
        }

        /* Card body */
        .cr-body {
          padding: 16px 16px 14px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          flex: 1;
        }

        .cr-category {
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--cyan);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .cr-name {
          font-family: var(--ff-display);
          font-size: 1rem;
          font-weight: 600;
          color: #0c1a2e;
          line-height: 1.25;
          letter-spacing: -0.01em;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .cr-teacher {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        .cr-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cr-meta-item {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.69rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        .cr-rating-display { color: #92400e; font-weight: 500; }

        .cr-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid rgba(14,116,144,0.07);
          margin-top: auto;
        }

        .cr-star-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 2px;
          line-height: 0;
          transition: transform 0.15s ease;
        }
        .cr-star-btn:hover { transform: scale(1.25); }

        .cr-price-free    { font-size: 0.82rem; font-weight: 700; color: var(--teal); }
        .cr-price-current { font-size: 0.88rem; font-weight: 700; color: #0c1a2e; }
        .cr-price-original{ font-size: 0.72rem; color: var(--slate-light); text-decoration: line-through; }

        /* ── EMPTY STATE ───────────────────────────────── */
        .cr-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          text-align: center;
          gap: 14px;
        }

        .cr-empty-icon {
          width: 68px; height: 68px;
          background: rgba(14,116,144,0.06);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--slate-light);
        }

        .cr-empty-title {
          font-family: var(--ff-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: #0c1a2e;
        }

        .cr-empty-sub {
          font-size: 0.85rem;
          color: var(--slate-light);
          font-weight: 300;
          max-width: 300px;
          line-height: 1.6;
        }

        .cr-empty-btn {
          padding: 10px 26px;
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
        .cr-empty-btn:hover { background: var(--cyan-dark); transform: translateY(-1px); }

        /* ── SHOW MORE ─────────────────────────────────── */
        .cr-show-more {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 4px;
        }

        .cr-show-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 12px 30px;
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
        .cr-show-more-btn:hover {
          border-color: var(--cyan);
          background: rgba(14,116,144,0.05);
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }

        .cr-count-note {
          font-size: 0.78rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── ANIMATIONS ────────────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 640px) {
          .cr-grid           { grid-template-columns: 1fr 1fr; gap: 12px; }
          .cr-search-row     { flex-wrap: wrap; }
          .cr-sort-select    { min-width: 0; flex: 1; }
          .cr-cat-tabs       { justify-content: flex-start; overflow-x: auto; flex-wrap: nowrap; padding-bottom: 4px; }
        }
        @media (max-width: 400px) {
          .cr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── TOAST ───────────────────────────────────────────────────────── */}
      {toastMsg && (
        <div className={`cr-toast ${toastMsg.type}`} role="alert">
          {toastMsg.msg}
        </div>
      )}

      <div className="cr-page">

        {/* ── HEADER ────────────────────────────────────────────────────── */}
        <div className="cr-header">
          <div className="cr-header-badge">
            <BookOpen size={11} /> Explore Courses
          </div>
          <h1 className="cr-title">
            Find Your Next <span>Skill</span>
          </h1>
          <p className="cr-subtitle">
            {coursesData.length} expert-led courses across development, design, data &amp; marketing.
          </p>
        </div>

        {/* ── CATEGORY TABS ─────────────────────────────────────────────── */}
        <div className="cr-cat-tabs">
          {CATEGORIES.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className={`cr-cat-tab ${activeCategory === label ? "active" : ""}`}
              onClick={() => handleCategoryChange(label)}
            >
              <Icon size={13} />
              {label}
              <span className="cr-cat-count">
                {label === "All" ? coursesData.length : (categoryCounts[label] || 0)}
              </span>
            </button>
          ))}
        </div>

        {/* ── CONTROLS ──────────────────────────────────────────────────── */}
        <div className="cr-controls">

          <div className="cr-search-row">
            {/* Search */}
            <div className="cr-search-wrap">
              <Search size={15} className="cr-search-icon" />
              <input
                type="search"
                className="cr-search"
                placeholder="Search courses or instructors…"
                value={searchQuery}
                onChange={handleSearch}
                aria-label="Search courses"
              />
              {searchQuery && (
                <button className="cr-search-clear" onClick={() => { setSearchQuery(""); setShowAll(false); }} aria-label="Clear search">
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              className="cr-sort-select"
              value={sortBy}
              onChange={(e) => { setSortBy(e.target.value); setShowAll(false); }}
              aria-label="Sort courses"
            >
              {SORT_OPS.map((op) => <option key={op} value={op}>{op}</option>)}
            </select>

            {/* Filter toggle */}
            <button
              type="button"
              className={`cr-filter-btn ${showFilters ? "open" : ""}`}
              onClick={() => setShowFilters((p) => !p)}
              aria-expanded={showFilters}
            >
              <SlidersHorizontal size={14} />
              Filters
              {showFilters ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          </div>

          {/* Filter panel */}
          {showFilters && (
            <div className="cr-filter-panel">
              <div className="cr-filter-group">
                <div className="cr-filter-label">Level</div>
                <div className="cr-filter-pills">
                  {LEVELS.map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      className={`cr-filter-pill ${activeLevel === lvl ? "active" : ""}`}
                      onClick={() => handleLevelChange(lvl)}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
              <div className="cr-filter-group">
                <div className="cr-filter-label">Price</div>
                <div className="cr-filter-pills">
                  {["All", "Free", "Paid"].map((p) => (
                    <button key={p} type="button" className="cr-filter-pill">{p}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Active filter bar */}
          {hasActiveFilter && (
            <div className="cr-filter-bar">
              {searchQuery && (
                <span className="cr-filter-tag"><Search size={10} /> "{searchQuery}"</span>
              )}
              {activeCategory !== "All" && (
                <span className="cr-filter-tag">{activeCategory}</span>
              )}
              {activeLevel !== "All Levels" && (
                <span className="cr-filter-tag">{activeLevel}</span>
              )}
              {sortBy !== "Popular" && (
                <span className="cr-filter-tag"><TrendingUp size={10} /> {sortBy}</span>
              )}
              <button type="button" className="cr-clear-btn" onClick={clearFilters}>
                <X size={10} /> Clear all
              </button>
              <span className="cr-result-count">
                {filteredCourses.length} result{filteredCourses.length !== 1 ? "s" : ""}
              </span>
            </div>
          )}

        </div>

        {/* ── GRID ──────────────────────────────────────────────────────── */}
        <div className="cr-grid-wrap">
          <div className="cr-grid">
            {filteredCourses.length === 0 ? (
              <div className="cr-empty">
                <div className="cr-empty-icon">
                  <SmilePlus size={30} />
                </div>
                <h3 className="cr-empty-title">No courses found</h3>
                <p className="cr-empty-sub">
                  Try adjusting your search or filters to discover more courses.
                </p>
                <button type="button" className="cr-empty-btn" onClick={clearFilters}>
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
            <div className="cr-show-more">
              <button
                type="button"
                className="cr-show-more-btn"
                onClick={() => setShowAll((p) => !p)}
              >
                {showAll
                  ? <><ChevronUp size={15} /> Show Less</>
                  : <><ChevronDown size={15} /> Show {remainingCount} More</>
                }
              </button>
              {!showAll && (
                <span className="cr-count-note">
                  Showing {visibleCourses.length} of {filteredCourses.length}
                </span>
              )}
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default CoursePage;