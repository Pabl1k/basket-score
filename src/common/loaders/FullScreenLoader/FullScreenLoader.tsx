import React from "react";
import "./FullScreenLoader.scss";

const FullScreenLoader = (): JSX.Element => {
  return (
    <div className="loader-ball">
      <div className="ball-wrapper">
        <div className="ball" />
        <div className="shadow" />
      </div>
    </div>
  );
};

export default FullScreenLoader;
