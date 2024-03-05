import '../buton.css'
import carrito from '../assets/carrito.png'


export default function CartWidget(){
    return(
        <>
        <div className='carContainer'>
        <p>#1</p>
        <img src={carrito} alt="" className='image1'/>
        </div>
        </>
    )
}