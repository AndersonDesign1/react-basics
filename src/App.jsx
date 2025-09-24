import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Example from './pages/Example';
import Learn from './pages/Learn';
import Components from './pages/Components';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/components" element={<Components />} />
          <Route path="/example" element={<Example />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;