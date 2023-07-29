import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { HomePage } from './pages/Menu/Home/HomePage';
import { Search } from './pages/search/Search';
import { NotFound } from './pages/NotFound/NotFound';
import { Watchlist } from './pages/Menu/Watchlist/Watchlist';

import './App.css';

function App() {
    return (
      <Router>
        <main className="MovieMasterPage w-full h-auto text-gray-200">
          <div className="bg-image"></div>
  
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    );
  }
  
  export default App;
  