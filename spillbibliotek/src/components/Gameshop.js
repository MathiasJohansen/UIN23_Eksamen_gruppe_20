import { useEffect, useState } from "react";

export default function Gameshop() {
    
    const [printgames, setGame] = useState([])
    
    
    const getGames = async() => {
        const response = await fetch ("https://api.rawg.io/api/platforms?key=d7e8ed9e06e04e6a8be1835df02b3a17")
        const data = await response.json()

        setGame(data)

        console.log(data, printgames)
        
    }
    useEffect(() =>{
        getGames()
    },[])
    return <h1>test gameshop</h1>

    

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