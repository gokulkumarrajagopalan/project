import React, { useState } from 'react';

const Setting = () => {
    const [activeSection, setActiveSection] = useState("account");

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <div className="settings-navigation">
                <button onClick={() => handleSectionChange("account")}>
                    Account
                </button>
                <button onClick={() => handleSectionChange("community")}>
                    Community
                </button>
                <button onClick={() => handleSectionChange("privacy")}>
                    Privacy
                </button>
                <button onClick={() => handleSectionChange("career")}>
                    Career Preferences
                </button>
            </div>

            <div className="settings-content">
                {activeSection === "account" && (
                    <div>
                        <h2>Account Settings</h2>
                        <p>Manage your account details and preferences.</p>
                        {/* Add your account settings form here */}
                    </div>
                )}

                {activeSection === "community" && (
                    <div>
                        <h2>Community Settings</h2>
                        <p>Configure how you interact with the community.</p>
                        {/* Add your community settings here */}
                    </div>
                )}

                {activeSection === "privacy" && (
                    <div>
                        <h2>Privacy Settings</h2>
                        <p>Adjust your privacy settings to control your data.</p>
                        {/* Add your privacy settings here */}
                    </div>
                )}

                {activeSection === "career" && (
                    <div>
                        <h2>Career Preferences</h2>
                        <p>Set your preferences for job alerts and career-related communications.</p>
                        {/* Add your career preferences form here */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Setting;
