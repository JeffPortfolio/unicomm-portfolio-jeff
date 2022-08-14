import axios from '../api/axios'
import useAuth from './useAuth'
const LOGGEDIN_URL = '/loggedIn'
const REFRESH_URL = '/refreshToken'

const useLoggedIn = () => {
    const { setAuth, setIsLoggedIn } = useAuth()
    // const {setAuth} = useAuth()

    const getLoggedIn = async () => {
        console.log("useLoggedIn")
        const loggedInRes = await axios.get(LOGGEDIN_URL)
        // console.log(`loggedIn data: ${loggedInRes.data.body}`)
        // let isLogged = false
        let newToken;
        if (loggedInRes.data.body  === "No Token") {
            newToken = await axios.get(REFRESH_URL)
            console.log(`Refresh Token result: ${newToken.data.body}`)
            // isLogged = newToken.data
        }
        // isLogged = loggedInRes.data
        // if (loggedInRes.data === true) { isLogged = true }
        // console.log(isLogged)
        // setAuth(prev => {
        //     console.log(prev)
        //     console.log(loggedInRes.data.body)
        //     return {
        //         ...prev,
        //         body: loggedInRes.body
        //     }
        // })
        if (loggedInRes.data.body  !== "No Token" ||
            (loggedInRes.data.body  === "No Token" && newToken.data.body  !== "No Refresh Token")) {
                setAuth({body: loggedInRes.data.body, 
                    roles: loggedInRes.data.roles,
                    user: loggedInRes.data.user
               })
               setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
        return loggedInRes.data.body
    }
    return getLoggedIn
    // const roles = loggedInRes?.data?.roles;
    // setAuth({ roles });
}

export default useLoggedIn