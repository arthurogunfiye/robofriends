import React from "react";
import CardList from "./components/CardList";
import { robots } from "./robots";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import "./App.css";

const App = () => {
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox />
      <Scroll>
        <CardList robots={robots} />;
      </Scroll>
    </div>
  );
};

export default App;
