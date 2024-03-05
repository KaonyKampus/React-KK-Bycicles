import ButtonComponent from "./ButtonComponent.jsx"

export default function NavBar (){

    const characteristics = [
        {
            color:'red',
            texto:'productos',

        },
        {
            color:'blue',
            texto:'nosotros',
        },
        {
            color:'green',
            texto:'contacto',
        },
    ]

    return(
        <>
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
        </>
    )
}

