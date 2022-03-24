import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap' 
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Link,Switch } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Adminscreen from './screens/Adminscreen';
// order
import Ordersscreen from './screens/Ordersscreen';

// order

function App() {
  return (
    <div className="App back">
      <Navbar/>
      <BrowserRouter>
        <Route path='/' exact component={Homescreen} />
        <Route path='/cart' exact component={Cartscreen} />
        <Route path='/register' exact component={Registerscreen} />
        <Route path='/login' exact component={Loginscreen} />
        <Route path='/admin' component={Adminscreen} />
        {/* order */}
        {/* <Route path='/orders' exact component={Ordersscreen} /> */}
         {/* order */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
