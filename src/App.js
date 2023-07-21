import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../src/components/ItemDetailContainer/ItemDetailContainer"
import Error404 from "../src/components/Error404/Error404"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  return (
    <div className='home'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element = {<ItemListContainer/>} />
          <Route path={"/category/:id"} element = {<ItemListContainer />} />
          <Route path={"/item/:id"} element = {<ItemDetailContainer />} />
          <Route path={"*"} element = {<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;