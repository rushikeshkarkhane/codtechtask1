import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

function AdminProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        // const response = await axios.post('http://localhost:8000/', new URLSearchParams({ sessionverify: '' }), {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        // });
        const response = await axios.post('http://localhost:8000/', new URLSearchParams({
      'sessionverify': ''
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      withCredentials: true,  // Include cookies in the request
    });

    console.log(response.data);
        if (response.data.status === 'success') {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          <Navigate to="/admin/login" />
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        <Navigate to="/admin/login" />
      }
    };

    checkSession();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or some loading spinner
  }

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
}

export default AdminProtectedRoute;
