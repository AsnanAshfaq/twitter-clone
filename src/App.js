import React from "react";
import "./App.css";
import Feed from "./Feed";
import FeedHeader from "./FeedHeader";
import LeftBar from "./LeftBar";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-3 h-auto">
          <div class="sticky-top">
            {/*makes the content sticky 😜 */}
            {/*Left Side Bar 🎱 */}
            <LeftBar />
          </div>
        </div>
        <div className="col-5 p-0 m-0 mt-4">
          {/* Feed (Middle Section) 👽*/}
          <div class="sticky-top">
            {/* Feed Header  */}
            <div>
              <FeedHeader />
            </div>
          </div>
          {/* Feed  */}
          <Feed />
        </div>
        <div className="col-4">
          {/* Right Section 🍔 👽*/}
          <div class="sticky-top">
            {/*makes the content sticky 😜 */}
            <Widgets />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
