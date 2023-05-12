import { Link } from "react-router-dom";
import Gameshop from "./Gameshop";
import Mygames from "./Mygames";
import Myfavourites from "./Myfavourites";

export default function Dashboard() {
  return (
    <>
      <section className="dashboard-shop">
        <Gameshop ps={3} />
        <button>
          <Link to="/gameshop">
            <li>Visit shop</li>
          </Link>
        </button>
      </section>

      <section className="dashboard-mg-mf">
        <div className="dashboard-mg">
        <Mygames ps={4} />
        <button>
          <Link to="/mygames">
            <li>Visit My Games</li>
          </Link>
        </button>
        </div>
        <div className="dashboard-mf">
        <Myfavourites ps={2} />
        <button>
          <Link to="/myfavourites">
            <li>Visit My Favourites</li>
          </Link>
        </button>
      </div>
      </section>
      
      
    </>
  );
}
