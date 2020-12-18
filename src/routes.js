import React, { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

import UsersList from './pages/UsersList/UsersList';

export const Routes = () => {
  const [users] = useState([{ name: 'Tarsila', email: 'tarsila@gmail.com' }]);

  function handleCadastrar(user) {
    return users.push(user);
  }

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup">
        <SignUp users={users} cadastrar={handleCadastrar} />
      </Route>
      <Route path="/userslist">
        <UsersList users={users} />
      </Route>
    </Switch>
  );
};

export default Routes;
