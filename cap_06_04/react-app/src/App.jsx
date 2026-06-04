import TechPager from "./components/TechPager";

const userDetails = {
  name: "Surojit Ghosh",
  email: "surojitghosh2003@gmail.com",
  location: "Kolkata, India",
  number: "+91 7063851617",
  college: "University of Engineering & Management, Kolkata",
  tagLine: "If it works dont touch it",
  workedOnProject: true,
  projectDetails: [
    {
      projectName: "Discord Ticket Tool Dashboard",
      description: "Built ticket, role, permission, and analytics workflows for moderation teams.",
    },
    {
      projectName: "Uniclip Video Downloader",
      description: "Created a web app for downloading and trimming YouTube videos with timestamps.",
    },
  ],
  skills: [
    { technology: "Java", level: "Expert" },
    { technology: "React", knowledge: "TypeScript" },
    { technology: "AI", details: "GenAI" },
  ],
};

function App() {
  return <TechPager {...userDetails} />;
}

export default App;
