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
  CheckCircle,
  AlertTriangle,
  Filter
} from "lucide-react";
import StatusBadge from "./components/StatusBadge";
import careteLogo from "./assets/carete_logo.png";
import "./Claims.css";

const Claims: React.FC = () => {
  const claims = [
    { id: "CLM-2024-1234", date: "10-13-2025", member: "James Wilson", service: "Care Coordination", serviceDate: "11-11-2025", status: "pending" },
    { id: "CLM-2024-1235", date: "01-26-2025", member: "Jane Smith", service: "Transportation", serviceDate: "03-11-2025", status: "active" },
    { id: "CLM-2024-1236", date: "10-28-2025", member: "Bob Johnson", service: "Mental Health", serviceDate: "06-11-2025", status: "active" },
    { id: "CLM-2024-1237", date: "10-23-2025", member: "Maria Garcia", service: "Housing Support", serviceDate: "09-11-2025", status: "denied" },
    { id: "CLM-2024-1238", date: "10-19-2025", member: "Jeffery Wisch", service: "Care Coordination", serviceDate: "10-11-2025", status: "active" },
  ];


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src={careteLogo} alt="Carete" className="logo-img" />
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
                <li className="active">
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

        {/* Claims Content */}
        <div className="dashboard-content">
          <div className="page-header">
            <div className="dashboard-header">
              <h1>Claims Tracker</h1>
              <p>Submit and track reimbursement claims</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Total Claims</span>
              </div>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Paid</span>
                <span className="stat-icon active"><CheckCircle size={20} /></span>
              </div>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Submitted</span>
                <span className="stat-icon submitted"><FileText size={20} /></span>
              </div>
              <span className="stat-value">45</span>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Denied</span>
                <span className="stat-icon alerts"><AlertTriangle size={20} /></span>
              </div>
              <span className="stat-value">3</span>
            </div>
          </div>

          {/* Claims Card */}
          <div className="card claims-card">
            <div className="card-top">
              <div className="card-header">
                <h2>Claims</h2>
                <p>View and manage all claims</p>
              </div>
              <div className="card-actions">
                <div className="claims-search-bar">
                  <Search size={16} className="search-icon" />
                  <input type="text" placeholder="Search by name, ID, or date birth..." />
                </div>
                <button className="filter-btn">
                  <Filter size={16} />
                  Filter by
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="claims-tabs">
              <button className="tab-btn active">All</button>
              <button className="tab-btn">Submitted</button>
              <button className="tab-btn">Paid</button>
              <button className="tab-btn">Denied</button>
              <button className="tab-btn">Appealed</button>
            </div>

            {/* Claims Table */}
            <div className="claims-table">
              {claims.map((claim, index) => (
                <div className="claim-row" key={index}>
                  <div className="claim-info">
                    <div className="claim-id-date">
                      <span className="claim-id">{claim.id}</span>
                      <span className="claim-date">{claim.date}</span>
                    </div>
                  </div>
                  <div className="claim-field">
                    <span className="field-label">Member</span>
                    <span className="field-value">{claim.member}</span>
                  </div>
                  <div className="claim-field">
                    <span className="field-label">Service</span>
                    <span className="field-value">{claim.service}</span>
                  </div>
                  <div className="claim-field">
                    <span className="field-label">Service Date</span>
                    <span className="field-value">{claim.serviceDate}</span>
                  </div>
                  <div className="claim-field">
                    <span className="field-label">Status</span>
                    <StatusBadge status={claim.status as "pending" | "active" | "denied"} />
                  </div>
                  <button className="view-details-btn">View Details</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Claims;
