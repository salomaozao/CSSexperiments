import "./styles/App.css";
import "./styles/util.css";

import Clock from "./components/clock";
import Calendar from "./components/date";
import Temperature from "./components/temperature";
import Aside from "./components/aside";
import AppsRow from "./components/appsRow";

function App() {
  return (
    <div>
      <Aside />

      <div className="row center-self center-x mt-2">
        <Temperature />
        <Clock />
        <Calendar />
      </div>

      <AppsRow title="Recomendados" children={["a", "b", "c", "d", "e", "f"]} />
      <AppsRow title="Recomendados" children={["a", "b", "c"]} />
      <AppsRow title="Recomendados" children={["a", "b", "c", "d", "e"]} />
    </div>
  );
}

export default App;
