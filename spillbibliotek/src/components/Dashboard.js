import Gameshop from "./Gameshop";
import Myfavourites from "./Myfavourites";
import Mygames from "./Mygames";

export default function Dashboard() {
    return(
        <>
        
        <section>
            <Gameshop />
        </section>
        <section>
            <Mygames/>
        </section>
        <aside>
            <Myfavourites/>
        </aside>
        </>
    )
}