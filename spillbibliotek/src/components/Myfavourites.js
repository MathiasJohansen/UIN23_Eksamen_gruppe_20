import { useEffect, useState } from "react";
import Gamecard from "./Gamecard";
import { Link } from "react-router-dom";

export default function Myfavourites({ ps }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    //Brukt localStorage med .parse og .stringify for å lagre artikkelkort som en streng og så som en array for lagring i localStorage og så i favoritter. brukt i kose fra linje 10-22. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify, 

    const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (storedFavourites) {
      setFavourites(storedFavourites);
    }
  }, []);

  const removeFromFavourites = async(game) => {
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
    <section className={ps <= 2 ? "mf" : "gamepage"}>
      <h2>MY FAVOURITES</h2>
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
      <button className="redirect">
        <Link to="/myfavourites">Go to Favourites</Link>
      </button>
    </section>
  );
}
