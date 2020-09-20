import React, { useEffect, useState } from "react";
import "./Feed.css";
import PostTweeted from "./PostTweeted";

import db from "./firebase";
function Feed() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    // get the document from the post collection 💯
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((posts) => posts.data()));
    });
  }, []);
  return (
    <div>
      {Posts.map((post) => (
        <PostTweeted
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          avatar={post.avatar}
          text={post.text}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
