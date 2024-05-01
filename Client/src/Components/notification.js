import React from "react";

function Notification(showNotification  , ontoggleNOtificaton){


    return showNotification ? (
        <div className="NotificationContainer">

            <p>No Notification..!</p>

        </div>

    ) : null;


}

export default Notification;