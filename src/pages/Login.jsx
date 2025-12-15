import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");

  const handleLogin = (role) => {
    setUser({ role, email });

    if (role === "user") navigate("/user");
    if (role === "instructor") navigate("/instructor");
    if (role === "admin") navigate("/admin");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Mini Edu Platform</h2>

        <input
          type="email"
          placeholder="E-posta adresiniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={() => handleLogin("user")}>User Login</button>
        <button onClick={() => handleLogin("instructor")}>
          Instructor Login
        </button>
        <button onClick={() => handleLogin("admin")}>Admin Login</button>

        <div className="login-hint">
          Demo login – rol seçerek giriş yapabilirsiniz
        </div>
      </div>
    </div>
  );
}

export default Login;
