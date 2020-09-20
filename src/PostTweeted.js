import React from "react";
import "./Feed.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function PostTweeted({ displayName, userName, verified, avatar, text, image }) {
  return (
    <div className="post__tweeted p-0 border-bottom border-top border-left border-right ">
      <div className="mt-2">
        <div className="row m-0">
          <div className="col-1 d-flex justify-content-start ml-2">
            <Avatar src={avatar} />
          </div>
          <div className="col-2 my-2 ml-2 p-0 w-auto d-flex justify-content-start ">
            <h6>{displayName}</h6>
          </div>
          <div className="col-3 my-2 ml-1 p-0 d-flex justify-content-start">
            <p style={{ color: "grey" }}>@{userName}</p>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col">
          <p>{text}</p>
        </div>
      </div>
      <div className="row">
        <div className="col  d-flex justify-content-center">
          <img src={image} className="img-fluid img-border" alt="Post Image" />
        </div>
      </div>
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
  );
}

export default PostTweeted;
