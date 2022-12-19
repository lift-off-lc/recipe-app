import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../components/Firebase/context/AuthContext";
const Login= () => {
  const { currentUser, logInUser, error, setError } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
    
  }, [currentUser, navigate]);
  //PREVENTS A USER FROM REACHING THE LOGIN PAGE IF THEY ARE CURRENTLY LOGGED IN, REDIRECTS TO HOMEPAGE INSTEAD

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      await logInUser(email, password);
      navigate("/profile");
    } catch (error) {
      setError({error: error.message});
      
      
    }
    setLoading(false);
  }
  //WHY setLoading(true) ONLY TO THEN setLoading(false)?
    //TO PREVENT THE PROGRAM FROM TAKING INCONVENIENT ACTIONS WHILE WAITING FOR THE PROMISED USERCREDENTIAL TO BE RETURNED BY logInUser(email, password)

  
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleFormSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                id="email"
                value={email}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange ={(event) => setEmail(event.target.value)}
                required
              />
              <label>Password</label>
              <input
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />

              <button type="submit" value="submit" className="btn btn-primary" disabled={loading}>
                Log In
              </button>
            </div>
            <div>
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
              </p>
              <p className="sign-up text-right mt-2">
                Don't have an account? <Link to="/SignUp">Sign Up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
