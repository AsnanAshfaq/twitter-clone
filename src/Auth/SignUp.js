import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./signin.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { db, auth } from "../firebase";
// loader
import Loader from "react-loader-spinner";
// context api
import { useStateValue } from "../StateProvider";

function SignUp() {
  // global state
  const [, dispatch] = useStateValue();
  // local states
  const [Name, setName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  // loading
  const [IsLoading, setIsLoading] = useState(false);
  const History = useHistory();

  // Create User Account 💯
  const createUserAccount = (e) => {
    e.preventDefault();

    setIsLoading(true);

    // check if name is greater than 5 characters
    if (Name.length < 5) {
      alert("Name should not be less than 5 characters");
    } else if (Username.length < 5) {
      alert("User Name should not be less than 5 characters");
    } else if (Password.length < 5) {
      alert("Password should not be less than 5 characters");
    }

    // check if the password and confirm password are same or not
    else if (Password != ConfirmPassword) {
      alert("Password's do not match");
    } else {
      // create user account
      auth
        .createUserWithEmailAndPassword(Email, Password)
        .then((user) => {
          if (user) {
            // add user in the data base with the uid  🍔
            db.collection("users").doc().set({
              Name: Name,
              UserName: Username,
              imageURL: "",
              uid: user.user.uid,
            });

            // // set the user in the context api 💯
            dispatch({
              type: "ADD_USER",
              user: {
                Name: Name,
                UserName: Username,
                imageURL: "",
                uid: user.user.uid,
              },
            });
            // make loader disappear
            setIsLoading(false);
            History.replace("/");
          }
        })
        .catch((err) => {
          setIsLoading(false);
          alert(err.message);
        });
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="row m-0 p-0">
            <div className="col d-flex justify-content-center">
              {/* twitter logo  */}
              <Link to="/">
                <TwitterIcon style={{ fontSize: 100, color: "#00aced" }} />
              </Link>
            </div>
          </div>
          {/* Name  */}
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-start">
              <h6 className="text-secondary">Name</h6>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 w-25 ">
              <input
                type="text"
                maxLength={15}
                className="form-control d-flex justify-content-center"
                placeholder="Enter Your Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          {/* User Name  */}
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-start">
              <h6 className="text-secondary">User Name</h6>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 w-25 ">
              <input
                type="text"
                maxLength={15}
                className="form-control d-flex justify-content-center"
                placeholder="@username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          {/* Email  */}
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-start">
              <h6 className="text-secondary">Email Address</h6>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 w-25 ">
              <input
                type="email"
                className="form-control d-flex justify-content-center"
                placeholder="Enter Email Address"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          {/* Password  */}
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-start">
              <h6 className="text-secondary">Password</h6>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>

          <div className="row">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 w-25 ">
              <input
                type="password"
                maxLength={15}
                className="form-control d-flex justify-content-center"
                placeholder="Enter Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          {/* confirm password  */}
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-start">
              <h6 className="text-secondary">Confirm Password</h6>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>

          <div className="row">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 w-25 ">
              <input
                type="password"
                maxLength={15}
                className="form-control d-flex justify-content-center"
                placeholder="Enter Password"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          {/* sign up button  */}
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-center">
              <button
                className="btn btn-primary w-100"
                disabled={
                  !Name || !Username || !Email || !Password || !ConfirmPassword
                }
                onClick={createUserAccount}
              >
                <h5>
                  {" "}
                  {IsLoading ? (
                    <Loader
                      type="Rings"
                      color="#00aced"
                      className="d-flex justify-content-center align-items-center "
                      height="30"
                      width="30"
                    />
                  ) : (
                    "Sign In"
                  )}
                </h5>
              </button>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          <div className="row mt-2">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-center">
              <p>
                Already Have an Account.
                <Link to="/signin">Sign In Here</Link>
              </p>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
