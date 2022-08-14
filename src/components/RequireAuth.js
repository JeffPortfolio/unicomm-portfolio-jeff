import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentRoles, selectCurrentToken, selectCurrentUser } from "../features/auth/authSlice";

const RequireAuth = ({ allowedRoles }) => {
    const token = useSelector(selectCurrentToken)
    const user = useSelector(selectCurrentUser)
    const roles = useSelector(selectCurrentRoles)
    console.log(`token/user (RequireAuth): ${token}/${user}/${roles}`)
    const location = useLocation()

    // uth?.roles?.find(role => allowedRoles?.includes(role))
    // <RequireAuth allowedRoles={[1992]} />}>
    return(
        roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : <Navigate to="/landing" state={{from: location}} replace />
    )
}
export default RequireAuth