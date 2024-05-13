import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // PART SECOND HERE
  const handleSubmit = async (e) => {
    Aos.init({ duration: 1000 });
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  const notify = () => {
    // const toast = toast.success("Register Successfuly");
    if (toast === true) {
      toast.success("Register Successfuly");
    } else {
      toast.error("Fill The Form");
    }
  };

  return (
    <div className="Register" data-aos="zoom-in">
      <Toaster position="top-right" reverseOrder={false} />
      <span className="registerTitle" data-aos="fade-left">
        Register
      </span>
      <form className="registerForm" onSubmit={handleSubmit} method="POST">
        <label> username </label>
        <input
          data-aos="fade-left"
          className="registerInput"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label> Email </label>
        <input
          data-aos="fade-right"
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          data-aos="fade-left"
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="registerButton"
          type="submit"
          data-aos="zoom-in-up"
          onClick={notify}
        >
          Register
        </button>
      </form>
      <button data-aos="zoom-in-up" className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span className="error">Something went wrong!</span>}
    </div>
  );
}

export default Register;
