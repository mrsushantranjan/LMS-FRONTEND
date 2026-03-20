import { Routes, Route } from "react-router-dom";
import "./index.css";

// ─── PAGES ────────────────────────────────────────────────────────────────────
import Home from "./pages/Home";

// ─── COMPONENTS ───────────────────────────────────────────────────────────────
import Navbar                 from "./components/Navbar";
import Footer                 from "./components/Footer";
import CourseDetailedPageHome from "./components/CourseDetailedPageHome";
import CourseDetail           from "./components/CourseDetailedPage";
import AboutUsSections        from "./components/AboutUsPage";
import FacultyPage            from "./components/Faculty";
import ContactPage            from "./components/ContactPage";

// ─── LAYOUT ───────────────────────────────────────────────────────────────────
// Wraps every page EXCEPT Home (Home.jsx has its own navbar built in)
const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

// ─── APP ──────────────────────────────────────────────────────────────────────
function App() {
  return (
    <Routes>

      {/* Home — navbar is built inside Home.jsx, no Layout wrapper needed */}
      <Route path="/" element={<Home />} />

      {/* Courses list */}
      <Route
        path="/courses"
        element={<Layout><CourseDetailedPageHome /></Layout>}
      />

      {/* Single course detail — :id read by useParams() inside CourseDetailedPage */}
      <Route
        path="/courses/:id"
        element={<Layout><CourseDetail /></Layout>}
      />

      {/* About */}
      <Route
        path="/about"
        element={<Layout><AboutUsSections /></Layout>}
      />

      {/* Faculty */}
      <Route
        path="/faculty"
        element={<Layout><FacultyPage /></Layout>}
      />

      {/* Contact */}
      <Route
        path="/contact"
        element={<Layout><ContactPage /></Layout>}
      />

      {/* 404 — catches any unknown URL */}
      <Route
        path="*"
        element={
          <Layout>
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              minHeight: "80vh", fontFamily: "DM Sans, sans-serif",
              gap: 16, textAlign: "center", padding: "0 24px",
            }}>
              <div style={{ fontSize: "5rem", fontWeight: 700, color: "#e2e8f0" }}>404</div>
              <div style={{ fontSize: "1.4rem", fontWeight: 600, color: "#0c1a2e" }}>Page not found</div>
              <div style={{ fontSize: "0.9rem", color: "#94a3b8", fontWeight: 300 }}>
                The page you're looking for doesn't exist.
              </div>
              <a href="/" style={{
                marginTop: 8, padding: "11px 26px", borderRadius: "100px",
                background: "#0e7490", color: "#fff", textDecoration: "none",
                fontSize: "0.88rem", fontWeight: 500,
              }}>
                Back to Home
              </a>
            </div>
          </Layout>
        }
      />

    </Routes>
  );
}

export default App;