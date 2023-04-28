import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
        <ul className="navbar">
        <Link to="/my_games"><li>My Games</li></Link>
        <Link to="/my_fav"><li>My Favourites</li></Link>
        <Link to="/gameshop"><li>Gameshop</li></Link>
        <Link to="/gamepage"><li>Gamepage</li></Link>
        </ul>
        </nav>
    )
}