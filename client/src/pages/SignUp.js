import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      //if passwords don't match, function stops after error is shown
      if (password !== confirmPassword) {
        setError('Passwords must match');
        return;
        } else {
        await createUserWithEmailAndPassword(getAuth(), email, password);
        updateProfile(getAuth(), {
          displayName: { displayName }
        });
        navigate('/recipe');
      }
    } catch (e) {
      setError(e.message);
    }
  };


  return (
    <>
      <div className="sign-up-form-container">
        <form className="sign-up-form">
          <div className="sign-up-form-content">
           <> 
           <div className="sign-up-form-title">   
              <h3>Sign Up</h3>
              {error && <h2 className="error">{error}</h2>}
            </div>

            <div className="form-group.mt-3">
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Display Name"
                value={displayName}
                onChange={e=>setDisplayName(e.target.value)}
              />
            </div>

            <div className="form-group.mt-3">
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
            </div>

            <div className="form-group.mt-3">
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
            </div>

            <div className="form-group.mt-3">
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e=>setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="d-grid" style={{ paddingTop: "30px" }}>
              <button type="submit" className="btn btn-primary" onClick={createAccount}>
                Sign Up
              </button>

              <div className="fine-print" style={{ paddingTop: "10px" }}>
                <label />
                Passwords must include:
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
            </>
          </div>
        </form>
      </div>
    </>
  );
}
export default SignUp;
