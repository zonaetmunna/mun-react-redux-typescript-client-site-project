import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './view/pages/Login/Login/Login';
import Register from './view/pages/Login/Register/Register';
import TheLayout from './view/pages/TheLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<TheLayout></TheLayout>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
     
      
    </div>
  );
}

export default App;
