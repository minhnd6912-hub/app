import React, { useState, useEffect } from 'react';
import '../styles/Appointments.css';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    staff: ''
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/appointments');
      const data = await res.json();
      setAppointments(data.data || []);
    } catch (err) {
      console.error('Error fetching appointments:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        alert('✅ Đặt lịch thành công!');
        setFormData({
          customerName: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          staff: ''
        });
        setShowForm(false);
        fetchAppointments();
      }
    } catch (err) {
      console.error('Error creating appointment:', err);
      alert('❌ Lỗi: ' + err.message);
    }
  };

  return (
    <div className="appointments-container">
      <h2>📅 Lịch Hẹn</h2>

      <button 
        className="btn btn-add"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Hủy' : '➕ Tạo Lịch Hẹn'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="customerName"
            placeholder="Tên khách hàng"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="service"
            placeholder="Dịch vụ"
            value={formData.service}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="staff"
            placeholder="Nhân viên"
            value={formData.staff}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">Lưu</button>
        </form>
      )}

      <div className="appointments-list">
        {appointments.length === 0 ? (
          <p>Chưa có lịch hẹn nào</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Tên KH</th>
                <th>Số điện thoại</th>
                <th>Ngày</th>
                <th>Giờ</th>
                <th>Dịch vụ</th>
                <th>Nhân viên</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt, idx) => (
                <tr key={idx}>
                  <td>{apt.customerName}</td>
                  <td>{apt.phone}</td>
                  <td>{apt.date}</td>
                  <td>{apt.time}</td>
                  <td>{apt.service}</td>
                  <td>{apt.staff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}