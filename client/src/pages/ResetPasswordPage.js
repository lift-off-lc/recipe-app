import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Alert } from "bootstrap";

const ResetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const resetPassword = async () => {
        try {
            sendPasswordResetEmail(getAuth(), email);
            <Alert>Password Reset Email Sent!</Alert>
        } catch (e) {
            setError(e.message);
            <Alert>{error}</Alert>
        }
    }
    return (
        <>
            <div className="Auth-form-container">
                <div className="Auth-form">
                    <div className="Auth-form-content">
                        {error && <h1>{error}</h1>}
                        <h3 className="Auth-form-title">Reset Password</h3>

                        <div className="form-group mt-3 mb-3">
                            <input
                                type="email"
                                className="form-control mt-1 mb-1"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                            <button className="btn btn-primary" onClick={resetPassword}>
                                Send
                            </button>
                            <p className="sign-up text-right mt-2">
                                Don't have an account? <Link href="./SignUp">Sign Up</Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default ResetPasswordPage