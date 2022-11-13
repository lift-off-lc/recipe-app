//will render the Login Page


function Login() {

    return (
        <>
            <div>
                <h1>Sign In</h1>
            </div>

            <div>
                <form>
                    <div>
                    <label>Email</label>
                    </div>
                    <div>
                        <input type="text" placeholder="enter email"></input>
                    </div>
                    
                    <div>
                        <div>
                        <label>Password</label>
                        </div>
                        <div>
                        <input type="text" placeholder="enter password"></input>
                        </div>
                        <div>
                        <button type="submit">Submit</button>
                        </div>
                    </div>
                    <div>
                        <p className="forgot-password text-right mt-2">
                          Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;