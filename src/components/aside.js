import React from "react";

const setBodyBg = (imgRef) => {
  //Verification
  document.body.style.backgroundImage = `url${imgRef}`;
};

const Aside = ({ display = true, children }) => {
  const [isShown, setShown] = React.useState(true);
  return (
    <div>
      <span
        className="aside-toggle material-icons-outlined"
        onClick={() => {
          setShown(!setShown);
          console.log("z");
        }}
        style={isShown ? { display: "none" } : { display: "flex" }}
      >
        menu
      </span>
      <div
        className="aside"
        style={isShown ? { display: "flex" } : { display: "none" }}
      >
        <h1>SOKDIOSjdi</h1>
      </div>
    </div>
  );
};

export default Aside;
