import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'
import Service from './components/Service'
import { Route, Router, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import SongDetails from './components/SongDetails';
function App() {
  return (
    <div>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
    </div>
  );
}

export default App;
