import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import { CarouselHome } from "../../Components/CarouselHome/CarouselHome"
import { ButtonsLoginRegister } from "../../Components/ButtonsLoginRegister/ButtonsLoginRegister"
import { ButtonPrueba } from "../../Components/ButtonPrueba/ButtonPrueba"

export const HomePage = () =>{
    return(<div className="HomePage">
        <Header/>
        <ButtonPrueba/>
        <CarouselHome/>
        <ButtonsLoginRegister/>
       <Footer/>
    </div>)
}