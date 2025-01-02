import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar /> {/* Fixed typo here */}
      <div className="data">
        <Intro />
        <SkillsList />
      </div>
    </div>
  );
}

function Avatar() {
  // Fixed typo here
  return (
    <img
      className="avatar"
      src={"15609339.jpg"}
      alt={"Profile of Ihsan Saif"}
    />
  );
}

function Intro() {
  const Verified = (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
      alt="Verified Badge"
      style={{
        width: "20px",
        height: "20px",
        marginLeft: "5px",
        verticalAlign: "middle",
      }}
    />
  );
  return (
    <div>
      <h1>Ihsan Saif{Verified}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        dolores itaque nobis dolore. Architecto optio voluptates quidem nesciunt
        voluptatibus?.
      </p>
    </div>
  );
}

function SkillsList() {
  return (
    <div className="skill-list">
      {skills.map((el) => (
        <Skills key={el.skill} skillsObj={el} />
      ))}
    </div>
  );
}

function Skills({ skillsObj }) {
  const { skill, color, level } = skillsObj;
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
