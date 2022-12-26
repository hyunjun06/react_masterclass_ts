import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </h1>
      </header>
    );
}

export default Header;