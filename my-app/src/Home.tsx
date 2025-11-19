import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-text">Carete</span>
        </div>

        <nav className="nav-menu">
          <div className="menu-section">
            <span className="menu-label">MENU</span>
            <ul>
              <li className="active">
                <span className="nav-icon">📊</span>
                Dashboard
              </li>
              <li>
                <span className="nav-icon">👥</span>
                Members
              </li>
              <li>
                <span className="nav-icon">📄</span>
                Claims
              </li>
              <li>
                <span className="nav-icon">📈</span>
                Reports
              </li>
            </ul>
          </div>

          <div className="menu-section">
            <span className="menu-label">OTHERS</span>
            <ul>
              <li>
                <span className="nav-icon">⚙️</span>
                Settings
              </li>
              <li>
                <span className="nav-icon">💳</span>
                Payment
              </li>
              <li>
                <span className="nav-icon">👤</span>
                Accounts
              </li>
              <li>
                <span className="nav-icon">❓</span>
                Help
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search" />
          </div>
          <div className="user-profile">
            <div className="user-avatar"></div>
            <span className="user-name">Unity Roots</span>
            <span className="dropdown-icon">▼</span>
            <span className="notification-icon">🔔</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <p>Welcome back! Here's your overview.</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Pending Eligibility</span>
                <span className="stat-icon pending">🕐</span>
              </div>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Active Enrollments</span>
                <span className="stat-icon active">✓</span>
              </div>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Claims Submitted</span>
                <span className="stat-icon submitted">📄</span>
              </div>
              <span className="stat-value">45</span>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Alerts</span>
                <span className="stat-icon alerts">⚠️</span>
              </div>
              <span className="stat-value">3</span>
            </div>
          </div>

          {/* Queue and Claims Section */}
          <div className="content-grid">
            {/* Eligibility Queue */}
            <div className="card eligibility-queue">
              <div className="card-header">
                <h2>Eligibility Queue</h2>
                <p>Members awaiting eligibility confirmation.</p>
              </div>
              <div className="queue-list">
                <div className="queue-item">
                  <div className="item-info">
                    <span className="item-icon">👤</span>
                    <span className="item-name">Maria Garcia</span>
                  </div>
                  <div className="item-status">
                    <span className="status-badge pending">🕐 Pending</span>
                    <span className="item-date">11-14-2025</span>
                  </div>
                </div>
                <div className="queue-item">
                  <div className="item-info">
                    <span className="item-icon">👤</span>
                    <span className="item-name">James Wilson</span>
                  </div>
                  <div className="item-status">
                    <span className="status-badge pending">🕐 Pending</span>
                    <span className="item-date">11-01-2025</span>
                  </div>
                </div>
                <div className="queue-item">
                  <div className="item-info">
                    <span className="item-icon">👤</span>
                    <span className="item-name">Sarah Chen</span>
                  </div>
                  <div className="item-status">
                    <span className="status-badge approved">✓ Approved</span>
                    <span className="item-date">10-28-2025</span>
                  </div>
                </div>
              </div>
              <button className="view-all-btn">View All Pending</button>
            </div>

            {/* Recent Claims */}
            <div className="card recent-claims">
              <div className="card-header">
                <h2>Recent Claims</h2>
                <p>Latest claim submissions and updates</p>
              </div>
              <div className="claims-list">
                <div className="claim-item">
                  <div className="item-info">
                    <span className="item-icon">📄</span>
                    <span className="item-name">CLM-2025-1236</span>
                  </div>
                  <div className="item-status">
                    <span className="status-badge submitted">🕐 Submitted</span>
                    <span className="item-date">11-14-2025</span>
                  </div>
                </div>
                <div className="claim-item">
                  <div className="item-info">
                    <span className="item-icon">📄</span>
                    <span className="item-name">CLM-2025-1235</span>
                  </div>
                  <div className="item-status">
                    <span className="status-badge denied">✕ Denied</span>
                    <span className="item-date">11-01-2025</span>
                  </div>
                </div>
                <div className="claim-item">
                  <div className="item-info">
                    <span className="item-icon">📄</span>
                    <span className="item-name">CLM-2025-1234</span>
                  </div>
                  <div className="item-status">
                    <span className="status-badge paid">✓ Paid</span>
                    <span className="item-date">10-28-2025</span>
                  </div>
                </div>
              </div>
              <button className="view-all-btn">View All Claims</button>
            </div>
          </div>

          {/* Alerts & Notifications */}
          <div className="card alerts-section">
            <div className="alerts-header">
              <span className="alerts-icon">⚠️</span>
              <div>
                <h2>Alerts & Notifications</h2>
                <p>Important updates and action items</p>
              </div>
            </div>
            <div className="alert-item">
              <span className="alert-dot"></span>
              <div className="alert-content">
                <p>15 members are approaching the redetermination deadline</p>
                <span className="alert-time">Today</span>
              </div>
              <button className="view-btn">View</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
