import React, { useEffect, useState } from "react";
import "./Feed.css";
import PostTweeted from "./PostTweeted";
import FlipMove from "react-flip-move";

import { db } from "./firebase";
import FeedHeader from "./FeedHeader";
function Feed() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    // get the document from the post collection 💯
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => [
          {
            data: doc.data(),
            id: doc.id,
          },
        ])
      );
    });
  }, []);
  return (
    <div className="col-xs-6 col-lg-6 col-md-6 col-6 p-0 m-0 mt-4">
      <div className="sticky-top">
        {/* Feed Header  */}
        <div>
          <FeedHeader />
        </div>
      </div>
      <FlipMove>
        {Posts.map((Post) => (
          <PostTweeted
            key={Post[0].id}
            displayName={Post[0].data.displayName}
            userName={Post[0].data.userName}
            verified={Post[0].data.verified}
            avatar={Post[0].data.avatar}
            text={Post[0].data.text}
            image={Post[0].data.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
