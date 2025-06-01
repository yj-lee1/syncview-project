// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate();

  const goToNews = () => {
    navigate("/news");
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
      </main>
    </div>
  );
}

export default Home;
