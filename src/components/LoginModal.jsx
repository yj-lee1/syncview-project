// src/components/LoginModal.jsx
import React from "react";
import { Link } from "react-router-dom"; // 회원가입 링크를 위해 필요
import "./LoginModal.css";

function LoginModal({ onClose }) {
  // 모달 외부 클릭 시 닫히지 않도록 이벤트 전파 차단
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={stopPropagation}>
        {/* 닫기 버튼 */}
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        {/* 입력 폼 */}
        <form className="login-form">
          <input type="text" placeholder="아이디" className="login-input" />
          <input
            type="password"
            placeholder="비밀번호"
            className="login-input"
          />

          {/* 일반 로그인 버튼 */}
          <button type="submit" className="login-btn">
            로그인
          </button>

          {/* 구글 로그인 버튼 */}
          <button type="button" className="google-btn">
            구글 계정으로 로그인
          </button>
        </form>

        {/* 회원가입 링크 */}
        <div className="signup-link">
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
