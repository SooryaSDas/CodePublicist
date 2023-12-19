import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Industries from './components/Industries';
import Service from './components/Service';

function App() {
 
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Industries/>
    </div>
  );
}

export default App;