import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './components/ListContext';
import './App.css';
import AllTickets from './pages/AllTickets';
import Home from './pages/Home';
import Product from './pages/Product';
import Order from './pages/Order';
import Receipt from './pages/Receipt';


function App() {
  return (
    <ProductProvider>
      <main className='App'>
        <Router>
          <main>

            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/AllTickets' element={<AllTickets />} />
              <Route path='/Product' element={<Product />}></Route>
              <Route path='/Order' element={<Order />}></Route>
              <Route path='/Receipt' element={<Receipt />}></Route>
            </Routes>

          </main>
        </Router>
      </main>
    </ProductProvider>
  );
}

export default App;
