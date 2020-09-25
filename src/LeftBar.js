import React from "react";
import LeftBarOptions from "./LeftBarOptions";
import { Link } from "react-router-dom";
import "./LeftBar.css";
// material ui icons
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import KeyboardTabIcon from "@material-ui/icons/KeyboardTab";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
// auth
import { auth } from "./firebase";
// context
import { useStateValue } from "./StateProvider";

function LeftBar() {
  // global state
  const [{ user }, dispatch] = useStateValue();

  // sign out functionality 💯
  const signout = (e) => {
    e.preventDefault();
    // make the user sign out
    auth
      .signOut()
      .then(() => {
        // empty the user in the context api 🥊
        dispatch({
          type: "REMOVE_USER",
          user: {},
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="col-xs-3 col-lg-3 col-md-3 col-3 h-auto">
      {/*makes the content sticky 😜 */}
      <div className="sticky-top">
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
              <LeftBarOptions text="Home" Icon={HomeIcon} active />
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
          {/* sign up and sign in options */}
          <div className="row">
            <div className="col">
              {/* is user is signed in then do not show sign in button  */}
              {Object.keys(user).length == 0 && (
                <Link
                  to="/signin"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <LeftBarOptions text="Sign In" Icon={KeyboardTabIcon} />
                </Link>
              )}

              {/* if user is signed in then  */}
              {Object.keys(user).length > 0 ? (
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <div onClick={signout}>
                    <LeftBarOptions text="Sign Out" Icon={KeyboardReturnIcon} />
                  </div>
                </Link>
              ) : (
                /* else  allow the user to create Account*/
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div>
                    <LeftBarOptions text="Sign Up" Icon={AccountBoxIcon} />
                  </div>
                </Link>
              )}

              {/* if user is signed in then show its name and user name  */}
              {Object.keys(user).length > 0 && (
                <div className="row m-0 p-0">
                  <div className="col-xs-4 col-lg-3 col-md col-sm m-0 p-0">
                    <Avatar
                      className=" img-fluid"
                      src={user.imageURL ? user.imageURL : 'https://www.iconfinder.com/data/icons/avatars-with-emotions-boys-avatars-with-different-/283/male-076-512.png'}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className="col-xs-8 col-lg-9 col-md col-sm d-flex flex-column justify-content-start">
                    <div className="row d-flex flex-column">
                      <div className="col-xs-6 col-lg-6 col-md-6 col-sm m-0 p-0">
                        <p
                          className="name"
                          style={{ fontSize: 17, color: "#00aced" }}
                        >
                          {user?.Name}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6 col-lg-6 col-md-6 col-sm m-0 p-0 d-flex ">
                        <p
                          className="name"
                          style={{ fontSize: 12, color: "#00aced" }}
                        >
                          @{user?.UserName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftBar;
