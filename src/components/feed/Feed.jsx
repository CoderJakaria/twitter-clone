import React, { useEffect, useState } from "react";
import "./Feed.css";

import AccountTreeIcon from "@material-ui/icons/AccountTree";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";
import db from "../../firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      // .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => doc.data()));
      });
  }, []);
  console.log(posts);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <AccountTreeIcon className="feed__homeSideIcon" />
      </div>

      <TweetBox />

      <FlipMove>
        {posts?.map(
          ({
            displayName,
            userName,
            verified,
            timestamp,
            title,
            image,
            description,
            optDescription,
            likes,
            comments,
            shares,
          }) => (
            <Post
              displayName="MD Jakaria"
              userName="CoderJakaria"
              verified={verified}
              timestamp={timestamp}
              title={title}
              image={image}
              description={description}
              optDescription={optDescription}
              likes={likes}
              comments={comments}
              shares={shares}
              key={title}
            />
          )
        )}
      </FlipMove>
    </div>
  );
};

export default Feed;
