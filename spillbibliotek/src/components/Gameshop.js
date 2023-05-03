import { useEffect,  useState } from "react";
import Gamecard from "./Gamecard";

export default function Gameshop(props) {
    
    const [printgames, setGame] = useState([])
    const [favourites, setFavourites] = useState([])
    
    
    const getGames = async(ps) => {

        const response = await fetch (`https://api.rawg.io/api/games?page_size=${ps}&key=d7e8ed9e06e04e6a8be1835df02b3a17`)
        const data = await response.json()

        const gameInfo = data?.results
        setGame(gameInfo)

        console.log(data, printgames)
        
    }
    useEffect(() =>{
        getGames(props.ps ?? 10)
    },[])

    const addToFavourites = () => {
        
        console.log(favourites)
    }
        
    return (
        <section className="gameshop">
            <h1>Gameshop</h1>
            <ul>
                {printgames?.map((games, index) =>(
                    <li>
                    <Gamecard 
                    key={index} 
                    title={games?.name} 
                    img={games?.background_image} 
                    genre={games?.genres} 
                    addTo={addToFavourites}/></li>
                ))}    
            </ul>    
        </section>
        )
}