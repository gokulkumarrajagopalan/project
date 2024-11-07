import React, { useState } from 'react';
import NavBar from "../LandingPage/NavBar";
const Setting = () => {
    const [activeSection, setActiveSection] = useState("account");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notifications, setNotifications] = useState({
        email: false,
        sms: false,
        push: true,
    });
    const [privacySettings, setPrivacySettings] = useState({
        profileVisibility: "public",
        searchEngineIndexing: false,
    });
    const [careerPreferences, setCareerPreferences] = useState({
        jobAlerts: true,
        preferredJobTypes: [],
        locationPreferences: "",
    });

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const toggleNotification = (type) => {
        setNotifications((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    const handlePrivacyChange = (e) => {
        const { name, value, type, checked } = e.target;
        setPrivacySettings((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleCareerPreferenceChange = (e) => {
        const { name, value } = e.target;
        setCareerPreferences((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="settings-container">
             <NavBar />
            <h1>Settings</h1>
            <div className="settings-navigation">
                <button
                    onClick={() => handleSectionChange("account")}
                    className={activeSection === "account" ? "active" : ""}
                >
                    Account
                </button>
                <button
                    onClick={() => handleSectionChange("community")}
                    className={activeSection === "community" ? "active" : ""}
                >
                    Community
                </button>
                <button
                    onClick={() => handleSectionChange("privacy")}
                    className={activeSection === "privacy" ? "active" : ""}
                >
                    Privacy
                </button>
                <button
                    onClick={() => handleSectionChange("career")}
                    className={activeSection === "career" ? "active" : ""}
                >
                    Career Preferences
                </button>
            </div>

            <div className="settings-content">
                {activeSection === "account" && (
                    <div>
                        <h2>Account Settings</h2>
                        <p>Manage your account details and preferences.</p>
                        <label>
                            New Password:
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </label>
                        <label>
                            Confirm Password:
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                        </label>
                        <button onClick={() => alert('Password changed!')}>Change Password</button>
                    </div>
                )}

                {activeSection === "community" && (
                    <div>
                        <h2>Community Settings</h2>
                        <p>Configure how you interact with the community.</p>
                        <label>
                            Email Notifications:
                            <input
                                type="checkbox"
                                checked={notifications.email}
                                onChange={() => toggleNotification("email")}
                            />
                        </label>
                        <label>
                            SMS Notifications:
                            <input
                                type="checkbox"
                                checked={notifications.sms}
                                onChange={() => toggleNotification("sms")}
                            />
                        </label>
                        <label>
                            Push Notifications:
                            <input
                                type="checkbox"
                                checked={notifications.push}
                                onChange={() => toggleNotification("push")}
                            />
                        </label>
                    </div>
                )}

                {activeSection === "privacy" && (
                    <div>
                        <h2>Privacy Settings</h2>
                        <p>Adjust your privacy settings to control your data.</p>
                        <label>
                            Profile Visibility:
                            <select
                                name="profileVisibility"
                                value={privacySettings.profileVisibility}
                                onChange={handlePrivacyChange}
                            >
                                <option value="public">Public</option>
                                <option value="friends">Friends Only</option>
                                <option value="private">Private</option>
                            </select>
                        </label>
                        <label>
                            Allow Search Engine Indexing:
                            <input
                                type="checkbox"
                                name="searchEngineIndexing"
                                checked={privacySettings.searchEngineIndexing}
                                onChange={handlePrivacyChange}
                            />
                        </label>
                    </div>
                )}

                {activeSection === "career" && (
                    <div>
                        <h2>Career Preferences</h2>
                        <p>Set your preferences for job alerts and career-related communications.</p>
                        <label>
                            Receive Job Alerts:
                            <input
                                type="checkbox"
                                name="jobAlerts"
                                checked={careerPreferences.jobAlerts}
                                onChange={(e) =>
                                    setCareerPreferences({
                                        ...careerPreferences,
                                        jobAlerts: e.target.checked,
                                    })
                                }
                            />
                        </label>
                        <label>
                            Preferred Job Types:
                            <input
                                type="text"
                                name="preferredJobTypes"
                                placeholder="e.g., Full-time, Remote"
                                value={careerPreferences.preferredJobTypes}
                                onChange={handleCareerPreferenceChange}
                            />
                        </label>
                        <label>
                            Location Preferences:
                            <input
                                type="text"
                                name="locationPreferences"
                                placeholder="e.g., New York, Remote"
                                value={careerPreferences.locationPreferences}
                                onChange={handleCareerPreferenceChange}
                            />
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Setting;
