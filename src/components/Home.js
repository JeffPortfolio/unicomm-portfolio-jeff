// import { useNavigate, Link } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../context/AuthProvider";
// import useAuth from '../hooks/useAuth'

import NavBar from "./NavBar"

const Home = () => {
//     const { setAuth } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const {auth} = useAuth();
//     console.log(auth);

//     const logout = async () => {
//         // if used in more components, this should be in context 
//         // axios to /logout endpoint 
//         setAuth({});
//         navigate('/linkpage');
//     }

    return (
        <>
        <NavBar />
        <div className="pageContainer homeContainer">
            <div className="homeHeader">Universe Commander</div>
            <div>
                <p>
                    This application allows a user to update and view the projects, roles, users and refresh tokens for the Portfolio universe, depending on the users rights.
                </p>
                <br />
                <p>
                    Only Universe Admins will be able to view/edit users and refresh tokens.
                </p>
                <br />
                <p>
                    Project owners will be able to view/edit the information for their project and the roles associated with it.
                </p>
            </div>
        </div>
        </>
    )
}

export default Home