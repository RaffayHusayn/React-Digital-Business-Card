import logo from './logo.svg';
import './App.css';

function App() {
  const funReactFactsList = [
    'Was released in 2013',
    'Was originally created by Jordan Walke',
    'Has well over 100k stars on Github',
    'Is maintained by Facebook',
    'Powers thousands of enterprise applications including mobile apps'
  ]
  return (
    <div className='App'>
      <img src={logo} id="react-logo" alt='react-logo'></img>
      <h1>Fun Facts About React</h1>
      <ul>
        {funReactFactsList.map(fact=>(
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
