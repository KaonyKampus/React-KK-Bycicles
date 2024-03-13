import '../bannerComponent.css'
import banner from "../assets/bannerjpg.jpg"

export default function BannerComponent (){
    return(
        <>
        <div className="banner-box">
            <img src={banner} alt="" className="banner-img"/>
        </div>
        </>
    )
}