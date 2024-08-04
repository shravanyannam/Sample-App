import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Parent from './Components/Parent';
function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Parent />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
