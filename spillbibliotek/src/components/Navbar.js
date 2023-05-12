import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <Link to="/gameshop">
          <li>Shop</li>
        </Link>
        <Link to="/mygames">
          <li>My Games</li>
        </Link>
        <Link to="/myfavourites">
          <li>Favourites</li>
        </Link>
        
      </ul>
    </nav>
  );
}
