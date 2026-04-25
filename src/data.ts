export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Todo App",
    description:
      "This is a full-stack todo web app I built where you can manage and add tasks with a fun side of adding stickers to your tasks. ",
    tags: ["React", "TypeScript", "Node js", "SQLite", "Express", "CSS"],
    githubUrl: "https://github.com/maryam891/Fullstack-project-Todowebbapp",
  },
  {
    id: 2,
    title: "Mini game",
    description:
      "A browser-based card battle game built where you choose your character and challenge your opponent – attack strategically and outsmart them to claim victory!",
    tags: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/maryam891/game-page",
  },
  {
    id: 3,
    title: "Recipe webbpage",
    description:
      "A full-stack recipe web application where you can browse through a variety of recipes and save your favorites for easy access.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "SQLite",
      "Express",
      "CSS",
      "HTML",
    ],
    githubUrl: "https://github.com/maryam891/Recipedia-webbpage/tree/main",
  },
];
