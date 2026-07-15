export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#08111F",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>
      <h1 style={{fontSize: "3rem"}}>
        FLOWPOINT Drainage
      </h1>

      <h2>24/7 Emergency Drainage Specialists</h2>

      <p>
        Fast Response Across London & Surrounding Areas
      </p>

      <div style={{marginTop: 30}}>
        <a
          href="tel:07506491178"
          style={{
            background:"#1E88FF",
            color:"white",
            padding:"15px 25px",
            borderRadius:"8px",
            textDecoration:"none",
            marginRight:"15px"
          }}
        >
          📞 Call Now
        </a>

        <a
          href="#contact"
          style={{
            border:"2px solid #1E88FF",
            color:"white",
            padding:"15px 25px",
            borderRadius:"8px",
            textDecoration:"none"
          }}
        >
          Get a Free Quote
        </a>
      </div>

      <section style={{marginTop:"60px"}}>
        <h2>Our Services</h2>

        <ul>
          <li>Blocked Drains</li>
          <li>CCTV Drain Surveys</li>
          <li>Drain Repairs</li>
          <li>High Pressure Water Jetting</li>
          <li>Emergency Call Outs</li>
          <li>Commercial & Domestic Drainage</li>
        </ul>
      </section>
    </main>
  );
}
