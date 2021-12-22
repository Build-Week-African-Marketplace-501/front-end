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
        {/* change back to PrivateRoute 👇 */}
        <Route path='/products' component={Products}/>
        {/* change back to PrivateRoute 👇 */} 
        <Route path='/addproduct' component={ProductForm}/>
        {/* change back to PrivateRoute 👇 */}
        <Route path='/products/:id' component={Product}/>
        {/* change back to PrivateRoute 👇 */}
        <Route path='/logout' component={Logout}/>
      </Switch>
    </div>
  );
}

export default App;
