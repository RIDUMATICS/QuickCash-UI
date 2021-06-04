import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";
import {
  Home,
  Login,
  Profile,
  SignUp,
  Loans,
  Settings,
  LoanDetails,
  VerifyPayment,
} from "./pages";

const RootComponent = () => {
  const alert = useSelector((state) => state.alert);

  return (
    <Router>
      {alert.message && <Alert messages={alert.message} type={alert.type} />}
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/profile" exact component={Profile} />
      <Switch>
        <PrivateRoute path="/dashboard" exact component={Profile} />
        <PrivateRoute path="/loans/:loanId" component={LoanDetails} />
        <PrivateRoute path="/loans" exact component={Loans} />
        <PrivateRoute path="/settings" exact component={Settings} />
        <PrivateRoute path="/payment/verify" exact component={VerifyPayment} />
      </Switch>
    </Router>
  );
};

export default RootComponent;
