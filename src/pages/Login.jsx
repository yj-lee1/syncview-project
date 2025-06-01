import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/"); // 홈으로 이동
  };

  return (
    <div className="login-container">
      {/* 왼쪽 상단 로고 */}
      <div className="login-logo">
        <img src="/logo.png" alt="SyncView Logo" />
      </div>

      {/* 중앙 정렬 영역 (로그인 박스 + 하단 링크) */}
      <div className="login-center">
        <div className="login-box">
          <h2>LOGIN</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button type="submit">로그인</button>
            <div style={{ height: "16px" }} />
             <button type="button" className="google-btn">Google로 로그인</button>
          </form>
        </div>

        <div className="login-links">
          <a href="#">아이디 찾기</a>
          <a href="#">비밀번호 찾기</a>
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
