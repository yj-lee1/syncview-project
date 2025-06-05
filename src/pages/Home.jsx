// src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../components/LoginModal.css"; // LoginModal 전용 CSS
import LoginModal from "../components/LoginModal";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // 실제 로그인 상태를 관리할 때는 Context나 Redux, 또는 API 호출 결과를 사용하세요.
  // 예시에서는 편의상 하드코딩된 false 상태를 사용합니다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 모달 표시 여부
  const [showLogin, setShowLogin] = useState(false);

  // 예시용 뉴스 데이터 (나중에 크롤링·API 연동된 실제 데이터로 대체 가능)
  const newsList = [
    { id: 1, title: "뉴스 제목 1", summary: "첫 번째 뉴스 요약 예시입니다." },
    { id: 2, title: "뉴스 제목 2", summary: "두 번째 뉴스 요약 예시입니다." },
    { id: 3, title: "뉴스 제목 3", summary: "세 번째 뉴스 요약 예시입니다." },
  ];

  // “서비스 시작하기” 버튼 클릭 시 /news 페이지로 이동
  const handleStart = () => {
    navigate("/news");
  };

  // AI Summary 버튼 클릭 시 동작
  const handleAISummary = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      setShowLogin(true);
      return;
    }
    // 로그인된 상태라면 실제 요약 API 호출 로직을 작성하세요.
    console.log("AI 요약 요청:", id);
  };

  // Translate 버튼 클릭 시 동작
  const handleTranslate = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      setShowLogin(true);
      return;
    }
    // 로그인된 상태라면 실제 번역 API 호출 로직을 작성하세요.
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
        {/* 왼쪽 로고 영역 (이미지 대신 텍스트로 표시) */}
        <div className="header-left">
          <span className="header-logo-text">SyncView</span>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="nav">
          <a href="#team" className="nav-item">
            Team Introduction
          </a>
          <a href="#service" className="nav-item">
            Service 소개
          </a>

          {/* 사용자 메뉴 (사람 아이콘 → 호버 시 팝업) */}
          <div className="user-menu">
            <div className="user-icon">👤</div>
            <div className="user-popup">
              {/* 여기서 “로그인” 버튼을 누르면 LoginModal이 열립니다. */}
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

      {/* ========== 최신 뉴스 섹션 ========== */}
      <section className="news-section">
        <h2>Latest News</h2>

        {newsList.map((news) => (
          <div key={news.id} className="news-card">
            <h3>{news.title}</h3>
            <p>{news.summary}</p>

            {/* disabled 속성은 제거하고, isLoggedIn 상태에 따라 .disabled 클래스를 적용합니다. */}
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
}

export default Home;
