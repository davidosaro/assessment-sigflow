import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

import SignIn from './pages/signin';
import Admin from './pages/admin';

import { useEffect } from 'react';
import { getUser } from './utils/localStorage.ts';
import { useNavigate } from "react-router-dom";
import Notify from './components/utils/Notify.ts'
import 'rsuite/dist/rsuite.min.css';

const App = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    if (!getUser()) {
       navigate("/signin");
       Notify('Please Login', 'error');
    }
 }, [])
  return (
    <>
    <Routes>
       <Route path="/" element={<MainLayout><Admin /></MainLayout>} />
       <Route path="/signin" element={<AuthLayout><SignIn /></AuthLayout>} />
       <Route path="/admin" element={<MainLayout><Admin /></MainLayout>} />
    </Routes>
    </>
  )
}

export default App
