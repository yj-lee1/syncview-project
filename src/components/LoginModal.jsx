// src/components/LoginModal.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginModal.css";

function LoginModal({ onClose, setIsLoggedIn, setUsername }) {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username: usernameInput,
        password,
      });

      if (res.data?.success) {
        alert("✅ 로그인 성공");
        localStorage.setItem("username", res.data.username);
        setIsLoggedIn(true);
        setUsername(res.data.username);
        onClose();
      } else {
        alert("❌ 로그인 실패: " + (res.data.message || "알 수 없는 오류"));
      }
    } catch (err) {
      console.error(err);
      alert("서버 오류");
    }
  };

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="아이디"
            className="login-input"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">로그인</button>
          <button type="button" className="google-btn">Google로 로그인</button>
        </form>

        <div className="signup-link">
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
