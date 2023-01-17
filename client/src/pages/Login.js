import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/recipe');
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            {error && <p className="error">{error}</p>}
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={signIn}>
                Submit
              </button>
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
