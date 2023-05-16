import { useParams } from "react-router-dom";

export default function Gamepage() {

    const {slug} = useParams();

    console.log("game?", slug)



  return (
    <article className="game-info">
      <h1>{slug.replace(/-/g, " ")}</h1>

    </article>
  )
}
