import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLogoutMutation } from "../../features/auth/authApiSlice"
import { useDispatch } from "react-redux";
import { logOut } from "../../features/auth/authSlice";


function LogoutBtn() {

    const navi = useNavigate()
    const [ logout ] = useLogoutMutation()
    const dispatch = useDispatch()


    async function logUserOut() {
        // navi("/landing")
        console.log ("logout")
        // e.preventDefault()

        try {
            await logout().unwrap()
            dispatch(logOut())
            navi("/landing")
        } catch (error) {
            console.log(error)
        }
        // await axios.get("http://localhost:8000/api/logout")
        // await getLoggedIn()
    }

    return <Link to="/landing" onClick={logUserOut}>Log Out</Link>
}

export default LogoutBtn