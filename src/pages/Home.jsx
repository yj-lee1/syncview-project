// Home.jsx 예시
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/LoginModal.css";       // CSS 경로
import LoginModal from "../components/LoginModal";  // 컴포넌트 경로
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  // 실제 로그인 상태는 Context나 Redux 등 전역 상태와 연결해야 합니다.
  // 지금은 예시로 false 설정 해두었습니다.
  const isLoggedIn = false;

  // 예시용 뉴스 데이터 (실제 데이터 연동 필요)
  const newsList = [
    { id: 1, title: "뉴스 제목 1", summary: "이것은 두 번째 뉴스 요약입니다." },
    { id: 2, title: "뉴스 제목 2", summary: "이것은 세 번째 뉴스 요약입니다." },
    { id: 3, title: "뉴스 제목 3", summary: "이것은 네 번째 뉴스 요약입니다." },
  ];

  // 서비스 시작하기 버튼
  const handleStart = () => {
    // 여기는 /news 페이지로 바로 이동시키되, 로그인 여부와 관계없이 접근 가능
    navigate("/news");
  };

  // AI 요약 버튼 클릭 시
  const handleAISummary = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      setShowLogin(true);
      return;
    }
    console.log("AI 요약 요청:", id);
    // 실제 요약 API 호출 로직 등을 여기서 처리
  };

  // 번역 버튼 클릭 시
  const handleTranslate = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      setShowLogin(true);
      return;
    }
    console.log("번역 요청:", id);
    // 실제 번역 API 호출 로직 등
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
          {/* 오른쪽 사람 아이콘 */}
          <div className="user-menu">
            <div className="user-icon">👤</div>
            <div className="user-popup">
              <button className="popup-login-btn" onClick={() => setShowLogin(true)}>
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

      {/* ========== 뉴스 섹션 (스크롤하면 계속 아래에 뜨는 부분) ========== */}
      <section className="news-section">
        <h2>Latest News</h2>

        {newsList.map((news) => (
          <div key={news.id} className="news-card">
            <h3>{news.title}</h3>
            <p>{news.summary}</p>
            <button
              className={!isLoggedIn ? "disabled" : ""}
              disabled={!isLoggedIn}
              onClick={() => handleAISummary(news.id)}
            >
              AI Summary
            </button>
            <button
              className={!isLoggedIn ? "disabled" : ""}
              disabled={!isLoggedIn}
              onClick={() => handleTranslate(news.id)}
            >
              Translate
            </button>
            {!isLoggedIn && (
              <div className="auth-warning">* 로그인 후 이용 가능합니다</div>
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
