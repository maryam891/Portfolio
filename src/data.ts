import todoImg from "../src/assets/todoProjectImg.png";
import minigameImg from "../src/assets/miniGameProjectImg.png";
import recipeImg from "../src/assets/recipeProjectImg.png";
import internshi1picture from "../src/assets/intership1.png";
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  img: any;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MyTodo",
    description:
      "This is a full-stack todo web app I built as a part of the Fullstack course in the Frontend Developer program. You can manage and add tasks with a fun side of adding images to your tasks. ",
    tags: ["React", "TypeScript", "SQLite", "Express/Node js", "CSS", "HTML"],
    githubUrl: "https://github.com/maryam891/Fullstack-project-Todowebbapp",
    liveUrl: "https://fullstack-project-todowebbapp.vercel.app",
    img: todoImg,
  },
  {
    id: 2,
    title: "Magic cards",
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
    description:
      "This is a full-stack recipe web application I built as a part of the Fullstack course in the Frontend Developer program. You can browse through a variety of recipes and save your favorites for easy access.",
    tags: ["React", "TypeScript", "SQLite", "Express/Node js", "CSS", "HTML"],
    githubUrl: "https://github.com/maryam891/Recipedia-webbpage/tree/main",
    liveUrl: "https://recipedia-webbpage-production.up.railway.app",
    img: recipeImg,
  },
  {
    id: 4,
    title: "Otuslister",
    description:
      "A project from my first internship at Viscando AB, where I was responsible for frontend development and some backend work, including API calls with Node.js. The tool visualized VPN/locally connected systems. I also wrote React unit tests using Jest and Vitest.",
    githubUrl: "",
    liveUrl: "",
    img: internshi1picture,
    tags: ["React", "Node js", "CSS", "HTML", "Jest", "Vitest"],
  },
];
