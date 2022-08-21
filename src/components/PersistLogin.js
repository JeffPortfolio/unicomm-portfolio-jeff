import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { setCredentials, selectCurrentRoles } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useLoggedInMutation } from "../features/auth/authApiSlice";
import { useEffect, useState } from "react";

const PersistLogin = () => {
    const roles = useSelector(selectCurrentRoles)
    const [loggedIn] = useLoggedInMutation()
    const dispatch = useDispatch()
    const [isProcess, setIsProcess] = useState(true)


    useEffect(() => {
        let isMounted = true

        const verifyRefreshToken = async () => {
            try {
                const userData = await loggedIn().unwrap()
                dispatch(setCredentials({...userData}))
            }
            catch (err) {
                console.error(err)
            }
            finally {
                isMounted && setIsProcess(false)
            }
        }
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