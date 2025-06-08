// backend/db.js
require("dotenv").config();
const { Pool } = require("pg");
console.log("📡 연결 중인 DB 주소:", process.env.PGHOST); // 이 위치로 옮기세요

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: {
    rejectUnauthorized: false // GCP 외부 접속 시 필요
  }
});

module.exports = pool;