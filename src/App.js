import logo from './logo.svg';
import './App.css';
import CalendarCardList from './Components/CalendarCardList';
import SnowStorm from 'react-snowstorm';

function App() {
  return (
    <div className="App">
      <SnowStorm flakesMax = {256} followMouse = {false} flakesMaxActive = {128} animationInterval = {24}/>
      <header className="App-header">
        <h2> Merry Christmas!</h2>
        <CalendarCardList />
      </header>
    </div>
  );
}

export default App;
