import './App.css';

import Landingpages from './pages/Landingpages';
import Irtcpage from './pages/Irtcpage';
import Nrtcpage from './pages/Nrtcpage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpages />} />
          <Route path='/Irtcpage' element={<Irtcpage />} />
          <Route path='/Nrtcpage' element={<Nrtcpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
