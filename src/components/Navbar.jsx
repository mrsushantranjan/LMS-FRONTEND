import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home as HomeIcon, BookOpen, BookMarked, Users, Contact, GraduationCap } from "lucide-react";
import { useAuth, useClerk, UserButton, useUser } from "@clerk/react";

// FIX: Removed "import logo from '../assets/logo.png'" — no assets folder exists
// FIX: Removed "import Home from './pages/Home'" — caused identifier clash crash
// FIX: Logo image replaced with GraduationCap icon — no image file needed

const navItems = [
  { name: "Home",    icon: HomeIcon,   href: "/"        },
  { name: "Courses", icon: BookOpen,   href: "/courses" },
  { name: "About",   icon: BookMarked, href: "/about"   },
  { name: "Faculty", icon: Users,      href: "/faculty" },
  { name: "Contact", icon: Contact,    href: "/contact" },
];

const Navbar = () => {
  const { openSignUp } = useClerk();
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setlastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const menuRef = useRef(null);

  const isLoggedIn = isSignedIn && Boolean(localStorage.getItem("token"));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --nav-bg: rgba(255, 255, 255, 0.72);
          --nav-border: rgba(14, 116, 144, 0.12);
          --nav-shadow: 0 4px 32px rgba(14, 116, 144, 0.08), 0 1px 0 rgba(255,255,255,0.9) inset;
          --pill-bg: rgba(240, 249, 255, 0.8);
          --pill-border: rgba(14, 116, 144, 0.15);
          --active-bg: rgba(14, 116, 144, 0.1);
          --active-text: #0e7490;
          --inactive-text: #64748b;
          --hover-text: #0369a1;
          --accent: #0e7490;
          --accent-2: #0891b2;
        }

        .lms-navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 10px 24px;
          background: var(--nav-bg);
          backdrop-filter: blur(20px) saturate(1.8);
          -webkit-backdrop-filter: blur(20px) saturate(1.8);
          border-bottom: 1px solid var(--nav-border);
          box-shadow: var(--nav-shadow);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.3s ease, box-shadow 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .lms-navbar.hidden  { transform: translateY(-100%); }

        .lms-navbar.scrolled {
          background: rgba(255, 255, 255, 0.88);
          box-shadow: 0 8px 40px rgba(14, 116, 144, 0.12);
        }

        .lms-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%; max-width: 1400px;
          margin: 0 auto; position: relative;
        }

        /* ── LOGO ─────────────────────────────── */
        .lms-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0; z-index: 1;
        }

        /* Icon box replaces the missing image */
        .lms-logo-icon {
          width: 36px; height: 36px;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 3px 10px rgba(14,116,144,0.28);
          flex-shrink: 0;
        }

        .lms-logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem; font-weight: 600;
          background: linear-gradient(135deg, #0c4a6e 0%, #0e7490 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.01em; line-height: 1;
        }

        .lms-logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem; font-weight: 300;
          color: #94a3b8; letter-spacing: 0.12em;
          text-transform: uppercase; margin-top: 2px;
          -webkit-text-fill-color: #94a3b8;
        }

        /* ── CENTER PILL ──────────────────────── */
        .lms-nav-pill {
          position: absolute; left: 50%; transform: translateX(-50%);
          display: flex; align-items: center; gap: 2px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 100px; padding: 4px;
          backdrop-filter: blur(12px);
          box-shadow: 0 2px 12px rgba(14,116,144,0.06), 0 0 0 1px rgba(255,255,255,0.8) inset;
        }

        .lms-nav-link {
          display: flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 100px;
          text-decoration: none;
          font-size: 0.8rem; font-weight: 500;
          color: var(--inactive-text);
          letter-spacing: 0.01em;
          transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap; position: relative;
        }

        .lms-nav-link:hover {
          color: var(--hover-text);
          background: rgba(14, 116, 144, 0.06);
        }

        .lms-nav-link.active {
          color: var(--active-text);
          background: var(--active-bg);
          font-weight: 500;
        }

        .lms-nav-link svg { flex-shrink: 0; opacity: 0.7; transition: opacity 0.2s ease; }
        .lms-nav-link:hover svg, .lms-nav-link.active svg { opacity: 1; }

        /* ── AUTH ─────────────────────────────── */
        .lms-auth { display: flex; align-items: center; flex-shrink: 0; z-index: 1; }

        .lms-signup-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; font-weight: 500;
          letter-spacing: 0.01em; cursor: pointer;
          border: 1.5px solid rgba(14, 116, 144, 0.3);
          color: var(--accent);
          background: rgba(240, 249, 255, 0.7);
          transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
        }

        .lms-signup-btn:hover {
          background: var(--accent); color: #fff;
          border-color: var(--accent);
          box-shadow: 0 4px 18px rgba(14, 116, 144, 0.28);
          transform: translateY(-1px);
        }

        .lms-signup-btn:active { transform: translateY(0); }

        .lms-user-btn {
          display: flex; align-items: center;
          padding: 3px; border-radius: 50%;
          border: 2px solid rgba(14, 116, 144, 0.2);
          transition: border-color 0.2s ease;
        }

        .lms-user-btn:hover { border-color: var(--accent); }
      `}</style>

      <nav
        className={[
          "lms-navbar",
          !showNavbar ? "hidden" : "",
          isScrolled ? "scrolled" : "",
        ].filter(Boolean).join(" ")}
      >
        <div className="lms-inner">

          {/* LEFT — LOGO (no image file needed) */}
          <NavLink to="/" className="lms-logo">
            <div className="lms-logo-icon">
              <GraduationCap size={18} color="#fff" />
            </div>
            <div>
              <div className="lms-logo-text">LMS</div>
              <div className="lms-logo-sub">Learning Platform</div>
            </div>
          </NavLink>

          {/* CENTER — PILL NAV */}
          <div className="lms-nav-pill">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `lms-nav-link${isActive ? " active" : ""}`
                  }
                >
                  <Icon size={14} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* RIGHT — AUTH */}
          <div className="lms-auth">
            {!isSignedIn ? (
              <button
                type="button"
                onClick={() => openSignUp({})}
                className="lms-signup-btn"
              >
                <span>Create Account</span>
              </button>
            ) : (
              <div className="lms-user-btn">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;