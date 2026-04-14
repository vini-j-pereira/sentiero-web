import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import CabinDetail from './pages/CabinDetail';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-ivory">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabin/:id" element={<CabinDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
