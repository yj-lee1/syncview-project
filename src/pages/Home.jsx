// src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/LoginModal.css"; // 반드시 components 폴더 경로로 import
import LoginModal from "../components/LoginModal";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  // 실제 로그인 로직이 들어갈 경우 Context나 Redux 등으로 대체하세요.
  // 예시에서는 하드코딩 상태로 사용합니다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 모달 open/close 상태
  const [showLogin, setShowLogin] = useState(false);

  // 예시용 뉴스 데이터
  const newsList = [
    { id: 1, title: "뉴스 제목 1", summary: "이것은 첫 번째 뉴스 요약입니다." },
    { id: 2, title: "뉴스 제목 2", summary: "이것은 두 번째 뉴스 요약입니다." },
    { id: 3, title: "뉴스 제목 3", summary: "이것은 세 번째 뉴스 요약입니다." },
  ];

  // 서비스 시작하기 버튼 → 로그인 여부 무관하게 /news 로 이동
  const handleStart = () => {
    navigate("/news");
  };

  // AI Summary 버튼 클릭
  const handleAISummary = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      setShowLogin(true);
      return;
    }
    // 로그인된 상태라면 실제 요약 로직을 수행
    console.log("AI 요약 요청:", id);
  };

  // Translate 버튼 클릭
  const handleTranslate = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      setShowLogin(true);
      return;
    }
    // 로그인된 상태라면 실제 번역 로직을 수행
    console.log("번역 요청:", id);
  };

  // 로그인 모달 닫기
  const closeLoginModal = () => {
    setShowLogin(false);
  };

  return (
    <div className="home-container">
      {/* ========== 헤더 ========== */}
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="SyncView Logo" />
          <span className="logo-text">SyncView</span>
        </div>

        <nav className="nav">
          <a href="#team">Team Introduction</a>
          <a href="#service">Service 소개</a>

          {/* 오른쪽 사람 아이콘 메뉴 */}
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

            {/* disabled 속성 제거 → 항상 클릭 가능, 로그인 여부는 onClick 안에서 체크 */}
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

            {/* 비로그인 상태 시 안내 문구 */}
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
