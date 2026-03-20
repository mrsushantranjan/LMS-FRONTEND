import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  User, Star, Search, SlidersHorizontal,
  X, ChevronDown, ChevronUp, BookOpen,
  BadgeCheck, Tag, Flame, Clock, Users,
  TrendingUp, ArrowRight,
} from "lucide-react";

// ─── COURSE DATA ──────────────────────────────────────────────────────────────
// Replace with your real import: import { coursesData } from "../assets/dummyData"
const coursesData = [
  {
    id: "1",
    name: "React Masterclass",
    teacher: "Sophia Miller",
    image: "https://picsum.photos/seed/react/400/220",
    isFree: false,
    price: { original: 200, sale: 99 },
    category: "Development",
    level: "Intermediate",
    rating: 0,
    students: 4820,
    duration: 42,
    trending: true,
  },
  {
    id: "2",
    name: "Web Development",
    teacher: "John Smith",
    image: "https://picsum.photos/seed/webdev/400/220",
    isFree: true,
    price: null,
    category: "Development",
    level: "Beginner",
    rating: 0,
    students: 6100,
    duration: 38,
    trending: true,
  },
  {
    id: "3",
    name: "Advanced JavaScript",
    teacher: "Sarah Johnson",
    image: "https://picsum.photos/seed/js/400/220",
    isFree: false,
    price: { original: 149, sale: 79 },
    category: "Development",
    level: "Advanced",
    rating: 0,
    students: 3750,
    duration: 28,
    trending: false,
  },
  {
    id: "4",
    name: "UI/UX Design",
    teacher: "Mike Chen",
    image: "https://picsum.photos/seed/uiux/400/220",
    isFree: true,
    price: null,
    category: "Design",
    level: "Beginner",
    rating: 0,
    students: 2310,
    duration: 22,
    trending: true,
  },
  {
    id: "5",
    name: "Data Science",
    teacher: "Dr. Emily Wilson",
    image: "https://picsum.photos/seed/data/400/220",
    isFree: false,
    price: { original: 229, sale: 129 },
    category: "Data",
    level: "Advanced",
    rating: 0,
    students: 5420,
    duration: 56,
    trending: false,
  },
  {
    id: "6",
    name: "Mobile App Development",
    teacher: "Alex Rodriguez",
    image: "https://picsum.photos/seed/mobile/400/220",
    isFree: false,
    price: { original: 169, sale: 99 },
    category: "Development",
    level: "Intermediate",
    rating: 0,
    students: 1980,
    duration: 34,
    trending: true,
  },
  {
    id: "7",
    name: "Machine Learning Basics",
    teacher: "Dr. James Brown",
    image: "https://picsum.photos/seed/ml/400/220",
    isFree: true,
    price: null,
    category: "Data",
    level: "Intermediate",
    rating: 0,
    students: 4100,
    duration: 48,
    trending: false,
  },
  {
    id: "8",
    name: "Digital Marketing",
    teacher: "Lisa Wang",
    image: "https://picsum.photos/seed/mkt/400/220",
    isFree: false,
    price: { original: 139, sale: 69 },
    category: "Marketing",
    level: "Beginner",
    rating: 0,
    students: 2890,
    duration: 18,
    trending: true,
  },
  {
    id: "9",
    name: "Cloud Computing & AWS",
    teacher: "Neha Gupta",
    image: "https://picsum.photos/seed/aws/400/220",
    isFree: false,
    price: { original: 299, sale: 149 },
    category: "Development",
    level: "Advanced",
    rating: 0,
    students: 3200,
    duration: 50,
    trending: false,
  },
  {
    id: "10",
    name: "Python for Beginners",
    teacher: "Rohit Verma",
    image: "https://picsum.photos/seed/python/400/220",
    isFree: true,
    price: null,
    category: "Data",
    level: "Beginner",
    rating: 0,
    students: 7800,
    duration: 24,
    trending: true,
  },
  {
    id: "11",
    name: "Graphic Design Essentials",
    teacher: "Amit Joshi",
    image: "https://picsum.photos/seed/gfx/400/220",
    isFree: false,
    price: { original: 179, sale: 89 },
    category: "Design",
    level: "Beginner",
    rating: 0,
    students: 1560,
    duration: 16,
    trending: false,
  },
  {
    id: "12",
    name: "Business Analytics",
    teacher: "Pooja Singh",
    image: "https://picsum.photos/seed/ba/400/220",
    isFree: false,
    price: { original: 199, sale: 119 },
    category: "Data",
    level: "Intermediate",
    rating: 0,
    students: 2640,
    duration: 32,
    trending: false,
  },
];

const CATEGORIES = ["All", "Development", "Design", "Data", "Marketing"];
const LEVELS     = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const SORT_OPS   = ["Popular", "Newest", "Price: Low to High", "Price: High to Low", "Free First"];
const VISIBLE    = 8;

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const isFree = (c) => c.isFree || !c.price;

const getPrice = (c) => {
  if (isFree(c)) return { type: "free" };
  const { original, sale } = c.price;
  if (sale)     return { type: "sale", display: `₹${sale}`,     orig: `₹${original}`, pct: Math.round(((original - sale) / original) * 100) };
  if (original) return { type: "paid", display: `₹${original}`, orig: null, pct: null };
  return { type: "free" };
};

const fmtN = (n) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

// ─── INTERACTIVE STAR RATING ──────────────────────────────────────────────────
const StarRating = React.memo(({ courseId, rating, hover, onRate, onHover, onLeave }) => (
  <div style={{ display: "flex", gap: 3 }} onClick={(e) => e.stopPropagation()}>
    {[1, 2, 3, 4, 5].map((s) => (
      <button
        key={s}
        type="button"
        className="cdph-star-btn"
        onClick={(e) => { e.stopPropagation(); onRate(courseId, s); }}
        onMouseEnter={() => onHover(courseId, s)}
        onMouseLeave={() => onLeave(courseId)}
        aria-label={`Rate ${s}`}
      >
        <Star
          size={15}
          fill={(hover || rating) >= s ? "#f59e0b" : "none"}
          color={(hover || rating) >= s ? "#f59e0b" : "#d1d5db"}
        />
      </button>
    ))}
  </div>
));

// ─── COURSE CARD — matches the screenshot style exactly ──────────────────────
const CourseCard = React.memo(({ course, index, userRating, hover, onRate, onHover, onLeave, onOpen }) => {
  const p = getPrice(course);

  return (
    <article
      className="cdph-card"
      style={{ animationDelay: `${Math.min(index, 7) * 60}ms` }}
      onClick={() => onOpen(course.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") onOpen(course.id); }}
      aria-label={`Open ${course.name}`}
    >
      {/* Thumbnail */}
      <div className="cdph-thumb">
        <img
          src={course.image}
          alt={course.name}
          className="cdph-thumb-img"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="cdph-thumb-ov">
          <BookOpen size={20} color="#fff" />
          <span>View Course</span>
        </div>
        {/* Badges top-left */}
        <div className="cdph-badges">
          {p.type === "free" && <span className="cdph-b cdph-b-free"><BadgeCheck size={9}/> Free</span>}
          {p.pct            && <span className="cdph-b cdph-b-sale"><Tag size={9}/> {p.pct}% off</span>}
          {course.trending  && <span className="cdph-b cdph-b-hot"><Flame size={9}/> Hot</span>}
        </div>
        {/* Level top-right */}
        <span className="cdph-level">{course.level}</span>
      </div>

      {/* Card body — matches screenshot layout */}
      <div className="cdph-body">

        {/* Course name */}
        <h3 className="cdph-name">{course.name}</h3>

        {/* Teacher */}
        <div className="cdph-teacher">
          <User size={13} color="#94a3b8" />
          <span>{course.teacher}</span>
        </div>

        {/* Interactive star rating */}
        <div className="cdph-rating-row">
          <StarRating
            courseId={course.id}
            rating={userRating}
            hover={hover}
            onRate={onRate}
            onHover={onHover}
            onLeave={onLeave}
          />
          {userRating > 0 && (
            <span className="cdph-rating-val">{userRating}.0</span>
          )}
        </div>

        {/* Meta row */}
        <div className="cdph-meta">
          <span className="cdph-meta-item"><Clock size={11}/>{course.duration}h</span>
          <span className="cdph-meta-item"><Users size={11}/>{fmtN(course.students)}</span>
        </div>

        {/* Price — exactly like screenshot: sale price bold green, original strikethrough */}
        <div className="cdph-price-row">
          {p.type === "free" ? (
            <span className="cdph-price-free">Free</span>
          ) : (
            <>
              <span className="cdph-price-sale">{p.display}</span>
              {p.orig && <span className="cdph-price-orig">{p.orig}</span>}
            </>
          )}
        </div>

      </div>
    </article>
  );
});

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function CourseDetailedPageHome() {
  const navigate = useNavigate();

  // Ratings
  const [ratings, setRatings] = useState(() => {
    try { const r = localStorage.getItem("userCourseRatings"); return r ? JSON.parse(r) : {}; }
    catch { return {}; }
  });
  const [hovers, setHovers] = useState({});

  // Filters
  const [search,   setSearch]   = useState("");
  const [cat,      setCat]      = useState("All");
  const [level,    setLevel]    = useState("All Levels");
  const [sort,     setSort]     = useState("Popular");
  const [showAll,  setShowAll]  = useState(false);
  const [showFilt, setShowFilt] = useState(false);

  // Auth
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  // Toast
  const [toast, setToast] = useState(null);
  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }, []);

  // Handlers
  const openCourse = useCallback((id) => {
    if (!isLoggedIn) { showToast("Please login to access this course"); return; }
    navigate(`/courses/${id}`);
  }, [isLoggedIn, navigate, showToast]);

  const handleRate = useCallback((courseId, star) => {
    setRatings((prev) => {
      const next = { ...prev, [courseId]: star };
      try { localStorage.setItem("userCourseRatings", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setSearch(""); setCat("All"); setLevel("All Levels");
    setSort("Popular"); setShowAll(false);
  }, []);

  // Filter + sort
  const filtered = React.useMemo(() => {
    let list = coursesData.filter((c) => {
      const q = search.toLowerCase();
      return (
        (!q || c.name.toLowerCase().includes(q) || c.teacher.toLowerCase().includes(q)) &&
        (cat === "All" || c.category === cat) &&
        (level === "All Levels" || c.level === level)
      );
    });
    switch (sort) {
      case "Top Rated":           list = [...list].sort((a, b) => b.rating - a.rating); break;
      case "Popular":             list = [...list].sort((a, b) => b.students - a.students); break;
      case "Price: Low to High":  list = [...list].sort((a, b) => (getPrice(a).display?.replace("₹","") || 0) - (getPrice(b).display?.replace("₹","") || 0)); break;
      case "Price: High to Low":  list = [...list].sort((a, b) => (getPrice(b).display?.replace("₹","") || 0) - (getPrice(a).display?.replace("₹","") || 0)); break;
      case "Free First":          list = [...list].sort((a, b) => (isFree(b) ? 1 : 0) - (isFree(a) ? 1 : 0)); break;
      default: break;
    }
    return list;
  }, [search, cat, level, sort]);

  const visible       = showAll ? filtered : filtered.slice(0, VISIBLE);
  const remaining     = Math.max(0, filtered.length - VISIBLE);
  const hasFilter     = cat !== "All" || level !== "All Levels" || search || sort !== "Popular";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:      #0e7490;
          --cyan-dk:   #0a5c73;
          --teal:      #0f766e;
          --amber:     #f59e0b;
          --green:     #16a34a;
          --slate:     #475569;
          --slate-lt:  #94a3b8;
          --border:    rgba(14,116,144,0.13);
          --bg:        #f8fafc;
          --white:     #ffffff;
          --dark:      #0c1a2e;
          --ff-d:      'Cormorant Garamond', Georgia, serif;
          --ff-b:      'DM Sans', sans-serif;
          --sh:        0 2px 12px rgba(0,0,0,0.06);
          --sh-hover:  0 8px 32px rgba(0,0,0,0.12);
        }

        .cdph-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-b);
          padding: 88px 24px 72px;
        }

        /* ── TOAST ──────────────────────────────────── */
        .cdph-toast {
          position: fixed; top: 76px; right: 20px; z-index: 9999;
          padding: 12px 20px; border-radius: 10px;
          background: #ef4444; color: #fff;
          font-size: .83rem; font-weight: 500;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          animation: cdToast .3s ease;
          font-family: var(--ff-b);
        }

        @keyframes cdToast {
          from { opacity: 0; transform: translateX(14px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── PAGE HEADER ────────────────────────────── */
        .cdph-header {
          text-align: center;
          max-width: 580px;
          margin: 0 auto 36px;
          animation: cdFadeUp .5s ease both;
        }

        .cdph-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 6px 14px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 100px;
          font-size: .7rem; font-weight: 500; color: var(--cyan);
          letter-spacing: .09em; text-transform: uppercase; margin-bottom: 14px;
        }

        .cdph-title {
          font-family: var(--ff-d);
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700; color: var(--dark);
          line-height: 1.08; letter-spacing: -.02em; margin-bottom: 10px;
        }

        .cdph-title span {
          font-style: italic;
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cdph-sub {
          font-size: .91rem; color: var(--slate);
          font-weight: 300; line-height: 1.65;
        }

        /* ── CONTROLS ───────────────────────────────── */
        .cdph-controls {
          max-width: 1200px; margin: 0 auto 28px;
          display: flex; flex-direction: column; gap: 12px;
          animation: cdFadeUp .5s .08s ease both;
        }

        .cdph-search-row {
          display: flex; gap: 10px; align-items: center; flex-wrap: wrap;
        }

        .cdph-sw {
          position: relative; flex: 1; min-width: 200px;
        }

        .cdph-si {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          color: var(--slate-lt); pointer-events: none;
        }

        .cdph-search {
          width: 100%; padding: 11px 38px 11px 42px;
          border: 1.5px solid var(--border);
          border-radius: 100px; background: var(--white);
          font-family: var(--ff-b); font-size: .875rem;
          font-weight: 300; color: var(--dark); outline: none;
          transition: border-color .2s, box-shadow .2s;
          box-shadow: var(--sh);
        }
        .cdph-search::placeholder { color: #cbd5e1; }
        .cdph-search:focus { border-color: var(--cyan); box-shadow: 0 0 0 3px rgba(14,116,144,.1); }

        .cdph-sclear {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: var(--slate-lt); display: flex; align-items: center;
          transition: color .15s;
        }
        .cdph-sclear:hover { color: #ef4444; }

        .cdph-sort {
          padding: 11px 32px 11px 14px;
          border: 1.5px solid var(--border);
          border-radius: 100px; background: var(--white);
          font-family: var(--ff-b); font-size: .8rem; color: var(--slate);
          cursor: pointer; outline: none; appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 12px center;
          min-width: 175px; box-shadow: var(--sh);
          transition: border-color .2s;
        }
        .cdph-sort:focus { border-color: var(--cyan); }

        .cdph-filt-btn {
          display: flex; align-items: center; gap: 7px;
          padding: 11px 18px; border-radius: 100px;
          border: 1.5px solid var(--border); background: var(--white);
          font-family: var(--ff-b); font-size: .8rem; font-weight: 500;
          color: var(--slate); cursor: pointer; white-space: nowrap;
          transition: all .2s; box-shadow: var(--sh);
        }
        .cdph-filt-btn:hover, .cdph-filt-btn.open { border-color: var(--cyan); color: var(--cyan); }

        /* Filter panel */
        .cdph-fpanel {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 14px; padding: 18px 22px;
          display: flex; flex-wrap: wrap; gap: 22px;
          box-shadow: var(--sh);
          animation: cdSlide .22s ease;
        }

        @keyframes cdSlide { from{opacity:0;transform:translateY(-7px)} to{opacity:1;transform:translateY(0)} }

        .cdph-fg { flex: 1; min-width: 180px; }

        .cdph-flbl {
          font-size: .67rem; font-weight: 500; color: var(--slate-lt);
          letter-spacing: .09em; text-transform: uppercase; margin-bottom: 9px;
        }

        .cdph-fps { display: flex; flex-wrap: wrap; gap: 6px; }

        .cdph-fp {
          padding: 5px 13px; border-radius: 100px;
          border: 1.5px solid var(--border); background: var(--bg);
          font-family: var(--ff-b); font-size: .76rem; color: var(--slate);
          cursor: pointer; transition: all .17s;
        }
        .cdph-fp:hover  { border-color: var(--cyan); color: var(--cyan); }
        .cdph-fp.active { background: var(--cyan); border-color: var(--cyan); color: #fff; font-weight: 500; }

        /* Active filter bar */
        .cdph-fbar {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
        }

        .cdph-ftag {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 11px;
          background: rgba(14,116,144,.08);
          border: 1px solid rgba(14,116,144,.18);
          border-radius: 100px;
          font-size: .71rem; color: var(--cyan); font-weight: 500;
        }

        .cdph-clr {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 11px; background: none;
          border: 1px solid rgba(239,68,68,.25);
          border-radius: 100px; font-family: var(--ff-b);
          font-size: .71rem; color: #ef4444; cursor: pointer;
          transition: background .17s;
        }
        .cdph-clr:hover { background: rgba(239,68,68,.06); }

        .cdph-rcount { margin-left: auto; font-size: .77rem; color: var(--slate-lt); font-weight: 300; }

        /* ── CATEGORY TABS ──────────────────────────── */
        .cdph-tabs {
          display: flex; align-items: center; justify-content: center;
          gap: 7px; flex-wrap: wrap; margin-bottom: 28px;
          animation: cdFadeUp .5s .12s ease both;
        }

        .cdph-tab {
          padding: 8px 20px; border-radius: 100px;
          border: 1.5px solid var(--border); background: var(--white);
          font-family: var(--ff-b); font-size: .8rem; font-weight: 400;
          color: var(--slate); cursor: pointer; transition: all .2s;
          box-shadow: var(--sh);
        }
        .cdph-tab:hover  { border-color: var(--cyan); color: var(--cyan); }
        .cdph-tab.active {
          background: var(--cyan); border-color: var(--cyan);
          color: #fff; font-weight: 500;
          box-shadow: 0 4px 14px rgba(14,116,144,.28);
        }

        /* ── GRID ───────────────────────────────────── */
        .cdph-wrap { max-width: 1200px; margin: 0 auto; }

        .cdph-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 22px; margin-bottom: 36px;
        }

        /* ── COURSE CARD — screenshot style ─────────── */
        .cdph-card {
          background: var(--white);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--sh);
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform .28s cubic-bezier(.4,0,.2,1),
                      box-shadow .28s ease;
          opacity: 0;
          animation: cdCardIn .42s ease forwards;
          outline: none;
          display: flex;
          flex-direction: column;
        }

        .cdph-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--sh-hover);
        }

        .cdph-card:focus-visible { outline: 2px solid var(--cyan); outline-offset: 2px; }

        @keyframes cdCardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Thumbnail */
        .cdph-thumb {
          position: relative; width: 100%; height: 175px;
          overflow: hidden; background: #e2e8f0; flex-shrink: 0;
        }

        .cdph-thumb-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform .4s ease;
        }
        .cdph-card:hover .cdph-thumb-img { transform: scale(1.05); }

        .cdph-thumb-ov {
          position: absolute; inset: 0;
          background: rgba(10,92,115,.78);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 6px;
          opacity: 0; transition: opacity .22s ease; backdrop-filter: blur(2px);
        }
        .cdph-thumb-ov span { font-size: .74rem; font-weight: 500; color: rgba(255,255,255,.9); }
        .cdph-card:hover .cdph-thumb-ov { opacity: 1; }

        .cdph-badges { position: absolute; top: 9px; left: 9px; display: flex; gap: 4px; }

        .cdph-b {
          display: inline-flex; align-items: center; gap: 3px;
          padding: 3px 8px; border-radius: 100px;
          font-size: .6rem; font-weight: 700;
          letter-spacing: .04em; text-transform: uppercase;
        }
        .cdph-b-free { background: var(--teal); color: #fff; }
        .cdph-b-sale { background: #0f172a; color: var(--amber); }
        .cdph-b-hot  { background: rgba(239,68,68,.85); color: #fff; }

        .cdph-level {
          position: absolute; top: 9px; right: 9px;
          padding: 3px 9px; border-radius: 100px;
          font-size: .59rem; font-weight: 500;
          background: rgba(255,255,255,.92); color: var(--slate);
          backdrop-filter: blur(4px);
        }

        /* Card body */
        .cdph-body {
          padding: 18px 18px 16px;
          display: flex; flex-direction: column; gap: 10px;
          flex: 1;
        }

        /* Course name — Cormorant Garamond like screenshot headings */
        .cdph-name {
          font-family: var(--ff-d);
          font-size: 1.15rem; font-weight: 700;
          color: var(--dark); line-height: 1.2;
          letter-spacing: -.01em;
          display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; overflow: hidden;
        }

        /* Teacher row */
        .cdph-teacher {
          display: flex; align-items: center; gap: 6px;
          font-size: .78rem; color: var(--slate-lt); font-weight: 300;
        }

        /* Stars */
        .cdph-rating-row {
          display: flex; align-items: center; gap: 8px;
        }

        .cdph-star-btn {
          background: none; border: none; cursor: pointer; padding: 1px;
          line-height: 0; transition: transform .14s ease;
        }
        .cdph-star-btn:hover { transform: scale(1.3); }

        .cdph-rating-val {
          font-size: .76rem; font-weight: 600; color: #92400e;
        }

        /* Meta */
        .cdph-meta {
          display: flex; align-items: center; gap: 12px;
        }

        .cdph-meta-item {
          display: flex; align-items: center; gap: 3px;
          font-size: .7rem; color: var(--slate-lt); font-weight: 300;
        }

        /* Price row — exactly matches screenshot */
        .cdph-price-row {
          display: flex; align-items: baseline; gap: 8px;
          margin-top: auto; padding-top: 6px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        /* Green bold sale price */
        .cdph-price-sale {
          font-size: 1.15rem; font-weight: 700;
          color: var(--green);
        }

        /* Strikethrough original */
        .cdph-price-orig {
          font-size: .88rem; color: #9ca3af;
          text-decoration: line-through; font-weight: 400;
        }

        /* Free — green bold */
        .cdph-price-free {
          font-size: 1.15rem; font-weight: 700;
          color: var(--green);
        }

        /* ── EMPTY STATE ────────────────────────────── */
        .cdph-empty {
          grid-column: 1 / -1;
          display: flex; flex-direction: column;
          align-items: center; padding: 72px 24px; gap: 12px; text-align: center;
        }

        .cdph-empty-ico {
          width: 62px; height: 62px; border-radius: 50%;
          background: rgba(14,116,144,.07);
          display: flex; align-items: center; justify-content: center;
          color: var(--slate-lt);
        }

        .cdph-empty-title { font-family: var(--ff-d); font-size: 1.4rem; font-weight: 600; color: var(--dark); }
        .cdph-empty-sub   { font-size: .85rem; color: var(--slate-lt); font-weight: 300; max-width: 280px; line-height: 1.6; }

        .cdph-empty-btn {
          padding: 10px 24px; border-radius: 100px;
          background: var(--cyan); color: #fff; border: none;
          font-family: var(--ff-b); font-size: .85rem; font-weight: 500;
          cursor: pointer; transition: all .2s;
        }
        .cdph-empty-btn:hover { background: var(--cyan-dk); transform: translateY(-1px); }

        /* ── SHOW MORE ──────────────────────────────── */
        .cdph-more {
          display: flex; align-items: center; justify-content: center; gap: 14px;
        }

        .cdph-more-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 12px 28px; border-radius: 100px;
          border: 1.5px solid var(--border); background: var(--white);
          font-family: var(--ff-b); font-size: .85rem; font-weight: 500;
          color: var(--cyan); cursor: pointer; transition: all .22s;
          box-shadow: var(--sh);
        }
        .cdph-more-btn:hover {
          border-color: var(--cyan); background: rgba(14,116,144,.05);
          transform: translateY(-2px); box-shadow: 0 8px 24px rgba(14,116,144,.12);
        }

        .cdph-more-note { font-size: .77rem; color: var(--slate-lt); font-weight: 300; }

        /* ── ANIMATIONS ─────────────────────────────── */
        @keyframes cdFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── RESPONSIVE ─────────────────────────────── */
        @media(max-width: 640px) {
          .cdph-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .cdph-search-row { flex-direction: column; }
          .cdph-sort { width: 100%; }
          .cdph-filt-btn { width: 100%; justify-content: center; }
        }

        @media(max-width: 400px) {
          .cdph-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Toast */}
      {toast && <div className="cdph-toast" role="alert">{toast}</div>}

      <div className="cdph-page">

        {/* ── HEADER ──────────────────────────────────────────── */}
        <div className="cdph-header">
          <div className="cdph-badge"><TrendingUp size={11}/> Explore Courses</div>
          <h1 className="cdph-title">Find Your Next <span>Skill</span></h1>
          <p className="cdph-sub">{coursesData.length} expert-led courses across development, design, data & marketing.</p>
        </div>

        {/* ── CATEGORY TABS ───────────────────────────────────── */}
        <div className="cdph-tabs">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={`cdph-tab${cat === c ? " active" : ""}`}
              onClick={() => { setCat(c); setShowAll(false); }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* ── CONTROLS ────────────────────────────────────────── */}
        <div className="cdph-controls">
          <div className="cdph-search-row">

            {/* Search */}
            <div className="cdph-sw">
              <Search size={15} className="cdph-si" />
              <input
                type="search"
                className="cdph-search"
                placeholder="Search courses or instructors…"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setShowAll(false); }}
              />
              {search && (
                <button className="cdph-sclear" onClick={() => setSearch("")}>
                  <X size={13}/>
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              className="cdph-sort"
              value={sort}
              onChange={(e) => { setSort(e.target.value); setShowAll(false); }}
            >
              {SORT_OPS.map((o) => <option key={o}>{o}</option>)}
            </select>

            {/* Filter toggle */}
            <button
              type="button"
              className={`cdph-filt-btn${showFilt ? " open" : ""}`}
              onClick={() => setShowFilt((p) => !p)}
            >
              <SlidersHorizontal size={14}/>
              Filters
              {showFilt ? <ChevronUp size={13}/> : <ChevronDown size={13}/>}
            </button>
          </div>

          {/* Filter panel */}
          {showFilt && (
            <div className="cdph-fpanel">
              <div className="cdph-fg">
                <div className="cdph-flbl">Level</div>
                <div className="cdph-fps">
                  {LEVELS.map((l) => (
                    <button
                      key={l} type="button"
                      className={`cdph-fp${level === l ? " active" : ""}`}
                      onClick={() => { setLevel(l); setShowAll(false); }}
                    >{l}</button>
                  ))}
                </div>
              </div>
              <div className="cdph-fg">
                <div className="cdph-flbl">Price</div>
                <div className="cdph-fps">
                  {["All", "Free", "Paid"].map((p) => (
                    <button key={p} type="button" className="cdph-fp">{p}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Active filter bar */}
          {hasFilter && (
            <div className="cdph-fbar">
              {search   && <span className="cdph-ftag"><Search size={10}/> "{search}"</span>}
              {cat !== "All" && <span className="cdph-ftag">{cat}</span>}
              {level !== "All Levels" && <span className="cdph-ftag">{level}</span>}
              {sort !== "Popular" && <span className="cdph-ftag"><TrendingUp size={10}/> {sort}</span>}
              <button type="button" className="cdph-clr" onClick={clearAll}>
                <X size={10}/> Clear all
              </button>
              <span className="cdph-rcount">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</span>
            </div>
          )}
        </div>

        {/* ── COURSE GRID ─────────────────────────────────────── */}
        <div className="cdph-wrap">
          <div className="cdph-grid">
            {filtered.length === 0 ? (
              <div className="cdph-empty">
                <div className="cdph-empty-ico"><BookOpen size={28}/></div>
                <div className="cdph-empty-title">No courses found</div>
                <div className="cdph-empty-sub">Try adjusting filters to discover more courses.</div>
                <button type="button" className="cdph-empty-btn" onClick={clearAll}>Show All Courses</button>
              </div>
            ) : (
              visible.map((course, i) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={i}
                  userRating={ratings[course.id] || 0}
                  hover={hovers[course.id] || 0}
                  onRate={handleRate}
                  onHover={(id, s) => setHovers((p) => ({ ...p, [id]: s }))}
                  onLeave={(id)    => setHovers((p) => ({ ...p, [id]: 0 }))}
                  onOpen={openCourse}
                />
              ))
            )}
          </div>

          {/* Show more / less */}
          {filtered.length > VISIBLE && (
            <div className="cdph-more">
              <button
                type="button"
                className="cdph-more-btn"
                onClick={() => setShowAll((p) => !p)}
              >
                {showAll
                  ? <><ChevronUp size={15}/> Show Less</>
                  : <><ChevronDown size={15}/> Show {remaining} More</>
                }
              </button>
              {!showAll && (
                <span className="cdph-more-note">
                  Showing {visible.length} of {filtered.length}
                </span>
              )}
            </div>
          )}
        </div>

      </div>
    </>
  );
}