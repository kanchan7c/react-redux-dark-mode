import React from 'react';
import { useDispatch } from 'react-redux'; //used for modifying values of the state
import { login, logout } from '../features/user'; //importing the action we want to perform

const Login = () => {
  const dispatch = useDispatch();

  const getLoginInfo = () => {
    dispatch(login({ name: 'Kanchan', age: 27, email: 'Zz@gmale.com' }));
  };

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={getLoginInfo}>Login</button>
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default Login;
