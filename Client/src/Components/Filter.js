import React, { useState } from "react"; 


const Filter = ({ showFilter, onToggleFilter, onFilter }) => {
    const [location, setLocation] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [company, setCompany] = useState('');
    const [sort, setSort] = useState('');
    const [workMode, setWorkMode] = useState([]);
    const [employmentType, setEmploymentType] = useState([]);
    const [salary, setSalary] = useState('');

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSkillsChange = (e) => {
        setSkills(e.target.value);
    };

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    };

    const handleWorkModeChange = (mode) => {
        if (workMode.includes(mode)) {
            setWorkMode(workMode.filter((m) => m !== mode));
        } else {
            setWorkMode([...workMode, mode]);
        }
    };

    const handleEmploymentTypeChange = (type) => {
        if (employmentType.includes(type)) {
            setEmploymentType(employmentType.filter((t) => t !== type));
        } else {
            setEmploymentType([...employmentType, type]);
        }
    };

    const handleFilter = () => {
        onFilter(location, skills, company, sort, workMode, experience, employmentType, salary);
    };

    const handleCancel = () => {
        setLocation('');
        setSkills('');
        setExperience('');
        setCompany('');
        setSort('');
        setWorkMode([]);
        setEmploymentType([]);
        onToggleFilter();
    };

    return showFilter ? (
        <div className="filter-container">
            <div className="filter-row">
                <div>
                    <label className="filter-label">Location:</label>
                    <input type="text" className="filter-input" value={location} onChange={handleLocationChange} />
                </div>
                <div>
                    <label className="filter-label">Skills:</label>
                    <input type="text" className="filter-input" value={skills} onChange={handleSkillsChange} />
                </div>
            </div>

            <div className="filter-row">
                <div>
                    <label className="filter-label">Company:</label>
                    <input type="text" className="filter-input" value={company} onChange={handleCompanyChange} />
                </div>
                <div>
                    <label className="filter-label">Experience:</label>
                    <select className="filter-select" value={experience} onChange={handleExperienceChange}>
                        <option value="">Select Experience</option>
                        <option value="Freshers">Freshers</option>
                        <option value="1-2 years">1-2 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="6-9 years">6-9 years</option>
                        <option value="10-15 years">10-15 years</option>
                        <option value="15+ years">15+ years</option>
                    </select>
                </div>
            </div>

            <div className="filter-row">
                <div>
                    <label className="filter-label">Sort:</label>
                    <select className="filter-select" value={sort} onChange={handleSortChange}>
                        <option value="">Sort</option>
                        <option value="7">Last 7 days</option>
                        <option value="15">Last 15 days</option>
                        <option value="30">Last 30 days</option>
                    </select>
                </div>
                <div>
                    <label className="filter-label">Salary:</label>
                    <select className="filter-select" value={salary} onChange={handleSalaryChange}>
                        <option value="">Select salary</option>
                        <option value="1-3 Lakhs">1-3 Lakhs</option>
                        <option value="3-5 Lakhs">3-5 Lakhs</option>
                        <option value="5-8 Lakhs">5-8 Lakhs</option>
                        <option value="8-13 Lakhs">8-13 Lakhs</option>
                        <option value="13-20 Lakhs">13-20 Lakhs</option>
                        <option value="20-40 Lakhs">20-40 Lakhs</option>
                        <option value="40-60 Lakhs">40-60 Lakhs</option>
                        <option value="60+ Lakhs">60+ Lakhs</option>
                    </select>
                </div>
            </div>

            <button className="filter-button" onClick={handleFilter}>Apply</button>
            <button className="filter-cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
    ) : null;
};

export default Filter;