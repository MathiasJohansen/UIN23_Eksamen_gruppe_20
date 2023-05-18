import { Link } from "react-router-dom";

export default function Gamecard({
  title,
  img,
  genre,
  id,
  addToFavourites,
  showFavouritesButton,
  showBuyButton,
  removeFromFavourites,
  showRemoveButton,
  buyButton
}) {
  return (
    <article className="game-card">
      <h3>{title}</h3>
      <img src={img} alt={title} />
      {genre?.map((g) => (
        <p>{g?.name}</p>
      ))}
      <p>
        <Link to={`/gamepage/${title.toLowerCase().replace(/ /g, "-")}`}>
          Les mer
        </Link>
      </p>
      {showBuyButton && (
        <button>
          <Link to={buyButton}>Kjøp</Link>
        </button>
      )}
      {showFavouritesButton && (
        <button onClick={addToFavourites}>Legg til i favoritter</button>
      )}
      {showRemoveButton && (
        <button onClick={removeFromFavourites}>Fjern fra favoritter</button>
      )}
    </article>
  );
}
