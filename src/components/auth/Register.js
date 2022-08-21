import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../features/auth/authApiSlice";
import { selectCurrentAppName, setCredentials } from "../../features/auth/authSlice";

function Register() {

    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVerify, setPasswordVerify] = useState("")
    const appName = useSelector(selectCurrentAppName)

    const navi = useNavigate()
    const dispatch = useDispatch()
    const [register] = useRegisterMutation()
    
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const userData = await register({ email, password, passwordVerify, user, appName}).unwrap()
            dispatch(setCredentials({...userData, user: email}))
            setEmail('')
            setPassword('')
            navi("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1> Register</h1>
            <form onSubmit={handleSubmit}>
            <input size="35" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input size="35" type="text" placeholder="UserName" onChange={(e) => setUser(e.target.value)} value={user}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <input type="password" placeholder="Verify Password" onChange={(e) => setPasswordVerify(e.target.value)} value={passwordVerify}/>
            <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register