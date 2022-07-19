import "./App.css";
import team from "./data/team";
import Card from "./components/card/Card";

const upperCaseTeam = team.map((person) => {
  return {
    id: person.id,
    name: person.name.toUpperCase(),
    role: person.role.toUpperCase(),
  };
});

function App() {
  return (
    <div className="tracker">
      <Card team={upperCaseTeam}> </Card>
    </div>
  );
}

export default App;
