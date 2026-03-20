import React, { useState, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Play, CheckCircle, Circle, Clock, Award, ChevronDown,
  ArrowLeft, Sparkles, Lock, BookOpen, ArrowRight,
  BarChart2, Users, Star,
} from "lucide-react";

// ─── MOCK DATA  (replace with your real coursesData import) ──────────────────
const coursesData = [
  {
    id: 1,
    name: "Full Stack Web Development",
    description: "Master modern web development from frontend to backend with real-world projects and industry best practices.",
    teacher: "Arjun Mehta",
    teacherBio: "10+ years at Google & Stripe. Shipped products used by millions.",
    image: "https://picsum.photos/seed/webdev/1200/400",
    isFree: false,
    price: { original: 2999, sale: 1499 },
    totalStudents: 4820,
    rating: 4.8,
    category: "Development",
    level: "Intermediate",
    lectures: [
      {
        id: "l1", title: "HTML & CSS Foundations", durationMin: 95,
        chapters: [
          { id: "c1", name: "Semantic HTML", topic: "Structure & accessibility", durationMin: 18, videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
          { id: "c2", name: "CSS Flexbox", topic: "Layouts made easy", durationMin: 22, videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
          { id: "c3", name: "CSS Grid", topic: "Two-dimensional layouts", durationMin: 25, videoUrl: "" },
          { id: "c4", name: "Responsive Design", topic: "Media queries & breakpoints", durationMin: 30, videoUrl: "" },
        ],
      },
      {
        id: "l2", title: "JavaScript Essentials", durationMin: 140,
        chapters: [
          { id: "c5", name: "ES6+ Features", topic: "Arrow fns, destructuring, async", durationMin: 35, videoUrl: "" },
          { id: "c6", name: "DOM Manipulation", topic: "Events & dynamic UI", durationMin: 28, videoUrl: "" },
          { id: "c7", name: "Fetch API & Promises", topic: "Async data fetching", durationMin: 40, videoUrl: "" },
          { id: "c8", name: "Error Handling", topic: "Try/catch & best practices", durationMin: 37, videoUrl: "" },
        ],
      },
      {
        id: "l3", title: "React Deep Dive", durationMin: 180,
        chapters: [
          { id: "c9",  name: "Components & Props", topic: "Reusable building blocks", durationMin: 32, videoUrl: "" },
          { id: "c10", name: "State & Hooks",       topic: "useState, useEffect, useRef", durationMin: 45, videoUrl: "" },
          { id: "c11", name: "Context & Reducers",  topic: "Global state management", durationMin: 50, videoUrl: "" },
          { id: "c12", name: "React Router v6",     topic: "SPA navigation", durationMin: 53, videoUrl: "" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "UI/UX Design Mastery",
    description: "Learn the full design process from research to high-fidelity prototypes using Figma.",
    teacher: "Priya Sharma",
    teacherBio: "Senior Product Designer at Figma. Design mentor for 500+ students.",
    image: "https://picsum.photos/seed/uiux/1200/400",
    isFree: true,
    price: null,
    totalStudents: 2310,
    rating: 4.9,
    category: "Design",
    level: "Beginner",
    lectures: [
      {
        id: "l4", title: "Design Fundamentals", durationMin: 80,
        chapters: [
          { id: "c13", name: "Visual Hierarchy", topic: "Size, contrast, spacing", durationMin: 20, videoUrl: "" },
          { id: "c14", name: "Color Theory", topic: "Palettes & emotion", durationMin: 25, videoUrl: "" },
          { id: "c15", name: "Typography", topic: "Font pairing & readability", durationMin: 35, videoUrl: "" },
        ],
      },
    ],
  },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const fmtMinutes = (min) => {
  if (!min && min !== 0) return "--";
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
};

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);

// FIX 1: toEmbedUrl was correct logic but `appendAutoplay` was called in JSX
// without ever being defined — added here
const toEmbedUrl = (url) => {
  if (!url) return "";
  try {
    const t = String(url).trim();
    if (/\/embed\//.test(t)) return t;
    const watchMatch = t.match(/[?&]v=([^&#]+)/);
    if (watchMatch?.[1]) return `https://www.youtube.com/embed/${watchMatch[1]}`;
    const shortMatch = t.match(/youtu\.be\/([^?&#/]+)/);
    if (shortMatch?.[1]) return `https://www.youtube.com/embed/${shortMatch[1]}`;
    if (/drive\.google\.com/.test(t)) {
      const fm = t.match(/\/file\/d\/([^/]+)/);
      if (fm?.[1]) return `https://drive.google.com/file/d/${fm[1]}/preview`;
      const im = t.match(/[?&]id=([^&#]+)/);
      if (im?.[1]) return `https://drive.google.com/file/d/${im[1]}/preview`;
      return t;
    }
    const last = t.split("/").filter(Boolean).pop();
    if (last?.length === 11 && /^[a-zA-Z0-9_-]+$/.test(last))
      return `https://www.youtube.com/embed/${last}`;
    return t;
  } catch { return url; }
};

// FIX 2: appendAutoplay was used in JSX but never defined
const appendAutoplay = (embedUrl, shouldAutoplay) => {
  if (!shouldAutoplay || !embedUrl) return embedUrl;
  const sep = embedUrl.includes("?") ? "&" : "?";
  return `${embedUrl}${sep}autoplay=1`;
};

const isDirectVideoFile = (url) =>
  Boolean(url && /\.(mp4|webm|ogg)(\?.*)?$/i.test(url));

// ─── TOAST ────────────────────────────────────────────────────────────────────
const Toast = ({ toast, onDismiss }) => {
  if (!toast) return null;
  return (
    <div
      onClick={onDismiss}
      style={{
        position: "fixed", top: 80, right: 20, zIndex: 9999,
        padding: "12px 20px", borderRadius: "10px",
        background: toast.type === "error" ? "#ef4444" : "#0e7490",
        color: "#fff", fontSize: "0.85rem", fontWeight: 500,
        boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        cursor: "pointer", animation: "slideInRight 0.3s ease",
        maxWidth: 320,
      }}
    >
      {toast.message}
    </div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const courseId = parseInt(id, 10);

  // FIX 3: isLoggedIn was hardcoded `true` — wire to real auth
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const [isEnrolled, setIsEnrolled]   = useState(false);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [toast, setToast]             = useState(null);

  const [expandedLectures, setExpandedLectures]   = useState(new Set());
  const [completedChapters, setCompletedChapters] = useState(new Set());

  // FIX 4: selectedContent was used but never initialized with useState
  const [selectedContent, setSelectedContent] = useState({
    type: null, lectureId: null, chapterId: null,
  });

  const course = coursesData.find((c) => c.id === courseId);

  // FIX 5: if course not found, render a graceful fallback instead of crashing
  if (!course) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "DM Sans, sans-serif", gap: 16 }}>
        <BookOpen size={40} color="#94a3b8" />
        <p style={{ color: "#475569", fontSize: "1rem" }}>Course not found.</p>
        <button onClick={() => navigate("/courses")} style={{ padding: "10px 22px", background: "#0e7490", color: "#fff", border: "none", borderRadius: "100px", cursor: "pointer", fontSize: "0.85rem" }}>
          Back to Courses
        </button>
      </div>
    );
  }

  const isCourseFree  = course.isFree || !course.price;
  const originalPrice = course.price?.original ?? null;
  const salePrice     = course.price?.sale ?? null;
  const hasDiscount   = originalPrice != null && salePrice != null && salePrice < originalPrice;

  // FIX 6: totalMinutes computed inline in JSX multiple times — moved to useMemo
  const allChapters  = useMemo(() => (course.lectures || []).flatMap((l) => l.chapters || []), [course]);
  const totalMinutes = useMemo(() => allChapters.reduce((sum, ch) => sum + (ch.durationMin || 0), 0), [allChapters]);
  const totalChapters = allChapters.length;

  const progressPct = totalChapters > 0
    ? Math.round((completedChapters.size / totalChapters) * 100)
    : 0;

  // ── Derived: currently selected video ─────────────────────────────────────
  // FIX 7: currentVideoContent and selectedLecture were used but never derived
  const selectedLecture = useMemo(
    () => (course.lectures || []).find((l) => l.id === selectedContent.lectureId),
    [course.lectures, selectedContent.lectureId]
  );

  const currentVideoContent = useMemo(() => {
    if (!selectedContent.lectureId) return null;
    if (selectedContent.chapterId) {
      return selectedLecture?.chapters?.find((ch) => ch.id === selectedContent.chapterId) ?? null;
    }
    return selectedLecture ?? null;
  }, [selectedContent, selectedLecture]);

  const currentRawUrl      = currentVideoContent?.videoUrl || null;
  const currentEmbedUrl    = currentRawUrl ? toEmbedUrl(currentRawUrl) : null;
  const currentIsDirectVideo = isDirectVideoFile(currentEmbedUrl);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const showToast = useCallback((message, type = "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  }, []);

  const onLectureHeaderClick = useCallback((lectureId) => {
    if (!isLoggedIn) { showToast("Please login to access course content"); return; }
    if (!isCourseFree && !isEnrolled) { showToast("Please enroll to access content"); return; }
    setExpandedLectures((prev) => {
      const next = new Set(prev);
      next.has(lectureId) ? next.delete(lectureId) : next.add(lectureId);
      return next;
    });
  }, [isLoggedIn, isCourseFree, isEnrolled, showToast]);

  const handleContentSelect = useCallback((lectureId, chapterId = null) => {
    if (!isLoggedIn) { showToast("Please login to access course content"); return; }
    if (!isCourseFree && !isEnrolled) { showToast("Please enroll to access this content"); return; }
    setSelectedContent({ type: chapterId ? "chapter" : "lecture", lectureId, chapterId });
    setExpandedLectures((prev) => { const n = new Set(prev); n.add(lectureId); return n; });
  }, [isLoggedIn, isCourseFree, isEnrolled, showToast]);

  const toggleChapterCompletion = useCallback((chapterId) => {
    setCompletedChapters((prev) => {
      const next = new Set(prev);
      next.has(chapterId) ? next.delete(chapterId) : next.add(chapterId);
      return next;
    });
  }, []);

  // FIX 8: handleEnroll was called in JSX but never defined
  const handleEnroll = useCallback(async () => {
    if (!isLoggedIn) { showToast("Please login to enroll"); return; }
    setIsEnrolling(true);
    await new Promise((r) => setTimeout(r, 1200)); // replace with real API call
    setIsEnrolled(true);
    setIsEnrolling(false);
    showToast("Successfully enrolled! Start learning.", "success");
  }, [isLoggedIn, showToast]);

  // ── Render ─────────────────────────────────────────────────────────────────
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
          --slate:       #475569;
          --slate-light: #94a3b8;
          --border:      rgba(14,116,144,0.13);
          --bg:          #f0f9ff;
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
          --radius:      14px;
          --shadow:      0 2px 16px rgba(14,116,144,0.07);
          --shadow-md:   0 6px 28px rgba(14,116,144,0.11);
          --shadow-lg:   0 12px 40px rgba(14,116,144,0.15);
        }

        .cd-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          padding-bottom: 64px;
        }

        /* ── HERO BANNER ──────────────────────────────── */
        .cd-hero {
          position: relative;
          height: 240px;
          overflow: hidden;
          background: var(--cyan-dark);
        }

        .cd-hero-img {
          width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0.35;
        }

        .cd-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(10,92,115,0.95) 40%, rgba(10,92,115,0.6) 100%);
          display: flex;
          align-items: flex-end;
          padding: 28px 32px;
        }

        .cd-hero-content { max-width: 680px; }

        .cd-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 100px;
          color: rgba(255,255,255,0.85);
          font-size: 0.75rem;
          font-weight: 400;
          cursor: pointer;
          font-family: var(--ff-body);
          margin-bottom: 12px;
          transition: background 0.2s;
        }
        .cd-back-btn:hover { background: rgba(255,255,255,0.2); }

        .cd-hero-category {
          font-size: 0.68rem;
          font-weight: 500;
          color: #67e8f9;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .cd-hero-title {
          font-family: var(--ff-display);
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }

        .cd-hero-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cd-hero-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          color: rgba(255,255,255,0.75);
          font-weight: 300;
        }

        /* ── MAIN LAYOUT ──────────────────────────────── */
        .cd-main {
          max-width: 1280px;
          margin: 28px auto 0;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 24px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .cd-main { grid-template-columns: 1fr; }
          .cd-sidebar { order: -1; }
        }

        /* ── VIDEO SECTION ────────────────────────────── */
        .cd-video-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: var(--shadow);
          margin-bottom: 20px;
        }

        .cd-video-frame {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 */
          background: #0c1a2e;
        }

        .cd-video-frame iframe,
        .cd-video-frame video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .cd-video-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(135deg, #0c1a2e 0%, #0a3d52 100%);
        }

        .cd-play-ring {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: rgba(14,116,144,0.2);
          border: 2px solid rgba(14,116,144,0.4);
          display: flex; align-items: center; justify-content: center;
          animation: pulse 2.2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(14,116,144,0.3); }
          50%       { box-shadow: 0 0 0 16px rgba(14,116,144,0); }
        }

        .cd-video-placeholder p {
          color: rgba(255,255,255,0.55);
          font-size: 0.85rem;
          font-weight: 300;
        }

        .cd-video-placeholder .cd-lock-note {
          color: rgba(255,255,255,0.35);
          font-size: 0.75rem;
          display: flex; align-items: center; gap: 5px;
        }

        /* Video info below player */
        .cd-video-info {
          padding: 20px 24px;
          border-top: 1px solid var(--border);
        }

        .cd-video-title {
          font-family: var(--ff-display);
          font-size: 1.2rem;
          font-weight: 600;
          color: #0c1a2e;
          margin-bottom: 5px;
          letter-spacing: -0.01em;
        }

        .cd-video-desc {
          font-size: 0.82rem;
          color: var(--slate-light);
          font-weight: 300;
          margin-bottom: 12px;
          line-height: 1.5;
        }

        .cd-video-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .cd-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 500;
          background: rgba(14,116,144,0.08);
          color: var(--cyan);
          border: 1px solid rgba(14,116,144,0.15);
        }

        /* Completion button */
        .cd-complete-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 20px;
          border-radius: 100px;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          margin-top: 14px;
          transition: all 0.22s ease;
        }

        .cd-complete-btn.done {
          background: rgba(15,118,110,0.1);
          color: var(--teal);
          border: 1.5px solid rgba(15,118,110,0.25);
        }

        .cd-complete-btn.undone {
          background: rgba(14,116,144,0.07);
          color: var(--cyan);
          border: 1.5px solid rgba(14,116,144,0.2);
        }

        .cd-complete-btn:hover { filter: brightness(0.94); }

        /* ── SIDEBAR ──────────────────────────────────── */
        .cd-sidebar {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .cd-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .cd-card-header {
          padding: 18px 20px 14px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cd-card-title {
          font-family: var(--ff-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: #0c1a2e;
          letter-spacing: -0.01em;
        }

        .cd-free-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          background: rgba(15,118,110,0.1);
          border: 1px solid rgba(15,118,110,0.2);
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--teal);
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        /* ── LECTURE LIST ─────────────────────────────── */
        .cd-lecture-list { padding: 8px 0; }

        .cd-lecture-item {
          border-bottom: 1px solid rgba(14,116,144,0.06);
        }
        .cd-lecture-item:last-child { border-bottom: none; }

        .cd-lecture-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 18px;
          cursor: pointer;
          transition: background 0.18s ease;
          gap: 10px;
          user-select: none;
        }

        .cd-lecture-header:hover { background: rgba(14,116,144,0.04); }
        .cd-lecture-header.expanded { background: rgba(14,116,144,0.05); }

        .cd-lecture-left {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          min-width: 0;
        }

        .cd-chevron {
          flex-shrink: 0;
          color: var(--slate-light);
          transition: transform 0.22s ease;
        }
        .cd-chevron.open { transform: rotate(180deg); }

        .cd-lecture-title {
          font-size: 0.85rem;
          font-weight: 500;
          color: #0c1a2e;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cd-lecture-sub {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          color: var(--slate-light);
          margin-top: 2px;
        }

        .cd-lecture-lock {
          flex-shrink: 0;
          color: var(--slate-light);
        }

        /* ── CHAPTER LIST ─────────────────────────────── */
        .cd-chapter-list {
          background: rgba(14,116,144,0.02);
          border-top: 1px solid rgba(14,116,144,0.07);
        }

        .cd-chapter-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 18px 10px 22px;
          cursor: pointer;
          border-bottom: 1px solid rgba(14,116,144,0.05);
          transition: background 0.15s ease;
          gap: 10px;
        }
        .cd-chapter-item:last-child { border-bottom: none; }
        .cd-chapter-item:hover { background: rgba(14,116,144,0.05); }
        .cd-chapter-item.selected { background: rgba(14,116,144,0.09); }
        .cd-chapter-item.disabled { opacity: 0.45; cursor: not-allowed; }

        .cd-chapter-left {
          display: flex;
          align-items: center;
          gap: 9px;
          flex: 1;
          min-width: 0;
        }

        .cd-toggle-btn {
          flex-shrink: 0;
          background: none;
          border: none;
          cursor: pointer;
          padding: 2px;
          color: var(--slate-light);
          transition: color 0.15s ease;
          line-height: 0;
        }
        .cd-toggle-btn.done { color: var(--teal); }
        .cd-toggle-btn:disabled { opacity: 0.35; cursor: not-allowed; }

        .cd-chapter-name {
          font-size: 0.8rem;
          font-weight: 400;
          color: #334155;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cd-chapter-name.selected { color: var(--cyan); font-weight: 500; }

        .cd-chapter-topic {
          font-size: 0.68rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        .cd-chapter-dur {
          flex-shrink: 0;
          font-size: 0.69rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── PRICING CARD ─────────────────────────────── */
        .cd-pricing-body { padding: 18px 20px 20px; }

        .cd-price-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 6px;
        }

        .cd-price-main {
          font-family: var(--ff-display);
          font-size: 2rem;
          font-weight: 700;
          color: #0c1a2e;
          letter-spacing: -0.02em;
        }
        .cd-price-main.free { color: var(--teal); }

        .cd-price-original {
          font-size: 0.9rem;
          color: var(--slate-light);
          text-decoration: line-through;
        }

        .cd-discount-pill {
          padding: 3px 10px;
          background: rgba(245,158,11,0.12);
          border: 1px solid rgba(245,158,11,0.25);
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 600;
          color: #b45309;
        }

        .cd-price-note {
          font-size: 0.76rem;
          color: var(--slate-light);
          font-weight: 300;
          margin-bottom: 18px;
        }

        .cd-enroll-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 20px;
          border-radius: 100px;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.22s ease;
          letter-spacing: 0.01em;
        }

        .cd-enroll-btn.paid {
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          color: #fff;
          box-shadow: 0 4px 18px rgba(14,116,144,0.3);
        }
        .cd-enroll-btn.paid:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(14,116,144,0.4);
        }

        .cd-enroll-btn.free-access {
          background: rgba(15,118,110,0.1);
          color: var(--teal);
          border: 1.5px solid rgba(15,118,110,0.25);
        }

        .cd-enroll-btn.enrolled {
          background: rgba(14,116,144,0.08);
          color: var(--cyan);
          border: 1.5px solid rgba(14,116,144,0.2);
        }

        .cd-enroll-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        .cd-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── PROGRESS CARD ────────────────────────────── */
        .cd-progress-body { padding: 16px 20px 20px; }

        .cd-progress-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .cd-progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          margin-bottom: 7px;
        }

        .cd-progress-label span:first-child { color: var(--slate); font-weight: 300; }
        .cd-progress-label span:last-child  { color: var(--cyan); font-weight: 600; }

        .cd-progress-track {
          width: 100%;
          height: 6px;
          background: rgba(14,116,144,0.1);
          border-radius: 100px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .cd-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #0e7490, #06b6d4);
          border-radius: 100px;
          transition: width 0.5s ease;
        }

        .cd-progress-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .cd-progress-stat {
          background: rgba(14,116,144,0.05);
          border-radius: 10px;
          padding: 12px;
          text-align: center;
        }

        .cd-stat-val {
          font-family: var(--ff-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--cyan);
          margin-bottom: 3px;
        }

        .cd-stat-lbl {
          font-size: 0.67rem;
          color: var(--slate-light);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: 400;
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cd-animate { animation: fadeUp 0.45s ease both; }
        .cd-delay-1 { animation-delay: 0.08s; }
        .cd-delay-2 { animation-delay: 0.16s; }
        .cd-delay-3 { animation-delay: 0.24s; }
      `}</style>

      <Toast toast={toast} onDismiss={() => setToast(null)} />

      <div className="cd-page">

        {/* ── HERO ──────────────────────────────────────────────────── */}
        <div className="cd-hero">
          <img src={course.image} alt={course.name} className="cd-hero-img" />
          <div className="cd-hero-overlay">
            <div className="cd-hero-content">
              <button className="cd-back-btn" onClick={() => navigate("/courses")}>
                <ArrowLeft size={13} /> Back to Courses
              </button>
              <div className="cd-hero-category">{course.category} · {course.level}</div>
              <h1 className="cd-hero-title">{course.name}</h1>
              <div className="cd-hero-meta">
                <span className="cd-hero-meta-item"><Star size={12} fill="#f59e0b" color="#f59e0b" /> {course.rating}</span>
                <span className="cd-hero-meta-item"><Users size={12} /> {course.totalStudents?.toLocaleString()} students</span>
                <span className="cd-hero-meta-item"><Clock size={12} /> {fmtMinutes(totalMinutes)} total</span>
                <span className="cd-hero-meta-item"><BookOpen size={12} /> {totalChapters} lessons</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ─────────────────────────────────────────────── */}
        <div className="cd-main">

          {/* LEFT COLUMN */}
          <div>

            {/* Video Player */}
            <div className="cd-video-card cd-animate">
              <div className="cd-video-frame">
                {currentEmbedUrl ? (
                  currentIsDirectVideo ? (
                    <video controls src={currentEmbedUrl} />
                  ) : (
                    <iframe
                      title={currentVideoContent?.name || currentVideoContent?.title || "Video Player"}
                      src={appendAutoplay(currentEmbedUrl, isLoggedIn && (isEnrolled || isCourseFree))}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )
                ) : (
                  <div className="cd-video-placeholder">
                    <div className="cd-play-ring">
                      <Play size={22} color="#67e8f9" fill="#67e8f9" />
                    </div>
                    <p>Select a chapter to start learning</p>
                    {(!isLoggedIn || (!isEnrolled && !isCourseFree)) && (
                      <span className="cd-lock-note">
                        <Lock size={11} />
                        {!isLoggedIn ? "Login required" : "Enrollment required"}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Video meta */}
              <div className="cd-video-info">
                <h3 className="cd-video-title">
                  {currentVideoContent?.name || currentVideoContent?.title || "Select a chapter to begin"}
                </h3>
                <p className="cd-video-desc">
                  {selectedContent.type === "chapter"
                    ? `Part of: ${selectedLecture?.title}`
                    : currentVideoContent?.description || course.description}
                </p>

                <div className="cd-video-chips">
                  {currentVideoContent?.durationMin && (
                    <span className="cd-chip"><Clock size={11} /> {fmtMinutes(currentVideoContent.durationMin)}</span>
                  )}
                  {selectedContent.type === "chapter" && (
                    <span className="cd-chip">Chapter</span>
                  )}
                  {selectedLecture && (
                    <span className="cd-chip"><BookOpen size={11} /> {selectedLecture.title}</span>
                  )}
                </div>

                {/* Mark complete */}
                {isLoggedIn && (isEnrolled || isCourseFree) && selectedContent.chapterId && (
                  <button
                    className={`cd-complete-btn ${completedChapters.has(selectedContent.chapterId) ? "done" : "undone"}`}
                    onClick={() => toggleChapterCompletion(selectedContent.chapterId)}
                  >
                    {completedChapters.has(selectedContent.chapterId)
                      ? <><CheckCircle size={15} /> Chapter Completed</>
                      : <><Circle size={15} /> Mark as Complete</>
                    }
                  </button>
                )}
              </div>
            </div>

            {/* About instructor */}
            <div className="cd-card cd-animate cd-delay-1">
              <div className="cd-card-header">
                <span className="cd-card-title">Your Instructor</span>
              </div>
              <div style={{ padding: "16px 20px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #0e7490, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", fontFamily: "var(--ff-display)" }}>
                    {course.teacher.charAt(0)}
                  </span>
                </div>
                <div>
                  <div style={{ fontWeight: 500, fontSize: "0.9rem", color: "#0c1a2e", marginBottom: 3 }}>{course.teacher}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--slate)", fontWeight: 300, lineHeight: 1.55 }}>{course.teacherBio}</div>
                </div>
              </div>
            </div>

          </div>

          {/* SIDEBAR */}
          <div className="cd-sidebar">

            {/* Course Content */}
            <div className="cd-card cd-animate">
              <div className="cd-card-header">
                <span className="cd-card-title">Course Content</span>
                {isCourseFree && (
                  <span className="cd-free-badge">
                    <Sparkles size={10} /> Free
                  </span>
                )}
              </div>

              <div className="cd-lecture-list">
                {(course.lectures || []).map((lecture, idx) => {
                  const isExpanded = expandedLectures.has(lecture.id);
                  const canAccess  = isCourseFree || isEnrolled;

                  return (
                    <div key={lecture.id} className="cd-lecture-item" style={{ animationDelay: `${idx * 80}ms` }}>
                      <div
                        className={`cd-lecture-header ${isExpanded ? "expanded" : ""}`}
                        onClick={() => onLectureHeaderClick(lecture.id)}
                      >
                        <div className="cd-lecture-left">
                          <ChevronDown size={15} className={`cd-chevron ${isExpanded ? "open" : ""}`} />
                          <div style={{ minWidth: 0 }}>
                            <div className="cd-lecture-title">{lecture.title}</div>
                            <div className="cd-lecture-sub">
                              <Clock size={10} /> {fmtMinutes(lecture.durationMin)}
                              <span>·</span>
                              <span>{lecture.chapters?.length || 0} lessons</span>
                            </div>
                          </div>
                        </div>
                        {!canAccess && <Lock size={13} className="cd-lecture-lock" />}
                      </div>

                      {isExpanded && (
                        <div className="cd-chapter-list">
                          {(lecture.chapters || []).map((chapter) => {
                            const isDone     = completedChapters.has(chapter.id);
                            const isSelected = selectedContent.chapterId === chapter.id && selectedContent.lectureId === lecture.id;

                            return (
                              <div
                                key={chapter.id}
                                className={`cd-chapter-item ${isSelected ? "selected" : ""} ${!canAccess ? "disabled" : ""}`}
                                onClick={() => handleContentSelect(lecture.id, chapter.id)}
                              >
                                <div className="cd-chapter-left">
                                  <button
                                    className={`cd-toggle-btn ${isDone ? "done" : ""}`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (canAccess) toggleChapterCompletion(chapter.id);
                                    }}
                                    disabled={!canAccess}
                                    aria-label={isDone ? "Mark incomplete" : "Mark complete"}
                                  >
                                    {isDone
                                      ? <CheckCircle size={14} />
                                      : <Circle size={14} />}
                                  </button>
                                  <div style={{ minWidth: 0 }}>
                                    <div className={`cd-chapter-name ${isSelected ? "selected" : ""}`}>{chapter.name}</div>
                                    <div className="cd-chapter-topic">{chapter.topic}</div>
                                  </div>
                                </div>
                                <span className="cd-chapter-dur">{fmtMinutes(chapter.durationMin)}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="cd-card cd-animate cd-delay-1">
              <div className="cd-card-header">
                <span className="cd-card-title">Pricing</span>
              </div>
              <div className="cd-pricing-body">
                <div className="cd-price-row">
                  <span className={`cd-price-main ${isCourseFree ? "free" : ""}`}>
                    {isCourseFree ? "Free" : salePrice != null ? formatCurrency(salePrice) : originalPrice != null ? formatCurrency(originalPrice) : "Free"}
                  </span>
                  {!isCourseFree && hasDiscount && (
                    <span className="cd-price-original">{formatCurrency(originalPrice)}</span>
                  )}
                  {!isCourseFree && hasDiscount && (
                    <span className="cd-discount-pill">
                      {Math.round(((originalPrice - salePrice) / originalPrice) * 100)}% off
                    </span>
                  )}
                </div>
                <p className="cd-price-note">
                  {isCourseFree ? "Free access · Learn anytime" : "One-time payment · Lifetime access"}
                </p>

                {isCourseFree ? (
                  <button disabled className="cd-enroll-btn free-access">
                    <CheckCircle size={15} /> Free Access Granted
                  </button>
                ) : !isEnrolled ? (
                  <button onClick={handleEnroll} disabled={isEnrolling} className="cd-enroll-btn paid">
                    {isEnrolling
                      ? <><div className="cd-spinner" /> Enrolling…</>
                      : <><Play size={14} fill="#fff" /> Enroll Now <ArrowRight size={14} /></>
                    }
                  </button>
                ) : (
                  <button disabled className="cd-enroll-btn enrolled">
                    <CheckCircle size={15} /> Enrolled
                  </button>
                )}
              </div>
            </div>

            {/* Progress Card */}
            <div className="cd-card cd-animate cd-delay-2">
              <div className="cd-card-header">
                <div className="cd-progress-header" style={{ margin: 0 }}>
                  <Award size={16} color="var(--cyan)" />
                  <span className="cd-card-title">Your Progress</span>
                </div>
              </div>
              <div className="cd-progress-body">
                <div className="cd-progress-label">
                  <span>Course Completion</span>
                  <span>{progressPct}%</span>
                </div>
                <div className="cd-progress-track">
                  <div className="cd-progress-fill" style={{ width: `${progressPct}%` }} />
                </div>
                <div className="cd-progress-stats">
                  <div className="cd-progress-stat">
                    <div className="cd-stat-val">{fmtMinutes(totalMinutes)}</div>
                    <div className="cd-stat-lbl">Total Duration</div>
                  </div>
                  <div className="cd-progress-stat">
                    <div className="cd-stat-val">{completedChapters.size}/{totalChapters}</div>
                    <div className="cd-stat-lbl">Completed</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;