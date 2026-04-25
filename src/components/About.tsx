
import '../css/About.css'

const skills = [
  { label: 'Strong in', items: 'React · TypeScript · JavaScript · HTML & CSS · UX/UI Design · Graphic design' },
  { label: 'Intermediate in', items: 'Node.js · SQL · Vue.js' },
  { label: 'Tools', items: 'Git · Jira · React bootstrap · Vitest · Jest' },
  { label: 'Language', items: 'Svenska · Engelska · Urdu' },
]

export default function About() {

  return (
    <section className={"about-section"} id="About">
      <div className={"about-label"}><h2 >About me</h2></div>
      <div className={"main-about-container"} >
        <div className={"about-text-container"}>
          <p>I am currently studying my last term at IT-Högskolan as a Frontend Developer, with a background as UX & UI design. Those combinations makes it so that I think both through the users perspective and about code and see it as a whole.</p>
          <p>Right now I am doing my second internship at Viscando AB where I also had my first internship. At Viscando I build a visual user interface with React, TypeScript, Json Forms and Reaxct Flow. I thrive in a structured team where we can share ideas and learn from each other.</p>
          <p>I am looking for my first job after my graduation in june of 2026.</p>
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
