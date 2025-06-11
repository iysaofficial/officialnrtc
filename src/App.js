import './App.css';

import Nrtcpage from './pages/Nrtcpage';

// News
import News2 from './pages/News2';

// News Full
import News6 from './pages/news1/News6';
import News7 from './pages/news1/News7';
import News8 from './pages/news1/News8';

import HomeIndo from './pages/registration/homeindo';
import IndonesiaOffline from './pages/registration/indo-offline';
import IndonesiaOnline from './pages/registration/indo-online';
import Thankyou from './pages/registration/thankyou';


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
          <Route path="/" element={<Nrtcpage />} />
          <Route path='/News2' element={<News2 />} />
          <Route path='/News6' element={<News6 />} />
          <Route path='/News7' element={<News7 />} />
          <Route path='/News8' element={<News8 />} />
          <Route path='/homeindo' element={<HomeIndo />} />
          <Route path='/indo-online' element={<IndonesiaOnline />} />
          <Route path='/indo-offline' element={<IndonesiaOffline />} />
          <Route path='/thankyou' element={<Thankyou />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
