import React, { useEffect, useState } from "react";
import "./Feed.css";
import PostTweeted from "./PostTweeted";
import FlipMove from "react-flip-move";
// loader
import Loader from "react-loader-spinner";

import { db } from "./firebase";
import FeedHeader from "./FeedHeader";
function Feed() {
  const [Posts, setPosts] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

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
      // set loading to false
      setIsLoading(false);
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
      {/* if it we are getting the data till then show the loader  */}
      {IsLoading ? (
        <div className="row mt-4 d-flex justify-content-center align-items-center">
          <div className="col d-flex justify-content-center align-items-center">
            <Loader
              type="Rings"
              color="#00aced"
              className="d-flex justify-content-center align-items-center "
              height="100"
              width="100"
            />
          </div>
        </div>
      ) : (
        <FlipMove>
          {Posts.map((Post) => (
            <PostTweeted
              key={Post[0].data.userID}
              userID={Post[0].data.userID}
              text={Post[0].data.text}
              image={Post[0].data.image}
            />
          ))}
        </FlipMove>
      )}
    </div>
  );
}

export default Feed;
