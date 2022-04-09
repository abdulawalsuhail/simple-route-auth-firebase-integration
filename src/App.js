import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Register from './components/Register/Register';
import Orders from './components/orders/Orders';
import Products from './components/Products/Products';
import RequireAuth from './components/requireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={
          <RequireAuth>
            <Products />
          </RequireAuth>
        } />
        <Route path='/orders' element={
          <RequireAuth>
            <Orders />
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
