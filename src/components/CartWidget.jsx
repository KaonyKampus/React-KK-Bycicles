import '../buton.css'
import carrito from '../assets/carrito.png'


export default function CartWidget(){
    return(
        <>
        <div className='carContainer'>
        <img src={carrito} alt="" className='image1'/>
        <p>hello world</p>
        </div>
        </>
    )
}