import navListComponent from "./navListComponent.jsx"
import CartWidget from "./CartWidget.jsx"
import NavListComponent from "./navListComponent.jsx"
import '../navbar.css'

export default function NavBar (){

    return(
        <>
        <nav className="nav-bar">

        <NavListComponent></NavListComponent>


        <CartWidget>

        </CartWidget>
        </nav>
        </>
    )
}

