import { useEffect, useState } from "react";
import Gamecard from "./Gamecard";
import { Link } from "react-router-dom";

export default function Mygames(props) {
  const [printgames, setGame] = useState([])
  const [favourites, setFavourites] = useState([])

  const getGames = async (ps) => {
    const response = await fetch(
      `https://api.rawg.io/api/games?genres=shooter&page_size=${ps}&key=d7e8ed9e06e04e6a8be1835df02b3a17`
    )
    const data = await response.json()
    const gameInfo = data?.results
    setGame(gameInfo)
  }

  const addToFavourites = (gameInfo) => {
    setFavourites((prevFavourites) => {
      const existingFavourite = prevFavourites.find((fav) => fav.id === gameInfo.id)
      if (existingFavourite) {
        alert(`${gameInfo.name} is already in your favourites!`)
        return prevFavourites
      } else {
        const newFavourites = [...prevFavourites, gameInfo]
        localStorage.setItem("favourites", JSON.stringify(newFavourites))
        return newFavourites
      }
    })
  }
  

  useEffect(() => {
    getGames(props.ps ?? 20) 
  }, [])
  useEffect(() =>{const storedFavourites = localStorage.getItem("favourites")
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites))}
  }, [favourites])

  return (
    <section className={props.ps === 4 ? "mg" : "gamepage"}>
      <h2>MY GAMES</h2>
      <ul>
        {printgames?.map((games, index) => (
          <li>
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
          <Link to="/mygames">
            Go to library
          </Link>
        </button>
    </section>
  )
}
