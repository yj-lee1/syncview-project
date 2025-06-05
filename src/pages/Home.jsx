// src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/LoginModal.css";
import LoginModal from "../components/LoginModal";
import "./Home.css";

const newsList = [
  { id: 1, title: "뉴스 제목 1", summary: "요약 미리보기입니다." },
  { id: 2, title: "뉴스 제목 2", summary: "두 번째 뉴스입니다." },
  { id: 3, title: "뉴스 제목 3", summary: "세 번째 뉴스입니다." },
];

function Home() {
  const navigate = useNavigate();
  // 실제 로그인 로직이 들어가면 isLoggedIn을 redux, context, API 호출 등으로 바꿔주세요.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleStart = () => {
    navigate("/news");
  };

  const handleAISummary = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      setShowLogin(true);
      return;
    }
    console.log("AI 요약 요청:", id);
    // 실제 요약 API 호출
  };

  const handleTranslate = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      setShowLogin(true);
      return;
    }
    console.log("번역 요청:", id);
    // 실제 번역 API 호출
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="SyncView Logo" />
          <span className="logo-text">SyncView</span>
        </div>
        <nav className="nav">
          <a href="#team">Team Introduction</a>
          <a href="#service">Service 소개</a>
          <div className="user-menu">
            <div className="user-icon">👤</div>
            <div className="user-popup">
              <button
                className="popup-login-btn"
                onClick={() => setShowLogin(true)}
              >
                로그인
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <h1>News is short. Thoughts are long.</h1>
        <p>Consume news more conveniently</p>
        <button className="start-btn" onClick={handleStart}>
          Let’s start the service
        </button>
        <p className="auth-warning">no login required to read this</p>
      </main>

      <section className="news-section">
        <h2>Latest News</h2>

        {newsList.map((news) => (
          <div key={news.id} className="news-card">
            <h3>{news.title}</h3>
            <p>{news.summary}</p>

            {/* 버튼에서 disabled 속성 제거 */}
            <button
              className={isLoggedIn ? "" : "disabled"}
              onClick={() => handleAISummary(news.id)}
            >
              AI Summary
            </button>
            <button
              className={isLoggedIn ? "" : "disabled"}
              onClick={() => handleTranslate(news.id)}
            >
              Translate
            </button>

            {/* 비로그인일 때는 안내 문구만 보여줌 */}
            {!isLoggedIn && (
              <div className="auth-warning">* 로그인 후 사용 가능합니다</div>
            )}
          </div>
        ))}
      </section>

      {showLogin && <LoginModal onClose={closeLoginModal} />}
    </div>
  );
}

export default Home;
