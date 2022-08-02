import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { setCredentials, selectCurrentRoles } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useLoggedInMutation } from "../features/auth/authApiSlice";
// import { setCredentials } from "./authSlice";
import { useEffect, useState } from "react";

const PersistLogin = () => {
    // const token = useSelector(selectCurrentToken)
    const roles = useSelector(selectCurrentRoles)
    const [loggedIn] = useLoggedInMutation()
    const dispatch = useDispatch()
    const [isProcess, setIsProcess] = useState(true)


    useEffect(() => {
        console.log("useEffect in Persist")
        let isMounted = true

        const verifyRefreshToken = async () => {
            try {
                const userData = await loggedIn().unwrap()
                // console.log(`userData: ${userData.roles}`)
                dispatch(setCredentials({...userData}))
                // dispatch(setCredentials({...userData, roles: userData.roles}))
            }
            catch (err) {
                console.error(err)
            }
            finally {
                isMounted && setIsProcess(false)
            }
        }
        console.log(roles)
        !roles ? verifyRefreshToken() : setIsProcess(false)
        return () => isMounted = false
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>

            {isProcess
                    ?<p>Loading...</p>
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin