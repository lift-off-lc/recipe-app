import React from "react";

function SignUp() {
  return (
    <>
      <div className="sign-up-form-container">
        <form className="sign-up-form">
          <div className="sign-up-form-content">
            <div className="sign-up-form-title">
              <h3>Sign Up</h3>
            </div>

            <div className="form-group.mt-3">
              <input
                type="text"
                className="form-control mt-1"
                placeholder="First name"
              />
            </div>

            <div className="form-group.mt-3">
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Last Name"
              />
            </div>

            <div className="form-group.mt-3">
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email"
              />
            </div>

            <div className="form-group.mt-3">
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>

            <div className="d-grid" style={{ paddingTop: "30px" }}>
              <button type="submit" className="btn btn-primary">
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
          </div>
        </form>
      </div>
    </>
  );
}
export default SignUp;
