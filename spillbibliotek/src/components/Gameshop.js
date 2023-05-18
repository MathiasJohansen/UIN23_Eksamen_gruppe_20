import { useEffect, useState } from "react";
import Gamecard from "./Gamecard";
import { Link } from "react-router-dom";

export default function Gameshop(props) {
  const [printgames, setGame] = useState([]);

  const date = new Date();

  //Funnet på scaler.com. brukt for å finne nyeste utgivelser fra APIet.
  let currentDay = String(date.getDate()).padStart(2, "0");

  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

  let currentYear = date.getFullYear();

  let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

  const getGames = async (ps) => {
    const response = await fetch(
      `https://api.rawg.io/api/games?ordering=-released&page_size=${ps}&dates=2023-01-01,${currentDate}&key=3c2f5d3c0f3b464fbb39246b1aa12b59`
    );
    const data = await response.json();

    const gameInfo = data?.results;
    setGame(gameInfo);
  };
  useEffect(() => {
    getGames(props.ps ?? 10);
  }, []);

  const [printstore, setStore] = useState([]);

  const getStore = async () => {
    const gamesearch = printgames.map((items) => items?.id);

    const gameIds = await Promise.all(
      gamesearch.map((id) =>
        fetch(
          `https://api.rawg.io/api/games/${id}/stores?&key=3c2f5d3c0f3b464fbb39246b1aa12b59`
        )
      )
    );

    const storelinks = await Promise.all(
      gameIds.map((gameresponse) => gameresponse.json())
    );
    const storelinksresult = storelinks.map(
      (items) => items?.results?.[0]?.url
    );

    setStore(storelinksresult);
  };
  useEffect(() => {
    getStore();
  }, [printgames]);

  return (
    <section className={props.ps === 3 ? "dashboard-shop" : "gamepage"}>
      <h2>
        GAMESHOP
        <button className="redirect">
          <Link to="/gameshop">Visit shop</Link>
        </button>
      </h2>

      <ul className={props.ps === 3 ? "dashboard-shop-list" : ""}>
        {printgames?.map((games, index) => (
          <li key={games?.id}>
            <Gamecard
              title={games?.name}
              slug={games?.slug}
              img={games?.background_image}
              genre={games?.genres}
              showFavouritesButton={false}
              showBuyButton={true}
              buyButton={printstore[index]}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
