import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Customers from './pages/Customers';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <a href="/" className="nav-logo">🏥 Healthcare</a>
            <ul className="nav-menu">
              <li><a href="/">Trang chủ</a></li>
              <li><a href="/appointments">Lịch hẹn</a></li>
              <li><a href="/customers">Khách hàng</a></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;