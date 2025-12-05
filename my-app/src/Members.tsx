import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import AddMemberModal from "./components/AddMemberModal";
import careteLogo from "./assets/carete_logo.png";
import membersData from "./data/members.json";
import { type Member, appendMemberToData } from "./utils/membersUtils";
import "./Members.css";

const Members: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [members, setMembers] = useState<Member[]>(membersData as Member[]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filterType, setFilterType] = useState<"dob" | "mcp" | "status" | null>(null);
  const [filterValue, setFilterValue] = useState<string>("");
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target as Node)) {
        setShowFilter(false);
      }
    };

    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  const handleAddMember = (newMember: Member) => {
    // Add new member to state
    const updatedMembers = appendMemberToData(members, newMember);
    setMembers(updatedMembers);
  };

  // Get unique MCP values for filter dropdown
  const uniqueMcps = Array.from(new Set(members.map(m => m.mcp)));

  // Filter members based on search term and selected filter
  const filteredMembers = members.filter((member) => {
    // Apply search filter
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      member.name.toLowerCase().includes(searchLower) ||
      member.id.toLowerCase().includes(searchLower) ||
      member.dob.toLowerCase().includes(searchLower) ||
      member.mcp.toLowerCase().includes(searchLower);

    // Apply selected filter
    let matchesFilter = true;
    if (filterType && filterValue) {
      switch (filterType) {
        case "dob":
          matchesFilter = member.dob.toLowerCase().includes(filterValue.toLowerCase());
          break;
        case "mcp":
          matchesFilter = member.mcp === filterValue;
          break;
        case "status":
          matchesFilter = member.status === filterValue.toLowerCase();
          break;
      }
    }

    return matchesSearch && matchesFilter;
  });

  // Reverse the array to show newest first (without mutating the original)
  const displayMembers = [...filteredMembers].reverse();

  const handleFilterSelect = (type: "dob" | "mcp" | "status") => {
    setFilterType(type);
    setFilterValue("");
    setShowFilter(false);
  };

  const clearFilter = () => {
    setFilterType(null);
    setFilterValue("");
  };


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <span  className="logo-link" onClick={() => navigate('/')}>
          <div className="logo">
            <img src={careteLogo} alt="Carete" className="logo-img" />
          </div>
        </span>

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
            <button className="add-member-btn" onClick={() => setIsModalOpen(true)}>
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
                  <input 
                    type="text" 
                    placeholder="Search by name, ID, or date birth..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="filter-dropdown" ref={filterDropdownRef}>
                  <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
                    <Filter size={16} />
                    Filter by
                  </button>
                  {showFilter && (
                    <div className="filter-menu">
                      <button 
                        className="filter-option"
                        onClick={() => handleFilterSelect("dob")}
                      >
                        DOB
                      </button>
                      <button 
                        className="filter-option"
                        onClick={() => handleFilterSelect("mcp")}
                      >
                        MCP
                      </button>
                      <button 
                        className="filter-option"
                        onClick={() => handleFilterSelect("status")}
                      >
                        Status
                      </button>
                    </div>
                  )}
                  {filterType && (
                    <div className="filter-input-container">
                      {filterType === "dob" && (
                        <input
                          type="text"
                          className="filter-input"
                          placeholder="Enter date (MM-DD-YYYY)"
                          value={filterValue}
                          onChange={(e) => setFilterValue(e.target.value)}
                        />
                      )}
                      {filterType === "mcp" && (
                        <select
                          className="filter-select"
                          value={filterValue}
                          onChange={(e) => setFilterValue(e.target.value)}
                        >
                          <option value="">Select MCP</option>
                          {uniqueMcps.map((mcp) => (
                            <option key={mcp} value={mcp}>
                              {mcp}
                            </option>
                          ))}
                        </select>
                      )}
                      {filterType === "status" && (
                        <select
                          className="filter-select"
                          value={filterValue}
                          onChange={(e) => setFilterValue(e.target.value)}
                        >
                          <option value="">Select Status</option>
                          <option value="pending">Pending</option>
                          <option value="active">Active</option>
                          <option value="ineligible">Ineligible</option>
                        </select>
                      )}
                      <button className="clear-filter-btn" onClick={clearFilter}>
                        Clear
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Members Table */}
            <div className="members-table">
              {displayMembers.map((member, index) => (
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
                  <button
                    className="view-details-btn"
                    onClick={() => navigate(`/members/${member.id}`)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Add Member Modal */}
      <AddMemberModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onAddMember={handleAddMember}
      />
    </div>
  );
};

export default Members;
