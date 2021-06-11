import { useState } from "react";

const Clock = () => {
  let [hour, setHour] = useState("00");
  let [min, setMin] = useState("00");

  setInterval(() => {
    setHour(new Date().getHours());
    setMin(new Date().getMinutes());
  }, 1000);

  return (
    <div className="clock">
      <div className="row">
        <span>{hour}</span>
        <span>{min}</span>
      </div>
      <span className="lead">Bom dia!</span>
    </div>
  );
};

export default Clock;
