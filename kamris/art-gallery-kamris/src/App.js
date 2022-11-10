import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'

function App() {
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
