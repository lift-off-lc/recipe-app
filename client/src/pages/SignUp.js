import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Firebase/context/AuthContext";



function SignUp() {
  const { currentUser, signUpUser, setError } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  // PREVENTS A USER FROM REACHING THE SIGNUP PAGE IF THEY ARE CURRENTLY LOGGED IN, REDIRECTS TO HOMEPAGE INSTEAD

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
     
    }
    try {
      setLoading(true);
      await signUpUser(email, password);
      navigate("/profile");
    } catch (e) {
      setError("Oops! An error occurred");
    }
    setLoading(false);
  }
  //WHY setLoading(true) ONLY TO THEN setLoading(false)?
  //TO PREVENT THE PROGRAM FROM TAKING INCONVENIENT ACTIONS WHILE WAITING FOR THE PROMISED USERCREDENTIAL TO BE RETURNED BY signUpUser(email, password)
  return (
    <>
      <div className="Auth-form-container justify-center">
        <form className="Auth-form" onSubmit={handleFormSubmit}>
          <div className="Auth-form-content">
            <h3 className="sign-up-form-title">Sign Up</h3>
            <div className="form-group.mt-3">
              <label>Display Name</label>
              <input
                id="displayName"
                value={displayName}
                type="text"
                className="form-control mt-1"
                placeholder="Display Name"
                onChange={(e) => setDisplayName(e.target.value)}
                // required
              />
              <input
                id="email"
                value={email}
                type="email"
                className="form-control mt-1"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
              <input
                id="password"
                value={password}
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                id="confirmPassword"
                value={confirmPassword}
                type="password"
                className="form-control mt-1"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" value="submit" className="btn btn-primary mt-2" disabled={loading}>
                Sign Up
              </button>
            </div>
            <div className="fine-print" style={{ paddingTop: "10px" }}>
              <label />Passwords must include:
              <div className="even-finer-print">
                <ul style={{ alignItems: "left" }}>
                  <li>At least 6 characters</li>
                  <li>At least 1 uppercase letter</li>
                  <li>At least 1 lowercase letter</li>
                  <li>At least 1 number</li>
                  <li>At least 1 special character</li>
                </ul>
              </div>
            </div>
          </div>
      </form>
    </div >
  </>
  );
}
export default SignUp;
