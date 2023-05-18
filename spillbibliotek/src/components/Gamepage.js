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
      
      <aside>
        <img src={printgame.background_image === null ? "https://cdn.pixabay.com/photo/2016/11/03/14/18/stamp-1794352_960_720.png" : printgame.background_image} alt={"Picture from "+printgame.name} />
      </aside>
      
      <p>{printgame.description_raw}</p>

      <section className="game-info-lists">
        <ul >
          <h3>Info</h3>
        {printgame?.publishers?.map((p, index)=>(
            <li key={index}><b>Publisher</b>: {p?.name}</li>
          ))}
          <li><b>Release date</b>: {printgame.released}</li>
          <li><b>Website link</b>: <a href={printgame.website}>{printgame.website}</a></li>
        </ul>

        <ul >
          <h3>
            Platforms
          </h3>
          {printgame?.parent_platforms?.map((pp, index)=>(
            <li key={index}>{pp?.platform?.name}</li>
          ))}
        </ul>
        
        <ul >
          <h3>Genres</h3>
        {printgame?.genres?.map((g, index)=>(
            <li key={index}>{g?.name}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}

