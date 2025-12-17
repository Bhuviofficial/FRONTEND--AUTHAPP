import { useState } from "react";
import API from "../services/api";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/forgot-password", { email });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Forgot Password</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <button className="btn btn-warning w-100">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
