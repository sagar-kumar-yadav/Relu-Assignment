import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// we create this js file to protect rotes
const Protected = () => {
    const token = localStorage.getItem('token');
  return (
    token ? <Outlet /> : <Navigate to="/login" />
  );
}

export default Protected;
