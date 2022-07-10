import React, { useContext } from "react"
import axios from "axios"
import AuthContext from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

function LogoutBtn() {

    const {getLoggedIn} = useContext(AuthContext)
    const history = useNavigate()

    async function logOut() {
        await axios.get("http://localhost:8000/api/logout")
        await getLoggedIn()
        history("/")
    }

    return <div onClick={logOut}>
        Log Out
    </div>
}

export default LogoutBtn