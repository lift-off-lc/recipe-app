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
  };

  return (
    <>  
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
          {error && <h1>{error}</h1>}
            <h3 className="Auth-form-title">Sign In</h3>
            
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
           
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
              <button className="btn btn-primary" onClick={signIn}>
                Submit
              </button>
              <p className="forgot-password text-right mt-2">
                Forgot <Link to={"/resetpassword"}>password?</Link>
              </p>
              <p className="sign-up text-right mt-2">
                Don't have an account? <a href="./SignUp">Sign Up</a>
              </p>
            
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
