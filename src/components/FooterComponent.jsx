
import '../footerComponent.css'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import whatsapp from'../assets/whatsapp.png'
import vsco from '../assets/icons8-logotipo-vsco-64.png'
import linkedin from '../assets/linkedin.png'


export default function FooterComponent () {
        return(
            <>
            <footer>
            <div className="img-box">
                <p>¡Contacto!</p>
            </div>
            <div className="img-box">
                
                <a href="https://www.instagram.com/kaony_kampus/" target="_blank">
                    <img className="icon" src={instagram} alt="" />
                </a>
       
                <a href="https://www.facebook.com/stiven.kampus/" target="_blank">
                    <img className="icon" src={facebook} alt="" />
                </a>
       
                <a href="https://github.com/KaonyKampus" target="_blank">
                    <img className="icon" src={github} alt="" />
                </a>
    
                <a href="https://wa.me/+573213101615" target="_blank">
                    <img className="icon" src={whatsapp} alt="" />
                </a>
    
                <a href="https://vsco.co/kaonykampus/gallery" target="_blank">
                    <img src={vsco}    alt="" className="icon"></img>
                </a>

                <a href="https://www.linkedin.com/in/david-stiven-silva-velandia-ba3529236/" target="_blank">
                    <img src="linkedin" alt="" />
                </a>
    
           </div>
           <div className="img-box">
               <p>¡Sigueme en las redes sociales!</p>
           </div>
            <p className="paragrap-foot">KK 2024 – Todos los Derechos Reservados ® – Kaony Kampus</p>
            </footer>    

            </>

        )
}