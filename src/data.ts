import todoImg from "../src/assets/todoProjectImg.png";
import minigameImg from "../src/assets/miniGameProjectImg.png";
import recipeImg from "../src/assets/recipeProjectImg.png";
import otuslisterImg from "../src/assets/otuslisterimg.png";
import flowConfigImg from "../src/assets/flowConfig.png";
import cameraSensor from "../src/assets/cameraSensor.png";
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  img: any;
  note: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MyTodo",
    note: "Some live demos may take a few seconds to load on the first visit due to hosting cold starts. Try visiting the link again.",
    description:
      "This is a full-stack todo web app I built as a part of the Fullstack course in the Frontend Developer program. I implemented React unit tests using Vitest and React Testing Library. You can manage and add tasks with a fun side of adding images to your tasks.",
    tags: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Express/Node.js",
      "Vitest",
      "CSS",
      "HTML",
    ],
    githubUrl: "https://github.com/maryam891/Fullstack-project-Todowebapp",
    liveUrl: "https://fullstack-project-todowebbapp.vercel.app/",
    img: todoImg,
  },
  {
    id: 2,
    title: "Magic cards",
    note: "",
    description:
      "This is a browser-based mini card battle game I built as a part of the Native JavaScript course in the Frontend Developer program. You get a randomly generated  character and challenge your opponent – attack them as many times as possible to claim victory!",
    tags: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/maryam891/game-page",
    liveUrl: "https://game-page-rouge.vercel.app",
    img: minigameImg,
  },
  {
    id: 3,
    title: "Recipedia",
    note: "Some live demos may take a few seconds to load on the first visit due to hosting cold starts. Try visiting the link again.",
    description:
      "This is a full-stack recipe web application I built as a part of the Fullstack course in the Frontend Developer program. You can browse through a variety of recipes and save your favorites for easy access.",
    tags: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Express/Node js",
      "CSS",
      "HTML",
    ],
    githubUrl: "https://github.com/maryam891/Recipedia-webpage",
    liveUrl: "https://recipedia-webpage.vercel.app/",
    img: recipeImg,
  },
  {
    id: 4,
    title: "Otuslister",
    note: "",
    description:
      "A project from my first internship at Viscando AB, where I was responsible for frontend development and some backend work, including API calls with Node.js. The tool visualized VPN/locally connected systems. I also implemented unit tests with Vitest for the frontend and Jest for the backend.",
    githubUrl: "",
    liveUrl: "",
    img: otuslisterImg,
    tags: ["React", "TypeScript", "Node.js", "CSS", "HTML", "Jest", "Vitest"],
  },
  {
    id: 5,
    title: "Flow configuration",
    note: "",
    description:
      "I recently completed my second internship at Viscando AB, where I was responsible for frontend development of a user interface for a camera system. I Worked with libraries such as React Flow for node-based visualizations and JSON Forms for dynamic form rendering. The UI visualizes camera configurations, built with React, TypeScript and Node.js.",
    githubUrl: "",
    liveUrl: "",
    img: flowConfigImg,
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "React Flow",
      "JSON Forms",
      "CSS",
      "HTML",
    ],
  },
  {
    id: 6,
    title: "User interface for camera based sensor",
    note: "",
    description:
      "For my thesis work at Viscando, I further developed an exsisting user interface which I worked on my second internship. It was developed with new pages including an Overviw page with graph data and diagrams, and session-based login. The main requirements were met and the interface became more complete and functional.",
    githubUrl: "",
    liveUrl: "",
    img: cameraSensor,
    tags: ["React", "TypeScript", "Node.js", "MUI X Charts", "CSS", "HTML"],
  },
];
