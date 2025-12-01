import React, { useRef } from "react";
import { X } from "lucide-react";
import { formatMemberData, type Member } from "../utils/membersUtils";
import "./AddMemberModal.css";

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMember: (member: Member) => void;
}

const AddMemberModal: React.FC<AddMemberModalProps> = ({ isOpen, onClose, onAddMember }) => {
  const formRef = useRef<HTMLFormElement>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const rawData = {
      name: formData.get("member-name") as string,
      id: formData.get("member-id") as string,
      dob: formData.get("member-dob") as string,
      mcp: formData.get("member-mcp") as string,
      lastService: formData.get("last-service-date") as string,
      status: formData.get("member-status") as string
    };

    // Format the member object matching members.json structure
    const newMember = formatMemberData(rawData);

    // Pass the new member to parent component
    onAddMember(newMember);
    
    // Reset form
    formRef.current.reset();
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Member</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="modal-body">
          <form ref={formRef} className="add-member-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="member-name">Full Name</label>
              <input
                type="text"
                id="member-name"
                name="member-name"
                placeholder="Enter member's full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="member-dob">Date of Birth</label>
              <input
                type="date"
                id="member-dob"
                name="member-dob"
                placeholder="MM-DD-YYYY"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="member-mcp">MCP</label>
              <select id="member-mcp" name="member-mcp" required>
                <option value="">Select MCP</option>
                <option value="LA Care">LA Care</option>
                <option value="Health Net">Health Net</option>
                <option value="Blue Shield Promise">Blue Shield Promise</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="member-id">Member ID</label>
              <input
                type="text"
                id="member-id"
                name="member-id"
                placeholder="Enter member ID"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-service-date">Date of Last Service</label>
              <input
                type="date"
                id="last-service-date"
                name="last-service-date"
                placeholder="MM-DD-YYYY"
              />
            </div>
            <div className="form-group">
              <label htmlFor="member-status">Eligibility Status</label>
              <select id="member-status" name="member-status" required>
                <option value="">Select Eligibility Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="ineligible">Ineligible</option>
              </select>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="modal-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-submit-btn" onClick={handleSubmit}>
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;

