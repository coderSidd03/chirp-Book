import React, { useState } from 'react';
import './Auth.css';
import Logo from '../../img/logo-twitter.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login, signUp } from '../../actions/AuthAction';

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading)
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState({ firstname: "", lastname: "", username: "", password: "", confirmpass: "" });
  const [confirmPass, setConfirmPass] = useState(true);


  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    setConfirmPass(true);
    event.preventDefault();
    if (isSignUp) {
      (data.password === data.confirmpass) 
      ? dispatch(signUp(data, navigate))
      : setConfirmPass(false);
    }
    else {
      dispatch(login(data, navigate))
    }
  };

  function resetForm() {
    setConfirmPass(confirmPass);
    setData({ firstname: "", lastname: "", username: "", password: "", confirmpass: "" })
  }


  return (
    <div className="Auth">

      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ChirpBook</h1>
          <h6>Explore what the world is Chirping !!</h6>
        </div>
      </div>

      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange} value={data.firstname} />
              <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange} value={data.lastname} />
            </div>
          )}

          <div>
            <input type="text" placeholder='Username' className='infoInput' name='username' onChange={handleChange} value={data.username} />
          </div>

          <div>
            <input type="password" placeholder='Password' className='infoInput' name='password' onChange={handleChange} value={data.password} />

            {isSignUp && (
              <input type="password" placeholder='Confirm password' className='infoInput' name='confirmpass' onChange={handleChange} value={data.confirmpass} />
            )}
          </div>
          <span style={
            {
              display: confirmPass ? "none" : "block",
              color: "red", fontSize: "13px", alignSelf: "flex-end", marginRight: "5px"
            }
          }>
            ** Password mismatch please recheck your password
          </span>
          <div>
            <span
              style={{ fontSize: '14px', cursor: "pointer" }}
              onClick={
                () => {
                  setIsSignUp((prevValue) => !prevValue);
                  resetForm();
                }
              }
            >
              {isSignUp ? "Already have account. Login!" : "Don't have an account. Sign Up!"}
            </span>
          </div>
          <button className="button infoButton" type='submit' disabled={loading}>
            <b>{loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}</b>
          </button>

        </form>
      </div>
    </div>
  )
}


export default Auth