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
      <div className="row center-x">
        <span className="title">{hour}</span>
        <span className="title">{min}</span>
      </div>
    </div>
  );
};

export default Clock;
