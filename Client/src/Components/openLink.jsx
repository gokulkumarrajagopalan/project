import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URLS, API_UI_URLS } from "../config";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL = `${API_URLS[ENV]}/addJobPost/listJobPosts`;
const JOB_URL = `${API_UI_URLS[ENV]}/viewjobs`;

const themes = {
  1: {
    container: { color: "#fff" },
    card: { backgroundColor: "rgba(0, 47, 255, 0.7)", color: "#fff" },
    button: { backgroundColor: "#0047ff", color: "#fff" },
    background:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=1920&q=80",
    video: null,
  },
  2: {
    container: { color: "#000" },
    card: { backgroundColor: "rgba(255, 165, 0, 0.8)", color: "#000" },
    button: { backgroundColor: "#ff8c00", color: "#fff" },
    background:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?fit=crop&w=1920&q=80",
    video: null,
  },
  3: {
    container: { color: "#fff" },
    card: { backgroundColor: "rgb(255 255 255 / 70%)", color: "#fff" },
    button: { backgroundColor: "rgb(255 255 255 / 70%)", color: "#fff" },
    video: "https://cdn.pixabay.com/video/2024/02/23/201735-916310640_small.mp4",
  },
  4: {
    container: { color: "#000" },
    card: { backgroundColor: "rgb(255 255 255 / 70%)", color: "#000" },
    button: { backgroundColor: "#ff69b4", color: "#fff" },
    video: "https://cdn.pixabay.com/video/2017/11/02/12716-241674181_medium.mp4",
  },
};

const OpenLink = () => {
  const [theme, setTheme] = useState(1);
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTheme(Math.floor(Math.random() * 4) + 1);

    const fetchJobData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setJobData(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();
  }, []);

  const currentTheme = themes[theme];

  const handleLinkClick = (jobId) => {
    const url = `${JOB_URL}/${jobId}`;
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        ...currentTheme.container,
        position: "relative",
        padding: "20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        {currentTheme.video ? (
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.6)",
            }}
          >
            <source src={currentTheme.video} type="video/mp4" />
          </video>
        ) : (
          <div
            style={{
              backgroundImage: `url(${currentTheme.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              filter: "brightness(0.8)",
            }}
          />
        )}
      </div>

      {loading ? (
        <p>Loading job posts...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          {jobData.map((job, index) => (
            <div
              key={index}
              style={{
                ...currentTheme.card,
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
              onClick={() => handleLinkClick(job.jobID)} // Corrected here
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
              }}
            >
              {`${job.role} | ${job.companyName} | ${job.qualification} | ${job.experience} `}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OpenLink;
