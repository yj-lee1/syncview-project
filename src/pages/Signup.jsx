// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    phone: "",
    birth: "",
    emailId: "",
    emailDomain: "naver.com",
    interest: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = `${form.emailId}@${form.emailDomain}`;

    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        username: form.username,
        password: form.password,
        name: form.name,
        phone: form.phone,
        birth: form.birth,
        email,
        interest: form.interest,
      });

      localStorage.setItem("username", form.username); // 로그인 상태 저장
      alert("회원가입이 완료되었습니다.");
      navigate("/"); // 홈으로 이동
    } catch (err) {
      console.error("회원가입 실패", err.response?.data);
      alert("회원가입에 실패.\n중복된 아이디가 이미 있거나 정보를 잘못입력하셨습니다.");
    }
  };

  return (
    <div className="signup-container">
      {/* ===== 헤더 ===== */}
      <header className="header">
        <div className="header-left">
          <span className="header-logo-text">SyncView</span>
        </div>
      </header>

      {/* ===== 회원가입 박스 ===== */}
      <div className="signup-box">
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <label>아이디</label>
          <input
            name="username"
            onChange={handleChange}
            placeholder="아이디 입력"
            className="signup-input"
          />

          <label>비밀번호</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="비밀번호 (10자 이내)"
            maxLength={10}
            required
          />

          <label>이름</label>
          <input
            name="name"
            onChange={handleChange}
            placeholder="이름 입력"
            className="signup-input"
          />

          <label>전화번호</label>
          <input
            name="phone"
            onChange={handleChange}
            placeholder="11자리 입력 ('-' 제외)"
            maxLength={11}
            className="signup-input"
          />

          <label>생년월일</label>
          <input
            name="birth"
            onChange={handleChange}
            placeholder="생년월일 6자리"
            maxLength={6}
            className="signup-input"
          />

          <label>이메일 주소</label>
          <div className="email-row">
            <input
              name="emailId"
              onChange={handleChange}
              placeholder="이메일"
              className="signup-input"
            />
            <span className="at">@</span>
            <select
              name="emailDomain"
              onChange={handleChange}
              value={form.emailDomain}
            >
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="daum.net">daum.net</option>
            </select>
          </div>

          <label>관심분야</label>
          <div className="interests">
            <label>
              <input
                type="radio"
                name="interest"
                value="경제"
                onChange={handleChange}
                checked={form.interest === "경제"}
              />
              경제
            </label>
            <label>
              <input
                type="radio"
                name="interest"
                value="정치"
                onChange={handleChange}
                checked={form.interest === "정치"}
              />
              정치
            </label>
            <label>
              <input
                type="radio"
                name="interest"
                value="연예"
                onChange={handleChange}
                checked={form.interest === "연예"}
              />
              연예
            </label>
          </div>
          <p className="interest-note">※ 관심분야는 하나만 선택할 수 있습니다.</p>

          <div className="signup-buttons">
            <button type="submit" className="signup-btn">가입하기</button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/")}
            >
              가입취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
