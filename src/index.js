import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'; //redux library that  allows to create redux store easily
import { Provider } from 'react-redux'; //Provider component is to give access to the state to desired app components
import userReducer from './features/user'; //imported the reducer function created. userReducer can be named to anything
import themeReducer from './features/theme';

const store = configureStore({
  reducer: {
    //reducer should have all the states that the app will ever use
    user: userReducer,
    theme: themeReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* passing store as a prop to Provider so that it has access to the store */}
      {/* wrapping App component inside the provider so that all the App components have access to the store  */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
