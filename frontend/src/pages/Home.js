import React from 'react';
import { Button, Space, Typography } from 'antd';

const { Title, Paragraph } = Typography;

function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <Title level={1}>🏥 Healthcare App</Title>
      <Paragraph>
        Hệ thống quản lý lịch hẹn khám chữa bệnh
      </Paragraph>
      <Space>
        <Button type="primary" size="large">
          Đặt Lịch Hẹn
        </Button>
        <Button size="large">
          Quản Lý Khách Hàng
        </Button>
      </Space>
    </div>
  );
}

export default Home;
