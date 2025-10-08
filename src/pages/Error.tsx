export function ErrorPage() {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .pulse-anim { animation: pulse 2s infinite; }
        .bounce-anim { animation: bounce 2s infinite; }
      `}</style>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #fce7f3 0%, #e9d5ff 50%, #fce7f3 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "600px" }}>
          {/* 404 Text */}
          <div style={{ position: "relative", marginBottom: "2rem" }}>
            <h1
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "clamp(6rem, 15vw, 12rem)",
                fontWeight: "bold",
                color: "rgba(233, 30, 99, 0.2)",
                margin: 0,
                userSelect: "none",
              }}
            >
              404
            </h1>
            <div
              className="pulse-anim"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "clamp(4rem, 10vw, 6rem)",
                color: "#e91e63",
              }}
            >
              ♥
            </div>
          </div>

          {/* Message */}
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "1rem",
            }}
          >
            哎呀！迷路了~
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#4b5563",
              marginBottom: "2rem",
              lineHeight: "1.7",
            }}
          >
            看来你走到了一个不存在的地方，就像爱情中偶尔的小插曲。
            <br />
            让我们回到温暖的地方吧！
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: window.innerWidth < 640 ? "column" : "row",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
          >
            <a
              href="/#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#e91e63",
                color: "white",
                fontWeight: "600",
                padding: "1rem 2rem",
                borderRadius: "2rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(233, 30, 99, 0.3)",
                gap: "0.5rem",
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
              🏠 返回首页
            </a>
            <a
              href="/#/gallery"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                color: "#e91e63",
                fontWeight: "600",
                padding: "1rem 2rem",
                borderRadius: "2rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                border: "2px solid #e91e63",
                gap: "0.5rem",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#fce7f3";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              📷 查看照片
            </a>
          </div>

          {/* Decorative Hearts */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              fontSize: "2rem",
              color: "#e91e63",
            }}
          >
            <span className="bounce-anim" style={{ animationDelay: "0s" }}>
              ♥
            </span>
            <span className="bounce-anim" style={{ animationDelay: "0.3s" }}>
              ♥
            </span>
            <span className="bounce-anim" style={{ animationDelay: "0.6s" }}>
              ♥
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
