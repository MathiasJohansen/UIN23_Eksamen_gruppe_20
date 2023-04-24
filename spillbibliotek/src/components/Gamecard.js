import { Link } from "react-router-dom";

export default function Gamecard({title, img, genre, id}){
    return(
        <article className="game-card">
            <h3>{title}</h3>
            {genre?.map((g) => (
                <p>{g?.name}</p>
            ))}
            
            <button><Link to={id}>Kjøp</Link></button>
            <img src={img} alt={title}/>
        </article>
    )
}