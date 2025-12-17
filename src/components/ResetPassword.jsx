import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post(`/api/auth/reset-password/${token}`, { password });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Reset Password</h3>
      <form onSubmit={handleReset}>
        <input className="form-control mb-2" type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-danger w-100">Reset</button>
      </form>
    </div>
  );
}

export default ResetPassword;
