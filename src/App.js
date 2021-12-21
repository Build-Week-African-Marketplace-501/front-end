import './App.css';
import Register from './components/Register';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Prodcuts'
import Product from './components/Product'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
