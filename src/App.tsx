import "./App.css";
import Card from "./components/Card";
import data from "./data/data.json";

function App() {
  return (
    <div>
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}

export default App;
