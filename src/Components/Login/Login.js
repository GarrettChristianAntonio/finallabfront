import { Link } from "react-router-dom"
import "./Login.css"
import { useState } from "react";


export const Login = () =>{

  const [email,setMail] = useState("")
  const [password,setPassword] = useState("")
  const [redirectToMovies, setRedirectToMovies] = useState(false);
   
  const validar=()=>{
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');
  if (email === storedEmail && password === storedPassword) {
    // Realizar redirección a la página "/Movies"
    alert("ingreso")
    setRedirectToMovies(true);
  }
  }

  if (redirectToMovies) {
    return <Link to="/Movies" />;
  }
      return(
      <div className="LoginForm"  >
        <form onSubmit={ev => {
            ev.preventDefault();
            
        }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" value={email} onChange={ev => setMail(ev.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
        </div>
        <div className="mb-3">
          <a href="#" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
        </div>
        <button type="submit" className="login-button" onClick={validar}>Ingresar</button>
      </form>
      
    </div>)}
