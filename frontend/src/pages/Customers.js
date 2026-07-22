import React, { useState, useEffect } from 'react';
import '../styles/Customers.css';

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    dob: ''
  });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/customers');
      const data = await res.json();
      setCustomers(data.data || []);
    } catch (err) {
      console.error('Error fetching customers:', err);
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
      const res = await fetch('http://localhost:3000/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        alert('✅ Thêm khách hàng thành công!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          dob: ''
        });
        setShowForm(false);
        fetchCustomers();
      }
    } catch (err) {
      console.error('Error creating customer:', err);
      alert('❌ Lỗi: ' + err.message);
    }
  };

  return (
    <div className="customers-container">
      <h2>👥 Quản Lý Khách Hàng</h2>

      <button 
        className="btn btn-add"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Hủy' : '➕ Thêm Khách Hàng'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Tên khách hàng"
            value={formData.name}
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
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">Lưu</button>
        </form>
      )}

      <div className="customers-list">
        {customers.length === 0 ? (
          <p>Chưa có khách hàng nào</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Ngày sinh</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cust, idx) => (
                <tr key={idx}>
                  <td>{cust.name}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.email}</td>
                  <td>{cust.address}</td>
                  <td>{cust.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}