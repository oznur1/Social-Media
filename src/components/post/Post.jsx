
import React from 'react'
import "./post.css"
import { MdMoreVert } from "react-icons/md";
import { SiPlanetscale } from 'react-icons/si';
import {Users}from "../../dummyData"
import { useState } from 'react';
function Post({post}) {
const[like,setLike]=useState(post.like)
const[isLiked,setIsLiked]=useState(false)

const likeHandler =()=>{
   setLike(isLiked ? like-1 : like+1)
   setIsLiked(!isLiked)
 }
  return (
   <div className='post'>
    <div className='postWrapper'>
        <div className='postTop'>  
         <div className='postTopLeft'>  
        <img  className='postProfileImg' src= {Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
        <span className='postUsername'> {Users.filter((u) => u.id === post?.userId)[0].username}</span>
        <span className='postDate'>{post.date}</span>
        </div>
        <div className='postTopRight'>
        <MdMoreVert />
        </div>
 </div>
 <div className='postCenter'>
    <span className="postText">{post?.desc}</span>
    <img  className="postImg " src={post.photo} alt="" />
 </div>
 <div className='postBottom'>
    <div className='postBottomLeft'>
        <img className="likeIcon" src="./assets/image/like.png" 
        onClick={likeHandler}
        alt="" />
        <img  className="likeIcon" src="./assets/image/heart.png"
        onClick={likeHandler}
        alt="" />
       <span className='postLikeCounter'>{like}people like it</span>
    </div>
    <div className='postBottomRight'>
        <span className='postCommentText'>{post.comment}9 comments</span>
    </div>
 </div>
   </div>
   </div>
  )
}

export default Post
