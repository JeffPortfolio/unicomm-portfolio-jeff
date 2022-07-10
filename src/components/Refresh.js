import NavBar from "./NavBar"



const Refresh = () => {

    return (
        <>
            <NavBar />
            <div className="pageContainer tableContainer">
            <div className="homeHeader">Refresh Tokens</div>
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

export default Refresh