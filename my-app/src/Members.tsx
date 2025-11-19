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
  UserPlus,
  Filter,
  IdCard
} from "lucide-react";
import StatusBadge from "./components/StatusBadge";
import careteLogo from "./assets/carete_logo.png";
import "./Members.css";

const Members: React.FC = () => {
  const members = [
    { name: "Maria Garcia", id: "M-001", dob: "03-15-1978", mcp: "LA Care", lastService: "N/A", status: "pending" },
    { name: "James Wilson", id: "M-007", dob: "03-13-1988", mcp: "LA Care", lastService: "N/A", status: "pending" },
    { name: "Sarah Chen", id: "M-005", dob: "07-08-1998", mcp: "Health Net", lastService: "10-08-2025", status: "active" },
    { name: "Robert Johnson", id: "M-004", dob: "03-15-1978", mcp: "Blue Shield Promise", lastService: "11-01-2025", status: "active" },
    { name: "Jane Smith", id: "M-002", dob: "02-21-1978", mcp: "Health Net", lastService: "10-28-2025", status: "active" },
    { name: "John Doe", id: "M-003", dob: "05-12-1975", mcp: "Blue Shield Promise", lastService: "10-25-2025", status: "pending" },
    { name: "Henry Hardly", id: "M-006", dob: "04-21-1990", mcp: "LA Care", lastService: "N/A", status: "pending" },
    { name: "Quinn Ledger", id: "M-008", dob: "05-16-1999", mcp: "Unknown", lastService: "N/A", status: "ineligible" },
    { name: "Draco Malfroy", id: "M-010", dob: "06-05-1980", mcp: "Regal Herbs", lastService: "N/A", status: "pending" },
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
                <li className="active">
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

        {/* Members Content */}
        <div className="dashboard-content">
          <div className="page-header">
            <div className="dashboard-header">
              <h1>Members</h1>
              <p>Manage member profiles and eligibility</p>
            </div>
            <button className="add-member-btn">
              <UserPlus size={18} />
              Add Member
            </button>
          </div>

          {/* Eligibility Queue Card */}
          <div className="card members-card">
            <div className="card-top">
              <div className="card-header">
                <h2>Eligibility Queue</h2>
                <p>Members awaiting eligibility confirmation.</p>
              </div>
              <div className="card-actions">
                <div className="member-search-bar">
                  <Search size={16} className="search-icon" />
                  <input type="text" placeholder="Search by name, ID, or date birth..." />
                </div>
                <button className="filter-btn">
                  <Filter size={16} />
                  Filter by
                </button>
              </div>
            </div>

            {/* Members Table */}
            <div className="members-table">
              {members.map((member, index) => (
                <div className="member-row" key={index}>
                  <div className="member-info">
                    <IdCard size={24} className="member-icon" />
                    <div className="member-name-id">
                      <span className="member-name">{member.name}</span>
                      <span className="member-id">{member.id}</span>
                    </div>
                  </div>
                  <div className="member-field">
                    <span className="field-label">DOB</span>
                    <span className="field-value">{member.dob}</span>
                  </div>
                  <div className="member-field">
                    <span className="field-label">MCP</span>
                    <span className="field-value">{member.mcp}</span>
                  </div>
                  <div className="member-field">
                    <span className="field-label">Last Service</span>
                    <span className="field-value">{member.lastService}</span>
                  </div>
                  <div className="member-field">
                    <span className="field-label">Status</span>
                    <StatusBadge status={member.status as "pending" | "active" | "ineligible"} />
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

export default Members;
