import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Art from './pages/Art';
import More from './pages/More';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Art />} />
            <Route path='/About' element={<About />} />
            <Route path='/More' element={<More />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
