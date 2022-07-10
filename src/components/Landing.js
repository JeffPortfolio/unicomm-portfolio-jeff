import React, { useState } from 'react'
import Login from './auth/Login'
import Register from './auth/Register'

const Landing = () => {

    const [loginState, setLoginState] = useState("login")

    
    return (
        <div className="pageContainer landingContainer">
            <div className="landingHeader">Universe Commander</div>
            {loginState === "login" && (
                <div>
                    <Login />
                    Don't Have an Account? <span className='spanLink' onClick={(e) => setLoginState("register")}>Register</span>
                </div>
            )}
            {loginState === "register" && (
                <div>
                    <Register />
                    Already Have an Account? <span className='spanLink' onClick={(e) => setLoginState("login")}>Login</span>
                </div>
            )}
        </div>
    )
}

export default Landing