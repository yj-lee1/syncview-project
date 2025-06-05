import React from "react";
import "./Login.css"; // 기존에 만들어 두었던 Login.css
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 실제 로그인 로직(백엔드 호출 등) 처리 후
    navigate("/"); // 성공 시 홈 화면으로 리다이렉트
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="/logo.png" alt="SyncView Logo" />
        <span className="logo-text">SyncView</span>
      </div>
      <div className="login-center">
        <div className="login-box">
          <h2>LOGIN</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button type="submit">로그인</button>
            <div style={{ height: "16px" }} />
            <button type="button" className="google-btn">
              Google로 로그인
            </button>
          </form>
        </div>
        <div className="login-links">
          <a href="#">아이디 찾기</a>
          <a href="#">비밀번호 찾기</a>
          <a href="/signup">회원가입</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
