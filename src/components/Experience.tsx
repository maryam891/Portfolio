
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
            I recently graduated from IT-Hogskolan and completed my second internship at Viscando AB. During my first internship I built an application with React and TypeScript for
            visualization of VPN/locally connected systems, and wrote unit tests
            with Jest for the backend and Vitest for the frontend.
          </p>
          <p>
            During my second internship, I worked in a team with another team mate to build a user interface for a camera system using React, TypeScript, Node.js, React Flow and JSON Forms. I also presented demos during development meetings to gather feedback and improve the user interface. Additionally I worked on my thesis at Viscando AB where I got to further develop the interface with new pages such as an overview page with new pages including an overview of camera sensors with graph data and diagrams.
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
