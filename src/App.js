import './App.css';

import Landingpages from './pages/Landingpages';
import Irtcpage from './pages/Irtcpage';
import Nrtcpage from './pages/Nrtcpage';

// News
import News1 from './pages/News1';
import News2 from './pages/News2';

// News Full
import News3 from './pages/news/News3';
import News4 from './pages/news/News4';
import News5 from './pages/news/News5';

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
          <Route path='/News1' element={<News1 />} />
          <Route path='/News2' element={<News2 />} />
          <Route path='/News3' element={<News3 />} />
          <Route path='/News4' element={<News4 />} />
          <Route path='/News5' element={<News5 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
