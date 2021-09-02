import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthProvider } from './context/AuthContext';

import VerifyTwoFactor from './pages/verify-two-factor/VerifyTwoFactor';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ResetPassword from './pages/reset-password/ResetPassword';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import RequestBuyer from './pages/request/components/request-buy/RequestBuyer';
import RequestLetter from './pages/request/components/request-letter/RequestLetter';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <Layout>
            <Route exact path={"/"} component={Home} />
            <Route path={"/Register"} component={Register} />
            <Route path={"/Login"} component={Login} />
            <Route path={"/VerifyTwoFactor"} component={VerifyTwoFactor} />
            <Route path={"/ResetPassword"} component={ResetPassword} />
            <Route path={"/RequestBuyer"} component={RequestBuyer} />
            <Route path={"/RequestLetter"} component={RequestLetter} />
          </Layout>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;