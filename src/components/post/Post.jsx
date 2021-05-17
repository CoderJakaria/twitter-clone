import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  (
    {
      displayName,
      userName,
      verified,
      timestamp,
      title,
      image,
      avatar,
      description,
      optDescription,
      likes,
      comments,
      shares,
    },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <Avatar
          src="https://yt3.ggpht.com/yti/ANoDKi4FJX2pUomMIC8_dbji-ElbIIgDSzvTOoEoCk0NXA=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="user-avatar"
        />
        <div className="post__details">
          <div className="post_headerDetails">
            <div className="post__userDetals">
              <h3 className="post__userDetailsLeft">
                {displayName}
                <span>
                  {verified ? (
                    <VerifiedUserIcon className="post__verifiedIcon" />
                  ) : null}
                </span>
              </h3>
              <h3 className="post__userDetailsRight">
                @{userName} . <span>{timestamp}</span>
              </h3>
            </div>
            <p>{title}</p>
          </div>
          <div className="post__imageFunc">
            <img src={image} alt="" />
            <div className="post__imageFuncDescript">
              <h3 className="post__mainDescript">{description}</h3>
              <h3 className="post__optDescript">{optDescription}</h3>
            </div>
          </div>
          <div className="post__features">
            <div className="post__featuresRanking">
              <FavoriteBorderIcon className="post__featuresIcon" />
              {likes}
            </div>
            <div className="post__featuresRanking">
              <CommentIcon className="post__featuresIcon" />
              {comments}
            </div>
            <div className="post__featuresRanking">
              <ShareIcon className="post__featuresIcon" />
              {shares}
            </div>
            <div className="post__featuresRanking">
              <PublishIcon className="post__featuresIcon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;

// (
//     <div className="post">
//       <div className="post__avatar">
//         <Avatar
//           src="https://yt3.ggpht.com/yti/ANoDKi4FJX2pUomMIC8_dbji-ElbIIgDSzvTOoEoCk0NXA=s88-c-k-c0x00ffffff-no-rj-mo"
//           alt="user-avatar"
//         />
//       </div>
//       <div className="post__body">
//         <div className="post__header">
//           <div className="post__headerText">
//             <h3>
//               Md Jakaria
//               <span>
//                 <VerifiedIcon />
//               </span>
//             </h3>
//           </div>
//           <div className="post__headerDescription">
//             <p>
//               I Challenged You To Make A Twitter Clone FRom The Clever
//               Programmer
//             </p>
//           </div>
//         </div>
//         {/* <img src="" alt="" /> */}
//       </div>
//     </div>
//   );
