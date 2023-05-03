import { useEffect,  useState } from "react";
import Gamecard from "./Gamecard";

export default function Mygames(props) {
    
    const [printgames, setGame] = useState([])
    
    
    const getGames = async(ps) => {

        const response = await fetch (`https://api.rawg.io/api/games?genres=shooter&page_size=${ps}&key=d7e8ed9e06e04e6a8be1835df02b3a17`)
        const data = await response.json()

        const gameInfo = data?.results
        setGame(gameInfo)

        console.log(data, printgames)
        
    }
    useEffect(() =>{
        getGames(props.ps ?? 20)
    },[])
    return (
        <section className="gameshop">
            <h1>My Games</h1>
            <ul>
                {printgames?.map((games, index) =>(
                    <li><Gamecard key={index} title={games?.name} img={games?.background_image} genre={games?.genres}/></li>
                ))}    
            </ul>    
        </section>
        )
}