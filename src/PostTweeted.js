import React, { forwardRef, useState, useEffect } from "react";
import "./Feed.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
// loader
import Loader from "react-loader-spinner";

const PostTweeted = forwardRef(({ userID, text, image }, ref) => {
  const [userInfo, setuserInfo] = useState({});
  const [IsLoading, setIsLoading] = useState(true);

  // global state 😞
  const [{ user }] = useStateValue();

  useEffect(() => {
    // get user info based on the userID 💯
    const getUserData = async () => {
      const snapShot = await db.collection("users").get();

      const userDocument = await snapShot.docs.map((doc) => {
        const currentDocument = doc.data();
        // get the data of the respective user from the cloud database 🥇
        if (currentDocument.uid == userID) {
          setuserInfo(currentDocument);
          // set loading to false
          setIsLoading(false);
        }
      });
    };

    getUserData();
  }, []);
  return (
    <div>
      {IsLoading ? (
        <div></div>
      ) : (
        <div
          className="post__tweeted p-0 border-bottom border-top border-left border-right "
          ref={ref}
        >
          <div className="mt-2">
            <div className="row m-0">
              <div className="col d-flex justify-content-start ml-2 mr-0">
                <Avatar src={`${userInfo.imageURL}`} />
                {/*  account is verified   */}
                <VerifiedUser
                  fontSize="small"
                  className="ml-0"
                  style={{ color: "#00aced" }}
                />
                <h6 className="my-2">{userInfo.Name}</h6>
                <p className="my-2 ml-2" style={{ color: "grey" }}>
                  @{userInfo.UserName}
                </p>
              </div>
            </div>
          </div>
          <div className="row m-0 mt-3 ml-2">
            <div className="col">
              <p style={{ fontFamily: "Arial" }}>{text}</p>
            </div>
          </div>
          {image && (
            <div className="row">
              <div className="col  d-flex justify-content-center">
                <img
                  src={image}
                  className="img-fluid img-border"
                  alt="Post Image"
                />
              </div>
            </div>
          )}

          {/* footer 🦶 */}
          <div className="container-fluid">
            <div className="row d-flex justify-content-between">
              <div className="col p-2 footer__icon d-flex justify-content-center">
                <ChatBubbleIcon fontSize="small" />
              </div>
              <div className="col p-2 footer__icon d-flex justify-content-center">
                <RepeatIcon fontSize="small" />
              </div>
              <div className="col p-2 footer__icon d-flex justify-content-center">
                <FavoriteBorderIcon fontSize="small" />
              </div>
              <div className="col p-2 footer__icon d-flex justify-content-center">
                <PublishIcon fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default PostTweeted;
