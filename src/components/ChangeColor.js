import React from 'react';
import { useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from '../features/theme';
import { useSelector } from 'react-redux';

const ChangeColor = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value); //fetching the value

  const lightColor = () => {
    dispatch(lightTheme({ background: 'white', text: 'black' }));
  };

  const darkColor = () => {
    dispatch(darkTheme({ background: 'black', text: 'white' }));
  };

  return (
    <div className='theme'>
      <button
        style={{ color: theme.background, backgroundColor: theme.text }}
        onClick={darkColor}
      >
        Dark Mode
      </button>
      <button
        style={{ color: theme.text, backgroundColor: theme.background }}
        onClick={lightColor}
      >
        Light Mode
      </button>
    </div>
  );
};

export default ChangeColor;
