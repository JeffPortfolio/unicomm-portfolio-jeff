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

        try {
            await logout().unwrap()
            dispatch(logOut())
            navi("/landing")
        } catch (error) {
            console.log(error)
        }
    }

    return <Link to="/landing" onClick={logUserOut}>Log Out</Link>
}

export default LogoutBtn