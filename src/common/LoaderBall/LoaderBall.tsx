import React from "react";
import "./LoaderBall.scss";

const LoaderBall = (): JSX.Element => {
  return (
    <div className="loader-ball">
      <div className="ball-wrapper">
        <div className="ball" />
        <div className="shadow" />
      </div>
    </div>
  );
};

export default LoaderBall;
