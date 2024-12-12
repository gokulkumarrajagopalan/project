import React from "react";

const PopupMessage = ({ open, title, message, onClose }) => {
  // Inline styles for the dialog components
  const dialogStyle = {
    display: open ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
    width: "300px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
  };

  const titleStyle = {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px"
  };

  const contentStyle = {
    padding: "10px",
  };

  const actionsStyle = {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px",
    borderTop: "1px solid #ccc"
  };

  return (
    <div style={dialogStyle}>
      <div style={titleStyle}>
        <h4>{title}</h4>
      </div>
      <div style={contentStyle}>
        <p>{message}</p>
      </div>
      <div style={actionsStyle}>
        <button onClick={onClose} style={{ padding: "5px 10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "3px", cursor: "pointer" }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupMessage;
