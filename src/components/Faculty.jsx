import React, { useState, useMemo, useCallback } from "react";
import {
  Star, Search, X, Users, BookOpen, Award,
  Linkedin, Twitter, Globe, ChevronDown, ChevronUp,
  GraduationCap, TrendingUp, Filter,
} from "lucide-react";

// ─── FACULTY DATA ─────────────────────────────────────────────────────────────
// Replace with your real import: import { facultyData } from "../assets/dummyData"
const facultyData = [
  {
    id: "f1",
    name: "Arjun Mehta",
    role: "Full Stack Engineer",
    specialization: "Development",
    bio: "10+ years at Google & Stripe. Built products used by millions. Passionate about clean architecture and mentoring the next generation of developers.",
    avatar: "https://i.pravatar.cc/160?img=11",
    rating: 4.9,
    totalStudents: 4820,
    totalCourses: 4,
    experience: "10+ years",
    badge: "Top Instructor",
    social: { linkedin: "#", twitter: "#", website: "#" },
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    courses: ["Full Stack Web Dev", "Node.js APIs", "React Bootcamp", "Cloud & AWS"],
  },
  {
    id: "f2",
    name: "Priya Sharma",
    role: "Senior Product Designer",
    specialization: "Design",
    bio: "Led design at Figma and Notion. Speaker at Design+Code conf. Believes great design starts with deep empathy for the user.",
    avatar: "https://i.pravatar.cc/160?img=47",
    rating: 4.9,
    totalStudents: 5730,
    totalCourses: 3,
    experience: "8 years",
    badge: "Top Instructor",
    social: { linkedin: "#", twitter: "#", website: null },
    skills: ["Figma", "UX Research", "Prototyping", "Design Systems"],
    courses: ["UI/UX Mastery", "Figma for Beginners", "Design Systems"],
  },
  {
    id: "f3",
    name: "Rohit Verma",
    role: "Data Scientist",
    specialization: "Data",
    bio: "PhD in ML from IIT Bombay. Currently at DeepMind. Published 12 research papers. Loves turning complex math into intuitive explanations.",
    avatar: "https://i.pravatar.cc/160?img=12",
    rating: 4.8,
    totalStudents: 6100,
    totalCourses: 3,
    experience: "12 years",
    badge: "Expert",
    social: { linkedin: "#", twitter: null, website: "#" },
    skills: ["Python", "TensorFlow", "Statistics", "SQL"],
    courses: ["Data Science with Python", "Machine Learning A-Z", "Business Analytics"],
  },
  {
    id: "f4",
    name: "Sneha Patel",
    role: "Frontend Architect",
    specialization: "Development",
    bio: "Core contributor to React ecosystem. Worked at Vercel. Obsessed with performance, accessibility and developer experience.",
    avatar: "https://i.pravatar.cc/160?img=29",
    rating: 4.8,
    totalStudents: 3750,
    totalCourses: 2,
    experience: "7 years",
    badge: "Expert",
    social: { linkedin: "#", twitter: "#", website: "#" },
    skills: ["React", "Next.js", "Performance", "CSS"],
    courses: ["React & Next.js Bootcamp", "Frontend Performance"],
  },
  {
    id: "f5",
    name: "Karan Shah",
    role: "Growth Marketing Lead",
    specialization: "Marketing",
    bio: "Scaled two startups from 0 to 1M users. Google-certified marketer. Teaches data-driven growth strategies that actually move the needle.",
    avatar: "https://i.pravatar.cc/160?img=52",
    rating: 4.6,
    totalStudents: 2870,
    totalCourses: 2,
    experience: "6 years",
    badge: null,
    social: { linkedin: "#", twitter: "#", website: null },
    skills: ["SEO", "Google Ads", "Analytics", "Content Strategy"],
    courses: ["Digital Marketing Pro", "Content Writing Fundamentals"],
  },
  {
    id: "f6",
    name: "Divya Nair",
    role: "ML Research Engineer",
    specialization: "Data",
    bio: "Former Amazon Alexa team. Specializes in NLP and computer vision. Makes cutting-edge research accessible to every learner.",
    avatar: "https://i.pravatar.cc/160?img=44",
    rating: 4.9,
    totalStudents: 5420,
    totalCourses: 2,
    experience: "9 years",
    badge: "Top Instructor",
    social: { linkedin: "#", twitter: "#", website: "#" },
    skills: ["PyTorch", "NLP", "Computer Vision", "MLOps"],
    courses: ["Machine Learning A-Z", "Deep Learning Fundamentals"],
  },
  {
    id: "f7",
    name: "Amit Joshi",
    role: "Visual Designer",
    specialization: "Design",
    bio: "Award-winning brand designer with clients across 3 continents. Instructor of the year 2023. Makes creative skills accessible to everyone.",
    avatar: "https://i.pravatar.cc/160?img=15",
    rating: 4.5,
    totalStudents: 1240,
    totalCourses: 2,
    experience: "5 years",
    badge: null,
    social: { linkedin: "#", twitter: null, website: "#" },
    skills: ["Illustrator", "Photoshop", "Branding", "Typography"],
    courses: ["Graphic Design Essentials", "Logo Design Masterclass"],
  },
  {
    id: "f8",
    name: "Neha Gupta",
    role: "Cloud Solutions Architect",
    specialization: "Development",
    bio: "AWS Certified Solutions Architect with 8 certifications. Helped 50+ companies migrate to cloud. Breaks down complex infra into simple concepts.",
    avatar: "https://i.pravatar.cc/160?img=32",
    rating: 4.7,
    totalStudents: 2890,
    totalCourses: 2,
    experience: "8 years",
    badge: "Expert",
    social: { linkedin: "#", twitter: "#", website: null },
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    courses: ["Cloud Computing & AWS", "DevOps Fundamentals"],
  },
];

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const SPECIALIZATIONS = ["All", "Development", "Design", "Data", "Marketing"];
const SORT_OPTIONS    = ["Most Popular", "Top Rated", "Most Courses", "Most Experience"];
const VISIBLE_COUNT   = 6;

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const fmtStudents = (n) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

const badgeColor = (badge) => {
  if (badge === "Top Instructor") return { bg: "rgba(245,158,11,0.1)", color: "#b45309", border: "rgba(245,158,11,0.25)" };
  if (badge === "Expert")         return { bg: "rgba(14,116,144,0.08)", color: "#0e7490", border: "rgba(14,116,144,0.2)" };
  return null;
};

// ─── STAR DISPLAY ─────────────────────────────────────────────────────────────
// FIX: Uses fill + color props directly — no className color hacks
// FIX: Keyed by star index, not by rating value — stable across re-renders
const StarDisplay = React.memo(({ rating, size = 13 }) => (
  <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
    {[1, 2, 3, 4, 5].map((star) => {
      const filled = star <= Math.round(rating);
      return (
        <Star
          key={star}
          size={size}
          fill={filled ? "#f59e0b" : "none"}
          color={filled ? "#f59e0b" : "#cbd5e1"}
        />
      );
    })}
    <span style={{ fontSize: "0.74rem", fontWeight: 600, color: "#92400e", marginLeft: 4 }}>
      {rating.toFixed(1)}
    </span>
  </div>
));

// ─── SOCIAL BUTTON ────────────────────────────────────────────────────────────
const SocialBtn = ({ href, icon: Icon, label }) => {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fc-social-btn"
      onClick={(e) => e.stopPropagation()}
    >
      <Icon size={14} />
    </a>
  );
};

// ─── FACULTY CARD ─────────────────────────────────────────────────────────────
const FacultyCard = React.memo(({ teacher, index, isExpanded, onToggle }) => {
  const badge = badgeColor(teacher.badge);

  return (
    <article
      className="fc-card"
      style={{ animationDelay: `${Math.min(index, 5) * 70}ms` }}
    >
      {/* Top accent bar keyed to specialization */}
      <div
        className="fc-card-accent"
        style={{
          background:
            teacher.specialization === "Design"     ? "linear-gradient(90deg,#0f766e,#14b8a6)" :
            teacher.specialization === "Data"        ? "linear-gradient(90deg,#0369a1,#38bdf8)" :
            teacher.specialization === "Marketing"   ? "linear-gradient(90deg,#7c3aed,#a78bfa)" :
            "linear-gradient(90deg,#0a5c73,#0e7490)",
        }}
      />

      {/* Header row */}
      <div className="fc-card-top">
        <div className="fc-avatar-wrap">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="fc-avatar"
            loading="lazy"
          />
          <div className="fc-avatar-ring" />
        </div>

        <div className="fc-card-info">
          <div className="fc-name-row">
            <h3 className="fc-name">{teacher.name}</h3>
            {badge && (
              <span
                className="fc-badge"
                style={{ background: badge.bg, color: badge.color, borderColor: badge.border }}
              >
                <Award size={9} /> {teacher.badge}
              </span>
            )}
          </div>
          <p className="fc-role">{teacher.role}</p>
          <span className="fc-spec">{teacher.specialization}</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="fc-stats">
        <div className="fc-stat">
          <Users size={12} color="#0e7490" />
          <span className="fc-stat-val">{fmtStudents(teacher.totalStudents)}</span>
          <span className="fc-stat-lbl">Students</span>
        </div>
        <div className="fc-stat-divider" />
        <div className="fc-stat">
          <BookOpen size={12} color="#0e7490" />
          <span className="fc-stat-val">{teacher.totalCourses}</span>
          <span className="fc-stat-lbl">Courses</span>
        </div>
        <div className="fc-stat-divider" />
        <div className="fc-stat">
          <TrendingUp size={12} color="#0e7490" />
          <span className="fc-stat-val">{teacher.experience}</span>
          <span className="fc-stat-lbl">Experience</span>
        </div>
      </div>

      {/* Rating */}
      <div className="fc-rating-row">
        <StarDisplay rating={teacher.rating} />
      </div>

      {/* Bio */}
      <p className="fc-bio">{teacher.bio}</p>

      {/* Skills */}
      <div className="fc-skills">
        {teacher.skills.map((skill) => (
          <span key={skill} className="fc-skill">{skill}</span>
        ))}
      </div>

      {/* Expanded: courses list */}
      {isExpanded && (
        <div className="fc-courses">
          <div className="fc-courses-label">
            <GraduationCap size={12} /> Courses by {teacher.name.split(" ")[0]}
          </div>
          <div className="fc-courses-list">
            {teacher.courses.map((c) => (
              <div key={c} className="fc-course-item">
                <BookOpen size={11} color="#0e7490" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="fc-card-footer">
        <div className="fc-socials">
          <SocialBtn href={teacher.social.linkedin} icon={Linkedin}  label="LinkedIn" />
          <SocialBtn href={teacher.social.twitter}  icon={Twitter}   label="Twitter"  />
          <SocialBtn href={teacher.social.website}  icon={Globe}     label="Website"  />
        </div>

        <button
          type="button"
          className="fc-expand-btn"
          onClick={() => onToggle(teacher.id)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Show less" : "View courses"}
        >
          {isExpanded ? (
            <><ChevronUp size={13} /> Less</>
          ) : (
            <><ChevronDown size={13} /> Courses</>
          )}
        </button>
      </div>
    </article>
  );
});

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
const FacultyPage = () => {
  const [searchQuery,       setSearchQuery]       = useState("");
  const [activeSpec,        setActiveSpec]        = useState("All");
  const [sortBy,            setSortBy]            = useState("Most Popular");
  const [showAll,           setShowAll]           = useState(false);
  const [expandedCards,     setExpandedCards]     = useState(new Set());
  const [showFilters,       setShowFilters]       = useState(false);

  // ── Toggle card expand ────────────────────────────────────────────────────
  const toggleExpand = useCallback((id) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  // ── Filter + sort (memoized) ──────────────────────────────────────────────
  const filteredFaculty = useMemo(() => {
    let list = facultyData.filter((t) => {
      const q = searchQuery.toLowerCase();
      const matchSearch = !q ||
        t.name.toLowerCase().includes(q) ||
        t.role.toLowerCase().includes(q) ||
        t.skills.some((s) => s.toLowerCase().includes(q));
      const matchSpec = activeSpec === "All" || t.specialization === activeSpec;
      return matchSearch && matchSpec;
    });

    switch (sortBy) {
      case "Top Rated":      list = [...list].sort((a, b) => b.rating - a.rating); break;
      case "Most Popular":   list = [...list].sort((a, b) => b.totalStudents - a.totalStudents); break;
      case "Most Courses":   list = [...list].sort((a, b) => b.totalCourses - a.totalCourses); break;
      case "Most Experience":list = [...list].sort((a, b) => parseInt(b.experience) - parseInt(a.experience)); break;
      default: break;
    }
    return list;
  }, [searchQuery, activeSpec, sortBy]);

  const visibleFaculty = useMemo(
    () => showAll ? filteredFaculty : filteredFaculty.slice(0, VISIBLE_COUNT),
    [filteredFaculty, showAll]
  );
  const remainingCount  = Math.max(0, filteredFaculty.length - VISIBLE_COUNT);
  const hasActiveFilter = activeSpec !== "All" || searchQuery !== "" || sortBy !== "Most Popular";

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setActiveSpec("All");
    setSortBy("Most Popular");
    setShowAll(false);
  }, []);

  // ── Summary stats ─────────────────────────────────────────────────────────
  const totalStudents = useMemo(() => facultyData.reduce((s, t) => s + t.totalStudents, 0), []);
  const totalCourses  = useMemo(() => facultyData.reduce((s, t) => s + t.totalCourses, 0), []);
  const avgRating     = useMemo(() => (facultyData.reduce((s, t) => s + t.rating, 0) / facultyData.length).toFixed(1), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-dark:   #0a5c73;
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
          --shadow-hover:0 12px 36px rgba(14,116,144,0.14);
          --radius:      18px;
        }

        .fc-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          padding: 88px 24px 80px;
        }

        /* ── HEADER ────────────────────────────────────── */
        .fc-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 40px;
          animation: fadeUp 0.5s ease both;
        }

        .fc-header-badge {
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

        .fc-title {
          font-family: var(--ff-display);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 700;
          color: #0c1a2e;
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin-bottom: 12px;
        }

        .fc-title span {
          font-style: italic;
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .fc-subtitle {
          font-size: 0.92rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
        }

        /* ── SUMMARY STRIP ─────────────────────────────── */
        .fc-summary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          max-width: 560px;
          margin: 0 auto 44px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: var(--shadow);
          animation: fadeUp 0.5s 0.08s ease both;
        }

        .fc-summary-item {
          flex: 1;
          padding: 16px 12px;
          text-align: center;
          border-right: 1px solid var(--border);
        }
        .fc-summary-item:last-child { border-right: none; }

        .fc-summary-val {
          font-family: var(--ff-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--cyan);
          line-height: 1;
          margin-bottom: 3px;
          letter-spacing: -0.02em;
        }

        .fc-summary-lbl {
          font-size: 0.67rem;
          color: var(--slate-light);
          text-transform: uppercase;
          letter-spacing: 0.09em;
          font-weight: 400;
        }

        /* ── SPEC TABS ─────────────────────────────────── */
        .fc-spec-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
          animation: fadeUp 0.5s 0.12s ease both;
        }

        .fc-spec-tab {
          padding: 8px 20px;
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
        }
        .fc-spec-tab:hover { border-color: var(--cyan); color: var(--cyan); }
        .fc-spec-tab.active {
          background: var(--cyan);
          border-color: var(--cyan);
          color: var(--white);
          font-weight: 500;
          box-shadow: 0 4px 14px rgba(14,116,144,0.28);
        }

        /* ── CONTROLS ──────────────────────────────────── */
        .fc-controls {
          max-width: 1200px;
          margin: 0 auto 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeUp 0.5s 0.16s ease both;
        }

        .fc-search-row {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .fc-search-wrap {
          position: relative;
          flex: 1;
        }

        .fc-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--slate-light);
          pointer-events: none;
        }

        .fc-search {
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
        .fc-search::placeholder { color: #cbd5e1; }
        .fc-search:focus {
          border-color: var(--cyan);
          box-shadow: 0 0 0 3px rgba(14,116,144,0.1);
        }

        .fc-search-clear {
          position: absolute;
          right: 13px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer; color: var(--slate-light);
          display: flex; align-items: center;
          transition: color 0.15s;
        }
        .fc-search-clear:hover { color: #ef4444; }

        .fc-sort-select {
          padding: 11px 32px 11px 14px;
          border: 1.5px solid var(--border);
          border-radius: 100px;
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          color: var(--slate);
          cursor: pointer;
          outline: none;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          min-width: 175px;
          box-shadow: var(--shadow);
          transition: border-color 0.2s;
        }
        .fc-sort-select:focus { border-color: var(--cyan); }

        /* ── ACTIVE FILTER BAR ─────────────────────────── */
        .fc-filter-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .fc-filter-tag {
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

        .fc-clear-btn {
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
        .fc-clear-btn:hover { background: rgba(239,68,68,0.06); }

        .fc-result-count {
          margin-left: auto;
          font-size: 0.78rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── GRID ──────────────────────────────────────── */
        .fc-grid-wrap { max-width: 1200px; margin: 0 auto; }

        .fc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 22px;
          margin-bottom: 32px;
        }

        /* ── FACULTY CARD ──────────────────────────────── */
        .fc-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.28s ease,
                      border-color 0.22s ease;
          display: flex;
          flex-direction: column;
          gap: 0;
          opacity: 0;
          animation: cardIn 0.42s ease forwards;
          position: relative;
        }

        .fc-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(14,116,144,0.28);
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fc-card-accent {
          height: 3px;
          width: 100%;
        }

        .fc-card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 20px 14px;
        }

        /* Avatar */
        .fc-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .fc-avatar {
          width: 62px; height: 62px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 2px solid var(--white);
          box-shadow: 0 2px 10px rgba(14,116,144,0.15);
        }

        .fc-avatar-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 1.5px solid rgba(14,116,144,0.2);
          pointer-events: none;
        }

        .fc-card-info { flex: 1; min-width: 0; }

        .fc-name-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 3px;
        }

        .fc-name {
          font-family: var(--ff-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: #0c1a2e;
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .fc-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 9px;
          border-radius: 100px;
          border: 1px solid;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .fc-role {
          font-size: 0.78rem;
          color: var(--slate);
          font-weight: 300;
          margin-bottom: 6px;
        }

        .fc-spec {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 500;
          background: rgba(14,116,144,0.08);
          color: var(--cyan);
          border: 1px solid rgba(14,116,144,0.15);
          letter-spacing: 0.05em;
        }

        /* Stats */
        .fc-stats {
          display: flex;
          align-items: center;
          margin: 0 20px;
          padding: 12px 0;
          border-top: 1px solid rgba(14,116,144,0.07);
          border-bottom: 1px solid rgba(14,116,144,0.07);
        }

        .fc-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }

        .fc-stat-divider {
          width: 1px;
          height: 28px;
          background: rgba(14,116,144,0.1);
        }

        .fc-stat-val {
          font-family: var(--ff-display);
          font-size: 1rem;
          font-weight: 700;
          color: #0c1a2e;
          line-height: 1;
        }

        .fc-stat-lbl {
          font-size: 0.62rem;
          color: var(--slate-light);
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        /* Rating */
        .fc-rating-row {
          padding: 10px 20px 6px;
        }

        /* Bio */
        .fc-bio {
          padding: 0 20px;
          font-size: 0.81rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Skills */
        .fc-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 12px 20px 6px;
        }

        .fc-skill {
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 400;
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
          transition: all 0.15s ease;
        }

        .fc-card:hover .fc-skill {
          background: rgba(14,116,144,0.06);
          border-color: rgba(14,116,144,0.18);
          color: var(--cyan);
        }

        /* Expanded courses */
        .fc-courses {
          margin: 10px 20px 0;
          padding: 14px;
          background: rgba(14,116,144,0.04);
          border: 1px solid rgba(14,116,144,0.1);
          border-radius: 10px;
          animation: slideDown 0.22s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fc-courses-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }

        .fc-courses-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .fc-course-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.78rem;
          color: #334155;
          font-weight: 300;
        }

        /* Footer */
        .fc-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px 16px;
          margin-top: auto;
          border-top: 1px solid rgba(14,116,144,0.07);
        }

        .fc-socials {
          display: flex;
          gap: 8px;
        }

        .fc-social-btn {
          width: 30px; height: 30px;
          border-radius: 8px;
          background: rgba(14,116,144,0.07);
          border: 1px solid rgba(14,116,144,0.12);
          display: flex; align-items: center; justify-content: center;
          color: var(--slate);
          text-decoration: none;
          transition: all 0.18s ease;
        }

        .fc-social-btn:hover {
          background: var(--cyan);
          border-color: var(--cyan);
          color: #fff;
          transform: translateY(-2px);
        }

        .fc-expand-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 14px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: none;
          font-family: var(--ff-body);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--cyan);
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .fc-expand-btn:hover {
          background: rgba(14,116,144,0.06);
          border-color: var(--cyan);
        }

        /* ── EMPTY STATE ───────────────────────────────── */
        .fc-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          text-align: center;
          gap: 14px;
        }

        .fc-empty-icon {
          width: 68px; height: 68px;
          background: rgba(14,116,144,0.06);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--slate-light);
        }

        .fc-empty-title {
          font-family: var(--ff-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: #0c1a2e;
        }

        .fc-empty-btn {
          padding: 10px 24px;
          border-radius: 100px;
          background: var(--cyan);
          color: #fff;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .fc-empty-btn:hover { background: var(--cyan-dark); transform: translateY(-1px); }

        /* ── SHOW MORE ─────────────────────────────────── */
        .fc-show-more {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .fc-show-more-btn {
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
        .fc-show-more-btn:hover {
          border-color: var(--cyan);
          background: rgba(14,116,144,0.05);
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }

        .fc-count-note {
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
        @media (max-width: 768px) {
          .fc-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
          .fc-search-row { flex-wrap: wrap; }
          .fc-sort-select { min-width: 0; flex: 1; }
        }

        @media (max-width: 480px) {
          .fc-grid { grid-template-columns: 1fr; }
          .fc-summary { max-width: 100%; }
        }
      `}</style>

      <div className="fc-page">

        {/* ── HEADER ───────────────────────────────────────────────── */}
        <div className="fc-header">
          <div className="fc-header-badge">
            <GraduationCap size={11} /> Meet Our Faculty
          </div>
          <h1 className="fc-title">
            Learn from the <span>Best</span>
          </h1>
          <p className="fc-subtitle">
            Our instructors are industry veterans, researchers, and practitioners
            who bring real-world experience into every lesson.
          </p>
        </div>

        {/* ── SUMMARY STRIP ────────────────────────────────────────── */}
        <div className="fc-summary">
          <div className="fc-summary-item">
            <div className="fc-summary-val">{facultyData.length}</div>
            <div className="fc-summary-lbl">Instructors</div>
          </div>
          <div className="fc-summary-item">
            <div className="fc-summary-val">{fmtStudents(totalStudents)}</div>
            <div className="fc-summary-lbl">Students Taught</div>
          </div>
          <div className="fc-summary-item">
            <div className="fc-summary-val">{totalCourses}</div>
            <div className="fc-summary-lbl">Courses</div>
          </div>
          <div className="fc-summary-item">
            <div className="fc-summary-val">{avgRating}★</div>
            <div className="fc-summary-lbl">Avg Rating</div>
          </div>
        </div>

        {/* ── SPEC TABS ────────────────────────────────────────────── */}
        <div className="fc-spec-tabs">
          {SPECIALIZATIONS.map((spec) => (
            <button
              key={spec}
              type="button"
              className={`fc-spec-tab ${activeSpec === spec ? "active" : ""}`}
              onClick={() => { setActiveSpec(spec); setShowAll(false); }}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* ── CONTROLS ─────────────────────────────────────────────── */}
        <div className="fc-controls">
          <div className="fc-search-row">
            <div className="fc-search-wrap">
              <Search size={15} className="fc-search-icon" />
              <input
                type="search"
                className="fc-search"
                placeholder="Search by name, role, or skill…"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
                aria-label="Search faculty"
              />
              {searchQuery && (
                <button className="fc-search-clear" onClick={() => setSearchQuery("")} aria-label="Clear">
                  <X size={13} />
                </button>
              )}
            </div>

            <select
              className="fc-sort-select"
              value={sortBy}
              onChange={(e) => { setSortBy(e.target.value); setShowAll(false); }}
              aria-label="Sort faculty"
            >
              {SORT_OPTIONS.map((op) => <option key={op} value={op}>{op}</option>)}
            </select>
          </div>

          {/* Active filters */}
          {hasActiveFilter && (
            <div className="fc-filter-bar">
              {searchQuery && (
                <span className="fc-filter-tag"><Search size={10} /> "{searchQuery}"</span>
              )}
              {activeSpec !== "All" && (
                <span className="fc-filter-tag">{activeSpec}</span>
              )}
              {sortBy !== "Most Popular" && (
                <span className="fc-filter-tag"><Filter size={10} /> {sortBy}</span>
              )}
              <button type="button" className="fc-clear-btn" onClick={clearFilters}>
                <X size={10} /> Clear all
              </button>
              <span className="fc-result-count">
                {filteredFaculty.length} instructor{filteredFaculty.length !== 1 ? "s" : ""}
              </span>
            </div>
          )}
        </div>

        {/* ── GRID ─────────────────────────────────────────────────── */}
        <div className="fc-grid-wrap">
          <div className="fc-grid">
            {filteredFaculty.length === 0 ? (
              <div className="fc-empty">
                <div className="fc-empty-icon">
                  <GraduationCap size={30} />
                </div>
                <h3 className="fc-empty-title">No instructors found</h3>
                <button type="button" className="fc-empty-btn" onClick={clearFilters}>
                  Show All Faculty
                </button>
              </div>
            ) : (
              visibleFaculty.map((teacher, index) => (
                <FacultyCard
                  key={teacher.id}
                  teacher={teacher}
                  index={index}
                  isExpanded={expandedCards.has(teacher.id)}
                  onToggle={toggleExpand}
                />
              ))
            )}
          </div>

          {/* Show more / less */}
          {filteredFaculty.length > VISIBLE_COUNT && (
            <div className="fc-show-more">
              <button
                type="button"
                className="fc-show-more-btn"
                onClick={() => setShowAll((p) => !p)}
              >
                {showAll
                  ? <><ChevronUp size={15} /> Show Less</>
                  : <><ChevronDown size={15} /> Show {remainingCount} More</>
                }
              </button>
              {!showAll && (
                <span className="fc-count-note">
                  Showing {visibleFaculty.length} of {filteredFaculty.length}
                </span>
              )}
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default FacultyPage;