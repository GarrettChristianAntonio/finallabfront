import { Link, Route } from "react-router-dom"
import "./ButtonRegresar.css"
export const ButtonRegresar = () =>{
    return(
        <div className="ButtonRegresar">
        <Link to="/"><button>Regresar</button></Link>
        </div>
    )
}