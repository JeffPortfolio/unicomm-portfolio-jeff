import React, { useState } from "react";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <h1> Log In</h1>
            <form >
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login