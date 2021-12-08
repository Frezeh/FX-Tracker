import React from 'react';
import Login from './components/Login';
import Main from './components/Main';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const auth = useSelector(state => state.auth);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      auth.isAuthenticated
        ?
        <Component {...props} />
        :
        <Redirect to={{
          pathname: '/login',
          state: { from: location }
        }} />
    )} />
  );

  let location = useLocation();

  return (
    <div style={{
      position: "absolute",
      height: "90%",
      width: "80%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "auto",
      borderRadius: "20px",
      boxShadow: "0px 2px 5px #ccc",
      maxWidth: "800px"
    }}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Switch>
            <PrivateRoute exact path='/' component={Main}/>
            <Route path='/login' component={Login} /> 
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;