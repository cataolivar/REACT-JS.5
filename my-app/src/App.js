import './index.css';
import React from 'react'
import Header from "./components/Header/Header"
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
const App = () => {
  return (

    <div>

<Header/>
<NavBar/>
<ItemListContainer greeting= "Bienvenidos a Kalaka"/>
<ItemDetailContainer/>

    </div>
  )
}

export default App