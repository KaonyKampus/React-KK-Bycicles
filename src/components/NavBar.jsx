import ButtonComponent from "./ButtonComponent.jsx"
import CartWidget from "./CartWidget.jsx"
import '../navbar.css'

export default function NavBar (){

    const characteristics = [
        {
            color:'gray',
            texto:'productos',

        },
        {
            color:'gray',
            texto:'nosotros',
        },
        {
            color:'gray',
            texto:'contacto',
        },
    ]

    return(
        <>
          <section className="navBarContainer">
           <ButtonComponent
             texto={characteristics[0].texto}
             color={characteristics[0].color}  
           />
           <ButtonComponent
             texto={characteristics[1].texto}
             color={characteristics[1].color}  
           />
           <ButtonComponent
             texto={characteristics[2].texto}
             color={characteristics[2].color}  
            /> 
           <CartWidget />
           </section>
        </>
    )
}

