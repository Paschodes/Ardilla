
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './modules/Home';
import Interest from './modules/Interest';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interest" element={<Interest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
