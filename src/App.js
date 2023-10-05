import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';


const App = () => {

  return (
    <div>
    <Routes>
      <Route path="/singup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/singup" />} />
    </Routes>
    </div>
  );
};

export default App;
