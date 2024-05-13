import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Context } from "../../context/Context";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    Aos.init({ duration: 2000 });
    dispatch({ type: "LOGIN_START" });
    try {
      toast.loading("Waiting", {
        duration: 2000,
      });
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  // Tost Here
  const notify = () => {
    toast.loading("Waiting", {
      duration: 2000,
    });
  };
  // Tost Here
  return (
    <div className="login" data-aos="zoom-out">
      <span className="loginTitle" data-aos="flip-left">
        Login
      </span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username </label>
        <input
          required
          data-aos="flip-up"
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          required
          data-aos="flip-up"
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <Toaster position="top-right" />
      <button className="loginRegisterButton">
        <Link className="link" to="/register" onClick={notify}>
          Register
        </Link>
      </button>
    </div>
  );
}
export default Login;
