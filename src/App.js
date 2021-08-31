import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './context/AuthContext';
import Login from './pages/auth/login/Login';

const App = () => {
  return (
    <AuthProvider>
      {/*components of forms*/}
      <Login/>

    </AuthProvider>
  );
};

export default App;