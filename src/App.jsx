import "./App.scss";
import team from "./data/team";
import Card from "./components/card/Card";

const upperCaseTeam = team.map((person) => {
  return {
    id: person.id,
    name: person.name.toUpperCase(),
    role: person.role.toUpperCase(),
  };
});

const teamJSX = upperCaseTeam.map((person) => {
  return (
    <Card
      key={person.id}
      id={person.id}
      name={person.name}
      role={person.role}
    />
  );
});

function App() {
  return <div className="tracker">{teamJSX}</div>;
}

export default App;
