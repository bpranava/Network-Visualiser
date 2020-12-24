import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import './App.css';

import MapChart from "./MapChart";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip multiline={true}>{content}</ReactTooltip>
    </div>
  );
}

export default App;
