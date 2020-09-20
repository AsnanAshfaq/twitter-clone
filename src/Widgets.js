import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div>
      <div
        className="row m-0"
        style={{ backgroundColor: "#e6ebef", borderRadius: 10 }}
      >
        <div className="col-1 mt-1">
          <SearchIcon color="#00aced" />
        </div>
        <div className="col-10">
          <input
            type="text"
            placeholder="Search Twitter"
            className="form-control border-0 bg-transparent"
          />
        </div>
      </div>
      <br />

      <div style={{ backgroundColor: "#e6ebef" }}>
        <h6 className="p-2">
          <b>Whats Happening</b>
        </h6>
        <TwitterTweetEmbed tweetId={"1307698086358192129"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="rogerfederer"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/asnan.ashfaq.9?ref=bookmarks"}
          options={{ text: "#reactjs is awesome", via: "shanay_ash" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
