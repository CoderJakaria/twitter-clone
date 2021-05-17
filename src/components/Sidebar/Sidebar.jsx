import React from "react";
import "./Sidebar.css";

import SidebarOption from "../sidebarOption/SidebarOption";

import TwitterIcon from "@material-ui/icons/Twitter";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption active title="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption title="Explore" Icon={ExploreOutlinedIcon} />
      <SidebarOption title="Notifications" Icon={NotificationsOutlinedIcon} />
      <SidebarOption title="Messages" Icon={MailOutlineOutlinedIcon} />
      <SidebarOption title="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption title="Lists" Icon={ListAltIcon} />
      <SidebarOption title="Profile" Icon={PermIdentityIcon} />
      <SidebarOption title="More" Icon={MoreHorizIcon} />

      <Button variant="outlined" fullWidth className="sidebar__tweetBtn">
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
