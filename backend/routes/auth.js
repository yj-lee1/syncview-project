// backend/routes/auth.js
const express = require("express");
const router = express.Router();
const pool = require("../db");

// 회원가입 API
router.post("/register", async (req, res) => {
  const { username, password, name, phone, birth, email, interest } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO member (username, password, name, phone, birth, email, interest)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [username, password, name, phone, birth, email, interest]
    );
    res.status(201).json({ message: "회원가입 성공", user: result.rows[0] });
  } catch (err) {
    console.error("회원가입 오류:", err);
    res.status(500).json({ error: "회원가입 실패" });
  }
});

// 로그인 API
// backend/routes/auth.js (일부)
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM member WHERE username = $1 AND password = $2",
      [username, password]
    );

   if (result.rows.length > 0) {
  return res.json({ success: true, username: result.rows[0].username });
} else {
  return res.json({ success: false, message: "아이디 또는 비밀번호가 틀렸습니다." });
}


  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "서버 오류" });
  }
});


module.exports = router;
