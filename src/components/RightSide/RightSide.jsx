import React, { useState } from 'react'
import './RightSide.css'

import Home from "../../img/home.png";
import Noty from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";

import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal';
import { Link } from 'react-router-dom';
// import ShareModel from '../ShareModel/ShareModel'

const RightSide = () => {
  const [modalOpened, setModelOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to='../home'> <img src={Home} alt="" /></Link>
        <UilSetting />
        <img src={Noty} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard />

      <button className="button r-button" onClick={() => setModelOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModelOpened} />
    </div>
  )
}

export default RightSide