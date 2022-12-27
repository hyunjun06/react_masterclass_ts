import { Link } from "react-router-dom";
import { database } from "../database";

function Home() {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {database.map((item) => <li key={item.id}>
                    <Link to={`/users/${item.id}`}>{item.name}</Link>
                </li>)}
            </ul>
        </div>
    );
}

export default Home;