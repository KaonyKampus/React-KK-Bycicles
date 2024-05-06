import { useEffect, useState } from 'react';
import ItemListComponent from './ItemListComponent.jsx';
import '../items.css'



export default function ItemListContainer({greeting}){
   


    const [contador,setContador] = useState(0);
    const handleClick= ()=>{
      setContador(contador+1)
    }
    


  

    return(
        <>
           <section className='itemsContainer'>
             <h2>{greeting}</h2>
             <h4>Contador</h4>
             <p>{contador}</p>
             <button onClick={handleClick}>Añadir</button>

             <ItemListComponent/>
           </section>  

       
            
         

        </>
    );
}