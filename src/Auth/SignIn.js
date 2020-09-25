import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
// loader
import Loader from "react-loader-spinner";

function SignIn() {
  // global state
  const [{ user }, dispatch] = useStateValue();
  const [IsLoading, setIsLoading] = useState(false);

  // local states
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const History = useHistory();

  // make the user sign in
  const userSignIn = (e) => {
    e.preventDefault();

    setIsLoading(true);

    auth
      .signInWithEmailAndPassword(Email, Password)
      .then((user) => {
        // set the loading to false
        setIsLoading(false);
        // console.log(user)
        History.replace("/");
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err.message);
      });
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
                type="email "
                className="form-control d-flex justify-content-center"
                placeholder="Enter Email Address"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          {/* password  */}
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
          {/* sign in button  */}
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-center">
              <button
                className="btn btn-primary w-100"
                disabled={!Email || !Password}
                onClick={userSignIn}
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
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-center">
              <p>
                Dont't Have an Account?
                <Link to="/signup"> Sign Up Here</Link>
              </p>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
