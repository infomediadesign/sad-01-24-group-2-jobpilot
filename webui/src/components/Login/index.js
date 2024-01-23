import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import '../../styles/Login/loginIndex.css';  // Import the stylesheet
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const loginwithgoogle = ()=>{
    console.log("about to open new window")
    window.open("http://localhost:4000/api/auth/google","_self")
  }


  return (
    <div >
      <nav className="navbar">
          <h1 className="font-bold">Job Pilot</h1>
        <div>
            <button
              className="signButton">Sign in
            </button>
        </div>
      </nav>
      <main className="container">
        <div className="bg-white">
          <h1 className="text-2xl">
            Welcome to Search Your Job
          </h1>
          <div className="mt-4">
            <div className="w-full">
              <div className="h-1">
                <div className="S9gUrf-YoZ4jf">
                  <div></div>
                  <div className="OAuth">
                      
                  <button className='login-with-google-btn' onClick={loginwithgoogle}>
                    Sign In With Google
                </button>

                  </div>
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="w-full  h-5 bg-gray-200"></div>
              <div className="mx-4">OR</div>
              <div className="w-full h-5 bg-gray-200"></div>
              <span></span>
            </div>
            <form>
              <input
                type="text"
                placeholder="Email"
                className="emailInput"
              />
              <input
                type="password"
                placeholder="Password"
                className="passwordInput"
              />
              <button className="button">Login</button>
            </form>
            <div className="mt-4">
              <Link to="/register">
                <h1 className="text-blue-500">Don't have an account? <span class="underline">Register here</span></h1>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;