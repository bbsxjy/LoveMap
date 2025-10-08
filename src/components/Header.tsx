import { useState, useEffect } from "react";

export function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <style>{`
        .header-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .nav-link {
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #e91e63 !important;
          transform: translateY(-2px);
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          height: 100vh;
          background: white;
          box-shadow: -2px 0 10px rgba(0,0,0,0.2);
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 2000;
        }
        .mobile-menu.open {
          transform: translateX(0);
        }
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-overlay.open {
          opacity: 1;
          pointer-events: all;
        }
      `}</style>

      <header className="header-nav">
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="/#"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#e91e63",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>♥</span>
            <span>Xie & Chen</span>
          </a>

          {/* Desktop Navigation - Always visible on desktop */}
          {!isMobile && (
            <nav
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <a
                href="/#"
                className="nav-link"
                style={{
                  color: "#1f2937",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                我们
              </a>
              <a
                href="/#/footprints"
                className="nav-link"
                style={{
                  color: "#1f2937",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                我们的脚印
              </a>
              <a
                href="/#/gallery"
                className="nav-link"
                style={{
                  color: "#1f2937",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                我们的相册
              </a>
              <a
                href="/#/blog"
                className="nav-link"
                style={{
                  color: "#1f2937",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                我们的随笔
              </a>
            </nav>
          )}

          {/* Mobile Menu Button - Only on mobile */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(true)}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                color: "#e91e63",
                cursor: "pointer",
                padding: "0.5rem",
              }}
              aria-label="Open menu"
            >
              ☰
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay - Only on mobile */}
      {isMobile && (
        <>
          <div
            className={`mobile-overlay ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
            <div style={{ padding: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "2rem",
                }}
              >
                <span
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#e91e63",
                  }}
                >
                  菜单
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "1.5rem",
                    color: "#1f2937",
                    cursor: "pointer",
                    padding: "0.5rem",
                  }}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a
                  href="/#"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "#1f2937",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "1.125rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    transition: "background 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#fce7f3";
                    e.currentTarget.style.color = "#e91e63";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#1f2937";
                  }}
                >
                  🏠 我们
                </a>
                <a
                  href="/#/footprints"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "#1f2937",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "1.125rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    transition: "background 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#fce7f3";
                    e.currentTarget.style.color = "#e91e63";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#1f2937";
                  }}
                >
                  👣 我们的脚印
                </a>
                <a
                  href="/#/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "#1f2937",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "1.125rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    transition: "background 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#fce7f3";
                    e.currentTarget.style.color = "#e91e63";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#1f2937";
                  }}
                >
                  📷 我们的相册
                </a>
                <a
                  href="/#/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "#1f2937",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "1.125rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    transition: "background 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#fce7f3";
                    e.currentTarget.style.color = "#e91e63";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#1f2937";
                  }}
                >
                  📝 我们的随笔
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
