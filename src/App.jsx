import "./App.css";
import React from "react";
import TaskList from "./components/TaskList";
import LiveSearchComponent from "./components/Search";

const App = () => {
  return (
    <div>
      <TaskList/>
      {/* <LiveSearchComponent /> */}
    </div>
  );
};

export default App;
