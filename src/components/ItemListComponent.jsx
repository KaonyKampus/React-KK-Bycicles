import ItemComponent from "./ItemComponent.jsx"


export default function ItemListComponent () {

    const ProductosAll = [
        {id: 1, 
         name:"Bicicleta Ruta 1", 
         precio:2000000, 
         imagen:"./assets/card-images/ruta1.jpg"
        },
        {id: 2, 
         name:"Bicicleta Ruta 2", 
         precio:2000000, 
         imagen:"./assets/card-images/ruta2.jpg"
        },
        {id: 3, 
         name:"Bicicleta Ruta 3", 
         precio:2000000, 
         imagen:"./assets/card-images/ruta3.jpg"
        },
        {id: 4, 
         name:"Bicicleta Ruta 4", 
         precio:2000000, 
         imagen:"./assets/card-images/ruta4.jpg"
        },
        {id: 5, 
         name:"Bicicleta Ruta 5", 
         precio:2000000, 
         imagen:"./assets/card-images/ruta5.jpg"
        },
        {id: 6, 
         name:"Bicicleta Ruta 6", 
         precio:2000000, 
         imagen:"./assets/card-images/ruta6.jpg"
        },
        {id: 7, 
         name:"Bicicleta Ruta 7", 
         precio:2000000, 
         imagen:"./assets/card-images/ruta7.jpg"
        },
        {id: 8, 
         name:"Bicicleta Ruta 8", 
         precio:2000000, 
         imagen:"./assets/card-images/ruta8.jpg"
        },
        {id: 9, 
         name:"Bicicleta Ruta 9", 
         precio:2000000, 
         imagen:"./assets/card-images/ruta9.jpg"
        },
        {id: 10, 
         name:"Bicicleta Ruta 10", 
         precio:2000000, 
         imagen:"./assets/card-images/ruta10.jpg"
        },
        {id: 11, 
         name:"Bicicleta Ruta 11", 
         precio:2000000, 
         imagen:"./assets/card-images/ruta11.jpg"
        },
        {id: 12, 
        name:"Bicicleta Montana 1", 
        precio:2000000, imagen:"./assets/card-images/montana1.jpg"
        },
        {id: 13, 
        name:"Bicicleta Montana 2", 
        precio:2000000, imagen:"./assets/card-images/montana2.jpg"
        },
        {id: 14, 
        name:"Bicicleta Montana 3", 
        precio:2000000, imagen:"./assets/card-images/montana3.jpg"
        },
        {
        id: 15, 
        name:"Bicicleta Montana 4", 
        precio:2000000, 
        imagen:"./assets/card-images/montana4.jpg"
        },
        {id: 16, 
        name:"Bicicleta Montana 5", 
        precio:2000000, 
        imagen:"./assets/card-images/montana5.jpg"
        },
        {id: 17, 
        name:"Bicicleta Montana 6", 
        precio:2000000, 
        imagen:"./assets/card-images/montana6.jpg"
        },
        {id: 18, 
        name:"Bicicleta Montana 7", 
        precio:2000000, 
        imagen:"./assets/card-images/montana7.jpg"
        },
        {id: 19, 
        name:"Bicicleta Montana 8", 
        precio:2000000, 
        imagen:"./assets/card-images/montana8.jpg"
        },
        {id: 20, 
        name:"Bicicleta Montana 9", 
        precio:2000000, 
        imagen:"./assets/card-images/montana9.jpg"
        },
        {id: 21, 
        name:"Bicicleta Montana 10", 
        precio:2000000, 
        imagen:"./assets/card-images/montana10.jpg"
        },
        {id: 22, 
        name:"Bicicleta Montana 11", 
        precio:2000000, 
        imagen:"./assets/card-images/montana11.jpg"
        },
        {id: 23, 
        name:"Bicicleta Montana 12", 
        precio:2000000, 
        imagen:"./assets/card-images/montana12.jpg"
        },
        {id: 24, 
        name:"Bicicleta Montana 13", 
        precio:2000000, 
        imagen:"./assets/card-images/montana13.jpg"
        },
        {id: 25, 
         name:"Bicicleta Gravel 1", 
         precio:2000000, 
         imagen:"./assets/card-images/montana1.jpg"
        },
        {id: 26, 
         name:"Bicicleta Gravel 2", 
         precio:2000000, 
         imagen:"./assets/card-images/montana2.jpg"
        },
        {id: 27, 
         name:"Bicicleta Gravel 3", 
         precio:2000000, 
         imagen:"./assets/card-images/montana3.jpg"
        },
        {id: 28, 
         name:"Bicicleta Gravel 4", 
         precio:2000000, 
         imagen:"./assets/card-images/montana4.jpg"
        },
        {id: 29, 
         name:"Bicicleta Gravel 5", 
         precio:2000000, 
         imagen:"./assets/card-images/montana5.jpg"
        },
        {id: 30, 
         name:"Bicicleta Gravel 6", 
         precio:2000000, 
         imagen:"./assets/card-images/montana6.jpg"
        },
        {id: 31, 
         name:"Bicicleta Gravel 7", 
         precio:2000000, 
         imagen:"./assets/card-images/montana7.jpg"
        },
        {id: 32, 
         name:"Accesorio 1", 
         precio:2000000, 
         imagen:"./assets/card-images/accesorio1.jpg"
        },
        {id: 33, 
         name:"Accesorio 2", 
         precio:2000000, 
         imagen:"./assets/card-images/accesorio2.jpg"
        },
        {id: 34, 
         name:"Accesorio 3", 
         precio:2000000, 
         imagen:"./assets/card-images/accesorio3.jpg"
        },
        {id: 35, 
         name:"Accesorio 4", 
         precio:2000000, 
         imagen:"./assets/card-images/accesorio4.jpg"
        },
        {id: 36, 
         name:"Accesorio 5", 
         precio:2000000, 
         imagen:"./assets/card-images/accesorio5.jpg"
        },
        {id: 37, 
         name:"Accesorio 6", 
         precio:2000000, 
         imagen:"./assets/card-images/accesorio6.jpg"
        },
        {id: 38, 
         name:"Accesorio 7", 
         precio:2000000, 
         imagen:"./assets/card-images/accesorio7.jpg"
        },
        {id: 39, 
         name:"Accesorio 8", 
         precio:2000000, 
         imagen:"./assets/card-images/accesorio8.jpg"
        },
        {id: 40, 
         name:"Accesorio 9", 
         precio:2000000, 
         imagen:"./assets/card-images/accesorio9.jpg"
        },
        {id: 41, 
         name:"Accesorio 10", 
         precio:2000000, 
         imagen:"./assets/card-images/accesorio10.jpg"
        },
    ]
    
   return(
   <>
   <ItemComponent cards={ProductosAll}/>
    </>
)}