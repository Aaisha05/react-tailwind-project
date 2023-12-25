import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {
  return (
    <Router>
      <div>
          {/*
          <nav>
          <ul>
            <li>
              <Link  to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
  </nav> */}
        
      
     
        

        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


