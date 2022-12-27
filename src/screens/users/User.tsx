import { useParams } from "react-router-dom";
import { database } from "../../database";

function User() {
    const { userid } = useParams();
    const user = database.find((item) => item.id === Number(userid));
    console.log(userid);
    
    if (!user) {
        return <div>User not found</div>;
    }
    
    return (
        <div>
            <h1>Hello, {user.name}</h1>
        </div>
    );
}

export default User;