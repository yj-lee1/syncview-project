// src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/LoginModal.css";
import LoginModal from "../components/LoginModal";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const newsList = [
    { id: 1, title: "뉴스 제목 1", summary: "이것은 첫 번째 뉴스 요약입니다." },
    { id: 2, title: "뉴스 제목 2", summary: "이것은 두 번째 뉴스 요약입니다." },
    { id: 3, title: "뉴스 제목 3", summary: "이것은 세 번째 뉴스 요약입니다." },
  ];

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
  };

  const handleTranslate = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      setShowLogin(true);
      return;
    }
    console.log("번역 요청:", id);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  return (
    <div className="home-container">
      {/* ========== 헤더 (디자인 교체됨) ========== */}
      <header className="header">
        <div className="header-left">
          {/* 
            보내주신 디자인에 맞춰 여기에 텍스트나 아이콘을 넣어주세요.
            예시: "SyncView"를 굵고 깔끔한 폰트로 표시 혹은 아이콘 없이 텍스트만 사용 
          */}
          <span className="header-logo-text">SyncView</span>
        </div>

        <nav className="nav">
          <a href="#team" className="nav-item">
            Team Introduction
          </a>
          <a href="#service" className="nav-item">
            Service 소개
          </a>

          {/* 사용자 메뉴 (사람 아이콘 + 팝업) */}
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

      {/* ========== 메인 콘텐츠 ========== */}
      <main className="main-content">
        <h1>News is short. Thoughts are long.</h1>
        <p>Consume news more conveniently</p>
        <button className="start-btn" onClick={handleStart}>
          Let’s start the service
        </button>
        <p className="auth-warning">no login required to read this</p>
      </main>

      {/* ========== 뉴스 섹션 ========== */}
      <section className="news-section">
        <h2>Latest News</h2>

        {newsList.map((news) => (
          <div key={news.id} className="news-card">
            <h3>{news.title}</h3>
            <p>{news.summary}</p>
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
            {!isLoggedIn && (
              <div className="auth-warning">* 로그인 후 사용 가능합니다</div>
            )}
          </div>
        ))}
      </section>

      {/* ========== 로그인 모달 ========== */}
      {showLogin && <LoginModal onClose={closeLoginModal} />}
    </div>
  );
};

export default Home;
