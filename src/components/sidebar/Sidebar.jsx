
import "./sidebar.css"
import React from 'react'
import { MdOutlineRssFeed } from "react-icons/md";
import { RiVideoFill } from "react-icons/ri";
import { BsChatLeftTextFill } from "react-icons/bs";
 import { MdGroups2 } from "react-icons/md";
 import { IoBookmarkSharp } from "react-icons/io5";
 import { BsFillQuestionSquareFill } from "react-icons/bs";
 import { MdOutlineWorkOutline } from "react-icons/md";
 import { MdEvent } from "react-icons/md";
 import { IoSchool } from "react-icons/io5";
 import {Users}from "../../dummyData"
 import CloseFriend from "../closeFriend/CloseFriend";
 function Sidebar() {
    return (
    <div className="sidebar">
      <div className="sidebarWrapper">
    <ul className="sidebarList">
    <li className="sidebarListItem">
    <MdOutlineRssFeed className="sidebarIcon" />
    <span className="sidebarListItemText">Feed</span>
  </li>
  <li className="sidebarListItem">
  <BsChatLeftTextFill  className="sidebarIcon"   />
  <span className="sidebarListItemText">Chats</span>
  </li>
  <li className="sidebarListItem">
  <RiVideoFill  className="sidebarIcon"   />
  <span className="sidebarListItemText">Videos</span>
  </li>
  <li className="sidebarListItem">
  <MdGroups2  className="sidebarIcon"   />
  <span className="sidebarListItemText">Groups</span>
  </li>
  <li className="sidebarListItem">
  <IoBookmarkSharp  className="sidebarIcon"   />
  <span className="sidebarListItemText">Bookmarks</span>
  </li>
  <li className="sidebarListItem">
  <BsFillQuestionSquareFill className="sidebarIcon"   />
  <span className="sidebarListItemText">Qusetions</span>
  </li>
  <li className="sidebarListItem">
  <MdOutlineWorkOutline className="sidebarIcon"   />
  <span className="sidebarListItemText">Jobs</span>
  </li>
  <li className="sidebarListItem">
  <MdEvent className="sidebarIcon"   />
  <span className="sidebarListItemText">Events</span>
  </li>
  <li className="sidebarListItem">
  <IoSchool className="sidebarIcon"   />
  <span className="sidebarListItemText">Courses</span>
  </li>
    </ul>
    <button className="sidebarButton">Show More</button>
    <hr className="sidebarHr" />
    <ul className="sidebarFriendList">
  
    {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}   
    </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
