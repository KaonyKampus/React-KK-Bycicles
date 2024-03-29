import './App.css'
import BannerComponent from './components/BannerComponent.jsx'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import FooterComponent from './components/FooterComponent.jsx'



function App () {


  return (
    <>
    <BannerComponent/>
    <main className='main-box'>
    <NavBar></NavBar>

    <ItemListContainer greeting="Bienvenidos"/>
    <FooterComponent/>
    </main>
    </>
  )
}

export default App
