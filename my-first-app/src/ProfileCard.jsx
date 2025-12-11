export default function ProfileCard() {
  return (
    <div style={{
      width: "350px",
      margin: "50px auto",
      padding: "20px",
      borderRadius: "16px",
      boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "sans-serif"
    }}>
      <img 
        src="https://via.placeholder.com/120" 
        alt="profile"
        style={{ borderRadius: "50%", marginBottom: "15px" }}
      />
      <h2>Azhar Ali</h2>
      <p>
        Aspiring React Developer • Learning MERN •  
        Passionate about AI Tools & Freelancing
      </p>

      <h3>Skills</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>React</li>
        <li>JavaScript</li>
        <li>Tailwind CSS (Soon)</li>
        <li>Git & GitHub</li>
      </ul>

      <button style={{
        marginTop: "15px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        background: "black",
        color: "white"
      }}>
        Contact Me
      </button>
    </div>
  );
}
