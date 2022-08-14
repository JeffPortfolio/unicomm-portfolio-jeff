import NavBar from "./NavBar"



const Projects = () => {

    return (
        <>
            <NavBar />
            <div className="pageContainer tableContainer">
            <div className="homeHeader">Projects</div>
            <div>
                <table>
                    <tr>
                        <th>Email</th>
                    </tr>
                    <tr>
                        <td>test.user@test.com</td>
                    </tr>
                </table>
            </div>
        </div>

        </>
    )
}

export default Projects