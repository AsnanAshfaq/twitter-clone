import React, { forwardRef } from "react";
import "./Feed.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import VerifiedUser from "@material-ui/icons/VerifiedUser";

const PostTweeted = forwardRef(
  ({ displayName, userName, verified, avatar, text, image }, ref) => {
    return (
      <div
        className="post__tweeted p-0 border-bottom border-top border-left border-right "
        ref={ref}
      >
        <div className="mt-2">
          <div className="row m-0">
            <div className="col d-flex justify-content-start ml-2 mr-0">
              <Avatar src={avatar} />
              {/* if account is verified then  */}
              {verified && (
                <VerifiedUser
                  fontSize="small"
                  className="ml-0"
                  style={{ color: "#00aced" }}
                />
              )}
              <h6 className="my-2">{displayName}</h6>
              <p className="my-2 ml-2" style={{ color: "grey" }}>
                @{userName}
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
    );
  }
);

export default PostTweeted;
