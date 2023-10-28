import { FaEye, FaEyeSlash, FaSignInAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import SocialLogIn from "../../components/common/socialLogin/SocialLogIn";
import Swal from "sweetalert2";
import { ThemeContext } from "../../providers/ThemeProvider";
import axios from "axios";
import logInImage from "../../assets/images/login/login.svg";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { isDarkMode } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const { logInWithEmailAndPassword, sendEmailToResetPassword } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);

  // Redirect to the desired route
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setSuccess("");
    setError("");

    logInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const loggedInUser = userCredential.user;
        console.log(loggedInUser);
        const user = { email };
        console.log(user);
        axios
          .post("http://localhost:5000/jwt", user, {
            withCredentials: true,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.user || loggedInUser.uid) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login is successful!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            }
          });

        if (user.uid) {
          setSuccess("Login is successful!");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if (error.code === "auth/wrong-password") {
          setError("Wrong password!");
        }
        if (error.code === "auth/user-not-found") {
          setError("Email not found!");
        }
      });
  };
  const handleResetUserPassword = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
    sendEmailToResetPassword(email)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Password reset email is sent!",
          showConfirmButton: false,
          timer: 1500,
        });
        setSuccess("Password reset email is sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
      });
  };

  return (
    <div
      className={`hero min-h-[calc(100vh-4rem)]  ${
        isDarkMode ? "theme-dark" : "bg-base-200"
      }`}
    >
      <div className="hero-content">
        <div className="text-center lg:text-left">
          <img src={logInImage} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="lg:text-3xl text-center font-bold text-indigo-600 lg:mt-2">
            Login
          </h1>
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="Email..."
                className="input input-sm input-bordered"
              />
            </div>
            <div className="form-control relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-sm input-bordered"
              />
              <span
                className="absolute right-2 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="form-control">
              {error && (
                <p className="text-xs text-red-400">{error.toString()}</p>
              )}
              {success && (
                <p className="text-xs text-green-400">{success.toString()}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <Link
                  onClick={handleResetUserPassword}
                  className="label-text-alt link link-hover m-0"
                >
                  Forgot password? Reset password
                </Link>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover m-0"
                >
                  Not a member yet ? Register
                </Link>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">
                <FaSignInAlt /> Login
              </button>
              <div className="divider">OR</div>
            </div>
          </form>
          <div className="px-8 -mt-10">
            <SocialLogIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
