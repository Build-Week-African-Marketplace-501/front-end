import './App.css';
import Register from './components/Register';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Prodcuts'
import Product from './components/Product'
import ProductForm from './components/ProductForm';
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Logout from './components/Logout';
import Login from './components/Login'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/products' component={Products}/>
        <Route path='/addproduct' component={ProductForm}/>
        <PrivateRoute path='/products/:id' component={Product}/>
        <PrivateRoute path='/logout' component={Logout}/>
      </Switch>
    </div>
  );
}

export default App;
