// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const isLoggedIn = false; // 실제 환경에서는 전역 상태나 Context로 대체

const newsList = [
  { id: 1, title: "뉴스 제목 1", summary: "요약 미리보기입니다." },
  { id: 2, title: "뉴스 제목 2", summary: "두 번째 뉴스입니다." },
  { id: 3, title: "뉴스 제목 3", summary: "세 번째 뉴스입니다." },
];

function Home() {
  const navigate = useNavigate();

  const goToNews = () => {
    navigate("/news");
  };

  const handleAISummary = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      navigate("/login");
      return;
    }
    console.log(`AI 요약 요청: ${id}`);
  };

  const handleTranslate = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      navigate("/login");
      return;
    }
    console.log(`번역 요청: ${id}`);
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="SyncView Logo" />
        </div>
        <nav className="nav">
          <a href="#team">팀 소개</a>
          <a href="#service">서비스 소개</a>
          <Link to="/login">로그인</Link>
        </nav>
      </header>

      <main className="main-content">
        <h1>뉴스를 더 똑똑하게 소비하세요.</h1>
        <p>읽고 싶은 뉴스만, 알고 싶은 인사이트만.</p>
        <button className="start-btn" onClick={goToNews}>
          서비스 시작하기 ✅
        </button>
        <p className="auth-warning">로그인 없이도 최신 뉴스 열람이 가능합니다.</p>
      </main>

      <div className="news-section">
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
              AI 요약
            </button>
            <button
              className={!isLoggedIn ? "disabled" : ""}
              disabled={!isLoggedIn}
              onClick={() => handleTranslate(news.id)}
            >
              번역
            </button>
            {!isLoggedIn && (
              <div className="auth-warning">* 로그인 후 사용 가능합니다</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
