import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'
import { useEffect, useState } from 'react';

function App() {

    // const [dataBase, setDataBase] = useState()

    // useEffect(() => {

    //   async function getData() {
    //     const response = await fetch('https://openaccess-api.clevelandart.org/api/artworks/has_image')
    //     const artData = await response.json()
    //     setDataBase(artData.data)
    //   }
    //   getData()
     
    // },[])

    // console.log(dataBase)
   
  return (
   <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
       
        

      </Routes>
   </BrowserRouter> 
    
  );
}

export default App;
