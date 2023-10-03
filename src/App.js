
import './App.css';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';


import Home from './Components/Homepage/Home'
import Slidebar from './Components/Sidebar/Slidebar'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Forcast from './Components/Forcast/Forcast'
import Diseases from './Components/Diseases/Diseases';
import Shop from './Components/Shop/Shop'
import Footer from './Components/Footer/Footer'

import {  Flex, ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <>
    <ChakraProvider >
    <BrowserRouter>
    

    

    
    <Slidebar/>
    <Routes>

    {/* <Route exact path="/" element={<Slidebar/>} /> */}
    <Route  exact path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/forcast" element={<Forcast/>} />
        <Route path="/diseases" element={<Diseases/>} />
        <Route path="/shop" element={<Shop/>} />
    </Routes>
    <Footer/>

    </BrowserRouter>
    </ChakraProvider>
    </>
  
    
   
  );
}

export default App;
