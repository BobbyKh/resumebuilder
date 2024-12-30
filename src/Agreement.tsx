import React, { useState } from "react";

const Agreement: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleAccept = () => {
    setStatus("accepted");
    alert("You have accepted the agreement.");
    // Additional actions (e.g., navigate to another page or submit data)
  };

  const handleDecline = () => {
    setStatus("declined");
    alert("You have declined the agreement.");
    // Additional actions (e.g., disable access or show a warning)
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", maxWidth: "600px", margin: "auto" }}>
      <h2>Terms and Conditions</h2>
      <p>
        Please read and accept the terms and conditions to proceed. If you decline, access to
        further features will be restricted.
      </p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAccept} style={{ marginRight: "10px", padding: "10px 20px", backgroundColor: "green", color: "white", border: "none", cursor: "pointer" }}>
          Accept
        </button>
        <button onClick={handleDecline} style={{ padding: "10px 20px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}>
          Decline
        </button>
      </div>
      {status && (
        <div style={{ marginTop: "20px", color: status === "accepted" ? "green" : "red" }}>
          {status === "accepted"
            ? "You have accepted the agreement."
            : "You have declined the agreement."}
        </div>
      )}
    </div>
  );
};

export default Agreement;
