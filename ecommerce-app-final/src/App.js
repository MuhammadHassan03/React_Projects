import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from "./Components/Navbar";
import { Shop } from './Pages/Shop/Shop';
import { Cart } from './Pages/Cart/Cart';
import { ProductDetail } from './Pages/ProductDetail/ProductDetail';
import CartProvider from './Pages/Cart/Context/CartContext';
function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop></Shop>}/>
          <Route path='/cart' element={<Cart></Cart>}/>
          <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
        </Routes>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
