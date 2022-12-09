import {React, useState} from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  
  
  const navigate = useNavigate();

  const createAccount = async () => {
    try{
      if(password !== confirmPassword){
        setError("'Password' and 'Confirm Password' do not match");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate(<HomePage/>);
    } catch (e) {
      setError(e.message);
    }
  }
  



  const signUp = () => {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setPassword(password);
  }
  
  return (
    <>
    {error && <p className="error">{error}</p>}
      <div className="sign-up-form-container">
        <form className="sign-up-form">
          <div className="sign-up-form-content">
            <div className="sign-up-form-title">
              <h3>Sign Up</h3>
            </div>

            <div className="form-group.mt-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="First name"
                value= {firstName}
                onChange= { e =>
                  setFirstName(e.target.value)
                }
              />
            </div>

            <div className="form-group.mt-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Last Name"
                value={lastName}
                onChange= { e =>
                  setLastName(e.target.value)
                }
              />
            </div>

            <div className="form-group.mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="example@emailClient.com"
                value={email}
                onChange= { e =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <div className="form-group.mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                value={password}
                onChange= { e =>
                  setPassword(e.target.value)
                }
              />
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange= { e =>
                  setConfirmPassword(e.target.value)
                }
              />
            </div>

            <div className="d-grid" style={{ paddingTop: "30px" }}>
              <button type="submit" className="btn btn-primary"
              onClick={createAccount}
              >
                Sign Up
              </button>
              <div className="fine-print">
                <p>Already Have An Account?</p> 
                <Link style={{alignIterms: "center"}} to="./login">Log In</Link>
              </div>

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
          </div>
        </form>
      </div>
    </>
  );
}
export default SignUp;
