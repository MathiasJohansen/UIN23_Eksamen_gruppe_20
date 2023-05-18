import { Link } from "react-router-dom";

export default function Gamecard({
  title,
  img,
  genre,
  addToFavourites,
  showFavouritesButton,
  showBuyButton,
  removeFromFavourites,
  showRemoveButton,
  buyButton,
  slug,
}) {
  return (
    <article className="game-card">
      <h3>{title}</h3>
      <img src={img} alt={title} />
      {genre?.map((g) => (
        <p>{g?.name}</p>
      ))}
      <p>
        <Link to={`/gamepage/${slug}`}>Read more</Link>
      </p>
      {showBuyButton && (
        <button>
          <Link to={buyButton}>Buy</Link>
        </button>
      )}
      {/*Brukt conditional operators på en måte som til vår kunnskap ikke har blitt vist i undervisning. bedre detaljert logic AND Operator. Brukt for å sjekke om verdien er sann eller ikke*/}
      {showFavouritesButton && (
        <button onClick={addToFavourites}>Add to favourites</button>
      )}
      {showRemoveButton && (
        <button onClick={removeFromFavourites}>Remove from favourites</button>
      )}
    </article>
  );
}
