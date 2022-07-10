import { Link } from "react-router-dom"


const NavBar = () => {


    return (
        <header>
            <div className="logo">UniComm - Portfolio</div>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/roles">Roles</Link></li>
            <li><Link to="/refresh">Refresh</Link></li>
            <li><Link to="/landing">Logout</Link></li>
            </ul>
        </header>
    )
}

export default NavBar