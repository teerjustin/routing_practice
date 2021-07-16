import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Input from './components/Input';
import { Router } from "@reach/router";



function App() {
  return (
      <div className="App">
      <Router>
        <Home path="/home"></Home>
        <Input path="/:input" />
        <Input path="/:input/:firstColor/:secondColor" />
      </Router>
    </div>
  );
}

export default App;
