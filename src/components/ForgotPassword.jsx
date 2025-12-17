import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgot = async () => {
    setMessage("");
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="card auth-card shadow p-4">
        <h4>Forgot Password</h4>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <input
          className="form-control mb-3"
          placeholder="Enter registered email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn btn-warning w-100" onClick={handleForgot}>
          Send Reset Link
        </button>
      </div>
    </div>
  );
}
