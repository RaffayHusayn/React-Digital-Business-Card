import Heading from './components/Heading.js';
import List from './components/List.js';
import { RotatingLogo } from './components/RotatingLogo';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <RotatingLogo />
      <Heading />
      <List />
      <List />
      <List />
      <List />
      <List />
      <Footer />
    </div>
  );
}

export default App;
