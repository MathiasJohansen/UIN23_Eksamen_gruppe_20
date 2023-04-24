import { useEffect, useState } from "react";
import Gamecard from "./Gamecard";

export default function Gameshop() {
    
    const [printgames, setGame] = useState([])
    const [gameId, setGameId] = useState([])
    
    
    
    const getGames = async() => {
        const response = await fetch ("https://api.rawg.io/api/games?key=d7e8ed9e06e04e6a8be1835df02b3a17")
        const data = await response.json()

        const gameInfo = data?.results
        setGame(gameInfo)

        const resultat = gameInfo?.map(info => info?.id)

        const getGameStore = await Promise.all (resultat.map(id =>(
            fetch (`https://api.rawg.io/api/stores/${id}`)
        )))

       console.log("getgamestore", getGameStore)

       

        console.log(gameInfo)
        
    }

    

    useEffect(() =>{
        getGames()
    },[])

    {gameId.map((id, index) => {
        <Gameshop id={id}/>
    })}

    return (
        <>
            <h1>Gameshop</h1>
            <ul>
                {printgames?.map((games, index) =>(
                    <li><Gamecard key={index} title={games?.name} img={games?.background_image} genre={games?.genres}/></li>
                ))}    
            </ul>    
        </>
        )

    

    return (
        <>
            <h1>Gameshop</h1>
            <ul>
                {printgames?.map((games, index) =>(
                    <li><Gamecard key={index} title={games?.name} img={games?.background_image} genre={games?.genres}/></li>
                ))}    
            </ul>    
        </>
        )
}