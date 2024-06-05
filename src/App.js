import About from './components/about';
import Home from './components/home';
import Navbar from './components/navbar';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './components/login';
import Contact from './components/contact';
import Items from './components/items/Items';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
  
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/items" element={<Items/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
   </Routes>
   
    </div>
    
  );
}

export default App;
