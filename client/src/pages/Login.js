import {React, useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";






function Login() {
  
  const LoginUtil = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  }

  const LogIn = async (email, password) => {
    try{
    Await (signInWithEmailAndPassword(getAuth(), email, password));
    Navigate('/');
    
  } catch(e){ 
    setError(e.message)
  }
}
  return (
    <>
    {error && <p className="error">{error}</p>}
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange = {(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange = {(e)=> setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
                onClick={LogIn}
              </button> Log In
            </div>
            <div>
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
              </p>
              <p className="sign-up text-right mt-2">
                Don't have an account? <a href="./SignUp">Sign Up</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
