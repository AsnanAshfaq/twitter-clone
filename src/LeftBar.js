import React from "react";
import LeftBarOptions from "./LeftBarOptions";
import { Link} from "react-router-dom";
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

  console.log(user)
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
          user : {}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftBar;
