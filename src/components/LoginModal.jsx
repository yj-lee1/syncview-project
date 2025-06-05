// src/components/LoginModal.jsx
import React from "react";
import "./LoginModal.css";

function LoginModal({ onClose }) {
  // 모달 바깥 클릭 시 닫히지 않도록 이벤트 전파 차단
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={stopPropagation}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>로그인</h2>
        <form className="login-form">
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
