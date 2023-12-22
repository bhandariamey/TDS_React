
import './App.css';
import Navbar from './Component/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
