
import './App.css';
import Navbar from './Component/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer/Footer.jsx';
import Top from './Component/Top/Top.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Top/>
    </div>
  );
}

export default App;
