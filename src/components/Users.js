import NavBar from "./NavBar"



const Users = () => {

    return (
        <>
            <NavBar />
            <div className="pageContainer tableContainer">
            <div className="homeHeader">Users</div>
            <div>
                <table>
                  <tbody>
                    <tr>
                        <th>Email</th>
                    </tr>
                    <tr>
                        <td>test.user@test.com</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>

        </>
    )
}

export default Users