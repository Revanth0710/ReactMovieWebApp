
import './CSS/App.css'
import Favorites from './Pages/Favorities';
import Home from './Pages/Home';  
import { Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar'; 

function App() {
  
  return (
    <div>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path = "/" element ={<Home />} />
        <Route path = "/Favorites" element = {<Favorites />} />
      </Routes>
    </main>
     </div>
  );
}

export default App
