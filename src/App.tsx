import React from "react";
import { Route, Routes } from "react-router-dom";
import InformationHeader from "./components/InformationHeader/InformationHeader";
import Header from "./components/Header/Header";
import { Path } from "./routes/Routes";
import "./App.scss";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <InformationHeader />
      <Header />
      <Routes>
        <Route path={Path.item1} element={<div>item1</div>} />
        <Route path={Path.item2} element={<div>item2</div>} />
        <Route path={Path.item3} element={<div>item3</div>} />
        <Route path={Path.item4} element={<div>item4</div>} />
        <Route path={Path.item5} element={<div>item5</div>} />
      </Routes>
    </div>
  );
};
export default App;
