import { useState } from "react";
import API from "../services/api";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/register", { email, password });
      alert(res.data.message || "Registered successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Register</h3>
      <form onSubmit={handleRegister}>
        <input className="form-control mb-2" type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="form-control mb-2" type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;
