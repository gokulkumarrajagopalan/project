import React from "react";
import { Link } from "react-router-dom";

function NotAuthorize() {
    return (
        <div className="notAuthorizeContainer">
            <h2>Access Denied</h2>
            <p>Sorry, you are not authorized to view this page.</p>
            <Link to="/" className="button-link">
                <button>Go to Home</button>
            </Link>
        </div>
    );
}

export default NotAuthorize;
