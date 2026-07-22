import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="header">
        <h1>🏥 Healthcare App</h1>
        <p>Hệ thống quản lý lịch hẹn khám chữa bệnh</p>
      </div>

      <div className="buttons">
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/appointments')}
        >
          Đặt Lịch Hẹn
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => navigate('/customers')}
        >
          Quản Lý Khách Hàng
        </button>
      </div>
    </div>
  );
}