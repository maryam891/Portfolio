
import '../css/About.css'

const skills = [
  { label: 'Programming Language & Frameworks', items: 'React · TypeScript · JavaScript · HTML & CSS · UX/UI Design · Graphic design · Node.js · SQL/SQLite · Vue.js · WordPress · Express' },
  { label: 'Tools', items: 'Git · Jira · React bootstrap · Vitest · Jest · Figma' },
  { label: 'Language', items: 'Swedish · English · Urdu' },
]

export default function About() {

  return (
    <section className={"about-section"} id="About">
      <div className={"about-label"}><h2 >About me</h2></div>
      <div className={"main-about-container"} >
        <div className={"about-text-container"}>
          <p>I am currently studying my last term at IT-Högskolan as a Frontend Developer, with a background in UX & UI design. That combinations means I that I think both through the user's perspective while also thinking about code, seeing the two as a whole.</p>
          <p>Right now I am doing my second internship at Viscando AB, where I also had my first internship. At Viscando I am building a visual user interface with React, TypeScript, JSON Forms and React Flow. I thrive in a structured team where we can share ideas and learn from each other.</p>
          <p>I am graduating in June 2026 and actively looking for my first role as a Frontend Developer!</p>
        </div>
        <div className={"skills-container"}>
          {skills.map((s) => (
            <div key={s.label} className={"skills-card"}>
              <div className={"skills-label"}>{s.label}</div>
              <div className={"skills-item"}>{s.items}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
