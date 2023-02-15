import React from 'react'
import './Post.css'
import HeartImg from '../../img/like.png'
import CommentImg from '../../img/comment.png'
import ShareImg from '../../img/share.png'
import NotLikeImg from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { likePosts } from '../../api/PostsRequests.js'

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    setLiked((prev) => !prev)
    likePosts(data._id, user._id)
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  };

  return (
    <div className='Post'>
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

      <div className="postReact">
        <img src={liked ? HeartImg : NotLikeImg} alt="" style={{ cursor: "pointer" }} onClick={handleLike} />
        <img src={CommentImg} alt="" style={{ cursor: "pointer" }} />
        <img src={ShareImg} alt="" style={{ cursor: "pointer" }} />
      </div>

      <span style={{ color: "var(--gray)", fontSize: '12px' }}>{likes} Likes</span>

      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.description}</span>
      </div>
    </div>
  )
}

export default Post