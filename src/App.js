import React from 'react'
import {Routes, Route} from 'react-router-dom'
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';


function App() {
  return (
    <Routes>
      <Route element={<RequireAuth/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/profile/:id' element={<Profile/>} />
          
      </Route>
      <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
    </Routes>

  );
}

export default App;
