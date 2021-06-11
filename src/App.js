import "./styles/App.css";

import Clock from "./components/clock";
import Calendar from "./components/date";
import Temperature from "./components/temperature";
import Aside from "./components/aside";

function App() {
  return (
    <div>
      <Clock />
      <Calendar />
      <Temperature />
      <Aside />
    </div>
  );
}

export default App;
