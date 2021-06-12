import "./styles/App.css";
import "./styles/util.css";

import Clock from "./components/clock";
import Calendar from "./components/date";
import Temperature from "./components/temperature";
import Aside from "./components/aside";

function App() {
  return (
    <div>
      {/* <Aside /> */}

      <div class="row center-self center-x">
        <Temperature />
        <Clock />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
