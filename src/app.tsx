import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import { HeaderComponent } from "./components/Header";
import { FooterComponent } from "./components/Footer";
import { ErrorPage } from "./pages/Error";
import { GalleryPage } from "./pages/Gallery";
import { BlogPage } from "./pages/Blog";
import { FootPrintsPage } from "./pages/FootPrints";

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <HeaderComponent />
        <main style={{ flex: 1, width: "100%" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/footprints" element={<FootPrintsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
}
