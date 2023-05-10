import { useEffect, useState } from "react";
import Gamecard from "./Gamecard";

export default function Myfavourites({ ps }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (storedFavourites) {
      setFavourites(storedFavourites);
    }
  }, [favourites]);

  const removeFromFavourites = (game) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((favourite) => favourite.id !== game.id)
    );
    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites.filter((favourite) => favourite.id !== game.id))
    );
    alert(`${game.name} removed from favourites!`);
  };

  return (
    <section className="gameshop">
      <h1>My Favourites</h1>
      <ul>
        {favourites.slice(0, ps).map((favourite, index) => (
          <li key={index}>
            <Gamecard
              title={favourite?.name}
              img={favourite?.background_image}
              genre={favourite?.genres}
              showRemoveButton={true}
              removeFromFavourites={() => removeFromFavourites(favourite)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
