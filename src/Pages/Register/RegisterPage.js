import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { FormRegister } from "../../Components/FormRegister/FormRegister";
import {ButtonRegresar} from "../../Components/ButtonRegresar/ButtonRegresar";
import { Login } from "../../Components/Login/Login";
import "./RegisterPage.css"

export const RegisterPage = () =>{
    return(<div className="RegisterPage"> 
    <Header/>
    <ButtonRegresar/>
    <FormRegister/>
    <Footer/>
    
    </div>)
}