import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Art from './pages/Art';
import More from './pages/More';
import Footer from './components/Footer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {

  return (

    <div>
      <div id='loading'>
        <h1>
        <h1 id='loadingtitle' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold font-PassionsConflict lg:text-[5rem]'>Project <span>Mayce</span></h1>
        </h1>
      </div>
      <div className='flex flex-col min-h-screen'>
          <Router>
            <Navbar />

              <Routes>
                <Route path='/projectmayce' element={<Art />} />
                <Route path='/About' element={<About />} />
                <Route path='/More' element={<More />} />
              </Routes>
              <Footer />
            </Router>
      </div>
    </div>
  );
}

export default App;
