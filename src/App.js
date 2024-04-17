import About from './components/about';
import Home from './components/home';
import Navbar from './components/navbar';
import Patnar from './components/patnar';
import {Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
  
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/patnar" element={<Patnar/>} />
   </Routes>
   
    </div>
    
  );
}

export default App;
