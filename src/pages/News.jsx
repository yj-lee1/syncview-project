// src/pages/News.jsx
import React, { useEffect, useState } from "react";
import "../pages/News.css";

function News() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const newsList = [
    { id: 1, title: "뉴스 제목 1", summary: "첫 번째 뉴스 요약 예시입니다." },
    { id: 2, title: "뉴스 제목 2", summary: "두 번째 뉴스 요약 예시입니다." },
    { id: 3, title: "뉴스 제목 3", summary: "세 번째 뉴스 요약 예시입니다." },
  ];

  const handleAISummary = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    console.log("AI 요약 요청:", id);
  };

  const handleTranslate = (id) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    console.log("번역 요청:", id);
  };

  return (
    <div className="home-container">
      {/* ===== 헤더 ===== */}
      <header className="header">
        <div className="header-left">
          <span className="header-logo-text">SyncView</span>
        </div>
        </header>

      {/* ===== 뉴스 섹션 ===== */}
      <section className="news-section">
        <h2>Latest News</h2>
        {newsList.map((news) => (
          <div key={news.id} className="news-card">
            <h3>{news.title}</h3>
            <p>{news.summary}</p>
            <button
              className={isLoggedIn ? "news-btn" : "news-btn disabled"}
              onClick={() => handleAISummary(news.id)}
            >
              AI Summary
            </button>
            <button
              className={isLoggedIn ? "news-btn" : "news-btn disabled"}
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
    </div>
  );
}

export default News;
