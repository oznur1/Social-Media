import "./topbar.css"
import { CiSearch } from "react-icons/ci";
import React from 'react'
import { IoPerson } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

function Topbar() {
  return (
  <div className="topbarContainer">
  <div className="topbarLeft">
    <span className="logo">Lamasocial</span>
  </div>
  <div className="topbarCenter">
    <div className="searchbar">
    <CiSearch />
    <input placeholder="Search for friend,post or video" className="searchInput" />
    </div>
  </div>
  <div className="topbarRight">
    <div className="topbarIcons">
      <span className="topbarLink">Homepages</span>
      <span className="topbarlink">Timeline</span>
    </div>
    <div className="topbarIcons">
      <div className="topbarIconItem">
    <IoPerson />
    <span className="topbarIconBadge">1</span>
    </div>
    <div className="topbarIconItem">
    <IoChatboxEllipses />
    <span className="topbarIconBadge">2</span>
    </div>
    <div className="topbarIconItem">
    <IoIosNotifications />
    <span className="topbarIconBadge">3</span>
    </div>
  </div>
  <img src="./assets/image/1.jpeg" alt="" className="topbarImg" />
  </div>
  </div>

  );
}

export default Topbar;
