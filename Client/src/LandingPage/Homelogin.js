import { useState } from "react";
import axios from "axios";

const Homelogin = () => {
  const [jobID, setJobID] = useState(18); // Specific job ID to fetch
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authorization token is missing");
      }

      const response = await axios.get(`https://3710-idx-project-1720162691714.cluster-3g4scxt2njdd6uovkqyfcabgo6.cloudworkstations.dev/addJobPost/listJobPosts/${jobID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setMessage(`Job Post found: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error('Error fetching job post:', error);
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("Failed to fetch job post. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Home Login</h1>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Loading..." : "Fetch Job Post"}
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Homelogin;
