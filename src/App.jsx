import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { HomePage } from './pages/Home/HomePage';
import { Search } from './pages/search/Search';
import { NotFound } from './pages/NotFound/NotFound';

import './App.css';

function App() {
    return (
      <Router>
        <main className="MovieMaster w-full h-screen flex flex-col items-center text-gray-200">
          <div className="bg-image"></div>
  
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    );
  }
  
  export default App;
  