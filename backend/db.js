// backend/db.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",        // ✅ pgAdmin에서 사용 중인 사용자
  host: "localhost",
  database: "syncview",    // ✅ 네가 만든 데이터베이스 이름
  password: "2048",     // ✅ 네 Postgres 비번
  port: 5432,
});

module.exports = pool;
