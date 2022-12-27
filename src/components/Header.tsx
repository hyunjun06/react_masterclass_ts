import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const onAboutClick = () => {
        navigate("/about");
    };

    return (
      <header>
        <h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
                <button onClick={onAboutClick}>About</button>
            </li>
          </ul>
        </h1>
      </header>
    );
}

export default Header;