# Setup Guide - Healthcare App

## Prerequisites
- Node.js v14+ ([Download](https://nodejs.org))
- MySQL 5.7+ ([Download](https://dev.mysql.com/downloads/mysql/))
- Git
- VS Code hoặc editor khác

## 1. Clone Repository
```bash
git clone https://github.com/ngoducminh12052005-design/app.git
cd app
```

## 2. Database Setup

### 2.1 Tạo Database
```bash
mysql -u root -p
```

Nhập password MySQL rồi chạy:
```sql
CREATE DATABASE healthcare_app;
```

### 2.2 Import Schema
```bash
mysql -u root -p healthcare_app < backend/docs/DATABASE_SCHEMA.sql
```

## 3. Backend Setup

### 3.1 Install Dependencies
```bash
cd backend
npm install
```

### 3.2 Configure Environment
```bash
cp .env.example .env
```

Edit `.env`:
```
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=healthcare_app
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
```

### 3.3 Start Backend
```bash
npm run dev
```

✅ Backend sẽ chạy tại `http://localhost:5000`

## 4. Frontend Setup

### 4.1 Install Dependencies (mở terminal mới)
```bash
cd frontend
npm install
```

### 4.2 Configure Environment
```bash
cp .env.example .env
```

Edit `.env`:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### 4.3 Start Frontend
```bash
npm start
```

✅ Frontend sẽ mở tại `http://localhost:3000`

## 5. Verify Setup

- Truy cập: http://localhost:3000
- Nếu thấy trang home → Setup thành công! 🎉

## Troubleshooting

### Port 3000 đã được sử dụng
```bash
PORT=3001 npm start
```

### Port 5000 đã được sử dụng
Edit `backend/.env` và đổi PORT thành số khác (VD: 5001)

### Không kết nối được MySQL
- Kiểm tra MySQL đang chạy: `mysql -u root -p`
- Kiểm tra username/password trong `.env`

### npm install failed
```bash
rm -rf node_modules package-lock.json
npm install
```
