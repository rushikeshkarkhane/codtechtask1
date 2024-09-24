import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from './AdminNav';
import { useLocation } from 'react-router-dom';
import NotFound from '../NotFound';
const AdminLayout = () => {
  const location = useLocation();
  const adminRoutes = [
    '/admin/dashboard',
    '/admin/login',
    '/admin/upload',
    '/admin/'
    
  ];
  const isValidRoute = adminRoutes.includes(location.pathname);
  if (!isValidRoute) {
    return <NotFound />;
  }

  return (
    <div>
      <AdminNav />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
