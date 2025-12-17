import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/auth/reset-password/${token}`)
      .then(() => setValid(true))
      .catch(() => setError("Reset link expired or invalid"));
  }, [token]);

  const handleReset = async () => {
    setMessage("");
    setError("");

    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Reset failed");
    }
  };

  if (!valid) return <div className="alert alert-danger mt-5 text-center">{error}</div>;

  return (
    <div className="container">
      <div className="card auth-card shadow p-4">
        <h4>Reset Password</h4>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <input
          type="password"
          className="form-control mb-3"
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-success w-100" onClick={handleReset}>
          Update Password
        </button>
      </div>
    </div>
  );
}
