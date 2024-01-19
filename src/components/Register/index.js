import React, { useState } from "react";
import '../../styles/registerIndex.css';  // Import the stylesheet
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Register = () => {
  //const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setRegistered] = useState(false);

  const handleRegister = () => {
    // Simulate a registration process (replace with your logic)
    if (firstName && lastName && email && password) {
      setRegistered(true);
      alert('Registration successful!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="left-side">
          <h1 className="font-bold">Job Pilot</h1>
        </div>
        <div className="right-side">
          <button className="signButton">Sign in</button>
        </div>
      </nav>
      <main className="container">
        <div className="bg-white">
          <h1 className="text-2xl">Register for an Account</h1>
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
              <div className="w-full h-5 bg-gray-200"></div>
              <div className="mx-4">OR</div>
              <div className="w-full h-5 bg-gray-200"></div>
              <span></span>
            </div>
            <form>
              <div className="flex">
                <div className="mr-2">
                  <input
                    type="text"
                    value={firstName}
                    placeholder="First Name"
                    className="inputField1"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="ml-2">
                  <input
                    type="text"
                    value={lastName}
                    placeholder="Last Name"
                    className="inputField2"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
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
              <button className="button" onClick={handleRegister}>Register</button>
            </form>
            <div className="mt-4">
              <Link to="/login">
                <h1 className="text-blue-500">Already have an account? <span className="underline">Login here</span></h1>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;