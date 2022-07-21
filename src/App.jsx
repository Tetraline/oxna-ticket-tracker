import "./App.scss";
import team from "./data/team";
import Card from "./components/Card/Card";
import Confetti from "./components/Confetti/Confetti";
import { useState } from "react";

const upperCaseTeam = team.map((person) => {
  return {
    id: person.id,
    name: person.name.toUpperCase(),
    role: person.role.toUpperCase(),
  };
});

function App() {
  const [runConfetti, setRunConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState();

  const runConfettiOneSecond = () => {
    setRunConfetti(true);
    setTimeout(function () {
      setRunConfetti(false);
    }, 1000);
  };

  const teamJSX = upperCaseTeam.map((person) => {
    return (
      <>
        <Card
          key={person.id}
          id={person.id}
          name={person.name}
          role={person.role}
          confetti={runConfettiOneSecond}
        />
      </>
    );
  });

  return (
    <div className="tracker">
      {teamJSX}
      <Confetti run={runConfetti} />
    </div>
  );
}

export default App;
