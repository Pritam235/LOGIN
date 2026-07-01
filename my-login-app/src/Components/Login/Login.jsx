import React, { useState } from "react";
import "./Login.css";

import {
  FaGoogle,
  FaLinkedinIn,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import googleIcon from "../../assets/google.png";
import linkedinIcon from "../../assets/linkedin.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

 const handleLogin = () => {
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password");
      return;
    }

    alert("Login Successful!");
  };


  const handleForgotPassword = () => {
    alert("Forgot Password Clicked");
  };

  const handleGoogle = () => {
    window.open("https://accounts.google.com", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com", "_blank");
  };

  const handleContactAdmin = () => {
    window.location.href = "mailto:admin@gmail.com";
  };

  return (
    <div className="login-container">
     
      <div className="left-section">
        <div className="overlay">
          <h1>Welcome back!</h1>

          <p>
            Access your account
            <br />
            and continue where
            <br />
            you left off.
          </p>
        </div>
      </div>

      
      <div className="right-section">
        <div className="login-card">
          <h2>Login to your account</h2>

       
          <div className="input-group">
            <label>Email Address</label>

            <div className="input-box">
              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>
          </div>

         
          <div className="input-group">
            <label>Password</label>

            <div className="input-box">
              <FaLock className="input-icon" />

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            </div>
          </div>

         
          <div className="remember-forgot">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a
              type="button"
              className="forgot-btn"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </a>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="button"
            className="login-btn"
            onClick={handleLogin}
          >
            Continue
          </button>

          {/* DIVIDER */}
          <div className="divider">
            <div></div>
            <span>OR</span>
            <div></div>
          </div>

          <p className="social-text">
            Or Continue with
          </p>

        <div className="social-icons">
  <button
    type="button"
    onClick={handleGoogle}
  >
    <img
      src={googleIcon}
      alt="Google"
      className="social-img"
    />
  </button>

  <button
    type="button"
    onClick={handleLinkedIn}
  >
    <img
      src={linkedinIcon}
      alt="LinkedIn"
      className="social-img"
    />
  </button>
</div>

          <p className="contact">
            Need help?{" "}
            <a
              type="button"
              className="contact-btn"
              onClick={handleContactAdmin}
            >
              Contact admin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;