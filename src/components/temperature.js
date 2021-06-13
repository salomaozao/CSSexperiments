import React from "react";

const Temperature = () => {
  const cityName = "Atibaia";
  const SECRET_API_KEY = "98d3948ba726456997024700211106";

  const [tempVal, setTempVal] = React.useState("Loading");

  async function getWeather() {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${SECRET_API_KEY}&q=${cityName}&aqi=no`
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        setTempVal(data.current.temp_c);
      })
      .catch(function () {
        setTempVal("Loading");
      });
  }

  getWeather();

  return (
    <div className="temperature center-x center-y">
      <span
        id="temp_val"
        className={tempVal !== "Loading" ? "title" : "loading title"}
      >
        {tempVal}
      </span>
      <span className="small">{cityName}</span>
    </div>
  );
};

export default Temperature;
