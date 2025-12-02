import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
    ArrowLeft,
    Check,
    Edit,
    Mail,
    Calendar
} from "lucide-react";
import careteLogo from "./assets/carete_logo.png";
import membersData from "./data/members.json";
import { type Member } from "./utils/membersUtils";
import "./MemberDetails.css";

const MemberDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<"services" | "billing" | "documents">("services");

    // Find the member by ID
    const member = (membersData as Member[]).find((m) => m.id === id);

    if (!member) {
        return (
            <div className="dashboard-container">
                <div className="main-content">
                    <div className="error-message">
                        <h2>Member not found</h2>
                        <button onClick={() => navigate("/members")}>Back to Members</button>
                    </div>
                </div>
            </div>
        );
    }

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
                        <div className="user-avatar">UR</div>
                        <span className="user-name">Unity Roots</span>
                        <ChevronDown size={14} />
                        <div className="notification-wrapper">
                            <Bell size={18} />
                            <span className="notification-dot"></span>
                        </div>
                    </div>
                </header>

                {/* Member Details Content */}
                <div className="member-details-content">
                    {/* Back Button */}
                    <button className="back-button" onClick={() => navigate("/members")}>
                        <ArrowLeft size={18} />
                        Back to Members
                    </button>

                    {/* Member Profile Card */}
                    <div className="member-profile-card">
                        <div className="profile-header">
                            <div className="profile-left">
                                <div className="profile-avatar">
                                    <User size={48} />
                                </div>
                                <div className="profile-info">
                                    <h1 className="profile-member-name">{member.name}</h1>
                                    <p className="member-id-display">Member ID: {member.id}</p>
                                </div>
                            </div>
                            <div className="profile-right">
                                <div className="care-plan-section">
                                    <span className="care-plan-label">Managed Care Plan</span>
                                    <span className="care-plan-value">{member.mcp}</span>
                                </div>
                                <div className="status-badges">
                                    <div className="eligibility-badge">
                                        <Check size={16} />
                                        Eligible
                                    </div>
                                    <div className="active-badge">
                                        <Check size={16} />
                                        Active
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="quick-actions">
                            <button className="action-btn action-btn-primary">
                                <Edit size={18} />
                                Edit Member
                            </button>
                            <button className="action-btn action-btn-secondary">
                                <Mail size={18} />
                                Send Message
                            </button>
                            <button className="action-btn action-btn-secondary">
                                <Calendar size={18} />
                                Schedule Appointment
                            </button>
                        </div>

                        {/* Member Information */}
                        <div className="member-information">
                            <h3 className="section-title">Member Information</h3>
                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-label">Date of Birth</span>
                                    <span className="info-value">{member.dob}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Gender</span>
                                    <span className="info-value">Male</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Email</span>
                                    <span className="info-value">doej75@aol.com</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Phone</span>
                                    <span className="info-value">(555) 1223-4567</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Address</span>
                                    <span className="info-value">123 Main Street<br />Los Angeles, CA 90001</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Country of Residence</span>
                                    <span className="info-value">United States of America</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Primary Language</span>
                                    <span className="info-value">English</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Medi-Cal ID</span>
                                    <span className="info-value">xxx - xx - xxxx</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Household Size</span>
                                    <span className="info-value">1</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Monthly Income</span>
                                    <span className="info-value">&lt; $50,000</span>
                                </div>
                            </div>
                        </div>

                        {/* Tab Navigation */}
                        <div className="tab-navigation">
                            <button
                                className={`tab-button ${activeTab === "services" ? "active" : ""}`}
                                onClick={() => setActiveTab("services")}
                            >
                                Services
                            </button>
                            <button
                                className={`tab-button ${activeTab === "billing" ? "active" : ""}`}
                                onClick={() => setActiveTab("billing")}
                            >
                                Billing
                            </button>
                            <button
                                className={`tab-button ${activeTab === "documents" ? "active" : ""}`}
                                onClick={() => setActiveTab("documents")}
                            >
                                Documents
                            </button>
                        </div>

                        {/* Tab Content */}
                        {activeTab === "services" && (
                            <div className="tab-content">
                                <div className="service-history">
                                    <h3 className="section-title">Service History</h3>
                                    <p className="section-subtitle">Services provided to this member</p>

                                    <div className="service-item">
                                        <div className="service-field">
                                            <span className="service-label">Service Type</span>
                                            <span className="service-value">Care Coordination</span>
                                        </div>
                                        <div className="service-field">
                                            <span className="service-label">Service Date</span>
                                            <span className="service-value">Care Coordination</span>
                                        </div>
                                        <div className="service-field">
                                            <span className="service-label">Amount</span>
                                            <span className="service-value">$450.00</span>
                                        </div>
                                        <div className="service-status">
                                            <Check size={16} />
                                            Paid
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "billing" && (
                            <div className="tab-content">
                                <div className="billing-content">
                                    <h3 className="section-title">Billing Information</h3>
                                    <p className="section-subtitle">Coming soon...</p>
                                </div>
                            </div>
                        )}

                        {activeTab === "documents" && (
                            <div className="tab-content">
                                <div className="documents-content">
                                    <h3 className="section-title">Documents</h3>
                                    <p className="section-subtitle">Coming soon...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MemberDetails;