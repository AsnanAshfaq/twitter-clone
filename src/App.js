import React from "react";
import "./App.css";
import LeftBar from "./LeftBar";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-3">
          {/*Left Side Bar 🎱 */}
          <LeftBar />
        </div>
        <div className="col-6">
          {/* Feed (Middle Section) 👽*/}
          <p>Feed Section </p>
        </div>
        <div className="col-3">
          {/* Right Section 🍔 👽*/}
          <p>RIght Side Bar</p>
        </div>
      </div>
    </div>
  );
}

export default App;
