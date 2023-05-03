import { useState } from "react";
import { Link } from "react-router-dom";

export default function Gamecard({title, img, genre, id, addTo}){

    const [favourites, myFavourites] = useState([])

    const saveFav = () => {
        
    }

    return(
        <article className="game-card">
            <h3>{title}</h3>
            {genre?.map((g) => (
                <p>{g?.name}</p>
            ))}
            <Link to={`/gamepage/${title.toLowerCase().replace(" ", "_")}`}>Les mer</Link>
            <button><Link to={id}>Kjøp</Link></button>
            <button onClick={addTo}>Legg til i favoritter</button>
            <img src={img} alt={title}/>
        </article>
    )
}