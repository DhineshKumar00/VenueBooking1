import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';

import Contact from './pages/Contact';
import Header from './components/Layout/header';
import Home from './pages/Home';
import Login from './pages/log';
function App() {
  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    {/* <Route path='/Hall' element={<Hall/>}/> */}
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Login' element={<Login/>}/>
   </Routes>

</BrowserRouter>
    </>
  );
}

export default App;
