import {React, useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
  
    const LogIn = async (email, password) => {
    try{
      await (signInWithEmailAndPassword(getAuth(), email, password));
      navigate("/");
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
                onChange = {e=> setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange = {e=> setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={LogIn}>
                Log In
              </button>
            </div>
            <div>
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
              </p>
              <p className="sign-up text-right mt-2">
                Don't have an account? <Link to="../signUp">Sign Up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
