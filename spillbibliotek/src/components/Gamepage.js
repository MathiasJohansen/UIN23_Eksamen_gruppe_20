import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Gamepage() {

    const {slug} = useParams();

    console.log("game?", slug)

    const [printgame, setGame] = useState([])

    const getGame = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games/${slug}?&key=d7e8ed9e06e04e6a8be1835df02b3a17`
      )
      const data = await response.json()
      const gameInfo = data
      setGame(gameInfo)

      
      console.log("slug spill", printgame)
    }
    useEffect(() => {
      getGame() 
    }, [])

  return (
    <article className="game-info">
      <h2>{printgame.name}</h2>
      <p>Publishers</p>
      <aside>
        <img src={printgame.background_image} />
      </aside>
      <p>{printgame.description_raw}</p>
      
      <ul>
        <h3>
          Platforms
        </h3>
        {printgame?.platforms?.map((p, index)=>(
          <li key={index}>{p?.platform?.name}</li>
        ))}
      </ul>
    </article>
  )
}
//<h1>{slug.replace(/-/g, " ")}</h1>
