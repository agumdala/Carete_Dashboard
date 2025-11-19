import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  CreditCard,
  User,
  HelpCircle,
  Search,
  Bell,
  ChevronDown,
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import StatusBadge from "./components/StatusBadge";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src="/src/assets/carete_logo.png" alt="Carete" className="logo-img" />
        </div>

        <nav className="nav-menu">
          <div className="menu-section">
            <span className="menu-label">MENU</span>
            <ul>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <li className="active">
                  <LayoutDashboard size={18} />
                  Dashboard
                </li>
              </Link>
              <Link to="/members" style={{ textDecoration: 'none' }}>
                <li>
                  <Users size={18} />
                  Members
                </li>
              </Link>
              <Link to="/claims" style={{ textDecoration: 'none' }}>
                <li>
                  <FileText size={18} />
                  Claims
                </li>
              </Link>
              <Link to="/reports" style={{ textDecoration: 'none' }}>
                <li>
                  <BarChart3 size={18} />
                  Reports
                </li>
              </Link>
            </ul>
          </div>

          <div className="menu-section">
            <span className="menu-label">OTHERS</span>
            <ul>
              <li>
                <Settings size={18} />
                Settings
              </li>
              <li>
                <CreditCard size={18} />
                Payment
              </li>
              <li>
                <User size={18} />
                Accounts
              </li>
              <li>
                <HelpCircle size={18} />
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
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="user-profile">
            <div className="user-avatar">🍎</div>
            <span className="user-name">Unity Roots</span>
            <ChevronDown size={14} />
            <div className="notification-wrapper">
              <Bell size={18} />
              <span className="notification-dot"></span>
            </div>
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
                <span className="stat-icon pending"><Clock size={20} /></span>
              </div>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Active Enrollments</span>
                <span className="stat-icon active"><CheckCircle size={20} /></span>
              </div>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Claims Submitted</span>
                <span className="stat-icon submitted"><FileText size={20} /></span>
              </div>
              <span className="stat-value">45</span>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Alerts</span>
                <span className="stat-icon alerts"><AlertTriangle size={20} /></span>
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
                    <User size={16} className="item-icon" />
                    <span className="item-name">Maria Garcia</span>
                  </div>
                  <div className="item-status">
                    <StatusBadge status="pending" />
                    <span className="item-date">11-14-2025</span>
                  </div>
                </div>
                <div className="queue-item">
                  <div className="item-info">
                    <User size={16} className="item-icon" />
                    <span className="item-name">James Wilson</span>
                  </div>
                  <div className="item-status">
                    <StatusBadge status="pending" />
                    <span className="item-date">11-01-2025</span>
                  </div>
                </div>
                <div className="queue-item">
                  <div className="item-info">
                    <User size={16} className="item-icon" />
                    <span className="item-name">Sarah Chen</span>
                  </div>
                  <div className="item-status">
                    <StatusBadge status="approved" />
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
                    <FileText size={16} className="item-icon" />
                    <span className="item-name">CLM-2025-1236</span>
                  </div>
                  <div className="item-status">
                    <StatusBadge status="submitted" />
                    <span className="item-date">11-14-2025</span>
                  </div>
                </div>
                <div className="claim-item">
                  <div className="item-info">
                    <FileText size={16} className="item-icon" />
                    <span className="item-name">CLM-2025-1235</span>
                  </div>
                  <div className="item-status">
                    <StatusBadge status="denied" />
                    <span className="item-date">11-01-2025</span>
                  </div>
                </div>
                <div className="claim-item">
                  <div className="item-info">
                    <FileText size={16} className="item-icon" />
                    <span className="item-name">CLM-2025-1234</span>
                  </div>
                  <div className="item-status">
                    <StatusBadge status="paid" />
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
              <AlertTriangle size={24} className="alerts-icon" />
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
