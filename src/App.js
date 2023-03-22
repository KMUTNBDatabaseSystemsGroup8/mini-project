import './App.css';
import './JobDetail.css';
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

function JobDetail() {
  return (
    <div className="content">
      <p>ตำแหน่งที่รับสมัคร</p>
      <p>ชื่อเต็มของบ.</p>
      <p>ที่ตั้งบ.</p>
      <p>ลงประกาศเมื่อ - ชม.ที่ผ่านมา</p>
    </div>
  );
}

export default App;