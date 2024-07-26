import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth.user);

  // If no user is found in the Redux store, redirect to the sign-in page
  if (!user) {
    toast.error('Please sign in to access this page');
    return <Navigate to='/signin' replace />;
  }

  // Return child route elements if the user is authenticated
  return <Outlet />;
};

export default ProtectedRoute;