import { React } from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import './assets/css/style.css'
import Pokedex from './pages/Pokedex'
import Pokecard from './pages/Pokecard'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/pokedex" element={<Pokedex />}/>
        <Route path="/pokecard" element={<Pokecard />}/>
      </Route>
    </Routes>
  )
}

export default App
