import { useEffect, useState } from "react";
import Gamecard from "./Gamecard";
import { Link } from "react-router-dom";

export default function Mygames(props) {
  const [printgames, setGame] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const getGames = async (ps) => {
    const response = await fetch(
      `https://api.rawg.io/api/games?genres=shooter&page_size=${ps}&key=3c2f5d3c0f3b464fbb39246b1aa12b59`
    );
    const data = await response.json();
    const gameInfo = data?.results;
    setGame(gameInfo);
    console.log(favourites)
  };

  const addToFavourites = (gameInfo) => {
    setFavourites((prevFavourites) => {
      //Bruker .find for å finne riktig element i arrayen i forhold til hva vi vil ha. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
      const existingFavourite = prevFavourites.find(
        (fav) => fav.id === gameInfo.id
      );
      if (existingFavourite) {
        alert(`${gameInfo.name} is already in your favourites!`);
        return prevFavourites;
      } else {
        const newFavourites = [...prevFavourites, gameInfo];
        localStorage.setItem("favourites", JSON.stringify(newFavourites));
        return newFavourites;
      }
    });
  };

  useEffect(() => {
    getGames(props.ps ?? 20);
  }, []);
  
  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  return (
    <section className={props.ps === 4 ? "mg" : "gamepage"}>
      <h2>MY GAMES</h2>
      <ul>
        {printgames?.map((games, index) => (
          <li key={games?.id}>
            <Gamecard
              key={index}
              title={games?.name}
              img={games?.background_image}
              genre={games?.genres}
              addToFavourites={() => addToFavourites(games)}
              showFavouritesButton={true}
              showBuyButton={false}
            />
          </li>
        ))}
      </ul>
      <button className="redirect">
        <Link to="/mygames">Go to library</Link>
      </button>
    </section>
  );
}
