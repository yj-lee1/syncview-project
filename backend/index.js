const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth");

// ✅ 먼저 바디 파서 등록
app.use(express.json());

// ✅ 그다음 CORS
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

// ✅ 그다음 라우터 등록
app.use("/api", authRoutes);

app.listen(5000, () => {
  console.log("✅ 서버 실행 중: http://localhost:5000");
});
