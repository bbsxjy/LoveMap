import { useState } from "react";

interface GalleryProps {
  isPreview?: boolean;
}

export function GalleryPage({ isPreview = false }: GalleryProps) {
  const sampleImages = [
    {
      id: 1,
      title: "美好时光",
      description: "记录我们在一起的每一个精彩瞬间",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=800&fit=crop",
    },
    {
      id: 2,
      title: "甜蜜回忆",
      description: "每一张照片都是我们爱的见证",
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=800&fit=crop",
    },
    {
      id: 3,
      title: "浪漫时刻",
      description: "在一起的日子总是充满欢笑",
      url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=800&fit=crop",
    },
    {
      id: 4,
      title: "幸福瞬间",
      description: "携手走过的每一步都值得纪念",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop",
    },
    {
      id: 5,
      title: "爱的印记",
      description: "时光荏苒，我们的爱却历久弥新",
      url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&h=800&fit=crop",
    },
    {
      id: 6,
      title: "永恒誓言",
      description: "执子之手，与子偕老",
      url: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&h=800&fit=crop",
    },
  ];

  const displayImages = isPreview ? sampleImages.slice(0, 4) : sampleImages;
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const sectionStyle = {
    width: "100%",
    background: isPreview ? "white" : "linear-gradient(180deg, #ffffff 0%, #fce7f3 100%)",
    padding: "5rem 1rem",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginBottom: "3rem",
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.6s ease-out; }
      `}</style>
      <section style={sectionStyle}>
        <div style={containerStyle}>
          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }} className="fade-in">
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "1rem",
              }}
            >
              {isPreview ? "照片墙" : "我们的照片集"}
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                color: "#4b5563",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              {isPreview
                ? "这里有我们所有的美好的回忆，哈哈，很多搞笑的，浪漫的。。只有你我的日子。让时间变的更慢一些吧！"
                : "每一张照片都记录着我们在一起的美好时光，从相识到相知，从相爱到相守。"}
            </p>
          </div>

          {/* Gallery Grid */}
          <div style={gridStyle}>
            {displayImages.map((image) => (
              <div
                key={image.id}
                className="fade-in"
                style={{
                  position: "relative",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)",
                    opacity: hoveredId === image.id ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.5rem",
                    color: "white",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {image.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", opacity: 0.9 }}>{image.description}</p>
                  <div style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
                    <span style={{ marginRight: "0.5rem" }}>♥</span>
                    {Math.floor(Math.random() * 50) + 20}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button (only in preview mode) */}
          {isPreview && (
            <div style={{ textAlign: "center" }}>
              <a
                href="#/gallery"
                style={{
                  display: "inline-block",
                  background: "#e91e63",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "2rem",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(233, 30, 99, 0.3)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#ff4081";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#e91e63";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                查看更多照片
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
