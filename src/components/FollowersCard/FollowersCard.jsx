import React, { useState, useEffect } from 'react'
import './FollowersCard.css'
import FollowersModal from "../FollowersModal/FollowersModal";
import User from '../User/User'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../api/UserRequests.js'

const FollowersCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData)


  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
      console.log(data);
    }
    fetchPersons()
  }, [])

  return (
    <div className="FollowersCard">
      <h3>People You May Know</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />
        }
      })}
      {!location ? (
        <span onClick={() => setModalOpened(true)}>Show more</span>
      ) : (
        ""
      )}

      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </div>
  )
}

export default FollowersCard