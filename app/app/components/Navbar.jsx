export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#0B1628",
        position: "sticky",
        top: 0,
      }}
    >
      <h2 style={{ margin: 0, color: "#1E88FF" }}>
        FLOWPOINT Drainage
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
        <a href="#areas" style={{ color: "white", textDecoration: "none" }}>Areas</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </div>
    </nav>
  );
}
