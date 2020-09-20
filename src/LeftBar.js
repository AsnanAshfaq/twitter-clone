import React from "react";
import LeftBarOptions from "./LeftBarOptions";
// material ui icons
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function LeftBar() {
  return (
    <div className="container-fluid">
      {/* twitter logo 🏀 */}
      <div className="row">
        <div className="col d-flex justify-content-start">
          <TwitterIcon style={{ fontSize: 34, color: "#00aced" }} />
        </div>
      </div>
      {/* side bar options 🍔 */}
      <div className="row">
        <div className="col">
          <LeftBarOptions text="Home" Icon={HomeIcon} active/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LeftBarOptions text="Explore" Icon={SearchIcon} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LeftBarOptions text="Notifications" Icon={NotificationsIcon} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LeftBarOptions text="Messages" Icon={MailOutlineIcon} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LeftBarOptions text="Bookmarks" Icon={BookmarkBorderIcon} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LeftBarOptions text="Lists" Icon={ListAltIcon} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LeftBarOptions text="Profile" Icon={PermIdentityIcon} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LeftBarOptions text="More" Icon={MoreHorizIcon} />
        </div>
      </div>
    </div>
  );
}
export default LeftBar;
