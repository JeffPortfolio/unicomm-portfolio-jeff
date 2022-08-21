import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentRoles } from "../features/auth/authSlice";

const RequireAuth = ({ allowedRoles }) => {
    const roles = useSelector(selectCurrentRoles)
    const location = useLocation()

    return(
        roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : <Navigate to="/landing" state={{from: location}} replace />
    )
}
export default RequireAuth