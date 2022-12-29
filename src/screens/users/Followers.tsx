import { useOutletContext } from "react-router-dom";
import { database } from "../../database";

function Followers() {
    const userid = useOutletContext();
    const user = database.find((item) => item.id === Number(userid));

    return (
        <div>
            <h1>Followers</h1>
            <p>Name: {user?.name}</p>
        </div>
    );
}

export default Followers;