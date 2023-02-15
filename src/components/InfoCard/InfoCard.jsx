import React, { useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import * as UserApi from '../../api/UserRequests.js'
import { logout } from '../../actions/AuthAction'

const InfoCard = () => {

  const [modalOpened, setModalOpened] = useState(false)

  const dispatch = useDispatch();
  const params = useParams();

  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({})

  const { user } = useSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user)
        console.log(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        console.log(profileUser);

        setProfileUser(profileUser)
      }
    }
    fetchProfileUser();
  }, [user])

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user} />
          </div>
        ) : ("")}
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesin}</span>
      </div>
      <div className="info">
        <span>
          <b>worked as </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>

      <button className='button logout-button' onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default InfoCard