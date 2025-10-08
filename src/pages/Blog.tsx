interface BlogProps {
  isPreview?: boolean;
}

export function BlogPage({ isPreview = false }: BlogProps) {
  const blogPosts = [
    {
      id: 1,
      title: "我们的第一次约会",
      date: "2024-02-14",
      excerpt:
        "那天阳光明媚，我们第一次见面，心跳加速，紧张又期待。没想到这一次约会，会成为我们爱情故事的开始...",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "一起旅行的日子",
      date: "2024-06-20",
      excerpt:
        "我们一起去了梦想中的地方，看遍了山川湖海，留下了无数美好的回忆。每一个脚印都是我们爱情的见证...",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "平凡而幸福的日常",
      date: "2024-09-15",
      excerpt:
        "生活不总是轰轰烈烈，更多的是柴米油盐的平淡。但正是这些平凡的日子，让我们的爱情更加真实和珍贵...",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=500&fit=crop",
    },
    {
      id: 4,
      title: "我们的纪念日",
      date: "2024-12-25",
      excerpt: "今天是我们在一起的纪念日，回想起这一年来的点点滴滴，心中充满了感激和幸福...",
      image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=500&fit=crop",
    },
  ];

  const displayPosts = isPreview ? blogPosts.slice(0, 2) : blogPosts;

  const sectionStyle = {
    width: "100%",
    background: isPreview
      ? "linear-gradient(180deg, #ffffff 0%, #fce7f3 100%)"
      : "linear-gradient(180deg, #fce7f3 0%, #ffffff 100%)",
    padding: "5rem 1rem",
  };

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-up { animation: slideUp 0.6s ease-out; }
      `}</style>
      <section style={sectionStyle}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }} className="slide-up">
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "1rem",
              }}
            >
              {isPreview ? "我们的故事" : "爱情日记"}
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
                ? "记录每一个值得纪念的瞬间，书写属于我们的爱情日记"
                : "每一篇文字都是我们爱情的见证，每一段故事都值得被珍藏"}
            </p>
          </div>

          {/* Blog Posts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {displayPosts.map((post) => (
              <article
                key={post.id}
                className="slide-up"
                style={{
                  background: "white",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: window.innerWidth < 768 ? "column" : "row",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
              >
                <div style={{ flex: window.innerWidth < 768 ? "none" : "0 0 40%" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: window.innerWidth < 768 ? "200px" : "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ flex: 1, padding: "2rem" }}>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "#6b7280",
                      marginBottom: "0.75rem",
                    }}
                  >
                    📅 {post.date}
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "1rem",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      color: "#4b5563",
                      lineHeight: "1.7",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  {!isPreview && (
                    <button
                      style={{
                        color: "#e91e63",
                        fontWeight: "600",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1rem",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#ff4081";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#e91e63";
                      }}
                    >
                      阅读全文 →
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* View More Button (only in preview mode) */}
          {isPreview && (
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <a
                href="#/blog"
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
                阅读更多故事
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
