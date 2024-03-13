import '../navList.css'


export default function NavListComponent (){
 
    return (
        <>
         <ul className="nav-list">
        <div className="item-box seleccion"> 
            <li class="items">Quienes somos</li>
        </div>
        <div className="item-box"> 
            <li className="items">Ruta</li>
        </div>
        <div className="item-box"> 
            <li className="items">Montaña</li>
        </div>
        <div className="item-box"> 
            <li className="items">Accesorios</li>
        </div>
        </ul>
        </>
    )
};