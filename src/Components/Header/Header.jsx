import "./Header.css"
import {  useLocation } from 'react-router-dom';



export const Header =() => {
  const location = useLocation();
  const isAbsolute = location.pathname === "/"
    return(
    <div className="containerHead">
      <div className={`header ${isAbsolute ? 'absolute' : 'relative'}`}>
        <div className="hwt"><h1 className="headerCineFlixor">CineFlixor</h1></div>
        
      </div>
      </div>)
  }