// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/LoginModal.css";
import LoginModal from "../components/LoginModal";
import "./Home.css";

function Home({ isLoggedIn, setIsLoggedIn, username, setUsername }) {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  const handleStart = () => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      setShowLogin(true);
      return;
    }
    navigate("/news");
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
    alert("로그아웃 되었습니다.");
  };

  return (
    <div className="home-container">
      {/* ===== 헤더 ===== */}
      <header className="header">
        <div className="header-left">
          <span className="header-logo-text">SyncView</span>
        </div>

        <nav className="nav">
          <a href="#team" className="nav-item">Team Introduction</a>
          <a href="#service" className="nav-item">Service 소개</a>

          <div className="user-menu">
            <div className="user-icon">👤</div>
            <div className="user-popup">
              {isLoggedIn ? (
                <div>
                  <p style={{ marginBottom: "8px" }}>{username}님</p>
                  <button className="popup-login-btn" onClick={handleLogout}>로그아웃</button>
                </div>
              ) : (
                <button className="popup-login-btn" onClick={() => setShowLogin(true)}>
                  로그인
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* ===== 메인 콘텐츠 ===== */}
      <main className="main-content">
        <h1>News is short. Thoughts are long.</h1>
        <p>뉴스를 더욱 편리하게 소비하세요.</p>
        <button className="start-btn" onClick={handleStart}>start the service !</button>

        {/* ===== 팀 소개 ===== */}
        <section id="team" className="home-section">
          <a href="#team" className="nav-item">Team Introduction</a>
          <p>
            SyncView 팀은 AI 기반 뉴스 요약 서비스를 개발하는 팀으로, 최신 뉴스 데이터를 수집하고
            요약/번역/키워드 추출 등 사용자 친화적인 기능을 제공합니다. <br />
            팀원들은 AI·웹 개발·데이터 분석 등 각자의 전문 역량을 발휘하여 서비스 품질을 높이는 데 집중하고 있습니다.
          </p>
        </section>

        {/* ===== 서비스 소개 ===== */}
        <section id="service" className="home-section">
          <a href="#service" className="nav-item">Service 소개</a>
          <p>
            SyncView는 뉴스를 빠르게 요약하고, 키워드를 추출하며, 주요 내용을 번역까지 지원하는 AI 뉴스 요약 플랫폼입니다. <br />
            사용자 맞춤형 뉴스 추천, 관심 분야 설정, 간단한 뉴스 평가 기능도 제공하여 <br />
            뉴스 소비의 질을 높이고 정보의 핵심을 빠르게 파악할 수 있도록 돕습니다.
          </p>
        </section>
      </main>

      {/* ===== 로그인 모달 ===== */}
      {showLogin && (
        <LoginModal
          onClose={closeLoginModal}
          setIsLoggedIn={setIsLoggedIn}
          setUsername={setUsername}
        />
      )}
    </div>
  );
}

export default Home;
