import Heading from './components/Heading.js';
import List from './components/List.js';
import { RotatingLogo } from './components/RotatingLogo';
import './App.css';

function App() {
  return (
    <div className='App'>
      <RotatingLogo />
      <Heading />
      <List />
    </div>
  );
}

export default App;
