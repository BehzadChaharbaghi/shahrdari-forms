import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthProvider } from './context/AuthContext';
import VerifyTwoFactor from './pages/verify-two-factor/VerifyTwoFactor';
import Register from './pages/register/Register';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/Register"} component={Register} />
          <Route path={"/VerifyTwoFactor"} component={VerifyTwoFactor} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;