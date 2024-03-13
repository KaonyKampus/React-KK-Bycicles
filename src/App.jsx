import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import FooterComponent from './components/FooterComponent.jsx'


function App () {


  return (
    <>
    <NavBar></NavBar>

    <ItemListContainer greeting="Bienvenidos"/>
    <FooterComponent/>
    </>
  )
}

export default App
