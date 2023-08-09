import { Link, Route } from "react-router-dom"
import "./ButtonPrueba.css"

export const ButtonPrueba=()=>{
    return(
        <div className="butonprueba">
           <Link to="/Movies"> <button>
                PruebaApiFinal
            </button></Link>
        </div>
    )
}