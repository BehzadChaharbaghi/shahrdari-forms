import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { AuthProvider } from './context/AuthContext';

import VerifyTwoFactor from './pages/verify-two-factor/VerifyTwoFactor';
import Login from './pages/login/Login';
import ResetPassword from './pages/reset-password/ResetPassword';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import RequestBuyer from './pages/request/components/request-buy/RequestBuyer';
import RequestLetter from './pages/request/components/request-letter/RequestLetter';
import ForgetPassword from './pages/forget-password/ForgetPassword';
import Register from './pages/register/Register';
import RequestList from './pages/request/components/request-list/RequestList';

// login authentication
const isLogin = () => !!localStorage.getItem("token")
const PublicRouter = ({ render, ...props }) => {
  return <Route {...props} render={(props) => {
    if (!isLogin()) return render(props)
    return <Redirect to="/" />
  }} />
}
const PrivateRouter = ({ render, ...props }) => {
  return <Route {...props} render={(props) => {
    if (isLogin()) return render(props)
    return <Redirect to="/Login" />
  }} />
}

const App = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <PublicRouter exact path="/Login" render={() =>
            <Router>
              <Switch>
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/ForgetPassword" component={ForgetPassword} />
              </Switch>
            </Router>
          } />
          <PrivateRouter path="/" render={() =>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/VerifyTwoFactor" component={VerifyTwoFactor} />
                <Route path="/ResetPassword" component={ResetPassword} />
                <Route path="/RequestBuyer" component={RequestBuyer} />
                <Route path="/RequestLetter" component={RequestLetter} />
                <Route path="/RequestList" component={RequestList} />
              </Switch>
            </Layout>
          } />
        </AuthProvider>
      </Switch>
    </Router>
  );
};

export default App;