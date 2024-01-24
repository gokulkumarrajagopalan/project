import React, { useState, useEffect } from 'react';

function JobPostDetail() {
  const [ExpireOn, SetExpireOn] = useState('');
  const [jobDetails, setJobDetails] = useState({
    role: '',
    companyName: '',
    skills: [],
    ctc: '',
    description: '',
    companyLogo: null,
  });
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch('http://localhost:8090/MasSkillList');
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    fetchSuggestions();
  }, []);

  const handleDateChange = (e) => {
    SetExpireOn(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Data Saved Successfully');
  };

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === 'file') {
      setJobDetails((prevJobDetails) => ({
        ...prevJobDetails,
        [name]: files[0],
      }));
    } else if (name === 'skills') {
      setInputValue(value);
    } else {
      setJobDetails((prevJobDetails) => ({
        ...prevJobDetails,
        [name]: value,
      }));
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      const tagText = inputValue.trim();

      if (tagText && !jobDetails.skills.includes(tagText)) {
        setJobDetails((prevJobDetails) => ({
          ...prevJobDetails,
          skills: [...prevJobDetails.skills, tagText],
        }));
        setInputValue('');
      }
    }
  };

  const handleTagRemove = (index) => {
    setJobDetails((prevJobDetails) => {
      const updatedSkills = [...prevJobDetails.skills];
      updatedSkills.splice(index, 1);
      return { ...prevJobDetails, skills: updatedSkills };
    });
  };

  const handleSuggestionClick = (suggestion) => {
    setJobDetails((prevJobDetails) => ({
      ...prevJobDetails,
      skills: [...prevJobDetails.skills, suggestion.Skills],
    }));
    setInputValue('');
  };

  return (
    <div className="job-post-detail-container">
      <div className="job-post-detail-left">
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                <th>Job Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="td_hover">
                <td>Role</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="role"
                    value={jobDetails.role}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Company Name</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="companyName"
                    value={jobDetails.companyName}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Skills</td>
                <td>
                  <div className="tags-input">
                    <ul className="tags">
                      {jobDetails.skills.map((skill, index) => (
                        <li className="tag" key={index}>
                          <span className="tag-title">{skill}</span>
                          <span className="tag-close-icon" onClick={() => handleTagRemove(index)}>
                            ×
                          </span>
                        </li>
                      ))}
                    </ul>
                    <input
                      type="text"
                      className="tag-input"
                      placeholder="Add a skill"
                      value={inputValue}
                      name="skills"
                      onChange={handleInputChange}
                      onKeyDown={handleInputKeyDown}
                    />
                    {suggestions.length > 0 && (
                      <ul className="suggestions">
                        {suggestions.map((suggestion, index) => (
                          <li className="suggestion" key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </td>
              </tr>
              <tr className="td_hover">
                <td>Qualification</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="skills"
                    value={jobDetails.skills}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>From CTC</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="Fromctc"
                    value={jobDetails.Fromctc}
                    onChange={handleInputChange}
                  />
                </td>
                <td>To CTC</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="Toctc"
                    value={jobDetails.Toctc}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>From Experience</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="FromExperience"
                    value={jobDetails.FromExperience}
                    onChange={handleInputChange}
                  />
                </td>
                <td>To Experience</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="ToExperience"
                    value={jobDetails.ToExperience}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Apply Link</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="ApplyLink"
                    value={jobDetails.Applylink}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Expire On</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="Expireson"
                    value={jobDetails.ExpireOn}
                    onChange={handleDateChange}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Company Logo</td>
                <td>
                  <input
                    type="file"
                    className="job-file-input"
                    name="companyLogo"
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Description</td>
                <td>
                  
                  <textarea
                    className="job-textarea"
                    name="description"
                    value={jobDetails.description}
                    onChange={handleInputChange}
                  ></textarea>
                </td>
              </tr>
              <tr className="td_hover"> 
                <td>
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div className="job-post-detail-Next">
        <h2>Preview</h2>
        <div className="preview-container">
          <p>
            <strong>Role:</strong> {jobDetails.role}
          </p>
          <p>
            <strong>Company Name:</strong> {jobDetails.companyName}
          </p>
          <p>
            <strong>Skills:</strong> {jobDetails.skills.join(', ')}
          </p>
          <p>
            <strong>CTC:</strong> {jobDetails.ctc}
          </p>
          <p>
            <strong>Description:</strong> {jobDetails.description}
          </p>
          <p>
            <strong>Company Logo:</strong>
          </p>
          {jobDetails.companyLogo && (
            <img
              src={URL.createObjectURL(jobDetails.companyLogo)}
              alt="Company Logo"
              className="preview-image"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default JobPostDetail;
