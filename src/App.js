import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Feed from "./Feed";
import LeftBar from "./LeftBar";
import Widgets from "./Widgets";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import { db, auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// loader
import Loader from "react-loader-spinner";

function App() {
  const [{ user }, dispatch] = useStateValue();

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    // get the authentication status of the user from firebase
    auth.onAuthStateChanged(async (User) => {
      // user is signed in
      if (User != null) {
        // get the data of the respective user from the cloud database 🥇
        const userData = await db.collection("users").get();

        const data = await userData.docs.map((doc) => {
          const currentDocument = doc.data();
          if (currentDocument.uid == User.uid) {
            return currentDocument;
          }
        });

        // get the context api 🎱
        // if we get the data then store that in the context api 👍
        if (data) {
          dispatch({
            type: "ADD_USER",
            user: {
              Name: data[0].Name,
              UserName: data[0].UserName,
              imageURL: data[0].imageURL,
              uid: data[0].uid,
            },
          });

          setLoading(false);
        }
      } else {
        console.log("user  is signed out");
        // user is signed out
        dispatch({
          type: "REMOVE_USER",
          user: {},
        });
        setLoading(false);
      }
    });
  }, []);

  return (
    <div>
      {Loading ? (
        <div className="container-fluid d-flex justif-content-center w-100 h-100">
          <div className="row d-flex justif-content-center ">
            <div className="col d-flex justif-content-center ">
              <div className="d-flex justif-content-center">
                <Loader
                  type="TailSpin"
                  color="#00aced"
                  height="100"
                  width="100"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Router>
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/">
              <div className="App container-fluid">
                <div className="row">
                  {/*Left Side Bar 🎱 */}
                  <LeftBar />
                  {/* Feed  */}
                  <Feed />
                  {/* Right Side Bar 😋 */}
                  <Widgets />
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
