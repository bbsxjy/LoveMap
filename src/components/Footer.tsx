export function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
        color: "white",
        marginTop: "auto",
      }}
    >
      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* About Section */}
          <div>
            <h3
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#e91e63",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>♥</span>
              <span>Xie & Chen</span>
            </h3>
            <p
              style={{
                color: "#9ca3af",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
              }}
            >
              记录我们在一起的每一个美好瞬间，珍藏属于我们的爱情故事。
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="#"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "rgba(233, 30, 99, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#e91e63",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#e91e63";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(233, 30, 99, 0.2)";
                  e.currentTarget.style.color = "#e91e63";
                }}
              >
                ♥
              </a>
              <a
                href="#"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "rgba(233, 30, 99, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#e91e63",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#e91e63";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(233, 30, 99, 0.2)";
                  e.currentTarget.style.color = "#e91e63";
                }}
              >
                📷
              </a>
              <a
                href="#"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "rgba(233, 30, 99, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#e91e63",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#e91e63";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(233, 30, 99, 0.2)";
                  e.currentTarget.style.color = "#e91e63";
                }}
              >
                ✉
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              快速链接
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="/#"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#e91e63";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                首页
              </a>
              <a
                href="/#/footprints"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#e91e63";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                我们的脚印
              </a>
              <a
                href="/#/gallery"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#e91e63";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                我们的相册
              </a>
              <a
                href="/#/blog"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#e91e63";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                我们的随笔
              </a>
            </nav>
          </div>

          {/* Love Quote */}
          <div>
            <h4
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              爱的宣言
            </h4>
            <p
              style={{
                color: "#9ca3af",
                fontStyle: "italic",
                lineHeight: "1.7",
              }}
            >
              "在茫茫人海中遇见你，是我此生最美的意外。
              愿我们的爱情，如这网站一样，永久保存，历久弥新。"
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255, 255, 255, 0.1)",
            margin: "2rem 0",
          }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            flexDirection: window.innerWidth < 640 ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            textAlign: window.innerWidth < 640 ? "center" : "left",
          }}
        >
          <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>
            © {currentYear} Xie & Chen. Made with ♥ by xjingyu@
          </p>
          <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>
            永远在一起 · Forever Together
          </p>
        </div>
      </div>
    </footer>
  );
}
