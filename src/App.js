import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
