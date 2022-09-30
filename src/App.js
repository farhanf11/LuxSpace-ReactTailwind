import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/cart' element={< Cart />}></Route>
        <Route exact path='/details' element={< DetailProduct />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
