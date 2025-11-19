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
  Download
} from "lucide-react";
import "./Reports.css";

const Reports: React.FC = () => {
  const reports = [
    {
      name: "Monthly Financial Report",
      description: "Detailed breakdown of reimbursements and expenses",
      formats: "PDF, CSV"
    },
    {
      name: "Member Enrollment Report",
      description: "New enrollments, redeterminations, and conversions",
      formats: "PDF, CSV"
    },
    {
      name: "Service Utilization Report",
      description: "Services delivered by type and frequency",
      formats: "PDF, CSV"
    },
    {
      name: "Claims Analysis Report",
      description: "Export for state reporting requirements",
      formats: "PDF, CSV"
    }
  ];

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
                <li>
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
                <li className="active">
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

        {/* Reports Content */}
        <div className="dashboard-content">
          <div className="page-header">
            <div className="dashboard-header">
              <h1>Reports & Analytics</h1>
              <p>Submit and track reimbursement claims</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">Reimbursement Summary</span>
              <span className="stat-value">$12,450</span>
              <span className="stat-change positive">+12% from last month</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Enrollment Rate</span>
              <span className="stat-value">85%</span>
              <span className="stat-change positive">+3% from last month</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Services Delivered</span>
              <span className="stat-value">342</span>
              <span className="stat-change positive">+18% from last month</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Claims Success Rate</span>
              <span className="stat-value">92%</span>
              <span className="stat-change positive">+2% from last month</span>
            </div>
          </div>

          {/* Available Reports Card */}
          <div className="card reports-card">
            <div className="card-header">
              <h2>Available Reports</h2>
              <p>Generate and download reports</p>
            </div>

            <div className="reports-list">
              {reports.map((report, index) => (
                <div className="report-row" key={index}>
                  <div className="report-info">
                    <span className="report-name">{report.name}</span>
                    <span className="report-description">{report.description}</span>
                    <span className="report-formats">Formats: {report.formats}</span>
                  </div>
                  <button className="generate-btn">
                    <Download size={16} />
                    Generate
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Export Card */}
          <div className="card quick-export-card">
            <div className="card-header">
              <h2>Quick Export</h2>
              <p>Export current period data</p>
            </div>

            <div className="export-buttons">
              <button className="export-btn">Export All Claims (CSV)</button>
              <button className="export-btn">Export Members (CSV)</button>
              <button className="export-btn">Export Services (CSV)</button>
              <button className="export-btn">Custom Export</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
