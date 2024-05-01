import React, { useState } from "react";

const Filter = ({ showFilter, onToggleFilter, onFilter }) => {
    const [location, setLocation] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [company, setCompany] = useState('');
    const [sort, setSort] = useState('');
    const [workMode, setWorkMode] = useState([]);
    const [employmentType, setEmploymentType] = useState([]);
    const [salary ,setSalary] = useState('');
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
            <label>Location:</label> 
            <input type="text" value={location} onChange={handleLocationChange} />

            <label>Skills:</label> 
            <input type="text" value={skills} onChange={handleSkillsChange} />

            <label>Company</label>
            <input type="text" value={company} onChange={handleCompanyChange} />

            <label>Experience:</label>
            <select value={experience} onChange={handleExperienceChange}>
                <option value="">Select Experience</option>
                <option value="Freshers">Freshers</option>
                <option value="1-2 years">1-2 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="6-9 years">6-9 years</option>
                <option value="10-15 years">10-15 years</option>
                <option value="15+ years">15+ years</option>
            </select>

            <label>Sort:</label>
            <select value={sort} onChange={handleSortChange}>
                <option value="">Sort</option>
                <option value="7">Last 7 days</option>
                <option value="15">Last 15 days</option>
                <option value="30">Last 30 days</option>
            </select>


            <label>salary</label>
            <select value={salary} onChange={handleSalaryChange}>
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

            <label>Work Mode:</label>
            <div>
                <input type="checkbox" checked={workMode.includes('office')} onChange={() => handleWorkModeChange('office')} />
                <label>Work from Office</label>
            </div>
            <div>
                <input type="checkbox" checked={workMode.includes('hybrid')} onChange={() => handleWorkModeChange('hybrid')} />
                <label>Hybrid</label>
            </div>
            <div>
                <input type="checkbox" checked={workMode.includes('remote')} onChange={() => handleWorkModeChange('remote')} />
                <label>Remote</label>
            </div>

            <label>Employment Type:</label>
            <div>
                <input type="checkbox" checked={employmentType.includes('part-time')} onChange={() => handleEmploymentTypeChange('part-time')} />
                <label>Part-time</label>
            </div>
            <div>
                <input type="checkbox" checked={employmentType.includes('full-time')} onChange={() => handleEmploymentTypeChange('full-time')} />
                <label>Full-time</label>
            </div>
            <div>
                <input type="checkbox" checked={employmentType.includes('contract')} onChange={() => handleEmploymentTypeChange('contract')} />
                <label>Contract</label>
            </div>

            <button onClick={handleFilter}>Apply</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    ) : null;
};

export default Filter;
