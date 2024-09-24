import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Adminlogin from './components/admin/Adminlogin'
import AdminNav from './components/admin/AdminNav'
import Home from './components/genral/Home'
import AdminLayout from './components/admin/AdminLayout'
import Adminndashboard from './components/admin/Adminndashboard'
import AdminProtectedRoute from './components/admin/AdminProtectedRoute'
import NotFound from './components/NotFound'
import Adminupload from './components/admin/Adminupload'
import Index from './components/Index'
import Nav from './components/Nav'
import Post from './components/Post'
import Testing from './components/Testing'
function App() {
  const isAdminPath = () => {
    return location.pathname.startsWith('/admin/');
};
  return (
<>     
{isAdminPath ? <Nav></Nav> : ''}
<Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Adminlogin />} /> 
          <Route path="login" element={<Adminlogin />} />
          <Route path="AdminProtectedRoute" element={<AdminProtectedRoute />} />
          <Route path="dashboard" element={
            <AdminProtectedRoute>
              <Adminndashboard />
            </AdminProtectedRoute>
          } />
          <Route path="upload" element={
            <AdminProtectedRoute>
              <Adminupload />
            </AdminProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} /> 
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Index />} />
        <Route path="/post/:title" element={<Post />} />
        <Route path="/todolist" element={<Testing  />} />
      </Routes>
</>

  )
}

export default App
