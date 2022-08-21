import NavBar from "./NavBar"

const Home = () => {

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