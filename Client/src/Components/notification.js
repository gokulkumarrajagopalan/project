import React, { useEffect } from "react";

function Notification({ showNotification, onToggleNotification }) {
  useEffect(() => {
    if (showNotification) {
      // Ensure scrolling is enabled
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to reset scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNotification]);

  return showNotification ? (
    <div className="NotificationContainer">
      <p>No Notification..!</p>
    </div>
  ) : null;
}

export default Notification;
