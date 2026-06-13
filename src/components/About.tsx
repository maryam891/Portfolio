
import '../css/About.css'

const skills = [
  { label: 'Frontend', items: 'React · TypeScript · JavaScript · Vue.js · HTML & CSS' },

  { label: 'Backend', items: 'Node.js/Express · SQL/SQLite' },

  { label: 'Design & CMS', items: 'UX/UI Design · Figma · WordPress' },

  { label: 'Tools', items: 'Git · Jira' },

  { label: 'Testing', items: 'Vitest · Jest' },

  { label: 'Language', items: 'Swedish · English · Urdu' },
]

export default function About() {

  return (
    <section className={"about-section"} id="About">
      <div className={"about-label"}><h2 >About me</h2></div>
      <div className={"main-about-container"} >
        <div className={"about-text-container"}>
          <p>I recently graduated from IT-Högskolan as a Frontend Developer and am actively looking for my first role. I have a background in UX & UI design. This combination allows me to think from both the user’s perspective and the technical side, seeing design and development as a whole.
            I recently completed my second internship at Viscando AB, where I worked as part of a development team building a visual user interface for a camera system. Additionally I got to further develop the interface with new pages such as an overview page with new pages including an overview of camera sensors with graph data and diagrams. I thrive in structured and collaborative teams where ideas and knowledge are shared, and I am always looking to grow and take on new challenges.</p>
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
