const cors = require("cors");
const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");

app.use(cors({
  origin: "http://localhost:3002",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.use(express.json());
app.use("/api", authRoutes);

app.listen(5000, () => {
  console.log("✅ 서버 실행 중: http://localhost:5000");
});
