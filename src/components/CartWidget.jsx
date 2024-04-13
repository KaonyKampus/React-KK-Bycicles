import '../carWidget.css'
import carrito from '../assets/carrito.jpg'


export default function CartWidget(){



    return(
        <>
        <div className='car-box'>
        <img src={carrito} alt="" className='car-img'/>
        <span className="car-number">0</span>
        </div>
        </>
    )
}