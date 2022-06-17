import Heading from './components/Heading.js';
import List from './components/List.js';
import { RotatingLogo } from './components/RotatingLogo';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <RotatingLogo />
      <Heading />
      <List />
    </div>
  );
}

export default App;
