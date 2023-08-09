import { Login } from "../Login/Login"
import { useState , useEffect } from "react";
import "./ButtonsLogisRegister.css"
import { Link } from "react-router-dom";


export const ButtonsLoginRegister = () =>{

    const [renderizado, setRenderizado] = useState(false);

const handleRenderizar = () => {
  setRenderizado(!renderizado);
}

useEffect(()=>{
    if (renderizado) {
        
        document.getElementById('boton').style.border = '2px solid red';
      } else {
        document.getElementById('boton').style.border = 'none';
      }
},[renderizado])


    return(<div>
        <div className="buttons">
            <button id="boton" class="buttonCineFlixor" onClick={handleRenderizar}>Login</button><Link to={"/Register"}><button onClick={handleRenderizar} class="buttonCineFlixor">Register</button></Link> 
        </div>
        <div>
            {renderizado && <Login/>}
        </div>
        </div>
        
    )
}