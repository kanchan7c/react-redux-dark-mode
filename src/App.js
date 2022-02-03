import './App.css';
import ChangeColor from './components/ChangeColor';
import Login from './components/Login';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme.value); //fetching the value

  return (
    <div
      className='App'
      style={{ color: theme.text, backgroundColor: theme.background }}
    >
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
