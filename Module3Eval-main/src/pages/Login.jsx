import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    if (email === "admin@gmail.com" && pass === "admin1234") {
      login("admin");
      alert("Login Success");
      navigate("/admin/dashboard");
    } else if (email === "customer@gmail.com" && pass === "customer1234") {
      login("customer");
      alert("Login Success");
      navigate("/customers/dashboard");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input ref={emailRef} placeholder="Email" />
      <input ref={passRef} type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
