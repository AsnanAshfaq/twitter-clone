import React, { useEffect, useRef, useState } from "react";
import { Avatar, Badge } from "@material-ui/core";
import "./Feed.css";
import { db, storage } from "./firebase";
import { useStateValue } from "./StateProvider";

function FeedHeader() {
  const [PostText, setPostText] = useState("");
  const [PostImage, setPostImage] = useState("");
  const [UserImage, setUserImage] = useState("");

  // reference for image uploading input badge 🔺
  const imageRef = useRef(null);

  // global state 💯
  const [{ user }] = useStateValue();

  const findUser = async () => {
    const snapShot = await db.collection("users").get();

    const userDocument = await snapShot.docs.map((doc) => {
      const currentDocument = doc.data();
      // get the data of the respective user from the cloud database 🥇

      if (currentDocument.uid == user.uid) {
        console.log(currentDocument.uid);
        return doc.id;
      }
    });
    return userDocument;
  };

  const setUserImageURL = async (link) => {
    const userDocument = await findUser();

    if (userDocument[0] != null || userDocument[0] != undefined) {
      db.collection("users")
        .doc(userDocument[0])
        .update({
          imageURL: link,
        })
        .then(() => {
          setUserImage(link);
        });
    } else {
      setUserImage("");
    }
  };

  const getImageURL = async (userDocument) => {
    console.log(userDocument);
    const user = await db.collection("users").doc(userDocument[0]).get();
    return user.data().imageURL;
  };
  useEffect(() => {
    async function userImageURL() {
      const userDocument = await findUser();
      const userImage = await getImageURL(userDocument);
      setUserImage(userImage);
    }
    // only call this method if user is signed in or if the user global state is not empty
    if (Object.keys(user).length > 0) {
      userImageURL();
    } else {
      setUserImage('');
    }
  }, [UserImage, user]);

  const addPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Asnan Ashfaq",
      avatar:
        "https://scontent.fkhi11-1.fna.fbcdn.net/v/t1.0-9/95260674_2556673724590700_5847535705068142592_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_eui2=AeFiRRsHNV54VEgiUYuRAKbChzk7UcgGVvyHOTtRyAZW_GRbwC3kA0cf6z_pHq1Qd71FS3MNYPDPT8ur3Yx3T_46&_nc_ohc=GQoUYoCQNQcAX-r6z18&_nc_ht=scontent.fkhi11-1.fna&oh=96f70b15781d5cd5ee2ebb3f8fc076c9&oe=5F8B91F2",
      image: PostImage,
      text: PostText,
      userName: "shanay_ash",
      verified: true,
    });

    setPostImage("");
    setPostText("");
  };

  const updateImage = (e) => {
    // get the file name first
    const fileName = e.target.files[0].name;
    const fileType = fileName.split(".");

    // check if user is signed in or not
    if (user != null) {
      // user is signed in
      // so you can upload the image 💅
      // apply a check on it to see if it is an image or not
      if (
        fileType[1] == "jpg" ||
        fileType[1] == "png" ||
        fileType[1] == "jpeg"
      ) {
        const uploadedImage = storage
          .ref(`images/${fileName}`)
          .put(e.target.files[0]);
        uploadedImage.on(
          "state_changed",
          function (snapshot) {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (err) => alert(err.message),
          async () => {
            const link = await storage
              .ref("images")
              .child(fileName)
              .getDownloadURL();

            // find the user in the database
            // set the image url in that user document to the link we get from firebase storage 🩹🅰️👊
            setUserImageURL(link);
          }
        );
      } else {
        alert("File type not supported");
      }
    } else {
      alert("Please sign in first to continue");
    }
  };

  return (
    <div>
      <div className="row card d-flex flex-column border-0 ">
        <div className="col border-bottom p-1">
          <h5 style={{ fontSize: 22, color: "#00aced" }}>HOME</h5>
        </div>
        <div className="row d-flex flex-row">
          <div className="col-xl-2 col-lg-2 col-md-4 col-4 mt-2 ">
            {/* user avatar 🎱 */}
            {/* if the user has not set his image yet then show the random avatar  */}
            {UserImage == "" ? (
              <Badge
                badgeContent={"+"}
                color="primary"
                className="mt-2"
                style={{ cursor: "pointer" }}
                onClick={(e) => imageRef.current.click()}
              >
                <Avatar
                  className="h-100 w-100 img-fluid"
                  src="https://www.iconfinder.com/data/icons/avatars-with-emotions-boys-avatars-with-different-/283/male-076-512.png"
                />

                <input
                  type="file"
                  ref={imageRef}
                  onChange={updateImage}
                  style={{ display: "none" }}
                />
              </Badge>
            ) : (
              // else set the image according to the link coming from the database
              <Badge
                badgeContent={"+"}
                color="primary"
                className="mt-2"
                style={{ cursor: "pointer" }}
                onClick={(e) => imageRef.current.click()}
              >
                <Avatar className="h-100 w-100 img-fluid" src={UserImage} />

                <input
                  type="file"
                  ref={imageRef}
                  onChange={updateImage}
                  style={{ display: "none" }}
                />
              </Badge>
            )}
          </div>
          <div className="col-xl-9 col-lg-9 col-md-7 col-8 m-0 p-0 mt-4">
            {/* post section 👡 */}
            <input
              type="text"
              className="form-control border-0"
              value={PostText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="What's Happening?"
              style={{ backgroundColor: "#f8f8f8" }}
            />
          </div>
        </div>
        <div className="row mt-2 border-bottom p-2">
          {/* image posting section 🦺 */}
          <div className="col-xs-10 col-lg-9 col-md-8 col-7">
            <input
              type="text"
              className="form-control border-0 border-bottom"
              value={PostImage}
              onChange={(e) => setPostImage(e.target.value)}
              placeholder="Enter Image URL"
              style={{ backgroundColor: "#f8f8f8" }}
            />
          </div>
          <div className="col-xs-2 col-lg-3 col-md-4 col-5">
            <button type="button" className="btn btn-primary" onClick={addPost}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedHeader;
