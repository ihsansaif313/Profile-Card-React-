import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avater />
      <div className="data">
        <Intro />
        <SkillsList />
      </div>
    </div>
  );
}
function Avater() {
  return <img className="avatar" src={"15609339.jpg"} alt={"hi"} />;
}
function Intro() {
  return (
    <div>
      <h1>Ihsan Saif</h1>
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
      <Skills skill="JavaScript" emoji="💪" color="blue" />
      <Skills skill="C++" emoji="💪" color="yellow" />
      <Skills skill="REACT" emoji="💪" color="green" />
      <Skills skill="PHYTON" emoji="💪" color="brown" />
      <Skills skill="GIT AND GITHUB" emoji="💪" color="cyan" />
      <Skills skill="HTML + CSS" emoji="💪" color="red" />
    </div>
  );
}
function Skills(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
