import React from 'react';
import { useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from '../features/theme';

const ChangeColor = () => {
  const dispatch = useDispatch();

  const lightColor = () => {
    dispatch(lightTheme({ background: 'white', text: 'black' }));
  };

  const darkColor = () => {
    dispatch(darkTheme({ background: 'black', text: 'white' }));
  };

  return (
    <div className='theme'>
      <button onClick={darkColor}>Dark Mode</button>
      <button onClick={lightColor}>Light Mode</button>
    </div>
  );
};

export default ChangeColor;
