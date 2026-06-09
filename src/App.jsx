import "./App.css";
import Counter from "./components/Counter";
import Data from "./components/Data";
import Hi from "./components/Name";

function App() {
  return (
    <div className="App">
      <h2>Text</h2>
      <Counter />
      <Counter />
      <Data />
      <Hi name ="Полина" />
      <Hi name ="Кирилл" />
      <Hi name ="Светлана" />
    </div>
  );
}

export default App;
