import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "../../firebase";
import "./TweetBox.css";
import firebase from "firebase";

const TweetBox = () => {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");

  const sendTweet = e => {
    e.preventDefault();
    db.collection("posts").add({
      title: title,
      image: imageURL,
      // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTitle("");
    setImageURL("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://yt3.ggpht.com/yti/ANoDKi4FJX2pUomMIC8_dbji-ElbIIgDSzvTOoEoCk0NXA=s88-c-k-c0x00ffffff-no-rj-mo" />
          <input
            placeholder="What's happening?"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="tweetBox_tweetKit">
          <input
            className="tweetBox__imageInputURL"
            placeholder="Optional: Enter image URL"
            type="text"
            value={imageURL}
            onChange={e => setImageURL(e.target.value)}
          />
          <Button
            onClick={sendTweet}
            type="submit"
            className="tweetBox__tweetBtn"
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
