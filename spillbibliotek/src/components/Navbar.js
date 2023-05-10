import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <Link to="/mygames">
          <li>My Games</li>
        </Link>
        <Link to="/myfavourites">
          <li>My Favourites</li>
        </Link>
        <Link to="/gameshop">
          <li>Gameshop</li>
        </Link>
      </ul>
    </nav>
  );
}
