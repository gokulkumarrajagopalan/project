import { useNavigate } from "react-router-dom"; // Only useNavigate comes from react-router-dom
import { useEffect, useState } from "react"; // useEffect and useState are from react
import axios from "axios";
import CryptoJS from "crypto-js";

const Homelogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const secretKey = "your-secret-key";

  // Function to encrypt the URL
  const encryptUrl = (url) => {
    return CryptoJS.AES.encrypt(url, secretKey).toString();
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Encrypt the API URL
        const apiUrl =
          "https://3700-idx-project-1720162691714.cluster-3g4scxt2njdd6uovkqyfcabgo6.cloudworkstations.dev/addJobPost/listJobPosts";
        const encryptedUrl = encryptUrl(apiUrl);

        // Send the encrypted URL to the backend
        const response = await axios.post("/proxy", { encryptedUrl });

        // Handle response data
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Home Login</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Homelogin;
