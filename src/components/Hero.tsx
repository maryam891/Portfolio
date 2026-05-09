import "../css/Hero.css"
import logo from "../assets/logo.png"
export default function Hero() {
  return (
    <section className={"main-hero-container"}>
      <div className={"hero-text-container"}>
        <p className="available-text">Available from June of 2026</p>
        <h1>
          Frontend<br /><em>Developer</em>
        </h1>
        <p className={"hero-text"}>
          A programmer with a passion for implementing fun and creative user friendly applications.
        </p>
        <div className={"hero-links-container"}>
          <a href="#Projects" className={"see-project-link"}>View projects →</a>
          <a href="#Contact" className={"contact-link"}>Contact me →</a>
        </div>
      </div>

      <div className={"qualities-container"}>
        <div className={"logo-container"}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={"qualities-inner-container"}>
          <span>React</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>SQL/SQLite</span>
          <span>UX/UI</span>
          <span>Git</span>
        </div>
      </div>
    </section>

  )
}
