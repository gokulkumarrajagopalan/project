import React from 'react';
import { Link } from "react-router-dom";


function LearningDefault() {
    // Define the variable inside the component
    const isUnderProgress = 0; // Set to 0 to hide the message

    return (
        <div className="learning-container">
            <h2 className="learning-title">Learning Hub</h2>

            {/* Conditionally render the message based on `isUnderProgress` */}
            {isUnderProgress === 1 && (
                <p className="learning-description">
                    This page is currently under progress. Stay tuned for more updates!
                </p>
            )}

            {/* Conditionally restrict the rest of the content */}
            {isUnderProgress === 0 && (
                <div className="link-container">
                    <h4>
                        <Link to="/DSAHome" className="learning-link">
                            Explore DSA
                        </Link>
                    </h4>
                </div>
            )}
        </div>
    );
}

export default LearningDefault;
