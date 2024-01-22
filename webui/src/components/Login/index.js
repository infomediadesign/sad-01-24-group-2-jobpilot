import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import '../../styles/loginIndex.css';  // Import the stylesheet
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate a login process (replace with your authentication logic)
    if (email === 'demo' && password === 'password') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

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
                    <GoogleOAuthProvider clientId="92853935498-er6mp6hndop8mqacch7t4t2kanlds25g.apps.googleusercontent.com">
                      <GoogleLogin
                        onSuccess={credentialResponse => {
                          const decoded = jwtDecode(credentialResponse.credential);
                          console.log(decoded);
                        }}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                      />
                    </GoogleOAuthProvider>

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
                value={email}
                placeholder="Email"
                className="emailInput"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                placeholder="Password"
                className="passwordInput"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button" onClick={handleLogin}>Login</button>
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