import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { setCredentials } from "../../features/auth/authSlice";


function Login() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    // const {getLoggedIn} = useContext(AuthContext)
    const navi = useNavigate()
    const dispatch = useDispatch()
    const [login] = useLoginMutation()

    
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const userData = await login({ user, password}).unwrap()
            dispatch(setCredentials({...userData, user: user}))
            setUser('')
            setPassword('')
            navi("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1> Log In</h1>
            <form onSubmit={handleSubmit}>
            <input size="35" type="text" placeholder="UserName" onChange={(e) => setUser(e.target.value)} value={user}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login