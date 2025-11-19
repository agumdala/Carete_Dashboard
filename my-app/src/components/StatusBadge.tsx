import React from "react";
import { Clock, CheckCircle, XCircle } from "lucide-react";
import "./StatusBadge.css";

type StatusType = "pending" | "approved" | "active" | "submitted" | "denied" | "paid" | "ineligible";

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label }) => {
  const getStatusLabel = () => {
    if (label) return label;
    switch (status) {
      case "pending": return "Pending";
      case "approved": return "Approved";
      case "active": return "Active";
      case "submitted": return "Submitted";
      case "denied": return "Denied";
      case "paid": return "Paid";
      case "ineligible": return "Ineligible";
      default: return status;
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "pending":
      case "submitted":
        return <Clock size={10} />;
      case "approved":
      case "active":
      case "paid":
        return <CheckCircle size={10} />;
      case "denied":
      case "ineligible":
        return <XCircle size={10} />;
      default:
        return null;
    }
  };

  return (
    <span className={`status-badge ${status}`}>
      {getStatusIcon()} {getStatusLabel()}
    </span>
  );
};

export default StatusBadge;
