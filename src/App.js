import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './NavbarComp';
import Home from './Home';

function App() {
  return (
      <div className="App">
        <NavbarComp />
        <Home/>
      </div>
  );
}

export default App;