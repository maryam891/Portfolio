
import '../css/Experience.css'
import officePic from "../assets/office.png"

export default function Experience() {
  return (
    <section className={"experience-main-container"} id='Experience'>
      <h2>My journey & experience</h2>
      <div className={"experience-text-pic-container"}>
        <div>
          <p>
            I chose to study as a Frontend Developer because I enjoy both the
            creative and problem-solving aspects of it.
          </p>
          <p>
            I am currently doing my second internship at Viscando AB. During my
            first internship I built an application with React and TypeScript for
            visualization of VPN/locally connected systems, and wrote unit tests
            with Jest for the backend and Vitest for the frontend.
          </p>
          <p>
            In my second internship I am working in a team to build a user
            interface for a camera system using React, TypeScript, Node.js, React Flow
            and JSON Forms.
          </p>
          <p>
            I previously studied UX & UI Design, which taught me to think from
            the user's perspective — something I now incorporate in every project
            I build.
          </p>
        </div>
        <img src={officePic}></img>
      </div>
    </section>
  )
}
