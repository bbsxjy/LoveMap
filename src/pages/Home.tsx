import { GalleryPage } from "./Gallery";
import { BlogPage } from "./Blog";

// Landing Section Component
const LandingSection = () => {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .fade-in { animation: fadeIn 1s ease-out; }
        .fade-in-delay-1 { animation: fadeIn 1.5s ease-out; }
        .fade-in-delay-2 { animation: fadeIn 2s ease-out; }
        .pulse-heart { animation: pulse 2s infinite; }
      `}</style>
      <section
        style={{
          background: "linear-gradient(135deg, #ec4899 0%, #be123c 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="fade-in"
          style={{
            textAlign: "center",
            color: "white",
            zIndex: 10,
            padding: "2rem",
            maxWidth: "1200px",
          }}
        >
          <div
            className="fade-in-delay-1"
            style={{
              fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              opacity: 0.9,
              marginBottom: "2rem",
              fontWeight: 300,
            }}
          >
            Just for us
          </div>

          <h1
            className="fade-in-delay-2"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: "bold",
              marginBottom: "1rem",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              lineHeight: 1.2,
            }}
          >
            XIE <span style={{ fontStyle: "italic", color: "#ffc0cb" }}>&amp;</span> CHEN
          </h1>

          <div
            className="pulse-heart"
            style={{
              fontSize: "3rem",
              margin: "2rem 0",
            }}
          >
            ♥
          </div>

          <div
            className="fade-in-delay-2"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              opacity: 0.95,
              fontStyle: "italic",
              letterSpacing: "0.1em",
            }}
          >
            love story
          </div>
        </div>
      </section>
    </>
  );
};

// Story Timeline Section
const StorySection = () => {
  const timeline = [
    {
      year: "2023",
      season: "春天",
      title: "初次相遇",
      description:
        "那是一个春暖花开的季节，我们在朋友的聚会上初次相遇。你的笑容让整个房间都亮了起来。",
      icon: "♥",
    },
    {
      year: "2023",
      season: "夏天",
      title: "确定关系",
      description:
        "在那个星空璀璨的夏夜，我鼓起勇气向你表白。你说'好'的那一刻，是我人生中最幸福的时刻。",
      icon: "★",
    },
    {
      year: "2024",
      season: "秋天",
      title: "第一次旅行",
      description: "我们一起去了海边，看日出日落，漫步在沙滩上。每一个脚印都是我们爱情的见证。",
      icon: "✈",
    },
    {
      year: "2024",
      season: "冬天",
      title: "共度佳节",
      description:
        "第一个一起过的冬天，我们堆雪人、打雪仗，围着火炉喝热可可。温暖的不只是身体，更是心。",
      icon: "❄",
    },
    {
      year: "2025",
      season: "春天",
      title: "携手未来",
      description: "新的一年，新的开始。我们一起规划未来，一起面对挑战，一起创造更多美好的回忆。",
      icon: "∞",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .slide-in {
          animation: slideIn 0.6s ease-out;
        }
      `}</style>
      <section
        style={{
          width: "100%",
          background: "linear-gradient(180deg, #fce7f3 0%, #ffffff 100%)",
          padding: "5rem 1rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "1rem",
              }}
            >
              我们的时间线
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "#4b5563",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              从相遇到相知，从相爱到相守，每一个瞬间都值得被铭记
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {timeline.map((item, index) => (
              <div
                key={index}
                className="slide-in"
                style={{
                  display: "flex",
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  gap: "2rem",
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      background: "white",
                      borderRadius: "1rem",
                      padding: "2rem",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1rem",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          background: "#e91e63",
                          color: "white",
                          width: "3rem",
                          height: "3rem",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.5rem",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            color: "#e91e63",
                            fontWeight: "bold",
                            fontSize: "1.125rem",
                          }}
                        >
                          {item.year}
                        </div>
                        <div style={{ color: "#6b7280", fontSize: "0.875rem" }}>{item.season}</div>
                      </div>
                    </div>
                    <h3
                      style={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#1f2937",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "#4b5563",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <div
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #e91e63 0%, #ff4081 100%)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "2rem",
                boxShadow: "0 4px 12px rgba(233, 30, 99, 0.3)",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                fontFamily: '"Playfair Display", Georgia, serif',
              }}
            >
              <span style={{ marginRight: "0.5rem" }}>♥</span>
              故事未完待续，我们的爱情永不落幕
              <span style={{ marginLeft: "0.5rem" }}>♥</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Main Home Page
export default function HomePage() {
  return (
    <div>
      <LandingSection />
      <StorySection />
      <GalleryPage isPreview={true} />
      <BlogPage isPreview={true} />
    </div>
  );
}
