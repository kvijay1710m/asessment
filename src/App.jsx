import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginLanding from './pages/Login/LoginLanding'
import Login from './pages/Login/Login';
import VerifyOtp from './pages/Login/VerifyOtp';
import MasterDashboard from './pages/Dashboard/MasterDashboard';

import StoreLanding from './pages/Login/StoreLanding';
import SelectStore from './pages/Login/SelectStore';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginLanding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<VerifyOtp />} />
          <Route path="/storeregister" element={<StoreLanding />} />
          <Route path="/selectstore" element={<SelectStore />} />
          <Route path="/Home" element={<MasterDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
