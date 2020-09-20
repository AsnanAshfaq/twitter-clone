import React from "react";
import "./Feed.css";
import PostTweeted from "./PostTweeted";

function Feed() {
  return (
    <div>
      <PostTweeted
        displayName="sherdil_qureshi"
        userName="Shaykh Tornado😎"
        verified
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUWPye3xhwjdoUQtbIb1Jl4pHBrorU822E-g&usqp=CAU"
        text="This is the testing post "
        image="https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif"
      />
      <PostTweeted
        displayName="Rose Darwin"
        userName="sherdil qureshi"
        verified
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyRv6kXqEBYI30ZX3LY6hdhyg_nIIPA2AajA&usqp=CAU"
        text="This is the testing post "
        image="https://image-cdn.essentiallysports.com/wp-content/uploads/20200803203954/skysports-roger-federer-tennis_4762607-1600x900-1-1.jpg"
      />
    </div>
  );
}

export default Feed;
