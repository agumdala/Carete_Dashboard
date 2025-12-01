export interface Member {
  name: string;
  id: string;
  dob: string;
  mcp: string;
  lastService: string;
  status: "pending" | "active" | "ineligible";
}

/**
 * Formats form data into a Member object matching the members.json structure
 */
export const formatMemberData = (formData: {
  name: string;
  id: string;
  dob: string;
  mcp: string;
  lastService?: string;
  status: string;
}): Member => {
  const formatDate = (dateString: string): string => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  const formatStatus = (status: string): "pending" | "active" | "ineligible" => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus === "active") return "active";
    if (lowerStatus === "pending") return "pending";
    if (lowerStatus === "ineligible") return "ineligible";
    return "pending"; // default
  };

  return {
    name: formData.name || "",
    id: formData.id || "",
    dob: formatDate(formData.dob),
    mcp: formData.mcp || "",
    lastService: formData.lastService ? formatDate(formData.lastService) : "N/A",
    status: formatStatus(formData.status)
  };
};

/**
 * Appends a new member to the existing members array and returns the updated array
 */
export const appendMemberToData = (currentMembers: Member[], newMember: Member): Member[] => {
  return [...currentMembers, newMember];
};
