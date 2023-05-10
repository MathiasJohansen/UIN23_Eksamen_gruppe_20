import { useState } from "react";
import { Link } from "react-router-dom";

export default function Gamecard({title, img, genre, id, addToFavourites, showFavouritesButton, showBuyButton, removeFromFavourites, showRemoveButton}){

    

    return(
        <article className="game-card">
            <h3>{title}</h3>
            {genre?.map((g) => (
                <p>{g?.name}</p>
            ))}
            <Link to={`/gamepage/${title.toLowerCase().replace(" ", "_")}`}>Les mer</Link>
            {showBuyButton && (
            <button><Link to={id}>Kjøp</Link></button>
            )}
            {showFavouritesButton && (
            <button onClick={addToFavourites}>Legg til i favoritter</button>
            )}
            {showRemoveButton && (
                <button onClick={removeFromFavourites}>Fjern fra favoritter</button>
            )}
            <img src={img} alt={title}/>
        </article>
    )
}