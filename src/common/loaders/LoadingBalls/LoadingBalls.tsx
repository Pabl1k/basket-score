import React from "react";
import "./LoadingBalls.scss";

const LoadingBalls = (): JSX.Element => {
  return (
    <div className="loading-balls">
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
    </div>
  );
};

export default LoadingBalls;
