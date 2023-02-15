import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      
      <div className='Profile-center'>
        <ProfileCard location="profilePage"/>
        <PostSide />
      </div>

      <RightSide />
    </div>
  )
}

export default Profile