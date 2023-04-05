import logo from './logo.svg';
import './App.css';
import World from './World';

function App() {
  return (
    <div className="App">
  
      <h1>Day 1 Exercise 1</h1>
      <h1>Let we see the output of JAVASCRIPT</h1>
      <button onClick={window['alertMsg']}>click me</button>

      <br></br>

      <h1>Day 1 Exercise 2</h1>
      <button onClick={window['check']}>press me</button>
      
      <h1>Day 1 Exercise 3</h1>
      <World/>
    </div>
  );
}

export default App;
