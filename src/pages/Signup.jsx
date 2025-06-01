// src/pages/Signup.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";


function Signup() {
   const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    // 나중에 서버 전송 로직 들어갈 자리
    navigate("/login"); // 로그인 화면으로 이동
  };

  return (
    <div className="signup-container">
      <div className="signup-logo">
        <img src="/logo.png" alt="SyncView Logo" />
      </div>

      <div className="signup-box">
        <h2>회원가입</h2>

        <form onSubmit={handleSubmit}>
          {/* 아이디 */}
          <label>아이디</label>
          <div className="input-row">
            <input type="text" placeholder="아이디 입력" />
            <button type="button" className="check-btn">중복 확인</button>
          </div>

          {/* 비밀번호 */}
          <label>비밀번호</label>
          <input type="password" placeholder="문자, 숫자, 특수문자 포함" />
          <p className="error">20자 이내의 비밀번호를 입력해주세요</p>

          {/* 비밀번호 확인 */}
          <label>비밀번호 확인</label>
          <input type="password" placeholder="비밀번호 재입력" />

          {/* 이름 */}
          <label>이름</label>
          <input type="text" placeholder="이름을 입력해주세요" />

          {/* 전화번호 */}
          <label>전화번호</label>
          <input type="text" placeholder="휴대폰 번호 입력 ('-' 제외 11자리 입력)" />

          {/* 이메일 */}
          <label>이메일 주소</label>
          <div className="input-row">
            <input type="text" placeholder="이메일 주소" />
            <span className="at">@</span>
            <select>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
            </select>
          </div>

          {/* 관심분야 */}
          <label>관심분야</label>
          <div className="interest-row">
            <label><input type="checkbox" value="경제" /> 경제</label>
            <label><input type="checkbox" value="정치" /> 정치</label>
            <label><input type="checkbox" value="연예" /> 연예</label>
          </div>

          {/* 버튼 */}
          <div className="signup-buttons">
            <button type="submit" className="blue">가입하기</button>
            <button type="button" className="gray" onClick={() => navigate(-1)}>
  가입취소
</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
