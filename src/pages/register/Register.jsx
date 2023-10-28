import { FaEye, FaEyeSlash, FaUserFriends } from "react-icons/fa";
import { useContext, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ThemeContext } from "../../providers/ThemeProvider";
import registerImage from "../../assets/images/login/login.svg";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    registerUserWithEmailAndPassword,
    updateUserProfile,
    sendEmailToResetPassword,
    handleVerifyEmailAddress,
  } = useContext(AuthContext);

  const { isDarkMode } = useContext(ThemeContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const terms = form.terms.checked;
    console.log(name, imageUrl, email, password, confirmPassword, terms);
    setSuccess("");
    setError("");
    if (name.trim() === "") {
      setError("Name field is empty!");
      return;
    } else if (imageUrl.trim() === "") {
      setError("Image url field is empty!");
      return;
    } else if (email.trim() === "") {
      setError("Email field is empty!");
      return;
    } else if (password.trim() === "") {
      setError("Password field is empty!");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one small letter!");
      return;
    } else if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one digit!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter!");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      setError("Password must contain at least one special character!");
    } else if (confirmPassword.trim() === "") {
      setError("Confirm password is empty!");
      return;
    } else if (password.trim() !== confirmPassword.trim()) {
      setError("Passwords do not match!");
      return;
    } else if (!terms) {
      setError("Accept terms and conditions!");
      return;
    } else {
      registerUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (user.uid) {
            updateUserProfile(name, imageUrl)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Profile is updated!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
              });

            sendEmailToResetPassword(email)
              .then((userCredential) => {
                const user = userCredential.user;
                setSuccess("Password reset email is sent!");
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title:
                    "Registration is successful! Password reset email is sent!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                setError("Wrong email! Password reset email is not sent!");
              });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          if (error.code === "auth/email-already-in-use") {
            setError("Email already in use!");
          }
        });
    }
  };
  return (
    <div
      className={`hero min-h-[calc(100vh-4rem)]  ${
        isDarkMode ? "theme-dark" : "bg-base-200"
      }`}
    >
      <div className="hero-content    ">
        <div className="text-center lg:text-left">
          <img src={registerImage} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="lg:text-3xl text-center font-bold text-indigo-600 lg:mt-2">
            Register
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name..."
                className="input input-sm input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="url"
                name="imageUrl"
                placeholder="Image url..."
                className="input input-sm input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
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
              />{" "}
              <span
                className="absolute right-2 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="form-control relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password..."
                className="input input-sm input-bordered"
              />{" "}
              <span
                className="absolute right-2 top-2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="form-control">
              {error && (
                <p className="text-xs text-red-800">{error.toString()}</p>
              )}
              {success && (
                <p className="text-xs text-indigo-800">{success.toString()}</p>
              )}
            </div>
            <div className="form-control">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="checkbox-primary"
                />
                <label htmlFor="terms" className="text-xs">
                  Accept terms & conditions &nbsp;
                  <Link
                    to="/terms-conditions"
                    className="text-indigo-600 hover:underline ml-0"
                  >
                    View Terms
                  </Link>
                </label>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <Link
                  to="/login"
                  className="label-text-alt link link-hover m-0"
                >
                  Already a member ? Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">
                <FaUserFriends /> Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
