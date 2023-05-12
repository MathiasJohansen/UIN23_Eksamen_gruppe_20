import { Link } from "react-router-dom";
import Gameshop from "./Gameshop";
import Mygames from "./Mygames";
import Myfavourites from "./Myfavourites";

export default function Dashboard() {
  return (
    <>
      <Gameshop ps={3} />

      <div className="dashboard-mg-mf">
        <Mygames ps={4} />
        
        <Myfavourites ps={2} />
      </div>
      
    </>
  );
}
