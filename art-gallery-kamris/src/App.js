import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'
import ProductPage from './components/ProductPage';
// import { useEffect, useState } from 'react';

function App() {

   
  return (
   <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about/:id' element={<ProductPage/>}/>
      </Routes>
   </BrowserRouter> 
    
  );
}

export default App;
