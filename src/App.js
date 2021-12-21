import './App.css';
import Register from './components/Register';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Prodcuts'
import Product from './components/Product'
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Logout from './components/Logout';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={Register}/>
        <PrivateRoute path='/products' component={Products}/>
        <PrivateRoute path='/products/:id' component={Product}/>
        <PrivateRoute path='/logout' component={Logout}/>
      </Switch>
    </div>
  );
}

export default App;
