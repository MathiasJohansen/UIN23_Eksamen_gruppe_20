import { useEffect, useState } from "react";
import Gamecard from "./Gamecard";
import { Link } from "react-router-dom";



export default function Gameshop(props) {
  const [printgames, setGame] = useState([]);


  const date = new Date();

let currentDay= String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth()+1).padStart(2,"0");

let currentYear = date.getFullYear();

let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

console.log(currentDate)

  const getGames = async (ps) => {
    const response = await fetch(
      `https://api.rawg.io/api/games?ordering=-released&page_size=${ps}&dates=2023-01-01,${currentDate}&key=d7e8ed9e06e04e6a8be1835df02b3a17`
    );
    const data = await response.json();

    const gameInfo = data?.results;
    setGame(gameInfo);

    console.log("hmmm",printgames);
  };
  useEffect(() => {
    getGames(props.ps ?? 10);
  }, []);

  const [printstore, setStore] = useState([])

  const getStore = async () => {

    const gamesearch = printgames.map((items => items?.id))

    const gameIds = await Promise.all(gamesearch.map(id => (
      fetch(`https://api.rawg.io/api/games/${id}/stores?&key=d7e8ed9e06e04e6a8be1835df02b3a17`)
  )))

  const storelinks = await Promise.all(gameIds.map(gameresponse => (
      gameresponse.json()
  )))
    const storelinksresult = storelinks.map((items => items?.results?.[0]?.url))
    

    setStore(storelinksresult)

    console.log("data store", storelinks)
  
    console.log("test store", printstore)

  }
  useEffect(() => {
    getStore() 
  }, [])

  return (
    <section className={props.ps === 3 ? "dashboard-shop" : "gamepage"}>
      <h2>GAMESHOP
      <button className="redirect">
          <Link to="/gameshop">
            Visit shop
          </Link>
        </button>
      </h2>
      
      <ul className={props.ps === 3 ? "dashboard-shop-list" : ""}>
        {printgames?.map((games, index) => (
          <li>
            <Gamecard
              key={index}
              title={games?.name}
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
